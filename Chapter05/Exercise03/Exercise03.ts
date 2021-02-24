// step 1
type User = {
    email: string,
    userId: number
}
// step 2
interface SuperAddMe {
    (user: User): User[]
};
// step 3
let allUsers: User[] = [
    { email: 'home@home.com', userId: 1 },
    { email: 'out@side.com', userId: 2 }
];

let adduser: SuperAddMe
adduser = function (user: User): User[] {
    return [
        ...allUsers,
        user
    ]
}
// step 5
console.log(adduser({ email: 'slow@mo', userId: allUsers.length } ))

