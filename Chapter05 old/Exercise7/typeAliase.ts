
// type alias of a number type
type One = 1;

// don't do this
// const two : 2 = 2 

// user alias to declare verbal of type string literal 
const one: One = 1

// alias usage to cast argument type and to alias function return type
function whatNumber(number: One): One {
    console.log(typeof number) 
    return number
}

// console out function return call
console.log(
    // call function
    whatNumber(1)
)


// type alias used with class
class SomeNumberClass {
    
    constructor(public number: One) {}
    
    ShowNumber():One{
        return this.number
    }
}

// instance class 
const numberClass = new SomeNumberClass(1)

// console out results
console.log(numberClass.ShowNumber());



