function DecorateProperty(message: string) {
    return function (target: any, propertyKey: string) {
        console.log(`Decorated ${target.constructor.name}.${propertyKey} with '${message}'`);
    }
}
class Teacher {

    @DecorateProperty("ID")
    public id: number;
    @DecorateProperty("NAME")
    public name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}