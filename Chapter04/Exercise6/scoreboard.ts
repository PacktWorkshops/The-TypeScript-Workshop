interface IScoreboard{
    homeTeam: Team;
    awayTeam: Team;
    date: string;
}

class Scoreboard{
    homeTeam: Team;
    awayTeam: Team;
    date: string;

    constructor(args: IScoreboard){
        this.homeTeam = args.homeTeam;
        this.awayTeam = args.awayTeam;
        this.date = args.date;
    }

    scoreboardHtml(): string{
        return `
        <h1>${this.date}</h1>
        <h2>${this.homeTeam.name}</h2>
        <div>${this.homeTeam.generateLineup()}</div>
        <h2>${this.awayTeam.name}</h2>
        <div>${this.awayTeam.generateLineup()}</div>
        `;
    }
}

class Team{

    name: string;
    players: string[];

    constructor(name, players){
        this.name = name;
        this.players = players;
    }

    generateLineup(): string{
        const playersWithOrderNumber = this.players.map((player, idx) => {
            return `<div>${idx + 1} - ${player}</div>`;
        });
        return playersWithOrderNumber.join("");
    }
}

const astrosPlayers = ["Altuve", "Bregman", "Correa", "Springer"];
const astros = new Team("Astros", astrosPlayers);
//console.log(astros.generateLineup());


const blueJaysPlayers = ["Vlad", "Smoak", "Tellez", "Sogard"];
const blueJays = new Team("Blue Jays", blueJaysPlayers);
//console.log(blueJays.generateLineup());

const todaysGame = new Scoreboard({
    date: "5/24/19",
    homeTeam: astros,
    awayTeam: blueJays
});

console.log(todaysGame.scoreboardHtml());






