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
    this.createGrid();
  }

  createGrid() {

    const nWidth = this.grid.nativeElement.offsetWidth;
    console.log(nWidth);

    for(let i = 0; i < nWidth / 13; i++) {

      const block = this.renderer.createElement('div');
      block.setAttribute("class", "grid-block");
      if(i != 0) {
        
        block.setAttribute("style", "transform: translateX(-" + i + "px)");
      }
      this.renderer.appendChild(this.grid.nativeElement, block);
    }
  }
}
