import { ElementRef, Renderer2 } from "@angular/core";
import { Colors as ColorPreset } from "../presets/colors";
import styles from "src/styles.scss";

export class GlobalVariables {
  public static startPoint: DragPoint;
  public static endPoint: DragPoint;
  public static speed: number = 0;
  public static freq_table: (string | number)[][];
  public static colorIndex;
  public static horizontalGridSize: number;
  public static verticalGridSize: number = 30;
  public static grid: ElementRef;
  public static colorPreset: ColorPreset;
  public static renderer: Renderer2;
  public static paths: Array<DragPoint> = [];
  public static shortestPath: Array<DragPoint> = [];
  public static currentLevelInPaths: number = 0;
  public static currentLevelInShortestPath: number = 0;
  public static colorOffset: number;
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export interface DragPoint {
  verticalPos: number;
  horizontalPos: number;
}

export let RGB = ["R", "G", "B"];

export const dirY: number[] = [-1, 0, 1, 0];
export const dirX: number[] = [0, 1, 0, -1];
export const dirYcomplex: number[] = [-1, -1, 0, 1, 1, 1, 0, -1];
export const dirXcomplex: number[] = [0, 1, 1, 1, 0, -1, -1, -1];

export const algorithms = [
  "Dijkstra's Algorithm",
  "A* Search",
  "Greedy Best-first Search",
  "Back-tracking",
];

export const speeds: Array<Speed> = [
  {
    text: "Fastest",
    value: 1,
  },
  {
    text: "Very Fast",
    value: 25,
  },
  {
    text: "Fast",
    value: 50,
  },
  {
    text: "Medium",
    value: 150,
  },
  {
    text: "Slow",
    value: 250,
  },
  {
    text: "Very Slow",
    value: 500,
  },
  {
    text: "Slowest",
    value: 1000,
  },
];

export interface Speed {
  text: string;
  value: number;
}

export function is_valid(i, j): boolean {
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
    return false;
  }

  return true;
}

export function addPaths(el) {
  if (el.className == "grid-block" && Array.from(el.children).length == 0) {
    el.style.background = styles["colors-visited1"];
    //el.style.borderColor = "#fff";
    updateFreq(2, el, undefined, undefined);
    return true;
  }
  return false;
}

export function updateFreq(
  val: string | number,
  el?: any,
  i?: number,
  j?: number
) {
  if (el == window) {
    return -1;
  }

  if (el != undefined && (i == undefined || j == undefined)) {
    i =
      Array.from(el.parentNode.parentNode.children).indexOf(el.parentNode) - 1;
    j = Array.from(el.parentNode.children).indexOf(el);
  }

  if (typeof val === "string") {
    val = val.split(/[- ]/)[0];
  }
  GlobalVariables.freq_table[i][j] = val;
  //console.log(i, j);
  if (val == "start") {
    GlobalVariables.startPoint = {
      verticalPos: i,
      horizontalPos: j,
    };
  } else if (val == "end") {
    GlobalVariables.endPoint = {
      verticalPos: i,
      horizontalPos: j,
    };
  }
  //console.log(this.freq_table);
}

export async function updateShortestPath(
  colorIndex = 0,
  i = undefined,
  j = undefined,
  el = undefined
) {
  if (el != undefined) {
    addPaths(el);
    //updateFreq(2, el, undefined, undefined);
  } else {
    let color =
      GlobalVariables.colorPreset.defaultColor.shortestPathNodeDefault;
    let colorOffset = GlobalVariables.colorOffset;

    if (i != undefined && j != undefined) {
      GlobalVariables.grid.nativeElement.children[i].children[
        j
      ].style.background = GlobalVariables.colorPreset.getColor(color);
      updateFreq(1, undefined, i - 1, j);
      return;
    }
    console.log("fooor", color, colorOffset, GlobalVariables.paths.length);
    for (let x = 1; x < GlobalVariables.shortestPath.length - 1; x++) {
      let ni, nj;
      console.log(color);
      i = GlobalVariables.shortestPath[x].verticalPos;
      j = GlobalVariables.shortestPath[x].horizontalPos;
      ni = GlobalVariables.shortestPath[x + 1].verticalPos;
      nj = GlobalVariables.shortestPath[x + 1].horizontalPos;
      GlobalVariables.grid.nativeElement.children[i + 1].children[
        j
      ].style.background = GlobalVariables.colorPreset.getColor(color);
      //this.colorPreset.changeColor(color, colorOffset, this.RGB)
      updateFreq(1, undefined, i, j);
      let block = GlobalVariables.renderer.createElement("div");
      block.setAttribute("class", "start-node");
      GlobalVariables.renderer.appendChild(
        GlobalVariables.grid.nativeElement.children[i + 1].children[j],
        block
      );
      //console.log(block.style);
      block.style.borderWidth = "0 1px 1px 0";
      block.style.padding = "2px";
      block.style.position = "absolute";
      block.style.top = "50%";
      block.style.left = "50%";
      block.style.borderColor = "#2e3c5a";
      let angle = "rotate(45deg)",
        pos = "translate(-20%, -70%)";
      if (i > ni) {
        angle = "rotate(-135deg)";
        pos = "translate(0%, -45%)";
      } else if (i < ni) {
        angle = "rotate(45deg)";
        pos = "translate(-45%, 0%)";
      } else if (j > nj) {
        angle = "rotate(135deg)";
        pos = "translate(0%, 45%)";
      } else if (j < nj) {
        angle = "rotate(-45deg)";
        pos = "translate(-20%, -70%)"; // translate(-{border-sum}px, -{2*padding}px)
      }
      block.style.transform = angle + " " + pos;
      await delay(50);
    }
  }
}
