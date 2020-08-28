// parent class
class User {
    email: string = "";
    createDate: number = 0;
    lastLogin: number = 0;
    token: string = "";

    setToken(token: string): void {
        // set user token
        this.token = token;
    }
    resetPassword(password: string):string {
        // return string of new password
        return password;
    }
}
const user: User = new User();
// console out parent class props     
for(let u in user) {
    console.log(u)
}


class AdminUser extends User {
    // pages admin has access to
    adminPages: string [] = ["admin", "settings"];

    resetUserPassword():string {
        // return default user password
        return "password123";
    }
}

const adminUser: AdminUser = new AdminUser() 
// console out child class props
for(let u in adminUser) {
    console.log(u)
}