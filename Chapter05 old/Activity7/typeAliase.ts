//step 1
// alias a type user which is a object
type SysUser = {
    email: string,
    toke: string,
    id: number
}
// step 2
// function that takes alias as an argument and returns alias
function buildUser(userDetails: SysUser): SysUser {
    return userDetails
}

// step  3
// create userOne constant of type alias SysUser
const userOne: SysUser = {
    email: 'user@one.com',
    toke: '12345678',
    id: 1234
}

// step 4
// create wrongUser object
const wrongUser = {
    email: 'just@email.com'
}

// step 5
// call buildUser function with userOne of type SysUser
console.log(
    buildUser(userOne)
)

// step 6
// call buildUser function with wrongUser note out put errors
/* 
Argument of type '{ email: string; }' is not assignable to parameter of type 'SysUser'.
*/
console.log(
    buildUser(wrongUser)
)











