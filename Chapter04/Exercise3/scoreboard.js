var Team = /** @class */ (function () {
    function Team(name, players) {
        this.name = name;
        this.players = players;
    }
    Team.prototype.generateLineup = function () {
        return this.players.join(", ");
    };
    return Team;
}());
var astrosPlayers = ["Altuve", "Bregman", "Correa", "Springer"];
var astros = new Team("Astros", astrosPlayers);
console.log(astros.generateLineup());
console.log(astros.name);
var blueJaysPlayers = ["Vlad", "Smoak", "Tellez", "Sogard"];
var blueJays = new Team("Blue Jays", blueJaysPlayers);
console.log(blueJays.generateLineup());
console.log(blueJays.name);
