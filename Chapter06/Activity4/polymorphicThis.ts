// class that manages IceCream
// create IceCream Type
type IceCream = {
    index: number;
    name: string;
    flavor: string;
}
// create a ice cream manager class 
class IceCreamManager {
    constructor(protected creamList: IceCream[]){}

    // add new creams to the list
    addTOList(cream: IceCream): this {
        this.creamList.push(cream)
        return this
    }
    // sort cream in your list
    sortUP(): this {
        this.creamList = this.creamList.sort((a,b) => b.index - a.index)
        return this;
    }
    // sort cream in list
    sortDown():this {
        this.creamList = this.creamList.sort((a,b) => a.index - b.index)
        return this
    }
    // print list of creams
    printList(): this {
        console.log(this.creamList)
        return this;
    }
}

const iManager = new IceCreamManager([])

iManager.printList()
// add cream
.addTOList({
    index: 1,
    name: 'rock the boat',
    flavor: 'cherry and chocolate'
})
// add cream
.addTOList({
    index: 2,
    name: 'ranger red',
    flavor: 'chocolate, raspberry'
})
// print list
.printList()
// sort cream
.sortDown()
// print list after sort
.printList()
// sort again
.sortUP()
// print list after sort
.printList()