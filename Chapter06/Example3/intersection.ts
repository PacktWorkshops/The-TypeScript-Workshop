type Product = {
    name: string, 
    price: number,
    description: string
} 

let product: Product = {
    name: 'ball',
    price: 40,
    description: 'round red ball'
}

type ProductCart = {
    amount: number,
    discount: number
}

let cartProduct: Product & ProductCart = {
    name: 'mouse',
    price: 40,
    description: 'apple mouse so $40',
    amount: 2,
    // because it's an apple mouse :)
    discount: 0
}   

type aliasIntersectCart = ProductCart & Product

let aliasCartProduct: aliasIntersectCart = {
    name: 'mouse',
    price: 40,
    description: 'apple mouse so $40',
    amount: 2,
    // because it's an apple mouse :)
    discount: 0
} 

console.log(aliasCartProduct)