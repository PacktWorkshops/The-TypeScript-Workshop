/*
    UnionType and Type Guards
**/
// Union Type
//Union type and Type guard
function go(status) {
    // type guard checks if status is boolean
    if (typeof status === "boolean") {
        // if boolean run below logic
        if (status) {
            console.log("lets go !!!");
        }
        else {
            console.log("Stop !!!");
        }
    }
    // type guard checks if status is string
    // if string run below if logic
    if (typeof status === "string") {
        if (status === "yes") {
            console.log("lets go !!!");
        }
        else {
            console.log("stop !!!");
        }
    }
}
// example of usage
go(false);
go("yes");
/* "thing" is a union type of person and robot and can be aliased as
 type thing = person | robot;
*/
function amIHuman(thing) {
    console.log("My Height is  " + thing.height);
    console.log("My Weight is  " + thing.weight);
    // type guard
    if ("serial" in thing) {
        console.log("My Serial Number is " + thing.serial);
        console.log("I am a robot I now Rule !!!");
    }
    // type guard
    if ("sex" in thing) {
        console.log("My Sex is " + thing.sex);
        console.log("I am the last Human");
    }
}
// declare a person
var rayon = {
    height: 6.3,
    weight: 209,
    name: "Rayon",
    sex: "Male"
};
// declare a robot
var fives = {
    height: 6.10,
    serial: "T8000",
    weight: 20000
};
// call the function with a person and robot
amIHuman(rayon);
amIHuman(fives);
// function checks if a property of the interface exist and returns a boolean
function isCar(motor) {
    return "name" in motor;
}
// create a truck object
var raptor = {
    modelNumber: 7
};
// use our function to implement some logic
if (isCar(raptor)) {
    console.log("this is a car");
}
else {
    console.log("this is a truck");
}
function whichBot(bot) {
    switch (bot.type) {
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
var fiveAlive = {
    type: 'JonneyFive',
    rollSpeed: 200
};
whichBot(fiveAlive);
