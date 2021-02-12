function DecorateParam(target: any, propertyName: string, parameterIndex: number) {
    console.log("Target is:", target);
    console.log("Property name is:", propertyName);
    console.log("Index is:", parameterIndex);
}
class Teacher {

    public id: number;

    public name: string;

    constructor(id: number, @DecorateParam name: string) {
        this.id = id;
        this.name = name;
    }

    public getFullName( title: string, suffix: string) {
        return `${title} ${this.name}, ${suffix}`
    }
}

