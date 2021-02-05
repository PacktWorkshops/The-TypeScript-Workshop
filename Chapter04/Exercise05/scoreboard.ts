class Team{

    players: string[];

    constructor(players){
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
const astros = new Team(astrosPlayers);
console.log(astros.generateLineup());


const blueJaysPlayers = ["Vlad", "Smoak", "Tellez", "Sogard"];
const blueJays = new Team(blueJaysPlayers);
console.log(blueJays.generateLineup());






