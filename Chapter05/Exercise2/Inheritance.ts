// not necessary
// type user = { userName: string, token: string, createdAt: number}

// base / parent class "User"
class User {
    private userName: string; 
    private token: string = ''
    readonly timeStamp: number = new Date().getTime()

    constructor(userName: string, token: string) {
        this.userName =  userName
        this.token = token
    }

    logOut():void {
        this.userName = ''
        this.token = ''
    }

    getUser() {
        return {
            userName: this.userName,
            token: this.token,
            createdAt: this.timeStamp
        }
    }

    protected renewToken (newToken: string) {
        this.token = newToken
    }

}

//const user: User = new User('rayon', '12345678') 
// console.log(user)
// console.log(user.getUser())


class Cashier extends User {
    balance: number = 0
    float: number = 0

    start(balance: number, float: number): void {
        this.balance= balance
        this.float = float
    }
}

const cashier: Cashier = new Cashier('max', '12345678')

//cashier.


class Inventory extends User {
    products: string [] = []

    // over ride constructor method, add new prop
    constructor(userName: string, token: string, products: string[]) {
        // call parent constructor method
        super(userName, token)
        // set new prop
        this.products = products
    }
}

const inventory: Inventory = new Inventory('james', '896458', ['soap', 'matches', 'apples'])

console.log(inventory)
