interface ErrorMessage  {
    // can only be string | number | symbol
    [msg: number ]: string;
    // you can add other properties once they are of the same type
    apiId: number
}
// message object of Index type ErrorMessage
const errorMessage: ErrorMessage  = {
   0: "system error",
   1: "overload",
   apiId: 12345
};

// message object of Index type ErrorMessage
//const errorMessage: ErrorMessage  = {
  //  '0': "system error",
   // 1: "overload",
   // apiId: 12345 };

// console out object
console.log(
    errorMessage
);
