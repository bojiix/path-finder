import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { DraggablesService } from '../services/draggables.service';
import { InterCommunicationService } from '../services/inter-communication.service';
import { Colors as ColorPreset} from '../presets/colors';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: [
    './grid.component.scss',
    '../objects-header/objects-header.component.scss'
  ]
})

export class GridComponent implements OnInit, AfterViewInit {

  @ViewChild('grid') grid: ElementRef;
  option:string;
  draggables = {};
  dragged;
  windowWidth;
  freq_table:(string | number)[][];
  node_type:string[] = ['start', 'end', 'bomb', 'weight', 'wall'];////!!!!!!!!!!???
  mousedown:boolean = false;
  erase:boolean = false;
  chosenAlgorithm = '';
  algorithms = ["Dijkstra's Algorithm", "A* Search", "Greedy Best-first Search", "Back-tracking", "Test"];
  paths:Array<DragPoint> = [];
  shortestPath:Array<DragPoint> = [];
  startPoint:DragPoint;
  endPoint:DragPoint;
  dirY:number[] = [-1, 0, 1,  0];
  dirX:number[] = [ 0, 1, 0, -1];
  dirYcomplex:number[] = [-1, -1, 0, 1, 1,  1,  0, -1];
  dirXcomplex:number[] = [ 0,  1, 1, 1, 0, -1, -1, -1];
  horizontalGridSize:number;
  verticalGridSize:number = 30;
  stopAlgo:boolean = false;
  currentLevelInPaths:number = 0;
  speed:number = 0;

  constructor(private renderer: Renderer2, 
              private elementRef: ElementRef,
              private dragService: DraggablesService,
              private interCommService: InterCommunicationService,
              private colorPreset: ColorPreset) { }

  ngAfterViewInit(){
    //Grid.grid = this.grid;
    this.createGrid();
    //this.runWorker();
  }

  ngOnInit() {
    this.registerSubscriptions();
    this.setSeparateEvents();
  }

  registerSubscriptions() {
    this.interCommService.dataObservable.subscribe(message => {
      //console.log(message);
      if(message == 'clear-board') {
        this.clearBoard();
      }else if(message == 'clear-walls-weight') {
        this.clearWallsAndWeight();
      }else if(message == 'clear-paths') {
        this.clearPaths();
      }else if(this.algorithms.indexOf(message) > -1) {
        this.chosenAlgorithm = message;
      }else if(message == "remove-algo") {
        this.chosenAlgorithm = '';
      }else if(message == 'start-visualizing') {
        this.stopAlgo = false;
        this.visualize();
      }else if(message == 'stop-visualizing') {
        this.stopAlgo = true;
        //this.visualize();
      }else if(typeof message === 'string') {
        const x = message.split(/[-]/);
        if(x[0] == 'speed') {
          this.speed = parseInt(x[1]);
        }
      }
    });
    this.addOption();
  }

  setSeparateEvents() {
    /*window.addEventListener('mousedown', e => {
      e.stopPropagation();
    }, true);*/
    window.addEventListener('mouseup', e => {
      e.stopPropagation();
      this.mousedown = false;
      //this.erase--;
    }, true);
    /*window*/document.getElementById('grid-section').addEventListener('dblclick', e => {
      e.stopPropagation();
      this.erase = !this.erase;
      this.grid.nativeElement.style.cursor = "cell";
      if(this.erase == true) {
        this.grid.nativeElement.style.cursor = "pointer";
        this.addOrRemoveWall(e.target);
      }
    }, true);
    window.addEventListener("drop", (e:Event) => this.onDrop(e), false);
    window.addEventListener("dragover", (e:Event) => this.onDragOver(e), false);
  }

