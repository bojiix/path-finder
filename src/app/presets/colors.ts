import { Injectable } from '@angular/core';
import { Colors as colors } from '../models/colors';

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
        shortestPathNodeDefault: {
          R: 241,
          G: 206,
          B: 49,
          index: 0,
          asc: true
        },
        wallNode: 'rgb()'
    };

    constructor() { }

    getColor(el) {
      return 'rgb(' + el.R + ', ' + el.G + ', ' + el.B + ')';
    }

    nextIndex(el) {
      if(el.index == 2)
        el.index = 0;
      else
        el.index++;
      return el;
    }

    changeOffset(el) {
      let offset = 0;
      offset = 255 - el;
      return offset;
    }

    changeColor(el, off, rgb) {
      if(el.asc == true) {
        if(el[rgb[el.index]] + off > 255) {
          if(el.index == 2)
            el.asc = false;
          this.nextIndex(el);
        }else {
          el[rgb[el.index]] += off;
        }
      }
      if(el.asc == false) {
        if(el[rgb[el.index]] - off < 0) {
          if(el.index == 2)
            el.asc = true;
          this.nextIndex(el);
        }else {
          el[rgb[el.index]] -= off;
        }
      }
    }

}
