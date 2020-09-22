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
import { VirtualTimeScheduler } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BackTracking {
  stopAlgo: boolean = false;
  currentPath: Array<DragPoint> = [];
  minimum;

  constructor() {}

  start(interCommService) {
    this.stopAlgo = false;
    if (GlobalVariables.paths.length == 0) {
      GlobalVariables.paths.push(GlobalVariables.startPoint);
      GlobalVariables.currentLevelInPaths = 1;
    }
    const result1 = (value) => {
      this.clear();
      console.log("value", value);
      GlobalVariables.shortestPath.forEach((el) => {
        console.log("el", el);
      });
      updateShortestPath(GlobalVariables.colorIndex);
      interCommService.setMessage("reset-button");
    };
    const result = (value) => {
      console.log(value);
      if (value == true) {
        GlobalVariables.currentLevelInShortestPath = 1;
        this.currentPath.push(GlobalVariables.startPoint);
        this.minimum =
          GlobalVariables.horizontalGridSize *
            GlobalVariables.verticalGridSize +
          1;
        GlobalVariables.colorOffset = GlobalVariables.colorPreset.getColorOffset();
        GlobalVariables.colorIndex = Math.floor(Math.random() * Math.floor(3));

        this.secondWave(
          GlobalVariables.currentLevelInShortestPath
        ).then((value) => result1(value));
      }
    };
    if (GlobalVariables.currentLevelInShortestPath == 0) {
      console.log("sh", GlobalVariables.shortestPath);
      this.firstWave(GlobalVariables.currentLevelInPaths).then((value) =>
        result(value)
      );
    }
  }

  stop() {
    this.stopAlgo = true;
  }

  clear() {
    this.currentPath = [];
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
    while (this.stopAlgo == true) {
      await delay(1);
    }
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
          this.minimum = this.currentPath.length;
          GlobalVariables.shortestPath = this.currentPath.slice();
          GlobalVariables.shortestPath.push(GlobalVariables.endPoint);
        }
        continue;
      }
      this.currentPath.push(newPoint);
      updateShortestPath(GlobalVariables.colorIndex, i + 1, j);
      await delay(1);
      await this.secondWave(lvl + 1);
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
