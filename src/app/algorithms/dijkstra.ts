import {
  GlobalVariables,
  delay,
  DragPoint,
  dirX,
  dirY,
  addPaths,
  updateShortestPath,
  is_valid,
} from "./globals";
import { Injectable } from "@angular/core";
import { VirtualTimeScheduler } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class Dijkstra {
  stopAlgo: boolean = false;

  constructor() {}

  start(interCommService) {
    this.stopAlgo = false;
    this.firstWave(1);
  }

  stop() {
    this.stopAlgo = true;
  }

  async firstWave(lvl) {
    GlobalVariables.currentLevelInPaths = lvl;
    if (this.stopAlgo == true) return false;
    for (let x = 0; x < 4; x++) {
      let i, j;
      if (GlobalVariables.paths[lvl - 1] == undefined) return true;
      i = GlobalVariables.paths[lvl - 1].verticalPos + dirY[x];
      j = GlobalVariables.paths[lvl - 1].horizontalPos + dirX[x];
      let newPoint = {} as DragPoint;
      newPoint.verticalPos = i;
      newPoint.horizontalPos = j;
      if (is_valid(i, j) == false) {
        continue;
      }
      GlobalVariables.paths.push(newPoint);
      if (
        JSON.stringify(
          GlobalVariables.paths[GlobalVariables.paths.length - 1]
        ) === JSON.stringify(GlobalVariables.endPoint)
      )
        return true;
      addPaths(GlobalVariables.grid.nativeElement.children[i + 1].children[j]);
      await delay(GlobalVariables.speed);
    }
    //await this.delay(500);
    return this.firstWave(lvl + 1);
  }
}
