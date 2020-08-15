import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DraggablesService {

  private optionSource = new BehaviorSubject('');
  currentOption = this.optionSource.asObservable();

  constructor() { }

  setDraggable(option: string) {
    this.optionSource.next(option);
  }
}
