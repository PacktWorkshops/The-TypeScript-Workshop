//first interface
interface ProductTemplate {
    height: number
    width: number
    color: string
}
//make product function
const productMaker = (product: ProductTemplate) => {
    return product
} 
// implement interface
const myProduct: ProductTemplate = {
    height: 10,
    width: 12,
   color: 'red',

}
console.log(productMaker(myProduct));
