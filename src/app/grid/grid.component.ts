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
    this.runWorker();
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

    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < nWidth / 26 - 1; j++) {

        const block = this.renderer.createElement('div');
        block.setAttribute("class", "grid-block");
        if(j != 0) {
          
          if(i != 0)
            block.setAttribute("style", "transform: translate(-" + j + "px, -" + i + "px)");
          else
            block.setAttribute("style", "transform: translateX(-" + j + "px)");
        }else {
          if(i != 0)
            block.setAttribute("style", "transform: translateY(-" + i + "px)");
        }
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