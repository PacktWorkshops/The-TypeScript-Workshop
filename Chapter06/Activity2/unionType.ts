

// activity
// create a ork class
class Ork {
    fight():void { console.log("lets get  scrapping"); }
    battleCry():void { console.log("war war !!!!!"); }
}
// create a human class
class Human {
    fight():void { console.log("for the empire"); }
    callOfBattle():void { console.log("in the name of gray skull !!!"); }
}

// declare a union type of Ork and Human
type warFighter = Ork | Human;

// create an instance of Ork and Human
const fighter1: Ork = new Ork();
const fighter2: Human = new Human();

function letsStartAFight(fighter: warFighter):void {
    // call method common to Ork and Human
    fighter.fight();
    // instanceof type guard
    // if class instance Ork call unique method
    if(fighter instanceof Ork) {
        fighter.battleCry();
    }
    // instanceof type guard
    // if class instance human call unique method
    if(fighter instanceof Human) {
        fighter.callOfBattle();
    }
}


// call letsStartAFight function with Ork and Human instance
letsStartAFight(fighter1);
letsStartAFight(fighter2);


if (fighter1 instanceof Ork) // returns a boolean
{ console.log("am I green") } 


