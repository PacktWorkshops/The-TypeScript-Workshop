declare module "HeatMapTypes" {
  export interface Pitcher {
    batterHotZones: Array<Array<number>>;
    pitcherHotZones: Array<Array<number>>;
    coordinateMap?: Array<any>;
  }
}
