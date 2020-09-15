import {
  GlobalVariables,
  delay,
  DragPoint,
  dirX,
  dirY,
  addPaths,
  updateShortestPath
} from "./globals";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BackTracking {
  stopAlgo: boolean = false;
  colorOffset;

  constructor() { }

  start() {
    this.stopAlgo = false;
    if (GlobalVariables.paths.length == 0) {
      GlobalVariables.paths.push(GlobalVariables.startPoint);
      GlobalVariables.currentLevelInPaths = 1;
    }
    const result = (value) => {
      console.log(value);
      if (value == true) {
        GlobalVariables.shortestPath.push(GlobalVariables.startPoint);
        GlobalVariables.minimum =
          GlobalVariables.horizontalGridSize *
          GlobalVariables.verticalGridSize +
          1;
        this.colorOffset = GlobalVariables.colorPreset.getColorOffset();
        //console.log(this.paths);
        GlobalVariables.colorIndex = Math.floor(Math.random() * Math.floor(3));
        this.secondWave(1); //.then(() => this.interCommService.setMessage('reset-button'));
      }
    };
    this.firstWave(GlobalVariables.currentLevelInPaths).then((value) => result(value));
  }

  stop() {
    this.stopAlgo = true;
  }

  async firstWave(lvl) {
    if (this.stopAlgo == true) return false;
    GlobalVariables.currentLevelInPaths = lvl;
    for (let x = 0; x < 4; x++) {
      let i, j;
      if (GlobalVariables.paths[lvl - 1] == undefined) return true;
      i = GlobalVariables.paths[lvl - 1].verticalPos + dirY[x];
      j = GlobalVariables.paths[lvl - 1].horizontalPos + dirX[x];
      let newPoint = {} as DragPoint;
      newPoint.verticalPos = i;
      newPoint.horizontalPos = j;
      if (
        i < 0 ||
        i >= GlobalVariables.verticalGridSize ||
        j < 0 ||
        j >= GlobalVariables.horizontalGridSize ||
        GlobalVariables.paths.find(
          (obj) => obj.verticalPos == i && obj.horizontalPos == j
        ) ||
        (GlobalVariables.freq_table[i][j] != 0 &&
          GlobalVariables.freq_table[i][j] != "end")
      ) {
        continue;
      }
      GlobalVariables.paths.push(newPoint);
      if (
        JSON.stringify(GlobalVariables.paths[GlobalVariables.paths.length - 1]) ===
        JSON.stringify(GlobalVariables.endPoint)
      )
        return true;
      addPaths(GlobalVariables.grid.nativeElement.children[i + 1].children[j]);
      //console.log(this.endPoint == this.paths[this.paths.length - 1]);
      await delay(GlobalVariables.speed);
    }
    //await this.delay(500);
    return this.firstWave(lvl + 1);
  }

  secondWave(lvl) {
    // console.log(
    //   "end? ",
    //   JSON.stringify(GlobalVariables.shortestPath[lvl - 1]) ===
    //   JSON.stringify(GlobalVariables.endPoint)
    // );
    if (
      JSON.stringify(GlobalVariables.shortestPath[lvl - 1]) ===
      JSON.stringify(GlobalVariables.endPoint)
    ) {
      if (GlobalVariables.minimum > GlobalVariables.shortestPath.length) {
        GlobalVariables.minimum = GlobalVariables.shortestPath.length;
        updateShortestPath(GlobalVariables.colorIndex);
        console.log(GlobalVariables.shortestPath);
      }
      //await this.delay(this.speed);
      return false;
    }
    let is = true;
    for (let x = 0; x < 4; x++) {
      let i, j;
      i = GlobalVariables.shortestPath[lvl - 1].verticalPos + dirY[x];
      j = GlobalVariables.shortestPath[lvl - 1].horizontalPos + dirX[x];
      let newPoint = {} as DragPoint;
      newPoint.verticalPos = i;
      newPoint.horizontalPos = j;
      //console.log('lvl ', lvl);
      if (
        !GlobalVariables.paths.find(
          (obj) => JSON.stringify(obj) === JSON.stringify(newPoint)
        ) ||
        GlobalVariables.shortestPath.find(
          (obj) => JSON.stringify(obj) === JSON.stringify(newPoint)
        )
      ) {
        //console.log('rejected', newPoint, 'for', this.shortestPath[lvl - 1]);
        continue;
      }
      //console.log('accepted', newPoint, 'for', this.shortestPath[lvl - 1], this.shortestPath);
      //console.log(newPoint);
      GlobalVariables.shortestPath.push(newPoint);
      updateShortestPath(GlobalVariables.colorIndex, i + 1, j);
      is = this.secondWave(lvl + 1);
      if (is == false) return false;
      //console.log('adawd, popped', newPoint, is);
      GlobalVariables.shortestPath.pop();
      updateShortestPath(
        GlobalVariables.colorIndex,
        undefined,
        undefined,
        GlobalVariables.grid.nativeElement.children[i + 1].children[j]
      );
    }
  }
}