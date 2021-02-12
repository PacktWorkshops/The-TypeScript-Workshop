function DecorateMethod(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    console.log("Target is:", target);
    console.log("Property name is:", propertyName);
    console.log("Descriptor is:", descriptor);
}
class Teacher {
    constructor (public name: string){}

    private _title: string = "";

    public get title() { 
        return this._title;
    }
    
    public set title(value: string) {
        this._title = value;
    }
    @DecorateMethod
    public teach() {
        console.log(`${this.name} is teaching`)
    }
}
