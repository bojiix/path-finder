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

  constructor(private renderer: Renderer2, 
              private elementRef: ElementRef,
              private dragService: DraggablesService) { }

  ngOnInit() {
    this.dragService.currentOption.subscribe(option => {
      this.option = option;
      if(!(option in this.draggables) && option != '') {
        this.draggables[option] = 1;
        console.log(this.draggables[option]);
        let block = this.renderer.createElement('div');
        block.setAttribute("class", option);
        block.setAttribute("style", "position: absolute");
        let block1 = this.renderer.createElement('div');
        if(option == "square bomb-node")
          block1.innerHTML = "!";
        this.renderer.appendChild(block, block1);
        this.renderer.appendChild(this.grid.nativeElement.children[0], block);
      }else {

      }
    });
  }

  ngAfterViewInit(){

    //Grid.grid = this.grid;
    this.createGrid();
    //this.runWorker();
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

  alert() {

    if(window.confirm("Beware!") == true) {
      console.log("zoom");
    }else {
      console.log("not zoom");
    }
  }

  onResize(event) {

    //this.alert();
    this.destroyGrid();
    this.createGrid();
  }

  createGrid() {
    
    let blockSize;

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
          continue;
        }
        const block = this.renderer.createElement('div');
        block.setAttribute("class", "grid-block");

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
  }
}

export class Grid {

  static grid: ElementRef;

  static getWidth() {

    return Grid.grid.nativeElement.offsetWidth;
  }
}