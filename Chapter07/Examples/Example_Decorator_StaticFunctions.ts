function DecorateMethod(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    console.log("Target is:", target);
    console.log("Property name is:", propertyName);
    console.log("Descriptor is:", descriptor);
}


class Teacher {
    constructor (public name: string){}

    private _title: string = "";

    @DecorateMethod
    public static showUsage() {
        console.log("This is the Teacher class")
    }

}

const teacher = new Teacher("John Smith");