  addOption() {
    this.dragService.currentOption.subscribe(option => {
      this.option = option;
      if((!(option in this.draggables) && option != '') || (option in this.draggables && option != "start-node" && option != "end-node square")) {
        this.draggables[option] = option in this.draggables ? this.draggables[option] + 1 : 1;
        //console.log(this.draggables);
        let block = this.renderer.createElement('div');
        block.setAttribute("class", option);
        block.setAttribute("style", "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);");
        block.style.cursor = "inherit";
        let block1 = this.renderer.createElement('div');
        if(option == "bomb-node square")
          block1.innerHTML = "!";
        if(option != "start-node")
          this.renderer.appendChild(block, block1);

        let to_break = false;
        const rows = Array.from(this.grid.nativeElement.children);

        for (let [i, row] of rows.entries()) {
          if(i > 0) {
            const rowArray = Array.from((<any>row).children);
            for (let [j, blockToAddIn] of rowArray.entries()) {
              const children = Array.from((<any>blockToAddIn).children);
              if(children.length == 0 && this.freq_table[i - 1][j] == 0) {
                to_break = true;
                let parent = this.renderer.createElement('div');
                parent.setAttribute("draggable", "true");
                parent.setAttribute("class", "draggable");
                parent.addEventListener("dragstart", (e:Event) => this.onDragStart(e), true);
                this.renderer.appendChild(parent, block);
                this.renderer.appendChild(blockToAddIn, parent);
                this.updateFreq(block.className, undefined, i - 1, j);
                break;
              }
            }
          }
          if(to_break == true)
            break;
        }
      }else {

      }
    });
  }

