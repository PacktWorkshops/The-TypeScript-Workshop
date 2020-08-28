// first interface
interface ProductTemplate {
    height: number
    width: number
    color: string
}


// function interface 
interface productInterfaceFunction {
    (product: ProductTemplate): ProductTemplate
}

// make product function
const productMaker: productInterfaceFunction = (product: ProductTemplate) => {
    return product;
}

// const myProduct: ProductTemplate = {
//     height: 10,
//     width: 12,
//     color: 'red',

// }

// const wrongProduct = {
//     height: 10
// }


// console.log(
//     productMaker(myProduct)
// )

// class UserClass implements UserInterface {
//     userName: string
//     Token: string

//     GetUserInfo () {
//         return {
//             userName: this.userName,
//             Token: this.Token
//         }
//     }

//     canAccess(pageName: string): boolean {
//         // request to server to check access
//         return true;
//     }
// }


// product class  interface
interface ProductClassInterface {
    product: ProductTemplate
    makeProduct(product: ProductTemplate) :ProductTemplate
}

// class that implements product class interface 
class ProductClass implements ProductClassInterface  {
    product: ProductTemplate
    makeProduct(product: ProductTemplate):ProductTemplate {
        return this.product = product
    }
}

// create a instance of the Product class
const newProduct: ProductClassInterface = new ProductClass()

// new product object
const myProductTwo: ProductTemplate = {
    height: 10,
    width: 12,
    color: 'pink',
}
// call make Product function
newProduct.makeProduct(myProductTwo)

console.log(newProduct.product)
