interface ProductObjectTemplate {
    height: number
    width: number
    color: string
}
interface ProductFunctionTemplate {
    (product: ProductObjectTemplate)
}
interface ProductClassTemplate {
    makeProduct: ProductFunctionTemplate
    allProducts():ProductObjectTemplate[]
}
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
    const productInstance: ProductClassTemplate = new Product()
    productInstance.makeProduct(
        {
        color: "red",
        height: 10,
        width: 14
        }
    )
    
    
    console.log(
        productInstance.allProducts()
    )
    
