// create a user model
type UserModel = {
    _id: number;
    create: Date;
    email: string;
    first: string;
    last: string;
    password: string;
    token: string;
} 

// array of users
const user: UserModel[] = [
    {
        _id:1, create: new Date(),
        email: 'home@home1.com', first: 'rayon',
        last: 'hunte', password: '123456', token: 'xxx123xxx'
    },
    {
        _id:1, create: new Date(),
        email: 'home@home1.com', first: 'rayon',
        last: 'hunte', password: '123456', token: 'xxx123xxx'
    },
    {
        _id:1, create: new Date(),
        email: 'home@home1.com', first: 'rayon',
        last: 'hunte', password: '123456', token: 'xxx123xxx'
    }
]
// declare new array of users
const newUsers = user
.map(
    // make all the users read only
    (user: UserModel): Readonly<UserModel> => user
)
.map(
    // pick 3 props you need 
    (user: UserModel): Pick<UserModel, 'email'| 'first'| 'last'> => {
        return {
           email: user.email,
           first: user.first,
           last: user.last
        }

    }
)
// console log new user array
console.log(newUsers)