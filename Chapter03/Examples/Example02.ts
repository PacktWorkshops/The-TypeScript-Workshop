const values = [8, 42, 99, 161];
let total = 0;
for (let i = 0; i < values.length; i++) {
  total += values[i];
}
const average = total / values.length;

const squareDiffs = [];

for (let i = 0; i < values.length; i++) {
  const diff = values[i] - average;
  squareDiffs.push(diff * diff)
}

total = 0;

for (let i = 0; i < squareDiffs.length; i++) {
  total += squareDiffs[i];
}

const standardDeviation = Math.sqrt(total / squareDiffs.length);

console.log(standardDeviation);
