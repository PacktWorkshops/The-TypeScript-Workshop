const calcAverage = (values: number[]): number => (values.reduce((prev, curr) => prev + curr, 0) / values.length);
const values = [8, 42, 99, 161];
const average = calcAverage(values);
console.log(average);
