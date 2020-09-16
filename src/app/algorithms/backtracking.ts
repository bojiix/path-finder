import {
  GlobalVariables,
  delay,
  DragPoint,
  dirX,
  dirY,
  addPaths,
  updateShortestPath,
} from "./globals";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BackTracking {
  stopAlgo: boolean = false;
  currentPath: Array<DragPoint> = [];

  constructor() {}

  start(interCommService) {
    this.stopAlgo = false;
    if (GlobalVariables.paths.length == 0) {
      GlobalVariables.paths.push(GlobalVariables.startPoint);
      GlobalVariables.currentLevelInPaths = 1;
    }
    const result = (value) => {
      console.log(value);
      if (value == true) {
        this.currentPath.push(GlobalVariables.startPoint);
        GlobalVariables.minimum =
          GlobalVariables.horizontalGridSize *
            GlobalVariables.verticalGridSize +
          1;
        GlobalVariables.colorOffset = GlobalVariables.colorPreset.getColorOffset();
        GlobalVariables.colorIndex = Math.floor(Math.random() * Math.floor(3));
        const result1 = (value) => {
          console.log("value", value);
          GlobalVariables.shortestPath.forEach((el) => {
            console.log("el", el);
          });
          updateShortestPath(GlobalVariables.colorIndex);
          interCommService.setMessage("reset-button");
        };
        this.secondWave(1).then((value) => result1(value));
      }
    };
    this.firstWave(GlobalVariables.currentLevelInPaths).then((value) =>
      result(value)
    );
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

  async secondWave(lvl) {
    for (let x = 0; x < 4; x++) {
      let i, j;
      i = this.currentPath[lvl - 1].verticalPos + dirY[x];
      j = this.currentPath[lvl - 1].horizontalPos + dirX[x];
      let newPoint = {} as DragPoint;
      newPoint.verticalPos = i;
      newPoint.horizontalPos = j;
      if (
        !GlobalVariables.paths.find(
          (obj) => JSON.stringify(obj) === JSON.stringify(newPoint)
        ) ||
        this.currentPath.find(
          (obj) => JSON.stringify(obj) === JSON.stringify(newPoint)
        ) ||
        GlobalVariables.freq_table[i][j] == 3
      ) {
        continue;
      }

      if (
        JSON.stringify(newPoint) === JSON.stringify(GlobalVariables.endPoint)
      ) {
        if (
          this.currentPath.length + 1 < GlobalVariables.shortestPath.length ||
          GlobalVariables.shortestPath.length == 0
        ) {
          GlobalVariables.minimum = this.currentPath.length;
          GlobalVariables.shortestPath = this.currentPath.slice();
          GlobalVariables.shortestPath.push(GlobalVariables.endPoint);
        }
        continue;
      }
      this.currentPath.push(newPoint);
      updateShortestPath(GlobalVariables.colorIndex, i + 1, j);
      await delay(5);
      console.log("fdf");
      await this.secondWave(lvl + 1);
      console.log("fdf1");
      this.currentPath.pop();
      updateShortestPath(
        GlobalVariables.colorIndex,
        undefined,
        undefined,
        GlobalVariables.grid.nativeElement.children[i + 1].children[j]
      );
    }
  }
}
