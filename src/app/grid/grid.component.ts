import { Component, OnInit, ViewChild, ElementRef, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, AfterViewInit {

  @ViewChild("grid") grid: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.createGrid();
  }

  ngAfterViewInit(){
    this.createGrid();
  }

  createGrid() {
    console.log(this.grid.nativeElement.innerHtml);
  }
}
