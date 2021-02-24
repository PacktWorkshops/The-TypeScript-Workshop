//first interface
interface ProductTemplate {
    height: number
    width: number
    color: string
}
//function interface
interface productInterfaceFunction {
    (product: ProductTemplate): ProductTemplate
}

//make product function
const productMaker: productInterfaceFunction = (product: ProductTemplate) => {
    return product 
}
// implement interface
const myProduct: ProductTemplate = {
    height: 10,
    width: 12,
   color: 'red',

}
console.log(productMaker(myProduct));
