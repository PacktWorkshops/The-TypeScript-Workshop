"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scoreboard_js_1 = require("./../scoreboard.js");
require("jasmine");
describe("scoreboard with decorator that applies header", function () {
    it("should wrap supplied content with an h1 header", function () {
        var scoreboard = new scoreboard_js_1.default("Blue Jays", "Mariners");
        expect(scoreboard.render()).toBe("<h1>Blue Jays vs Mariners</h1>");
    });
});
