var Team = /** @class */ (function () {
    function Team(players) {
        this.players = players;
    }
    Team.prototype.generateLineup = function () {
        var playersWithOrderNumber = this.players.map(function (player, idx) {
            return "<div>" + (idx + 1) + " - " + player + "</div>";
        });
        return playersWithOrderNumber.join("");
    };
    return Team;
}());
var astrosPlayers = ["Altuve", "Bregman", "Correa", "Springer"];
var astros = new Team(astrosPlayers);
console.log(astros.generateLineup());
var blueJaysPlayers = ["Vlad", "Smoak", "Tellez", "Sogard"];
var blueJays = new Team(blueJaysPlayers);
console.log(blueJays.generateLineup());
