import { Component, OnInit } from '@angular/core';
import { InterCommunicationService } from '../services/inter-communication.service';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {

  algorithms = ["Dijkstra's Algorithm", "A* Search", "Greedy Best-first Search", "Test"];
  speed = ['Fast', 'Medium', 'Slow'];
  isAlgoSelected:boolean = false;
  selectedAlgo = '';
  selectedSpeed;

  constructor(private interCommService: InterCommunicationService) { }

  ngOnInit() {
  }

  setAlgo(algo) {
    if(algo == this.selectedAlgo) {
      this.isAlgoSelected = false;
      this.selectedAlgo = '';
      this.interCommService.setMessage('remove-algo');
      //alert('Algorithm removed!');
      return;
    }
    this.isAlgoSelected = true;
    this.selectedAlgo = algo;
    this.interCommService.setMessage(algo);
  }

  visualize() {
    if(this.isAlgoSelected == false) {
      alert('Please choose an algorithm!');
      return;
    }
    this.interCommService.setMessage('visualize');
  }

  clearBoard() {
    this.interCommService.setMessage('clear-board');
  }
  
  clearWallsAndWeight() {
    this.interCommService.setMessage('clear-walls-weight');
  }

  clearPath() {
    this.interCommService.setMessage('clear-path');
  }

  setSpeed(speed) {
    this.selectedSpeed = speed;
    this.interCommService.setMessage('speed-' + speed);
  }

}
