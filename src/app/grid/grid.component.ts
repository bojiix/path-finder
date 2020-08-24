import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { DraggablesService } from '../services/draggables.service';

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

  constructor(private renderer: Renderer2, 
              private elementRef: ElementRef,
              private dragService: DraggablesService) { }

  ngAfterViewInit(){
    //Grid.grid = this.grid;
    this.createGrid();
    //this.runWorker();
  }

  ngOnInit() {
    this.addOption();
    /*window.addEventListener('mousedown', e => {
      e.stopPropagation();
    }, true);*/
    window.addEventListener('mouseup', e => {
      e.stopPropagation();
      this.mousedown = false;
    }, true);
  }

  addOption() {
    this.dragService.currentOption.subscribe(option => {
      this.option = option;
      if(!(option in this.draggables) && option != '' || (option in this.draggables && option != "start-node" && option != "end-node square")) {
        this.draggables[option] = 1;
        let block = this.renderer.createElement('div');
        block.setAttribute("class", option);
        block.setAttribute("style", "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);");
        let block1 = this.renderer.createElement('div');
        if(option == "bomb-node square")
          block1.innerHTML = "!";
        if(option != "start-node")
          this.renderer.appendChild(block, block1);

        let first = true, to_break = false;
        const rows = Array.from(this.grid.nativeElement.children);

        for (let [i, row] of rows.entries()) {
          if(!first) {
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
          }else {
            first = false;
          }
          if(to_break == true)
            break;
        }
      }else {

      }
    });
  }

  createGrid() {
    
    let blockSize;

    this.windowWidth = window.innerWidth;
    this.freq_table = [];

    let firstBlock = this.renderer.createElement('div');
    firstBlock.setAttribute("class", "grid-block");
    this.renderer.appendChild(this.grid.nativeElement, firstBlock);

    firstBlock = this.grid.nativeElement.children[1];
    blockSize = parseFloat(window.getComputedStyle(firstBlock).width);

    const nWidth = parseFloat(window.getComputedStyle(this.grid.nativeElement).width);
    const hLength = Math.floor(nWidth / blockSize) - 1;
    const vLength = 20;

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
  }

  updateFreq(val:(string | number), el?:any, i?:number, j?:number) {
    
    if(el != undefined && (i == undefined || j == undefined)) {
      i = Array.from(el.parentNode.parentNode.children).indexOf(el.parentNode) - 1;
      j = Array.from(el.parentNode.children).indexOf(el);
    }
    if(typeof val === 'string') {
      val = val.split(/[- ]/)[0];
    }
    this.freq_table[i][j] = val;
    console.log(this.freq_table);
  }

  addWall(el) {
    if(el.className == 'grid-block' && Array.from(el.children).length == 0) {
      //console.log(el);
      el.style = "background: #333;";
      this.updateFreq(1, el, undefined, undefined);
    }
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
      //event.preventDefault();
    }else
      return;

    this.mousedown = false;
    //console.log(this.dragged.parentNode, event.target, event.currentTarget);

    if(this.dragged.parentNode.className != (<any>event.currentTarget).className)
      return;
    if(Array.from((<any>event.currentTarget).children).length > 0)
      return;

    let i, j, k, l;
    i = Array.from(this.dragged.parentNode.parentNode.parentNode.children).indexOf(this.dragged.parentNode.parentNode) - 1;
    j = Array.from(this.dragged.parentNode.parentNode.children).indexOf(this.dragged.parentNode);

    this.freq_table[i][j] = 0;
    this.updateFreq(this.dragged.firstElementChild.className, event.currentTarget, undefined, undefined);

    this.renderer.setStyle(event.currentTarget, 'background', 'none');

    this.dragged.parentNode.removeChild(this.dragged);
    (<any>event.currentTarget).appendChild(this.dragged);
  }

  onMouseOver(event) {
    if(this.mousedown == true) {
      this.addWall(event.currentTarget);
    }
  }

  onMouseDown(event) {
    this.mousedown = true;
    this.addWall(event.currentTarget);
  }

  ////

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