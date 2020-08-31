/** Prerequisites 
 * To compile the following code
 * TypeScript compiler must be installed 
 * npm install -g typescript@latest
 *  
*/

// Union Type of number or string
type Age =  number | string;

// function that takes the union type as an argument and returns the union type
function myAge(age: Age):Age {
    return age;
}

// console out function call with number
console.log( myAge(45) );
// console out function all with age as string
console.log(myAge("45"));
/** the below code will generate a compilation error
 * unionType.ts(16,19): error TS2345: Argument of type 
 * 'true' is not assignable to parameter of type 'string | number'.
*/
myAge(true)

