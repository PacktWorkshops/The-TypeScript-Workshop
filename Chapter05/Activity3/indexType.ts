type IBurgerType = {
    [index: number] : {Ingredient: string}
}
const cheeseBurger: IBurgerType = {
    1: {Ingredient: 'bread'},
    2: {Ingredient: 'cheese'},
    3: {Ingredient: 'beef'},
    4: {Ingredient: 'bread'},
}
const beefBurger: IBurgerType = {
    1: {Ingredient: 'bread'},
    2: {Ingredient: 'tomato'},
    3: {Ingredient: 'beef'},
    4: {Ingredient: 'bread'},
}
const myBurgerSHop: IBurgerType[] = [
    cheeseBurger, beefBurger
]
console.log(myBurgerSHop)