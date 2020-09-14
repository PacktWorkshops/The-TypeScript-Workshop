/////////////////////////
const logger = {
    info: (message: string) => {
        console.log(`[INFO]: ${message}`);
    },
};

type Constructable = { new (...args: any[]): {} };

function LogClass(message: string) {
    return function <T extends Constructable>(constructor: T) {
        const loggingConstructor: any = function(...args: any[]){
            logger.info(message);
            return new constructor(...args);
        }
        loggingConstructor.prototype = constructor.prototype;
        return loggingConstructor;
    };
}

//////////////////////

@LogClass("Teacher decorator")
class Teacher {
    constructor(public id: number, public name: string) {
        console.log("Constructing a teacher");
    }
}
/////////////////////////
const teacher = new Teacher(1, "John Smith");

for (let index = 0; index < 10; index++) {
    const louAnne = new Teacher(index +1, "LouAnne Johnson");
}

