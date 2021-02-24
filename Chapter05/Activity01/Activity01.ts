interface UserObj {
    email: string
    loginAt?: number
    token?: string
}
interface UserClass {
    user: UserObj
    getUser(): UserObj
    login(user: UserObj, password: string):UserObj
}
class User implements UserClass {
    
    user:UserObj

    getUser(): UserObj {
        return this.user
    }

    login(user:  UserObj, password: string): UserObj {
        // set props user object
        return this.user = user
    }
}
const newUserClass:UserClass = new User()
const newUser: UserObj = {
    email: "home@home.com",
    loginAt: new Date().getTime(),
    token: "123456"
}
console.log(
    newUserClass.login(newUser, "password123")
)

console.log(
    newUserClass.getUser()
)
