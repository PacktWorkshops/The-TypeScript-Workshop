var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// create our class 
var ModMyName = /** @class */ (function () {
    function ModMyName(myName) {
        this.myName = myName;
    }
    // return this 
    ModMyName.prototype.updateMyName = function (addToName) {
        this.myName = this.myName + '' + addToName + ' ';
        return this;
    };
    ModMyName.prototype.getMyName = function () {
        return this.myName;
    };
    // return this
    ModMyName.prototype.printName = function () {
        console.log(this.myName);
        return this;
    };
    return ModMyName;
}());
// instance your class
var nameClassOne = new ModMyName('');
// chain your instance methods
nameClassOne.updateMyName('Rayon Hunte').updateMyName('Ryan Hunte').printName();
// extend your base class
var FixName = /** @class */ (function (_super) {
    __extends(FixName, _super);
    function FixName() {
        return _super.call(this, '') || this;
    }
    // add new method that can be chained 
    FixName.prototype.nullName = function () {
        this.myName = '';
        return this;
    };
    return FixName;
}(ModMyName));
// instance new class
var nameClassTwo = new FixName();
// call your new method in chain
nameClassTwo.nullName().updateMyName('mark willams').printName();
// interface maxPain {
//     shoot(): this
// }
// class Maxing implements maxPain {
//     shoot(): this {
//         return this;
//     }
// }
