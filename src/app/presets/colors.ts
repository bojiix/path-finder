import { Injectable } from '@angular/core';
import { Colors as colors} from '../models/colors';

@Injectable({
  providedIn: 'root'
})
export class Colors {

    defaultColor:colors = {
        startNode: 'rgb()',
        targetNode: 'rgb()',
        bombNode: 'rgb()',
        weightNode: 'rgb()',
        unvisitedNode: 'rgb()',
        visitedNode: 'rgb()',
        shortestPathNodeDefault: 'rgb(241, 206, 49)',
        wallNode: 'rgb()'
    };

    constructor() { }

}
