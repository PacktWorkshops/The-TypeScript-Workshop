"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var heading = function (target, propertyKey, descriptor) {
    var originalFunction = descriptor.value;
    descriptor.value = function (request) {
        var bindedOriginalFunction = originalFunction.bind(this);
        var result = bindedOriginalFunction(request);
        return "<h1>" + result + "</h1>";
    };
    return descriptor;
};
var Scoreboard = /** @class */ (function () {
    function Scoreboard(homeTeam, awayTeam) {
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
    }
    Scoreboard.prototype.render = function () {
        return this.homeTeam + " vs " + this.awayTeam;
    };
    __decorate([
        heading
    ], Scoreboard.prototype, "render", null);
    return Scoreboard;
}());
exports.default = Scoreboard;
var scoreboard = new Scoreboard("Blue Jays", "Mariners");
scoreboard.render(); //?
