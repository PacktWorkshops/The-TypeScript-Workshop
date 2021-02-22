function addTwoNumbers(a: number, b: number) { return a + b; }
// const mathUtils = {
//    addTwoNumbers: addTwoNumbers
// };
const mathUtils = {
    addTwoNumbers: function(a: number, b: number) { return a + b; }
};


console.log(mathUtils.addTwoNumbers(3, 4));