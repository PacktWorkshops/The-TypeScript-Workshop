// create a ice cream manager class 
var IceCreamManager = /** @class */ (function () {
    function IceCreamManager(creamList) {
        this.creamList = creamList;
    }
    // add new creams to the list
    IceCreamManager.prototype.addTOList = function (cream) {
        this.creamList.push(cream);
        return this;
    };
    // sort cream in your list
    IceCreamManager.prototype.sortUP = function () {
        this.creamList = this.creamList.sort(function (a, b) { return b.index - a.index; });
        return this;
    };
    // sort cream in list
    IceCreamManager.prototype.sortDown = function () {
        this.creamList = this.creamList.sort(function (a, b) { return a.index - b.index; });
        return this;
    };
    // print list of creams
    IceCreamManager.prototype.printList = function () {
        console.log(this.creamList);
        return this;
    };
    return IceCreamManager;
}());
var iManager = new IceCreamManager([]);
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
    .printList();
