/* 
conditional types allow you to crate not uniform mapping
how I understand it is, conditionals allow you to apply a type based on a condition 
using the syntax of the turnery operator 
type someType<T, U> = T extends U? U : never
In sudo code if T === U then return U else return nothing
*/

// simple operation with a union type
type isNumberOrString<T> = T extends number | string? string | number : never

// returns a number type
const myNewNumber: isNumberOrString<number> = 45;
console.log(typeof myNewNumber)

// returns a string
const myNewString:isNumberOrString<string> = "cool runnings";
console.log(typeof myNewString)

// type complation error because sting cannot be never
const myNull:isNumberOrString<boolean> = "some thing";
console.log(typeof myNewString)

// more complex example
// user profile types
type profiles = {user: "admin", adminProfile: string[]} | {user: "normal", userProfile: string[] } 
// extract the right user type based on user string literal type
type rightUserType<U, T> = U extends {user: T} ?  U : never; 

// create some user with rightUserType type pass profile type and user sting as generic arguments 
const someUserIs: rightUserType<profiles, "admin" > = {
    user: "admin",
    adminProfile: ['reset uer', 'update profiles']
} 
// console out user
console.log(someUserIs)

const someOtherUser: rightUserType<profiles, "normal"> = {
    user: "normal",
    userProfile: ['some page', 'really cool page']
}
// console out user
console.log(someOtherUser)


