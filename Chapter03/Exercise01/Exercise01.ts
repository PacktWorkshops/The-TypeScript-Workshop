const values = [8, 42, 99, 161];
let total = 0;
for(let i = 0; i < values.length; i++) {
  total += values[i];
}
const average = total/values.length;
console.log(average);

// Here is the code that calcultates average using functions. 

//const calcAverage = (values: number[]): number => (values.reduce((prev, curr) => prev + curr, 0) / values.length);
//const values = [8, 42, 99, 161];
//const average = calcAverage(values);
//console.log(average);
