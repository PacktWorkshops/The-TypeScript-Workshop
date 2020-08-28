// activity
// create a ork class
var Ork = /** @class */ (function () {
    function Ork() {
    }
    Ork.prototype.fight = function () { console.log("lets get  scrapping"); };
    Ork.prototype.battleCry = function () { console.log("war war !!!!!"); };
    return Ork;
}());
// create a human class
var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.fight = function () { console.log("for the empire"); };
    Human.prototype.callOfBattle = function () { console.log("in the name of gray skull !!!"); };
    return Human;
}());
// create an instance of Ork and Human
var fighter1 = new Ork();
var fighter2 = new Human();
function letsStartAFight(fighter) {
    // call method common to Ork and Human
    fighter.fight();
    // instanceof type guard
    // if class instance Ork call unique method
    if (fighter instanceof Ork) {
        fighter.battleCry();
    }
    // instanceof type guard
    // if class instance human call unique method
    if (fighter instanceof Human) {
        fighter.callOfBattle();
    }
}
// call letsStartAFight function with Ork and Human instance
letsStartAFight(fighter1);
letsStartAFight(fighter2);
if (fighter1 instanceof Ork) // returns a boolean
 {
    console.log("am I green");
}
