import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterCommunicationService {

  private dataSourse = new BehaviorSubject('');
  dataObservable = this.dataSourse.asObservable();

  constructor() { }

  setMessage(option: string) {
    this.dataSourse.next(option);
  }

}