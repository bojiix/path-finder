import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, AfterViewInit {

  @ViewChild('grid') grid: ElementRef;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(){

    Grid.grid = this.grid;
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

  onResize(event) {

    this.destroyGrid();
    this.createGrid();
  }

  createGrid() {

    const nWidth = this.grid.nativeElement.offsetWidth;
    
    let blockSize;

    let block = this.renderer.createElement('div');
    block.setAttribute("class", "grid-block");
    this.renderer.appendChild(this.grid.nativeElement, block);

    block = this.grid.nativeElement.children[0];
    blockSize = (<any>block).offsetWidth;
    blockSize = parseFloat(window.getComputedStyle(block).width);

    console.log(blockSize);

    const hLength = nWidth / blockSize - 1;

    for(let i = 0; i < 20; i++) {
      for(let j = 0; j < hLength; j++) {

        if(i == 0 && j == 0)
          continue;

        const block = this.renderer.createElement('div');
        block.setAttribute("class", "grid-block");
        // if(j != 0) {
          
        //   if(i != 0)
        //     block.setAttribute("style", "transform: translate(-" + j + "px, -" + (i * 5) + "px)");
        //   else
        //     block.setAttribute("style", "transform: translateX(-" + j + "px)");
        // }else {
        //   if(i != 0)
        //     block.setAttribute("style", "transform: translateY(-" + (i * 5) + "px)");
        // }
        this.renderer.appendChild(this.grid.nativeElement, block);
      }
    }
  }

  destroyGrid() {

    const children = Array.from(this.grid.nativeElement.children);
    children.forEach(child => {
      
      this.renderer.removeChild(this.grid.nativeElement, child);
    });
  }
}

export class Grid {

  static grid: ElementRef;

  static getWidth() {

    return Grid.grid.nativeElement.offsetWidth;
  }
}