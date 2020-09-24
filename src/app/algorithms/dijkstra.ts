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
    if (GlobalVariables.paths.length == 0) {
      GlobalVariables.paths.push(GlobalVariables.startPoint);
      GlobalVariables.startPoint.cost = 0;
      GlobalVariables.currentLevelInPaths = 1;
    }
    const initialResult = (value) => {
      console.log(value);
      console.log("done!!!!", GlobalVariables.shortestPath);
      GlobalVariables.shortestPath.reverse();
      updateShortestPath();
    };

    if (GlobalVariables.currentLevelInShortestPath == 0) {
      console.log("sh", GlobalVariables.shortestPath);
      this.firstWave(GlobalVariables.currentLevelInPaths).then((value) =>
        initialResult(value)
      );
    }
  }

  stop() {
    this.stopAlgo = true;
  }

  async firstWave(lvl) {
    GlobalVariables.currentLevelInPaths = lvl;
    //if (this.stopAlgo == true) return false;
    while (this.stopAlgo == true) {
      await delay(1);
    }
    for (let x = 0; x < 4; x++) {
      let i, j;
      //if (GlobalVariables.paths[lvl - 1] == undefined) return;
      i = GlobalVariables.paths[lvl - 1].verticalPos + dirY[x];
      j = GlobalVariables.paths[lvl - 1].horizontalPos + dirX[x];
      let newPoint = {} as DragPoint;
      newPoint.verticalPos = i;
      newPoint.horizontalPos = j;
      if (is_valid(i, j) == false) {
        continue;
      }
      GlobalVariables.paths.push(newPoint);
      //console.log(GlobalVariables.paths);
      if (
        JSON.stringify(
          GlobalVariables.paths[GlobalVariables.paths.length - 1]
        ) === JSON.stringify(GlobalVariables.endPoint)
      ) {
        GlobalVariables.shortestPath.push(GlobalVariables.endPoint);
        let point = {} as DragPoint;
        let minim = -1;
        for (let y = 0; y < 4; y++) {
          i =
            GlobalVariables.paths[GlobalVariables.paths.length - 1]
              .verticalPos + dirY[y];
          j =
            GlobalVariables.paths[GlobalVariables.paths.length - 1]
              .horizontalPos + dirX[y];
          let obj = GlobalVariables.paths.find(
            (obj) => obj.verticalPos == i && obj.horizontalPos == j
          );
          if (obj == undefined || obj.cost == undefined) continue;
          if (minim == -1 || minim > obj.cost) {
            minim = obj.cost;
            point = obj;
          }
        }
        console.log("initial", point, GlobalVariables.paths[lvl]);
        GlobalVariables.shortestPath.push(point);
        return;
      }
      GlobalVariables.paths[GlobalVariables.paths.length - 1].cost =
        GlobalVariables.paths[lvl - 1].cost + 1;
      addPaths(GlobalVariables.grid.nativeElement.children[i + 1].children[j]);
      await delay(GlobalVariables.speed);
    }
    await this.firstWave(lvl + 1);
    if (
      JSON.stringify(
        GlobalVariables.shortestPath[GlobalVariables.shortestPath.length - 1]
      ) !== JSON.stringify(GlobalVariables.startPoint)
    ) {
      console.log("shottt", GlobalVariables.shortestPath);
      let point = {} as DragPoint;
      let minim = -1;
      for (let y = 0; y < 4; y++) {
        let i, j;
        i =
          GlobalVariables.shortestPath[GlobalVariables.shortestPath.length - 1]
            .verticalPos + dirY[y];
        j =
          GlobalVariables.shortestPath[GlobalVariables.shortestPath.length - 1]
            .horizontalPos + dirX[y];
        let obj = GlobalVariables.paths.find(
          (obj) => obj.verticalPos == i && obj.horizontalPos == j
        );
        if (obj == undefined || obj.cost == undefined) continue;
        if (minim == -1 || minim > obj.cost) {
          minim = obj.cost;
          point = obj;
        }
      }
      GlobalVariables.shortestPath.push(point);
    }
  }
}
