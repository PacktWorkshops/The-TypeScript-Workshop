
// create user object type
type User = {
    _id: number;
    email: string;
    token: string;
}

// create an admin object type
type Admin = {
    accessPages: string[],
    lastLogin: Date
}

// create backupUser object type
type Backup = {
    lastBackUp: Date,
    backUpLocation: string
}


// combine user and admin to create the user object
const superUSer: User & Admin = {
    _id: 1,
    email: 'rayon.hunte@gmail.com',
    token: '12345',
    accessPages: [
        'profile', 'adminConsole', 'userReset'
    ],
    lastLogin: new Date() 
} 
// create backup user
const backupUser: User & Backup = {
    _id: 2,
    email: 'rayon.backup@gmail.com',
    token: '123456',
    lastBackUp: new Date(),
    backUpLocation: '~/backup'
}

// console out superUser props
console.log(superUSer)

// console out backup user props
console.log(backupUser)