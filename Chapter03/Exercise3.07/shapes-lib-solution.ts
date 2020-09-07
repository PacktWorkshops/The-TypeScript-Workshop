const PI = 3.14;

interface Shape {
  area?: number;
  type: 'circle' | 'rectangle' | 'rightTriangle' | 'square';
}

export interface Circle extends Shape {
  radius: number;
  type: 'circle';
}

export interface Rectangle extends Shape {
  length: number;
  type: 'rectangle';
  width: number;
}

export interface RightTriangle extends Shape {
  base: number;
  height: number;
  type: 'rightTriangle';
}

export interface Square extends Shape {
  type: 'square';
  width: number;
}

const getCircleArea = (circle: Circle): number => {
  const { radius } = circle;
  return radius * radius * PI;
};

const getRectangleArea = (rectangle: Rectangle): number => {
  const { length, width } = rectangle;
  return length * width;
};

const getSquareArea = (square: Square): number => {
  const { width } = square;
  return getRectangleArea({ length: width, type: 'rectangle', width });
};

const getRightTriangleArea = (rightTriangle: RightTriangle): number => {
  const { base, height } = rightTriangle;
  return (base * height) / 2;
};

export const getArea = (shape: Shape) => {
  switch (shape.type) {
    case 'circle':
      return getCircleArea(shape as Circle);
    case 'rectangle':
      return getRectangleArea(shape as Rectangle);
    case 'rightTriangle':
      return getRightTriangleArea(shape as RightTriangle);
    case 'square':
      return getSquareArea(shape as Square);
  }
};
