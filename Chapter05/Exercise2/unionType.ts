/*
    UnionType and Type Guards
**/
// Union Type

// Exercise 2
type yesNo  = string | boolean;
//Union type and Type guard
function go(status: yesNo): void {
    // type guard checks if status is boolean
    if( typeof status === "boolean") {
        // if boolean run below logic
        if(status) {
            console.log("lets go !!!");
        } else {
            console.log("Stop !!!");
        }
    }
    // type guard checks if status is string
    // if string run below if logic
    if(typeof status === "string") {
        if(status === "yes") {
            console.log("lets go !!!");
        } else {
            console.log("stop !!!");
        }
    }
}
// example of usage
go(false);
go("yes");


// Exercise 2.1
// union type object
// create a person type
type Person = {
    height: number;
    name: string;
    weight: number;
    sex: string;
};
// create a robot
type Robot = {
    height: number,
    serial: string;
    weight: number;
};

/* "thing" is a union type of person and robot and can be aliased as
 type thing = person | robot; 
*/
function amIHuman(thing: Person | Robot):void {
    console.log(`My Height is  ${thing.height}`);
    console.log(`My Weight is  ${thing.weight}`);

    // type guard
    if("serial" in thing) {
        console.log(`My Serial Number is ${thing.serial}`);
        console.log(`I am a robot I now Rule !!!`);
    }

    // type guard
    if("sex" in thing) {
        console.log(`My Sex is ${thing.sex}`);
        console.log(`I am the last Human`);
    }
}


// declare a person
const rayon: Person = {
    height: 6.3,
    weight:  209,
    name: "Rayon",
    sex: "Male"
};
// declare a robot
const fives: Robot = {
    height: 6.10,
    serial: "T8000",
    weight: 20000
};
// call the function with a person and robot
amIHuman(rayon);

amIHuman(fives);




// Exercise 2.2
// Type Predicates and discriminated Unions
// create two Interfaces
interface ICar {
    name: string;
}

interface ITruck {
    modelNumber: number;
}

// function checks if a property of the interface exist and returns a boolean
function isCar(motor: ICar | ITruck): motor is ICar {
    return "name" in motor;
}

// create a truck object
const raptor: ICar | ITruck = {
    modelNumber: 7
};
// use our function to implement some logic
if (isCar(raptor)) {
    console.log("this is a car");
} else {
    console.log("this is a truck");
}


// discriminated Unions
// create the interfaces
interface IDecepticons {
    type: "Decepticon";
    flyingSpeed: number;
}
interface IAutobot {
    type: "Autobot";
    drivingSpeed: number;
}
interface IJonneyFive {
    type: "JonneyFive";
    rollSpeed: number;
}

// create a union type of robots
type Robots = IDecepticons | IAutobot | IJonneyFive;

function whichBot(bot: Robots) {
    switch(bot.type) {
        case "Autobot":
            console.log("roll out");
            break;
        case "Decepticon":
            console.log("destroy");
            break;
        case "JonneyFive":
            console.log("five alive");
            break;
        default:
            console.log("Unknown Bot");
    }
}

const fiveAlive: IJonneyFive = {
    type: 'JonneyFive',
    rollSpeed: 200
}

whichBot(fiveAlive);





