export class GlobalVariables {
  public static startPoint: DragPoint;
  public static endPoint: DragPoint;
  public static speed: number = 0;
  public static freq_table: (string | number)[][];
  public static colorIndex;
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

export const algorithms = [
  "Dijkstra's Algorithm",
  "A* Search",
  "Greedy Best-first Search",
  "Back-tracking",
];

export const speeds: Array<Speed> = [
  {
    text: "Fastest",
    value: 0,
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
