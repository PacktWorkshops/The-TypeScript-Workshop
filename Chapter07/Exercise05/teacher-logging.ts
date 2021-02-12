const logger = {
    info: (message: string) => {
        console.log(`[INFO]: ${message}`);
    },
};

function LogMethod(message: string) {
    return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
        if (descriptor.value) {
            const original = descriptor.value;
            descriptor.value = function (...args: any[]) {
                logger.info(`${message}: Method ${propertyName} invoked`);
                // we're passing in the original arguments to the method
                return original.apply(this, args);
            }
        }
        if (descriptor.get) {
            const original = descriptor.get;
            descriptor.get = function () {
                logger.info(`${message}: Getter for ${propertyName} invoked`);
                // getter accessors do not take parameters
                return original.apply(this, []);
            }
        }
        if (descriptor.set) {
            const original = descriptor.set;
            descriptor.set = function (value: any) {
                logger.info(`${message}: Setter for ${propertyName} invoked`);
                // setter accessors take a single parameter, i.e. the value to be set
                return original.apply(this, [value]);
            }
        }
    }
}

class Teacher {
    constructor (public name: string){}

    private _title: string = "";

    @LogMethod("Title property")
    public get title() { 
        return this._title;
    }
    
    public set title(value: string) {
        this._title = value;
    }

    @LogMethod("Teach method")
    public teach() {
        console.log(`${this.name} is teaching`)
    }
}

/////////////////
const teacher = new Teacher("John Smith");
teacher.teach(); // we're invoking the teach method
teacher.title = "Mr." // we're invoking the title setter
console.log(`${teacher.title} ${teacher.name}`); // we're invoking the title getter
