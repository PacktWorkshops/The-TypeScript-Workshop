// create robot interface
interface IRobotType {
    name: string;
    serial: number;
    primeDirective: string
}

// make T read only 
type ReadBot<T> = {
    readonly [P in keyof T]: T[P];
}
// make T property optional 
type OptionalBot<T> = {
    [P in keyof T] ?: T[P]
}
// make pick some property from T
type RobotPick<T, K extends keyof T> = {
    [P in K ]: T[P]
}
// read only bot
const readRbot: ReadBot<IRobotType> = {
    name: '55',
    serial:  55555,
    primeDirective: 'Kill'
}
// bot with only name and primeDirective
const robotPick: RobotPick<IRobotType, 'name'|'primeDirective'> = {
    name: '65',
    primeDirective: 'help some humans'
} 
// bot with optional pops
const optionBot: OptionalBot<IRobotType> = {
    name: '66',
    serial: 77777
}

console.log(readRbot)
console.log(robotPick)
console.log(optionBot)