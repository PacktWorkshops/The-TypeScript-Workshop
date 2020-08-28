// basic enum
var ActionPerson;
(function (ActionPerson) {
    ActionPerson[ActionPerson["WakeUp"] = 0] = "WakeUp";
    ActionPerson[ActionPerson["Sleep"] = 1] = "Sleep";
    ActionPerson[ActionPerson["Run"] = 2] = "Run";
    ActionPerson[ActionPerson["Eat"] = 3] = "Eat";
})(ActionPerson || (ActionPerson = {}));
console.log(ActionPerson);
var newPerson = {
    action: ActionPerson.Run,
    name: 'Action Jackson'
};
function whichPerson(person) {
    console.log(person);
    if (person.action === 2) {
        console.log("Hi action Jackson");
    }
}
whichPerson(newPerson);
