var Team = /** @class */ (function () {
    function Team(args) {
        this.name = args.name;
        this.players = args.players;
    }
    Team.prototype.generateLineup = function () {
        return this.players.join(", ");
    };
    return Team;
}());
var astrosPlayers = ["Altuve", "Bregman", "Correa", "Springer"];
var astros = new Team({
    name: "Astros",
    players: astrosPlayers
});
console.log(astros.generateLineup());
console.log(astros.name);
var blueJaysPlayers = ["Vlad", "Smoak", "Tellez", "Sogard"];
var blueJays = new Team({
    name: "Blue Jays",
    players: blueJaysPlayers
});
console.log(blueJays.generateLineup());
console.log(blueJays.name);
