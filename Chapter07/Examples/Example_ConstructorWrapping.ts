

type Constructable = { new (...args: any[]): {} };

function WrapConstructor(message: string) {
    return function <T extends Constructable>(constructor: T) {
        const wrappedConstructor: any = function (...args: any[]) {
            console.log(`Decorating ${message}`);
            const result = new constructor(...args);
            console.log(`Decorated ${message}`);
            return result;
        };
        wrappedConstructor.prototype = constructor.prototype;
        return wrappedConstructor;
    };
}
@WrapConstructor("decorator")
class Teacher {
    constructor(public id: number, public name: string) {
        console.log("Constructing a teacher class instance");
    }
}
const teacher = new Teacher(1, "John");

