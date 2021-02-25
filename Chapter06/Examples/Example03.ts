// basic union type
type Age =  number | string;
function myAge(age: Age): Age {
    if (typeof age === "number") {
        return `my age is ${age} and this a number`;
    } else if (typeof age === "string"){
        return `my age is ${age} and this a string`;
    } else {
        return `incorrect type" ${typeof(age)}`;
    }
}
console.log(myAge(45));
console.log(myAge("45"));
//console.log(myAge(false));