  clearBoard() {
    this.erase = true;
    const rows = Array.from(this.grid.nativeElement.children);
    for (let [i, row] of rows.entries()) {
      if(i > 0) {
        const rowArray = Array.from((<any>row).children);
        for (let [j, block] of rowArray.entries()) {
          if(this.addOrRemoveWall(block) == false) {
            (<any>block).style.background = 'none';
            this.updateFreq(0, undefined, i - 1, j);
            Array.from((<any>block).children).forEach(child => {
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
    this.paths = [];
  }

  clearWallsAndWeight() {
    this.erase = true;
    const rows = Array.from(this.grid.nativeElement.children);
    for (let [i, row] of rows.entries()) {
      if(i > 0) {
        const rowArray = Array.from((<any>row).children);
        for (let [j, block] of rowArray.entries()) {
          if(this.addOrRemoveWall(block, this.freq_table[i - 1][j]) == false) {
            if(this.freq_table[i - 1][j] == 'weight') {
              this.updateFreq(0, undefined, i - 1, j);
              Array.from((<any>block).children).forEach(child => {
                this.renderer.removeChild(block, child);
                //this.draggables['weight-node square']--;
                //console.log(this.draggables);
              });
            }
          }
        }
      }
    }
    delete this.draggables['weight-node square'];
    this.erase = false;
  }

  clearPaths() {
    for(let x = 0; x < this.paths.length; x++) {
      let i, j;
      i = this.paths[x].verticalPos;
      j = this.paths[x].horizontalPos;
      if(this.freq_table[i][j] == 1 || this.freq_table[i][j] == 2) {
        this.updateFreq(0, undefined, i, j);
        this.grid.nativeElement.children[i + 1].children[j].style.background = 'none';
      }
    }
    this.currentLevelInPaths = 0;
    this.paths = [];
  }

  createGrid() {
    
    let blockSize;

    this.grid.nativeElement.style.cursor = "cell";

    this.windowWidth = window.innerWidth;
    this.freq_table = [];

    let firstBlock = this.renderer.createElement('div');
    firstBlock.setAttribute("class", "grid-block");
    this.renderer.appendChild(this.grid.nativeElement, firstBlock);

    firstBlock = this.grid.nativeElement.children[1];
    blockSize = parseFloat(window.getComputedStyle(firstBlock).width);

    const nWidth = parseFloat(window.getComputedStyle(this.grid.nativeElement).width);
    const hLength = Math.floor(nWidth / blockSize) - 1;
    const vLength = this.verticalGridSize;

    this.horizontalGridSize = hLength;

    for(let i = 0; i < vLength; i++) {

      const row = this.renderer.createElement('div');
      row.setAttribute("class", "grid-row");
      this.renderer.appendChild(this.grid.nativeElement, row);
      this.freq_table[i] = [];

      for(let j = 0; j < hLength; j++) {

        this.freq_table[i][j] = 0;

        if(i == 0 && j == 0) {
          this.renderer.appendChild(row, firstBlock);
          firstBlock.addEventListener("dragover", (e:Event) => this.onDragOver(e), true);
          firstBlock.addEventListener("drop", (e:Event) => this.onDrop(e), true);
          firstBlock.addEventListener("mouseover", (e:Event) => this.onMouseOver(e), true);
          firstBlock.addEventListener("mousedown", (e:Event) => this.onMouseDown(e), true);
          continue;
        }
        const block = this.renderer.createElement('div');
        block.setAttribute("class", "grid-block");

        block.addEventListener("dragover", (e:Event) => this.onDragOver(e), true);
        block.addEventListener("drop", (e:Event) => this.onDrop(e), true);
        block.addEventListener("mouseover", (e:Event) => this.onMouseOver(e), true);
        block.addEventListener("mousedown", (e:Event) => this.onMouseDown(e), true);

        var att = document.createAttribute("style"); 
        let r = 0, b = 0;

        if(j == hLength - 1) {
          r = 1;
        }
        if(i == vLength - 1) {
          b = 1;
        }
        if(r == 1 || b == 1) {
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
    children.forEach(child => {
      if(!first) {
        this.renderer.removeChild(this.grid.nativeElement, child);
      }else {
        first = false;
      }
    });
    this.draggables = {};
    this.paths = [];
    this.freq_table = [];
  }

  updateFreq(val:(string | number), el?:any, i?:number, j?:number) {

    if(el == window) {
      delete this.draggables[val];
      return -1;
    }

    if(el != undefined && (i == undefined || j == undefined)) {
      i = Array.from(el.parentNode.parentNode.children).indexOf(el.parentNode) - 1;
      j = Array.from(el.parentNode.children).indexOf(el);
    }
    
    if(typeof val === 'string') {
      val = val.split(/[- ]/)[0];
    }
    this.freq_table[i][j] = val;
    //console.log(i, j);
    if(val == 'start') {
      this.startPoint = {
        verticalPos: i,
        horizontalPos: j
      };
    }else if(val == 'end') {
      this.endPoint = {
        verticalPos: i,
        horizontalPos: j
      };
    }
    //console.log(this.freq_table);
  }

  addOrRemoveWall(el, freq:(string | number) = -1) {
    let i, j;
    if(freq == -1) {
      i = Array.from(el.parentNode.parentNode.children).indexOf(el.parentNode) - 1;
      j = Array.from(el.parentNode.children).indexOf(el);
      freq = this.freq_table[i][j];
    }
    if(el.className == 'grid-block' && Array.from(el.children).length == 0 && freq != 1 && freq != 2) {
      if(this.erase == false) {
        //console.log(el.style);
        el.style.background = "#2e3c5a";
        this.updateFreq(3, el, undefined, undefined);
      }else {
        el.style.background = "none";
          this.updateFreq(0, el, undefined, undefined); //this will erase the drawn paths too
      }
      return true;
    }
    return false;
  }

  alert() {
    if(window.confirm("Beware!") == true) {
      console.log("zoom");
    }else {
      console.log("not zoom");
    }
  }

  onResize(event) {
    if(this.windowWidth == window.innerWidth) 
      return;
    //this.alert();
    this.windowWidth = window.innerWidth;
    this.destroyGrid();
    this.createGrid();
  }

  onDragStart(event) {
    if(!(event instanceof DragEvent))
      return;
    event.stopPropagation();
    //event.preventDefault();
    this.dragged = event.currentTarget;
    this.mousedown = false;
  }

  onDragOver(event) {
    if(event instanceof DragEvent) {
      event.stopPropagation();
      event.preventDefault();
      this.mousedown = false;
    }
  }

  onDrop(event) {
    if(event instanceof DragEvent) {
      event.stopPropagation();
      event.preventDefault();
    }else
      return;

    this.mousedown = false;

    if(event.currentTarget != window) {
      if(this.dragged.parentNode.className != (<any>event.currentTarget).className)
        return;
      if(Array.from((<any>event.currentTarget).children).length > 0)
        return;
    }

    //console.log(this.dragged.parentNode, event.target, event.currentTarget);

    let i, j;
    i = Array.from(this.dragged.parentNode.parentNode.parentNode.children).indexOf(this.dragged.parentNode.parentNode) - 1;
    j = Array.from(this.dragged.parentNode.parentNode.children).indexOf(this.dragged.parentNode);

    this.freq_table[i][j] = 0;

    if(this.updateFreq(this.dragged.firstElementChild.className, event.currentTarget, undefined, undefined) == -1) {

      this.dragged.parentNode.removeChild(this.dragged);
      return;
    }

    this.renderer.setStyle(event.currentTarget, 'background', 'none');
    (<any>event.currentTarget).appendChild(this.dragged);
  }

  onMouseOver(event) {
    if(this.mousedown == true) {
      this.addOrRemoveWall(event.currentTarget);
    }
  }

  onMouseDown(event) {
    //this.erase++;
    if(event.which != "1")
      return;
    this.mousedown = true;
    this.addOrRemoveWall(event.currentTarget);
  }

  //////////////// Visualize

  visualize() {
    if(this.paths.length == 0) {
      this.paths.push(this.startPoint);
      this.currentLevelInPaths = 1;
    } 
    if(this.chosenAlgorithm == "Dijkstra's Algorithm") {
      this.dijkstra();
    }else if(this.chosenAlgorithm == "A* Search") {
      this.astar();
    }else if(this.chosenAlgorithm == "Greedy Best-first Search") {
      this.greedybfs();
    }else if(this.chosenAlgorithm == "Back-tracking") {
      this.backtracking(0);
    }else if(this.chosenAlgorithm == "Test") {
      const result = (value) => {
        console.log(value);
        if(value == true) {
          this.shortestPath.push(this.startPoint);
          this.mini = this.horizontalGridSize * this.verticalGridSize + 1;
          this.colorOffset = Math.floor(255 / this.paths.length) + 10;
          //console.log(this.paths);
          let colorIndex = Math.floor(Math.random() * Math.floor(3));
          colorIndex = 0;
          this.test1(1, colorIndex);//.then(() => this.interCommService.setMessage('reset-button'));
        }
      };
      this.test(this.currentLevelInPaths).then(value => result(value));
    }
  }

  dijkstra() {
    
  }

  astar() {

  }

  greedybfs() {

  }

  backtracking(lvl) {

  }

  mini;
  colorOffset;
  RGB = ['R', 'G', 'B'];

  async updateShortestPath(colorIndex = 0, i = undefined, j = undefined, el = undefined) {
    if(el != undefined) {
      //this.addPaths(el);
      this.updateFreq(2, el, undefined, undefined);
    }else {
      let color = this.colorPreset.defaultColor.shortestPathNodeDefault;
      let colorOffset = this.colorOffset;

      if(i != undefined && j != undefined) {
        //this.grid.nativeElement.children[i].children[j].style.background = color;
        this.updateFreq(1, undefined, i - 1, j);
        return;
      }
      console.log('fooor', color, colorOffset, this.paths.length);
      for(let x = 1; x < this.shortestPath.length - 1; x++) {
        let ni, nj;
        console.log(color);
        i = this.shortestPath[x].verticalPos;
        j = this.shortestPath[x].horizontalPos;
        ni = this.shortestPath[x + 1].verticalPos;
        nj = this.shortestPath[x + 1].horizontalPos;
        this.grid.nativeElement.children[i + 1].children[j].style.background = this.colorPreset.getColor(color);
        //this.colorPreset.changeColor(color, colorOffset, this.RGB)
        this.updateFreq(1, undefined, i, j);
        let block = this.renderer.createElement('div');
        block.setAttribute("class", "start-node");
        this.renderer.appendChild(this.grid.nativeElement.children[i + 1].children[j], block);
        //console.log(block.style);
        block.style.borderWidth = '0 1px 1px 0';
        block.style.padding = '2px';
        block.style.position = 'absolute';
        block.style.top = '50%';
        block.style.left = '50%';
        block.style.borderColor = '#2e3c5a';
        let angle = 'rotate(45deg)', pos = 'translate(-20%, -70%)';
        if(i > ni) {
          angle = 'rotate(-135deg)';
          pos = 'translate(0%, -45%)';
        }else if(i < ni) {
          angle = 'rotate(45deg)';
          pos = 'translate(-45%, 0%)';
        }else if(j > nj) {
          angle = 'rotate(135deg)';
          pos = 'translate(0%, 45%)';
        }else if(j < nj) {
          angle = 'rotate(-45deg)';
          pos = 'translate(-20%, -70%)';// translate(-{border-sum}px, -{2*padding}px)
        }
        block.style.transform = angle + ' ' + pos;
        await this.delay(50);
      }
    }
  }

  test1(lvl, colorIndex) {
    console.log('end? ', JSON.stringify(this.shortestPath[lvl - 1]) === JSON.stringify(this.endPoint));
    if(JSON.stringify(this.shortestPath[lvl - 1]) === JSON.stringify(this.endPoint)) {
      if(this.mini > this.shortestPath.length) {
        this.mini = this.shortestPath.length;
        this.updateShortestPath(colorIndex);
        console.log(this.shortestPath);
      }
      //await this.delay(this.speed);
      return false;
    }
    let is = true;
    for(let x = 0; x < 4; x++) {
      let i, j;
      i = this.shortestPath[lvl - 1].verticalPos + this.dirY[x];
      j = this.shortestPath[lvl - 1].horizontalPos + this.dirX[x];
      let newPoint = {} as DragPoint;
      newPoint.verticalPos = i;
      newPoint.horizontalPos = j;
      //console.log('lvl ', lvl);
      if(!this.paths.find(obj => JSON.stringify(obj) === JSON.stringify(newPoint)) || this.shortestPath.find(obj => JSON.stringify(obj) === JSON.stringify(newPoint))) {
        //console.log('rejected', newPoint, 'for', this.shortestPath[lvl - 1]);
        continue;
      }
      //console.log('accepted', newPoint, 'for', this.shortestPath[lvl - 1], this.shortestPath);
      //console.log(newPoint);
      this.shortestPath.push(newPoint);
      this.updateShortestPath(colorIndex, i + 1, j);
      is = this.test1(lvl + 1, colorIndex);
      if(is == false)
        return false;
      //console.log('adawd, popped', newPoint, is);
      this.shortestPath.pop();
      this.updateShortestPath(colorIndex, undefined, undefined, this.grid.nativeElement.children[i + 1].children[j]);
    }
  }

  async test(lvl) {
    if(this.stopAlgo == true)
      return false;
    this.currentLevelInPaths = lvl;
    for(let x = 0; x < 4; x++) {
      let i, j;
      if(this.paths[lvl - 1] == undefined)
        return true;
      i = this.paths[lvl - 1].verticalPos + this.dirY[x];
      j = this.paths[lvl - 1].horizontalPos + this.dirX[x];
      let newPoint = {} as DragPoint;
      newPoint.verticalPos = i;
      newPoint.horizontalPos = j;
      if(i < 0 || i >= 30 || j < 0 || j >= this.horizontalGridSize || this.paths.find(obj => obj.verticalPos == i && obj.horizontalPos == j) || (this.freq_table[i][j] != 0 && this.freq_table[i][j] != 'end')) {
        continue;
      }
      this.paths.push(newPoint);
      if(JSON.stringify(this.paths[this.paths.length - 1]) === JSON.stringify(this.endPoint))
        return true;
      this.addPaths(this.grid.nativeElement.children[i + 1].children[j]);
      //console.log(this.endPoint == this.paths[this.paths.length - 1]);
      await this.delay(this.speed);
    }
    //await this.delay(500);
    return this.test(lvl + 1);
  }

  addPaths(el) {
    if(el.className == 'grid-block' && Array.from(el.children).length == 0) {
      el.style.background = "#2bb9c3";
      el.style.borderColor = '#fff';
      this.updateFreq(2, el, undefined, undefined);
      return true;
    }
    return false;
  }

  /////////////

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  runWorker() {

    if (typeof Worker !== 'undefined') {
      const worker = new Worker('./grid.worker', {
        type: 'module',
      });
      worker.onmessage = ({ data }) => {
      };
      worker.postMessage(this.grid.nativeElement.offsetWidth);
    } else {
    }
  }
}

interface DragPoint {
  verticalPos:number;
  horizontalPos:number;
}