class Team{

    name: string;
    players: string[];

    constructor(name, players){
        this.name = name;
        this.players = players;
    }
    generateLineup(){
        return this.players.join(", ");
    }
}

const astrosPlayers = ["Altuve", "Bregman", "Correa", "Springer"];
const astros = new Team("Astros", astrosPlayers);
console.log(astros.generateLineup());
console.log(astros.name);

const blueJaysPlayers = ["Vlad", "Smoak", "Tellez", "Sogard"];
const blueJays = new Team("Blue Jays", blueJaysPlayers);
console.log(blueJays.generateLineup());
console.log(blueJays.name);




