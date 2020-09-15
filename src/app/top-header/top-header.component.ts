import { Component, OnInit } from "@angular/core";
import { InterCommunicationService } from "../services/inter-communication.service";
import { algorithms, speeds } from "../algorithms/globals";

@Component({
  selector: "app-top-header",
  templateUrl: "./top-header.component.html",
  styleUrls: ["./top-header.component.scss"],
})
export class TopHeaderComponent implements OnInit {
  algorithms = algorithms;
  speeds = speeds;
  isAlgoSelected: boolean = false;
  selectedAlgo = "";
  selectedSpeed;
  toStop: boolean = true;
  buttonContents = ["Visualize!", "Pause!", "Stop!"];
  buttonContent = "Visualize!";

  constructor(private interCommService: InterCommunicationService) {}

  ngOnInit() {
    this.interCommService.dataObservable.subscribe((message) => {
      console.log(message);
      if (message == "reset-button") {
        this.toStop = true;
        this.buttonContent = this.buttonContents[0];
      }
    });
  }

  setAlgo(algo) {
    if (algo == this.selectedAlgo) {
      this.isAlgoSelected = false;
      this.selectedAlgo = "";
      this.interCommService.setMessage("remove-algo");
      //alert('Algorithm removed!');
      return;
    }
    this.isAlgoSelected = true;
    this.selectedAlgo = algo;
    this.interCommService.setMessage(algo);
  }

  start_stop() {
    if (this.isAlgoSelected == false) {
      alert("Please choose an algorithm!");
      return;
    }
    this.toStop = !this.toStop;
    if (this.toStop == false) {
      this.buttonContent = this.buttonContents[1];
      this.interCommService.setMessage("start-visualizing");
    } else {
      this.buttonContent = this.buttonContents[0];
      this.interCommService.setMessage("stop-visualizing");
    }
  }

  clearBoard() {
    this.interCommService.setMessage("clear-board");
  }

  clearWallsAndWeight() {
    this.interCommService.setMessage("clear-walls-weight");
  }

  clearPath() {
    this.interCommService.setMessage("clear-path");
  }

  setSpeed(speed) {
    this.selectedSpeed = speed?.text;
    this.interCommService.setMessage("speed-" + speed?.value);
  }
}
