import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Renderer2,
} from "@angular/core";
import { DraggablesService } from "../services/draggables.service";
import { InterCommunicationService } from "../services/inter-communication.service";
import { Colors as ColorPreset } from "../presets/colors";
import { BackTracking } from "../algorithms/backtracking";
import {
  GlobalVariables,
  DragPoint,
  algorithms,
  dirX,
  dirY,
  updateFreq,
  updateShortestPath
} from "../algorithms/globals";

@Component({
  selector: "app-grid",
  templateUrl: "./grid.component.html",
  styleUrls: [
    "./grid.component.scss",
    "../objects-header/objects-header.component.scss",
  ],
})
export class GridComponent implements OnInit, AfterViewInit {
  @ViewChild("grid") grid: ElementRef;
  option: string;
  draggables = {};
  dragged;
  windowWidth;
  node_type: string[] = ["start", "end", "bomb", "weight", "wall"]; ////!!!!!!!!!!???
  mousedown: boolean = false;
  erase: boolean = false;
  chosenAlgorithm = "";
  stopAlgo: boolean = false;
  currentLevelInPaths: number = 0;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private dragService: DraggablesService,
    private interCommService: InterCommunicationService,
    private colorPreset: ColorPreset,
    private bt: BackTracking
  ) { }

  ngAfterViewInit() {
    GlobalVariables.grid = this.grid;
    GlobalVariables.colorPreset = this.colorPreset;
    GlobalVariables.renderer = this.renderer;
    this.createGrid();
    //this.runWorker();
  }

  ngOnInit() {
    this.registerSubscriptions();
    this.setSeparateEvents();
  }

  registerSubscriptions() {
    this.interCommService.dataObservable.subscribe((message) => {
      //console.log(message);
      if (message == "clear-board") {
        this.clearBoard();
      } else if (message == "clear-walls-weight") {
        this.clearWallsAndWeight();
      } else if (message == "clear-paths") {
        this.clearPaths();
      } else if (algorithms.indexOf(message) > -1) {
        this.chosenAlgorithm = message;
      } else if (message == "remove-algo") {
        this.chosenAlgorithm = "";
      } else if (message == "start-visualizing") {
        this.stopAlgo = false;
        this.visualize();
      } else if (message == "stop-visualizing") {
        this.stopAlgo = true;
        this.visualize();
      } else if (typeof message === "string") {
        const x = message.split(/[-]/);
        if (x[0] == "speed") {
          GlobalVariables.speed = parseInt(x[1]);
        }
      }
    });
    this.addOption();
  }

  setSeparateEvents() {
    /*window.addEventListener('mousedown', e => {
      e.stopPropagation();
    }, true);*/
    window.addEventListener(
      "mouseup",
      (e) => {
        e.stopPropagation();
        this.mousedown = false;
      },
      true
    );
    /*window*/ document.getElementById("grid-section").addEventListener(
      "dblclick",
      (e) => {
        e.stopPropagation();
        this.erase = !this.erase;
        this.grid.nativeElement.style.cursor = "cell";
        if (this.erase == true) {
          this.grid.nativeElement.style.cursor = "pointer";
          this.addOrRemoveWall(e.target);
        }
      },
      true
    );
    window.addEventListener("drop", (e: Event) => this.onDrop(e), false);
    window.addEventListener(
      "dragover",
      (e: Event) => this.onDragOver(e),
      false
    );
  }

  addOption() {
    this.dragService.currentOption.subscribe((option) => {
      this.option = option;
      if (
        (!(option in this.draggables) && option != "") ||
        (option in this.draggables &&
          option != "start-node" &&
          option != "end-node square")
      ) {
        this.draggables[option] =
          option in this.draggables ? this.draggables[option] + 1 : 1;
        //console.log(this.draggables);
        let block = this.renderer.createElement("div");
        block.setAttribute("class", option);
        block.setAttribute(
          "style",
          "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"
        );
        block.style.cursor = "inherit";
        let block1 = this.renderer.createElement("div");
        if (option == "bomb-node square") block1.innerHTML = "!";
        if (option != "start-node") this.renderer.appendChild(block, block1);

        let to_break = false;
        const rows = Array.from(this.grid.nativeElement.children);

        for (let [i, row] of rows.entries()) {
          if (i > 0) {
            const rowArray = Array.from((<any>row).children);
            for (let [j, blockToAddIn] of rowArray.entries()) {
              const children = Array.from((<any>blockToAddIn).children);
              if (
                children.length == 0 &&
                GlobalVariables.freq_table[i - 1][j] == 0
              ) {
                to_break = true;
                let parent = this.renderer.createElement("div");
                parent.setAttribute("draggable", "true");
                parent.setAttribute("class", "draggable");
                parent.addEventListener(
                  "dragstart",
                  (e: Event) => this.onDragStart(e),
                  true
                );
                this.renderer.appendChild(parent, block);
                this.renderer.appendChild(blockToAddIn, parent);
                updateFreq(block.className, undefined, i - 1, j);
                break;
              }
            }
          }
          if (to_break == true) break;
        }
      } else {
      }
    });
  }

  createGrid() {
    let blockSize;

    this.grid.nativeElement.style.cursor = "cell";

    this.windowWidth = window.innerWidth;
    GlobalVariables.freq_table = [];

    let firstBlock = this.renderer.createElement("div");
    firstBlock.setAttribute("class", "grid-block");
    this.renderer.appendChild(this.grid.nativeElement, firstBlock);

    firstBlock = this.grid.nativeElement.children[1];
    blockSize = parseFloat(window.getComputedStyle(firstBlock).width);

    const nWidth = parseFloat(
      window.getComputedStyle(this.grid.nativeElement).width
    );
    const hLength = Math.floor(nWidth / blockSize) - 1;
    const vLength = GlobalVariables.verticalGridSize;

    GlobalVariables.horizontalGridSize = hLength;

    for (let i = 0; i < vLength; i++) {
      const row = this.renderer.createElement("div");
      row.setAttribute("class", "grid-row");
      this.renderer.appendChild(this.grid.nativeElement, row);
      GlobalVariables.freq_table[i] = [];

      for (let j = 0; j < hLength; j++) {
        GlobalVariables.freq_table[i][j] = 0;

        if (i == 0 && j == 0) {
          this.renderer.appendChild(row, firstBlock);
          firstBlock.addEventListener(
            "dragover",
            (e: Event) => this.onDragOver(e),
            true
          );
          firstBlock.addEventListener(
            "drop",
            (e: Event) => this.onDrop(e),
            true
          );
          firstBlock.addEventListener(
            "mouseover",
            (e: Event) => this.onMouseOver(e),
            true
          );
          firstBlock.addEventListener(
            "mousedown",
            (e: Event) => this.onMouseDown(e),
            true
          );
          continue;
        }
        const block = this.renderer.createElement("div");
        block.setAttribute("class", "grid-block");

        block.addEventListener(
          "dragover",
          (e: Event) => this.onDragOver(e),
          true
        );
        block.addEventListener("drop", (e: Event) => this.onDrop(e), true);
        block.addEventListener(
          "mouseover",
          (e: Event) => this.onMouseOver(e),
          true
        );
        block.addEventListener(
          "mousedown",
          (e: Event) => this.onMouseDown(e),
          true
        );

        var att = document.createAttribute("style");
        let r = 0,
          b = 0;

        if (j == hLength - 1) {
          r = 1;
        }
        if (i == vLength - 1) {
          b = 1;
        }
        if (r == 1 || b == 1) {
          att.value = "border-width: 1px " + r + "px " + b + "px " + "1px;";
          block.setAttributeNode(att);
        }
        this.renderer.appendChild(row, block);
      }
    }
    this.grid.nativeElement.setAttribute("id", "grid-new");
  }

  destroyGrid() {
    let first = true;
    this.grid.nativeElement.setAttribute("id", "grid");
    const children = Array.from(this.grid.nativeElement.children);
    children.forEach((child) => {
      if (!first) {
        this.renderer.removeChild(this.grid.nativeElement, child);
      } else {
        first = false;
      }
    });
    this.draggables = {};
    GlobalVariables.paths = [];
    GlobalVariables.freq_table = [];
  }

  clearBoard() {
    this.erase = true;
    const rows = Array.from(this.grid.nativeElement.children);
    for (let [i, row] of rows.entries()) {
      if (i > 0) {
        const rowArray = Array.from((<any>row).children);
        for (let [j, block] of rowArray.entries()) {
          if (this.addOrRemoveWall(block) == false) {
            (<any>block).style.background = "none";
            updateFreq(0, undefined, i - 1, j);
            Array.from((<any>block).children).forEach((child) => {
              this.renderer.removeChild(block, child);
            });
          }
        }
      }
    }
    this.draggables = {};
    //console.log("erased");
    this.erase = false;
    this.currentLevelInPaths = 0;
    GlobalVariables.paths = [];
  }

  clearPaths() {
    for (let x = 0; x < GlobalVariables.paths.length; x++) {
      let i, j;
      i = GlobalVariables.paths[x].verticalPos;
      j = GlobalVariables.paths[x].horizontalPos;
      if (
        GlobalVariables.freq_table[i][j] == 1 ||
        GlobalVariables.freq_table[i][j] == 2
      ) {
        updateFreq(0, undefined, i, j);
        this.grid.nativeElement.children[i + 1].children[j].style.background =
          "none";
      }
    }
    this.currentLevelInPaths = 0;
    GlobalVariables.paths = [];
  }

  clearWallsAndWeight() {
    this.erase = true;
    const rows = Array.from(this.grid.nativeElement.children);
    for (let [i, row] of rows.entries()) {
      if (i > 0) {
        const rowArray = Array.from((<any>row).children);
        for (let [j, block] of rowArray.entries()) {
          if (
            this.addOrRemoveWall(block, GlobalVariables.freq_table[i - 1][j]) ==
            false
          ) {
            if (GlobalVariables.freq_table[i - 1][j] == "weight") {
              updateFreq(0, undefined, i - 1, j);
              Array.from((<any>block).children).forEach((child) => {
                this.renderer.removeChild(block, child);
                //this.draggables['weight-node square']--;
                //console.log(this.draggables);
              });
            }
          }
        }
      }
    }
    delete this.draggables["weight-node square"];
    this.erase = false;
  }

  addOrRemoveWall(el, freq: string | number = -1) {
    let i, j;
    if (freq == -1) {
      i =
        Array.from(el.parentNode.parentNode.children).indexOf(el.parentNode) -
        1;
      j = Array.from(el.parentNode.children).indexOf(el);
      freq = GlobalVariables.freq_table[i][j];
    }
    if (
      el.className == "grid-block" &&
      Array.from(el.children).length == 0 &&
      freq != 1 &&
      freq != 2
    ) {
      if (this.erase == false) {
        //console.log(el.style);
        el.style.background = "#2e3c5a";
        updateFreq(3, el, undefined, undefined);
      } else {
        el.style.background = "none";
        updateFreq(0, el, undefined, undefined); //this will erase the drawn paths too
      }
      return true;
    }
    return false;
  }

  //////////// events

  alert() {
    if (window.confirm("Beware!") == true) {
      console.log("zoom");
    } else {
      console.log("not zoom");
    }
  }

  onResize(event) {
    if (this.windowWidth == window.innerWidth) return;
    //this.alert();
    this.windowWidth = window.innerWidth;
    this.destroyGrid();
    this.createGrid();
  }

  onDragStart(event) {
    if (!(event instanceof DragEvent)) return;
    event.stopPropagation();
    //event.preventDefault();
    this.dragged = event.currentTarget;
    this.mousedown = false;
  }

  onDragOver(event) {
    if (event instanceof DragEvent) {
      event.stopPropagation();
      event.preventDefault();
      this.mousedown = false;
    }
  }

  onDrop(event) {
    if (event instanceof DragEvent) {
      event.stopPropagation();
      event.preventDefault();
    } else return;

    this.mousedown = false;

    if (event.currentTarget != window) {
      if (
        this.dragged.parentNode.className !=
        (<any>event.currentTarget).className
      )
        return;
      if (Array.from((<any>event.currentTarget).children).length > 0) return;
    }

    //console.log(this.dragged.parentNode, event.target, event.currentTarget);

    let i, j;
    i =
      Array.from(
        this.dragged.parentNode.parentNode.parentNode.children
      ).indexOf(this.dragged.parentNode.parentNode) - 1;
    j = Array.from(this.dragged.parentNode.parentNode.children).indexOf(
      this.dragged.parentNode
    );

    GlobalVariables.freq_table[i][j] = 0;

    if (
      updateFreq(
        this.dragged.firstElementChild.className,
        event.currentTarget,
        undefined,
        undefined
      ) == -1
    ) {
      delete this.draggables[this.dragged.firstElementChild.className];
      this.dragged.parentNode.removeChild(this.dragged);
      return;
    }

    this.renderer.setStyle(event.currentTarget, "background", "none");
    (<any>event.currentTarget).appendChild(this.dragged);
  }

  onMouseOver(event) {
    if (this.mousedown == true) {
      this.addOrRemoveWall(event.currentTarget);
    }
  }

  onMouseDown(event) {
    if (event.which != "1") return;
    this.mousedown = true;
    this.addOrRemoveWall(event.currentTarget);
  }

  //////////////// Visualize

  visualize() {
    if (this.chosenAlgorithm == "Dijkstra's Algorithm") {
      this.dijkstra();
    } else if (this.chosenAlgorithm == "A* Search") {
      this.astar();
    } else if (this.chosenAlgorithm == "Greedy Best-first Search") {
      this.greedybfs();
    } else if (this.chosenAlgorithm == "Back-tracking") {
      this.backtracking();
    }
  }

  dijkstra() { }

  astar() { }

  greedybfs() { }

  backtracking() {
    if (this.stopAlgo == false) {
      this.bt.start(); //back-tracking start
    } else {
      this.bt.stop();
    }
  }

  ////////////////////////////

  runWorker() {
    if (typeof Worker !== "undefined") {
      const worker = new Worker("./grid.worker", {
        type: "module",
      });
      worker.onmessage = ({ data }) => { };
      worker.postMessage(this.grid.nativeElement.offsetWidth);
    } else {
    }
  }
}
