import "reflect-metadata";

class Calculator {
    constructor (public first: number, public second: number) {}

    public add() {
        return this.first + this.second;
    }

    public subtract() {
        return this.first - this.second;
    }

    public multiply() {
        return this.first / this.second;
    }

    public divide() {
        return this.first / this.second;
    }
}

Reflect.defineMetadata("description", "A class that offers common operations over two numbers", Calculator);

Reflect.defineMetadata("description", "Returns the result of adding two numbers", Calculator, "add");
Reflect.defineMetadata("description", "Returns the result of subtracting two numbers", Calculator, "subtract");
Reflect.defineMetadata("description", "Returns the result of dividing two numbers", Calculator, "divide");

function showDescriptions (target: any) {
    if (Reflect.hasMetadata("description", target)) {
        const classDescription = Reflect.getMetadata("description", target);
        console.log(`${target.name}: ${classDescription}`);
        const methodNames = Object.getOwnPropertyNames(target.prototype);
        for (const methodName of methodNames) {
            if (Reflect.hasMetadata("description", target, methodName)) {
                const description = Reflect.getMetadata("description", target, methodName);
                console.log(`  ${methodName}: ${description}`);
            }
        }
    }
}

showDescriptions(Calculator);