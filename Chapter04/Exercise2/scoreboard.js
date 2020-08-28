var Team = /** @class */ (function () {
    function Team(name) {
        this.name = name;
    }
    Team.prototype.generateLineup = function () {
        return "Lineup will go here...";
    };
    return Team;
}());
var astros = new Team("Astros");
//console.log(astros.generateLineup());
console.log(astros.name);
var blueJays = new Team("Blue Jays");
//console.log(blueJays.generateLineup());
console.log(blueJays.name);
