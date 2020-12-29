// Enum with all the operators that we want to support inside our code.
enum Operator {
    Add = "add",
    Subtract = "subtract",
    Multiply = "multiply",
    Divide = "divide",
}

// Type alias for a function that does a calculation on two numbers. 
// Such a function will take two numbers as parameters, and return a single number.
type Operation = (x: number, y: number) => number;

// An (empty) array that can hold multiple tuples of the `[Operator, Operation]` type. 
// This will be our dictionary, where we store all our methods.
const operations: [Operator, Operation][] = [];

// An add method, that satisfies the `Operation` type
const add = function (first: number, second: number) {
    return first + second;
};

// Adding a tuple of the `Operator.Add` value and the `add` function to the `operations` array. 
operations.push([Operator.Add, add]);

const subtract = function (first: number, second: number) {
    return first - second;
};
operations.push([Operator.Subtract, subtract]);

const multiply = function (first: number, second: number) {
    return first * second;
};
operations.push([Operator.Multiply, multiply]);

const divide = function (first: number, second: number) {
    return first / second;
};
operations.push([Operator.Divide, divide]);

const calculator = function (first: number, second: number, op: Operator) {
    const tuple = operations.find(tpl => tpl[0] === op)!;
    const operation = tuple[1];
    const result = operation(first, second);
    return result;
}

// A test run of the calculator
console.log(calculator(4, 6, Operator.Add));
console.log(calculator(13, 3, Operator.Subtract));
console.log(calculator(2, 5, Operator.Multiply));
console.log(calculator(70, 7, Operator.Divide));
