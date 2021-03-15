const calcAverage = (values: number[]): number => (values.reduce((prev, curr) => prev + curr, 0) / values.length);

const calcStandardDeviation = (values: number[]): number => {
  const average = calcAverage(values);

  const squareDiffs = values.map((value: number): number => {
    const diff = value - average;
    return diff * diff;
  });

  return Math.sqrt(calcAverage(squareDiffs));
}

const values = [8, 42, 99, 161];

console.log(calcStandardDeviation(values));
