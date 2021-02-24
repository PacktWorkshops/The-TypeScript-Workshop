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
class SuperAdmin extends AdminUser {
    superPages: string[] = ["super", "ultimate"]
    readonly myHash: string

    constructor() {
        super()
        this.myHash = '1234567'
    }

    createAdminUser(adminUser: AdminUser ): AdminUser {
        return adminUser
    }
    resetPassword(password: string): string {
        // add hash to password
        return password + this.myHash; 
    }
}
const superAdmin = new SuperAdmin()
const newAdmin = new AdminUser()
console.log( superAdmin.resetPassword('iampassword'))
console.log( newAdmin.resetPassword('iampassword'))

