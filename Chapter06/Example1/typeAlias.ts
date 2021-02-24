// declare  type with out alias
let myName: string = "rayon"

// type alias
type anyString = string


let myNewName: anyString = 'rayon'

// type object
type cart = {
    amount: number,
    name: string,
    discount?: boolean
}

let myCart: cart = {
    amount: 10,
    name: 'banana',
    discount: false
}