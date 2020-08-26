import { Component, OnInit } from '@angular/core';
import { InterCommunicationService } from '../services/inter-communication.service';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {

  algorithms = ["Dijkstra's Algorithm", "A* Search", "Greedy Best-first Search"];
  speed = ['Fast', 'Medium', 'Slow'];
  selectedSpeed;

  constructor(private interCommService: InterCommunicationService) { }

  ngOnInit() {
  }

  visualize() {

  }

  clearBoard() {
    this.interCommService.setMessage('clear-board');
  }
  
  clearWallsAndWeight() {
    this.interCommService.setMessage('clear-walls-weight');
  }

  setSpeed(speed) {

    this.selectedSpeed = speed;
  }

}
