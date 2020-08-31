// array of users
var user = [
    {
        _id: 1, create: new Date(),
        email: 'home@home1.com', first: 'rayon',
        last: 'hunte', password: '123456', token: 'xxx123xxx'
    },
    {
        _id: 1, create: new Date(),
        email: 'home@home1.com', first: 'rayon',
        last: 'hunte', password: '123456', token: 'xxx123xxx'
    },
    {
        _id: 1, create: new Date(),
        email: 'home@home1.com', first: 'rayon',
        last: 'hunte', password: '123456', token: 'xxx123xxx'
    }
];
// declare new array of users
var newUsers = user
    .map(
// make all the users read only
function (user) { return user; })
    .map(
// pick 3 props you need 
function (user) {
    return {
        email: user.email,
        first: user.first,
        last: user.last
    };
});
// console log new user array
console.log(newUsers);
