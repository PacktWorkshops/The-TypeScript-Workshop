// basic enum
enum ActionPerson  {
    WakeUp,
    Sleep,
    Run,
    Eat
}

// console out enum show default mapping
console.log(ActionPerson)

// use enum as a types
type RunningPerson = {
    action: ActionPerson,
    name: string
}

/*
    declare newPerson cast as RunningPerson type
    set action type to ActionPerson enum
*/
const newPerson: RunningPerson = {
    action: ActionPerson.Run,
    name: 'Action Jackson'
}


function whichPerson(person: RunningPerson): void {
    console.log(person)
    if(person.action === 2) {
        console.log("Hi action Jackson")
    }
}

whichPerson(newPerson);