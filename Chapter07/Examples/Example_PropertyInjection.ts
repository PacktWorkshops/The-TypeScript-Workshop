@Token
class Teacher {
    constructor (public id: number, public name: string) {}
}
function Token (constructor: Function) {
    constructor.prototype.token = true;
}
const teacher = new Teacher(1, "John Smith");
console.log("Does the teacher have a token? ",teacher["token"]);