// function process<T extends string | null>(
//     text: T
//   ): any {
//     return text === null ? null : text
//   }


// typeof process("foo") //?
// typeof process(null) //?


// type  Cats = {
//     name: string;
//     meow():void
// }
// type Others = {
//     name: string;
// }


// // cat example
// type Animal = Cats | Others

// type extractCat<A> = A extends {meow(): void}? A: never;

// type cat = extractCat<Animal>

// const someCat: cat = {
//     name: "lion",
//     meow():void {
//         console.log("me")
//     }
// }

// const someOther: cat = {
//     name: "zebra",
//     meow: ():void => {}
// }

// type Action = {type: "INIT"} | {type: "SYNC"} | {type: "LOGIN", email: string} | {type: "LOGIN_IN_SUCCESS", token: string}

// type ExtractActionParameters<A, T> = A extends {type: T} ? A : never;

// // type ActionType = Action["type"]

// // function dispatch<T extends ActionType>(
// //     type: T,
// //     args: ExtractActionParameters<Action, T>
// //     ): void {}

// type test = ExtractActionParameters<Action, "LOGIN">

// const someTest: test = {
//     type: 'LOGIN',
//     email: '@somemail.com'
// }


// const x = 7 < 10 ?  "cool" : "uncool";

// type c <T> = T extends number | string ?  string : null
// const cType : c<number> = "cool"
// cType
