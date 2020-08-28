
// create our class 
class ModMyName {
    constructor(protected myName: string){}
    // return this 
    updateMyName(addToName: string): this {
        this.myName = this.myName + '' + addToName + ' ';
        return this;
    }
    getMyName(): string {
        return this.myName
    }    
    // return this
    printName(): this {
        console.log(this.myName)
        return this;
    }
}

// instance your class
const nameClassOne = new ModMyName('');

// chain your instance methods
nameClassOne.updateMyName('Rayon Hunte').updateMyName('Ryan Hunte').printName(); 

// extend your base class
class FixName extends ModMyName {
    constructor(){super('')}

    // add new method that can be chained 
    nullName(): this {
        this.myName = ''
        return this;
    }
}

// instance new class
const nameClassTwo = new FixName()
// call your new method in chain
nameClassTwo.nullName().updateMyName('mark willams').printName()


// interface maxPain {
//     shoot(): this
// }

// class Maxing implements maxPain {
//     shoot(): this {
//         return this;
//     }
// }
