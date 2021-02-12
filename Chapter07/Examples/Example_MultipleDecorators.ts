function First () {
    console.log("Generating first decorator")
    return function (constructor: Function) {
        console.log("Applying first decorator")
    }
}
function Second () {
    console.log("Generating second decorator")
    return function (constructor: Function) {
        console.log("Applying second decorator")
    }
}
@First()
@Second()
class Target {}
