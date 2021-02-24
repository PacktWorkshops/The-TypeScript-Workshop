// step 1
// create a string and number literal 
type Status = "on";
type MyNumber = 123456;

// step 2
//create a function that takes 2 args of string and number literal 
function takeTwoLiteral(status:Status, myNumber: MyNumber) {
    return {status, myNumber}
}

// step 3
// wrong number type errors
takeTwoLiteral("on", 123457)

// step 3
// wrong string
takeTwoLiteral("off", 123456) 

// step 3
// correct string no errors
takeTwoLiteral("on", 123456) //?
