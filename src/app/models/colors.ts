
export interface Colors {
    startNode:string;
    targetNode:string;
    bombNode:string;
    weightNode:string;
    unvisitedNode:string;
    visitedNode:string;
    shortestPathNodeDefault:RGB;
    wallNode:string;
}

export interface RGB {
    R:number;
    G:number;
    B:number;
    index:number;
    asc:boolean;
}