
// first interface
interface ProductTemplate {
    height: number
    width: number
    color: string
}

//product class interface
interface ProductClassInterface {
    product: ProductTemplate
    makeProduct(product: ProductTemplate) :ProductTemplate
}


//class that implements product class interface 
class ProductClass implements ProductClassInterface  {
    product: ProductTemplate
    constructor(product: ProductTemplate){
        this.product = product
    }
    makeProduct():ProductTemplate {
        return this.product;
    }
}

//new product object
const product: ProductTemplate = {height:100, width:200, color: 'pink'}

//call make Product function
// instance product class with new product object 
const newProduct = new ProductClass(product)
// console our new product instance
console.log(newProduct.product)
