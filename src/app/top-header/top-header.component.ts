import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {

  algorithms = ["Dijkstra's Algorithm", "A* Search", "Greedy Best-first Search"];
  speed = ['Fast', 'Medium', 'Slow'];
  selectedSpeed;

  constructor() { }

  ngOnInit() {
  }

  visualize() {

  }

  setSpeed(speed) {

    this.selectedSpeed = speed;
  }

}
