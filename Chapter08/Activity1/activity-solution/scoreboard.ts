const heading = (target, propertyKey, descriptor) => {
  const originalFunction = descriptor.value;

  descriptor.value = function(request) {
    const bindedOriginalFunction = originalFunction.bind(this);
    const result = bindedOriginalFunction(request);
    return `<h1>${result}</h1>`;
  };

  return descriptor;
};

export default class Scoreboard {
  homeTeam: String;
  awayTeam: String;

  constructor(homeTeam, awayTeam) {
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
  }

  @heading
  render() {
    return `${this.homeTeam} vs ${this.awayTeam}`;
  }
}

const scoreboard = new Scoreboard("Blue Jays", "Mariners");
scoreboard.render(); //?
