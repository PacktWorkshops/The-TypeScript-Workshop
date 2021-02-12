@CountClass('person')
class Person{

    constructor (public firstName: string, public lastName: string, public birthDate: Date) {

    }

    private _title: string;

    @CountMethod('person-title')
    public get title() {
        return this._title;
    }

    public set title(value: string) {
        this._title = value;
    }

    @CountMethod('person-full-name')
    public getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    @CountMethod('person-age')
    public getAge() {
        // only sometimes accurate
        const now = new Date();
        return now.getFullYear() - this.birthDate.getFullYear();
    }

}

const count = {};

type Constructable = { new (...args: any[]): {} };

function CountClass(counterName: string) {
    return function <T extends Constructable>(constructor: T) {
        const wrappedConstructor: any = function (...args: any[]) {
            const result = new constructor(...args);
            if (count[counterName]) {
                count[counterName]+=1;
            } else {
                count[counterName]=1;
            }
            return result;
        };
        wrappedConstructor.prototype = constructor.prototype;
        return wrappedConstructor;
    };
}


function CountMethod(counterName: string) {
    return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
        if (descriptor.value) {
            const original = descriptor.value;
            descriptor.value = function (...args: any[]) {
                if (count[counterName]) {
                    count[counterName]+=1;
                } else {
                    count[counterName]=1;
                }                
                return original.apply(this, args);
            }
        }
        if (descriptor.get) {
            const original = descriptor.get;
            descriptor.get = function () {
                if (count[counterName]) {
                    count[counterName]+=1;
                } else {
                    count[counterName]=1;
                }
                return original.apply(this, []);
            }
        }
        if (descriptor.set) {
            const original = descriptor.set;
            descriptor.set = function (value: any) {
                if (count[counterName]) {
                    count[counterName]+=1;
                } else {
                    count[counterName]=1;
                }
                return original.apply(this, [value]);
            }
        }
    }
}

//////////////////

const first = new Person("Brendan", "Eich", new Date(1961,6,4));
const second = new Person("Anders", "Hejlsberg ", new Date(1960,11,2));
const third = new Person("Alan", "Turing", new Date(1912,5,23));

const fname = first.getFullName();
const sname = second.getFullName();
const tname = third.getFullName();

const fage = first.getAge();
const sage = second.getAge();
const tage = third.getAge();

if (!first.title) {
    first.title = "Mr."
}

if (!second.title) {
    second.title = "Mr."
}

if (!third.title) {
    third.title = "Mr."
}

console.log(count);
