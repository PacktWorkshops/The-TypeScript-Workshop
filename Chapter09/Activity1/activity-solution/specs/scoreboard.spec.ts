import Scoreboard from "./../scoreboard.js";
import "jasmine";

describe("scoreboard with decorator that applies header", () => {
  it("should wrap supplied content with an h1 header", () => {
    const scoreboard = new Scoreboard("Blue Jays", "Mariners");
    expect(scoreboard.render()).toBe(`<h1>Blue Jays vs Mariners</h1>`);
  });
});
