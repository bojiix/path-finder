import { Component, OnInit } from '@angular/core';
import { DraggablesService } from '../services/draggables.service'

@Component({
  selector: 'app-objects-header',
  templateUrl: './objects-header.component.html',
  styleUrls: ['./objects-header.component.scss']
})
export class ObjectsHeaderComponent implements OnInit {

  option:string;

  constructor(private dragService: DraggablesService) { }

  ngOnInit() {
    this.dragService.currentOption.subscribe(option => {
      this.option = option;
    });
  }

  changeOption(option:string) {
    this.dragService.setDraggable(option);
  }

}
