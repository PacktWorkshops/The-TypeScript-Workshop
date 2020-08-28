// step 1 object
interface ProductObjectTemplate {
    height: number
    width: number
    color: string
}

// set 2 function 
interface ProductFunctionTemplate {
    (product: ProductObjectTemplate)
}

// step 3 class
interface ProductClassTemplate {
    makeProduct: ProductFunctionTemplate
    allProducts():ProductObjectTemplate[]
}

// step 4 implement class
class Product implements ProductClassTemplate {
    products: ProductObjectTemplate []
    constructor() {
        this.products = []
    }
    makeProduct(product: ProductObjectTemplate) {
        this.products.push(product)
    }
    
    allProducts():ProductObjectTemplate[] {
        return this.products
    }
}
// step 5
const productInstance: ProductClassTemplate = new Product()

// console.log(productInstance)

// wrong input
// productInstance.makeProduct({})

productInstance.makeProduct(
    {
    color: "red", 
    height: 10, 
    width: 14}

)

console.log(
    productInstance.allProducts()
)