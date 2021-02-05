interface ITeam{
    name: string;
    players: string[];
}

class Team{

    name: string;
    players: string[];

    constructor(args: ITeam){
        this.name = args.name;
        this.players = args.players;
    }

    generateLineup(){
        return this.players.join(", ");
    }
}


const astrosPlayers = ["Altuve", "Bregman", "Correa", "Springer"];
const astros = new Team({
    name: "Astros",
    players: astrosPlayers
});
console.log(astros.generateLineup());
console.log(astros.name);

const blueJaysPlayers = ["Vlad", "Smoak", "Tellez", "Sogard"];
const blueJays = new Team({
    name: "Blue Jays",
    players: blueJaysPlayers
});
console.log(blueJays.generateLineup());
console.log(blueJays.name);





