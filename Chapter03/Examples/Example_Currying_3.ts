const addTwoNumbers = (a: number): ((b: number) => number) => {
    return (b: number): number => {
        return a + b;
    }
}

const addFunction = addTwoNumbers(3);

console.log(addFunction(4));
