/// <reference path="../types/HeatMapTypes.d.ts"/>
import hmt = require("HeatMapTypes");
import _ = require("lodash");
import { data, findMatch } from "./../heat_map_data.js";
import "jasmine";

describe("heat map data shape", () => {
  it("should have an attribute called batterHotZones", () => {
    const result = Object.keys(data).includes("batterHotZones");
    expect(result).toBe(true);
  });

  it("should have an attribute called pitcherHotZones", () => {
    const result = Object.keys(data).includes("pitcherHotZones");
    expect(result).toBe(true);
  });

  it("should have an optional attribute called coordinateMap", () => {
    const result = Object.keys(data).includes("coordinateMap");
    expect(result).toBe(true);
  });

  it("should have a method called findMatch", () => {
    let jon: hmt.Pitcher;

    jon = {
      batterHotZones: [[12.2, -3], [10.2, -5], [3, 2]],
      pitcherHotZones: [[3, 2], [-12.2, 3], [-10.2, 5]]
    };
    const result = findMatch(jon.batterHotZones, jon.pitcherHotZones);
    expect(result).toEqual([[3, 2]]);
  });
});
