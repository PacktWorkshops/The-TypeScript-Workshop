interface Order {
  id: number;
  color: string;
  size: string;
}

export const createOrder = (
  color: string,
  size: string,
  quantity: number
): Order[] => {
  let id = 0;
  const orders = [];
  for (let i = 0; i < quantity; i++) {
    orders.push({ id: id++, color, size });
  }
  return orders;
};

const orderOne = createOrder('red', 'M', 4);

console.log(orderOne);

const orderTwo = createOrder('blue', 'S', 7);

console.log(orderTwo);
