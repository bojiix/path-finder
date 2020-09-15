import { GlobalVariables, delay, DragPoint, RGB, dirX, dirY } from "./globals";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BackTracking {
  paths: Array<DragPoint> = [];
  shortestPath: Array<DragPoint> = [];
  horizontalGridSize: number;
  verticalGridSize: number = 30;
  stopAlgo: boolean = false;
  currentLevelInPaths: number = 0;
  colorOffset;
  mini;

  constructor() {}

  start() {
    const result = (value) => {
      console.log(value);
      if (value == true) {
        this.shortestPath.push(GlobalVariables.startPoint);
        this.mini = this.horizontalGridSize * this.verticalGridSize + 1;
        this.colorOffset = Math.floor(255 / this.paths.length) + 10;
        //console.log(this.paths);
        GlobalVariables.colorIndex = Math.floor(Math.random() * Math.floor(3));
        this.test1(1); //.then(() => this.interCommService.setMessage('reset-button'));
      }
    };
    this.test(this.currentLevelInPaths).then((value) => result(value));
  }

  stop() {
    this.stopAlgo = true;
  }

  async test(lvl) {
    if (this.stopAlgo == true) return false;
    this.currentLevelInPaths = lvl;
    for (let x = 0; x < 4; x++) {
      let i, j;
      if (this.paths[lvl - 1] == undefined) return true;
      i = this.paths[lvl - 1].verticalPos + dirY[x];
      j = this.paths[lvl - 1].horizontalPos + dirX[x];
      let newPoint = {} as DragPoint;
      newPoint.verticalPos = i;
      newPoint.horizontalPos = j;
      if (
        i < 0 ||
        i >= 30 ||
        j < 0 ||
        j >= this.horizontalGridSize ||
        this.paths.find(
          (obj) => obj.verticalPos == i && obj.horizontalPos == j
        ) ||
        (GlobalVariables.freq_table[i][j] != 0 &&
          GlobalVariables.freq_table[i][j] != "end")
      ) {
        continue;
      }
      this.paths.push(newPoint);
      if (
        JSON.stringify(this.paths[this.paths.length - 1]) ===
        JSON.stringify(GlobalVariables.endPoint)
      )
        return true;
      this.addPaths(this.grid.nativeElement.children[i + 1].children[j]);
      //console.log(this.endPoint == this.paths[this.paths.length - 1]);
      await delay(GlobalVariables.speed);
    }
    //await this.delay(500);
    return this.test(lvl + 1);
  }

  test1(lvl) {
    console.log(
      "end? ",
      JSON.stringify(this.shortestPath[lvl - 1]) ===
        JSON.stringify(GlobalVariables.endPoint)
    );
    if (
      JSON.stringify(this.shortestPath[lvl - 1]) ===
      JSON.stringify(GlobalVariables.endPoint)
    ) {
      if (this.mini > this.shortestPath.length) {
        this.mini = this.shortestPath.length;
        this.updateShortestPath(colorIndex);
        console.log(this.shortestPath);
      }
      //await this.delay(this.speed);
      return false;
    }
    let is = true;
    for (let x = 0; x < 4; x++) {
      let i, j;
      i = this.shortestPath[lvl - 1].verticalPos + dirY[x];
      j = this.shortestPath[lvl - 1].horizontalPos + dirX[x];
      let newPoint = {} as DragPoint;
      newPoint.verticalPos = i;
      newPoint.horizontalPos = j;
      //console.log('lvl ', lvl);
      if (
        !this.paths.find(
          (obj) => JSON.stringify(obj) === JSON.stringify(newPoint)
        ) ||
        this.shortestPath.find(
          (obj) => JSON.stringify(obj) === JSON.stringify(newPoint)
        )
      ) {
        //console.log('rejected', newPoint, 'for', this.shortestPath[lvl - 1]);
        continue;
      }
      //console.log('accepted', newPoint, 'for', this.shortestPath[lvl - 1], this.shortestPath);
      //console.log(newPoint);
      this.shortestPath.push(newPoint);
      this.updateShortestPath(colorIndex, i + 1, j);
      is = this.test1(lvl + 1, colorIndex);
      if (is == false) return false;
      //console.log('adawd, popped', newPoint, is);
      this.shortestPath.pop();
      this.updateShortestPath(
        colorIndex,
        undefined,
        undefined,
        this.grid.nativeElement.children[i + 1].children[j]
      );
    }
  }
}
