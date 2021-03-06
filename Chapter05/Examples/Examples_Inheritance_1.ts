class UserOne {
    email: string = "";
    createDate: number = 0;
    lastLogin: number = 0;
    token: string = ""

    setToken(token: string): void {
        // set user token
        this.token = token;
    }
    resetPassword(password: string):string {
        // return string of new password
        return password;
    }
}
class AdminUser extends UserOne {
    // pages admin has access to
    adminPages: string [] = ["admin", "settings"];

    // method that allows the admin to reset other users
    resetUserPassword(email: string):string {
        // return default user password
        return "password123";
    }
}
const adminUser: AdminUser = new AdminUser() 
let propString = ''
for(let u in adminUser) {
    propString += u + ','
}
console.log(propString)