const addTwoNumbers = (a: number): ((b: number) => number) => (b: number): number => a + b;

console.log(addTwoNumbers(3)(4));
