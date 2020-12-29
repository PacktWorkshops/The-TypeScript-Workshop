// variables with differing types of values

const daysInWeek = 7;
const person = "Ada Lovelace";
const isRaining = false;
const today = new Date();
const months = ["January", "February", "March"];
const notDefined = undefined;
const nothing = null;
const add = (x:number, y: number) => x + y;
const calculator = {
    add
};


// Adding all the variables into a containing array, using the array literal syntax
const everything = [daysInWeek, person, isRaining, today, months, notDefined, nothing, add, calculator];

// Loops all the variables using a `for..of` loop, and for each value call the `typeof` operator. 
// Shows the result on the console, along with the value itself
for (const something of everything) {
    const type = typeof something;
    console.log(something, type);
}