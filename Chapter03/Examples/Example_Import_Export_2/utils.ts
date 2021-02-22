// utils.ts
const PI = 3.14;

const addTwo = (a: number, b: number): number => {
  return a + b;
};

const fetcher = () => {
  console.log('it is fetched!');
};

export default { addTwo, fetcher, PI };
