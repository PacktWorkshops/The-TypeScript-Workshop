import "reflect-metadata";

class Teacher {

    @Description("This is the id of the teacher")
    public id: number;

    @Description("This is the name of the teacher")
    public name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

function Description(message: string) {
    return function (target: any, propertyKey: string) {
        Reflect.defineMetadata("description", message, target, propertyKey)
    }
}

function showDescriptions (target: any) {
    for (const key in target) {
        if (Reflect.hasMetadata("description", target, key)) {
            const description = Reflect.getMetadata("description", target, key);
            console.log(`  ${key}: ${description}`);
        }
    }
}

//////////////////

const teacher = new Teacher(1, "John Smith");
showDescriptions(teacher);

