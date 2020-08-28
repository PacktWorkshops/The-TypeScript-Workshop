// first interface
interface ProductTemplate {
    height: number
    width: number
    color: string
}


// make product function
const productMaker = (product: ProductTemplate) => {
    return product
} 

const myProduct: ProductTemplate = {
    height: 10,
    width: 12,
    color: 'red',

}

const wrongProduct = {
    height: 10
}

// console.log(
//      productMaker(wrongProduct)
// )

console.log(
    productMaker(myProduct)
)