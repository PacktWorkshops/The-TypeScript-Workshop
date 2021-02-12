interface Team {
    score: number;
    name: string;
}

class BasketBallGame {
    private team1: Team;
    private team2: Team;

    constructor(teamName1: string, teamName2: string) {
        this.team1 = { score: 0, name: teamName1 };
        this.team2 = { score: 0, name: teamName2 };
    }

    getScore() {
        return `${this.team1.score}:${this.team2.score}`;
    }
   
    
    updateScore(byPoints: number, updateTeam1: boolean) {
    if (updateTeam1) {
        this.team1.score += byPoints;
    } else {
        this.team2.score += byPoints;
    }
}
}

const game = new BasketBallGame("LA Lakers", "Boston Celtics");

game.updateScore(3, true);
game.updateScore(2, false);
game.updateScore(2, true);
game.updateScore(2, false);
game.updateScore(2, false);
game.updateScore(2, true);
game.updateScore(2, false);

console.log(game.getScore());
