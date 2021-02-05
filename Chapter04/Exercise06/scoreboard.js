var Scoreboard = /** @class */ (function () {
    function Scoreboard(args) {
        this.homeTeam = args.homeTeam;
        this.awayTeam = args.awayTeam;
        this.date = args.date;
    }
    Scoreboard.prototype.scoreboardHtml = function () {
        return "\n        <h1>" + this.date + "</h1>\n        <h2>" + this.homeTeam.name + "</h2>\n        <div>" + this.homeTeam.generateLineup() + "</div>\n        <h2>" + this.awayTeam.name + "</h2>\n        <div>" + this.awayTeam.generateLineup() + "</div>\n        ";
    };
    return Scoreboard;
}());
var Team = /** @class */ (function () {
    function Team(name, players) {
        this.name = name;
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
var astros = new Team("Astros", astrosPlayers);
//console.log(astros.generateLineup());
var blueJaysPlayers = ["Vlad", "Smoak", "Tellez", "Sogard"];
var blueJays = new Team("Blue Jays", blueJaysPlayers);
//console.log(blueJays.generateLineup());
var todaysGame = new Scoreboard({
    date: "5/24/19",
    homeTeam: astros,
    awayTeam: blueJays
});
console.log(todaysGame.scoreboardHtml());
