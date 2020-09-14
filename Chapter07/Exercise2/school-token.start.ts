class Teacher {
    constructor (public id: number, public name: string) {}
    // teacher specific code
}

const teacher = new Teacher(1, "John Smith");
console.log("Do we have a token:", teacher["token"]);
console.log("Do we have a token property: ", teacher.hasOwnProperty("token"));