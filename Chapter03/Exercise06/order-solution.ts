interface Order {
  id: number;
  color: string;
  size: string;
}

export const orderFactory = () => {
  let id = 0;
  return (color: string) => (size: string) => (qty: number) => {
    const orders = [];
    for (let i = 0; i < qty; i++) {
      orders.push({ id: id++, color, size });
    }
    return orders;
  };
};

const createOrder = orderFactory();

const redLine = createOrder('red');

const redSmall = redLine('S');

const redMedium = redLine('M');

const blueSmall = createOrder('blue')('S');

const orderOne = redMedium(4);

console.log(orderOne);

const orderTwo = blueSmall(7);

console.log(orderTwo);

const orderThree = redSmall(11);

console.log(orderThree);
