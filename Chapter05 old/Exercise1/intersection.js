// combine user and admin to create the user object
var superUSer = {
    _id: 1,
    email: 'rayon.hunte@gmail.com',
    token: '12345',
    accessPages: [
        'profile', 'adminConsole', 'userReset'
    ],
    lastLogin: new Date()
};
// create backup user
var backupUser = {
    _id: 2,
    email: 'rayon.backup@gmail.com',
    token: '123456',
    lastBackUp: new Date(),
    backUpLocation: '~/backup'
};
// console out superUser props
console.log(superUSer);
// console out backup user props
console.log(backupUser);
