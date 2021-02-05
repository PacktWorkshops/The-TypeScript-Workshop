class Team{

    name: string;

    constructor(name){
        this.name = name;
    }
    generateLineup(){
        return "Lineup will go here...";
    }
}


const astros = new Team("Astros");
//console.log(astros.generateLineup());
console.log(astros.name);

const blueJays = new Team("Blue Jays");
//console.log(blueJays.generateLineup());
console.log(blueJays.name);