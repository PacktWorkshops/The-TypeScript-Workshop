import {
  Circle,
  getArea,
  Rectangle,
  RightTriangle,
  Square,
} from './shapes-lib-solution';

const circle: Circle = { radius: 4, type: 'circle' };
console.log({ ...circle, area: getArea(circle) });

const rectangle: Rectangle = { type: 'rectangle', length: 7, width: 4 };
console.log({ ...rectangle, area: getArea(rectangle) });

const square: Square = { type: 'square', width: 5 };
console.log({ ...square, area: getArea(square) });

const rightTriangle: RightTriangle = {
  type: 'rightTriangle',
  base: 9,
  height: 4,
};
console.log({ ...rightTriangle, area: getArea(rightTriangle) });
