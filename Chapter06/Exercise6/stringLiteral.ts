// string literal
type Action = 'print';

// a function that takes the action string type as an argument and returns the action type
function takeAction(action: Action): Action {
    return action;
}

// argument underlined with red 
takeAction("drive") //?
// error Argument of type '"drive"' is not assignable to parameter of type '"print"'.

// correct string
takeAction("print") //?

// number literal
type Pages = 5;

// new function that takes string and number literal
function takeActionTwo(action: Action, pages: Pages){
    return {action, pages}
}

// call out new function
takeActionTwo("print", 123457)

// call out new function
takeActionTwo("print", 5) //? 