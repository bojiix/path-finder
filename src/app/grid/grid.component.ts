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
  }

  addOption() {
    this.dragService.currentOption.subscribe(option => {
      this.option = option;
      if(!(option in this.draggables) && option != '' || (option in this.draggables && option != "start-node" && option != "square end-node")) {
        this.draggables[option] = 1;
        let block = this.renderer.createElement('div');
        block.setAttribute("class", option);
        block.setAttribute("style", "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);");
        let block1 = this.renderer.createElement('div');
        if(option == "square bomb-node")
          block1.innerHTML = "!";
        if(option != "start-node")
          this.renderer.appendChild(block, block1);

        let first = true, to_break = false;
        const rows = Array.from(this.grid.nativeElement.children);

        for (let row of rows) {
          if(!first) {
            const rowArray = Array.from((<any>row).children);
            for (let toAddInBlock of rowArray) {
              const children = Array.from((<any>toAddInBlock).children);
              if(children.length == 0) {

                to_break = true;
                let parent = this.renderer.createElement('div');
                parent.setAttribute("draggable", "true");
                parent.setAttribute("class", "draggable");
                parent.addEventListener("dragstart", (e:Event) => this.onDragStart(e), true);
                this.renderer.appendChild(parent, block);
                this.renderer.appendChild(toAddInBlock, parent);
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

      for(let j = 0; j < hLength; j++) {

        if(i == 0 && j == 0) {
          this.renderer.appendChild(row, firstBlock);
          firstBlock.addEventListener("dragover", (e:Event) => this.onDragOver(e), true);
          firstBlock.addEventListener("drop", (e:Event) => this.onDrop(e), true);
          continue;
        }
        const block = this.renderer.createElement('div');
        block.setAttribute("class", "grid-block");
        block.addEventListener("dragover", (e:Event) => this.onDragOver(e), true);
        block.addEventListener("drop", (e:Event) => this.onDrop(e), true);

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
    if(event instanceof DragEvent) {
      event.stopPropagation();
      //event.preventDefault();
    }
    this.dragged = event.target;
  }

  onDragOver(event) {
    if(event instanceof DragEvent) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  onDrop(test) {
    if(event instanceof DragEvent) {
      event.stopPropagation();
      //event.preventDefault();
    }else
      return;

    console.log(this.dragged.parentNode, event.target);

    if(this.dragged.parentNode == event.target)
      return;
    this.dragged.parentNode.removeChild(this.dragged);
    (<any>event.target).appendChild(this.dragged);
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