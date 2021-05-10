/// <reference path="./types/HeatMapTypes.d.ts"/>
import hmt = require('HeatMapTypes');
import _ = require('lodash');

export let data: hmt.Pitcher;

data = {
  batterHotZones: [[12.2, -3], [10.2, -5], [3, 2]],
  pitcherHotZones: [[3, 2], [-12.2, 3], [-10.2, 5]],
};

export const findMatch = (batterHotZones, pitcherHotZones) => {
  return _.intersectionWith(batterHotZones, pitcherHotZones, _.isEqual);
};

data.coordinateMap = findMatch(data.batterHotZones, data.pitcherHotZones);
console.log(data.coordinateMap);
