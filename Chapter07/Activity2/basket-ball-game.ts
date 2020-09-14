import 'reflect-metadata';

/**
 * Decorators
 */
type Constructable = { new (...args: any[]): {} };

function Authenticate(permission: string) {
    return function <T extends Constructable>(constructor: T) {
        const wrappedConstructor: any = function (...args: any[]) {
            if (Reflect.hasMetadata("permissions", wrappedConstructor)) {
                const permissions = Reflect.getMetadata("permissions", wrappedConstructor) as string[];
                if (!permissions.includes(permission)) {
                    throw Error(`Permission ${permission} not present`);
                }
            }
    
            const result = new constructor(...args);
            return result;
        };
        wrappedConstructor.prototype = constructor.prototype;
        return wrappedConstructor;
    };
}

function MeasureDuration() {
    return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
        if (descriptor.value) {
            const original = descriptor.value;
            descriptor.value = function (...args: any[]) {
                const start = Date.now();
                const result = original.apply(this, args);
                const end = Date.now();
                const duration = end-start;
                if (Reflect.hasMetadata("durations", target, propertyName)) {
                    const existing = Reflect.getMetadata("durations", target, propertyName) as number[];
                    Reflect.defineMetadata("durations", existing.concat(duration), target, propertyName);
                } else {
                    Reflect.defineMetadata("durations", [duration], target, propertyName)
                }
                return result;
            }
        }
    }
}

function Audit(message: string) {
    return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
        if (descriptor.value) {
            const original = descriptor.value;
            descriptor.value = function (...args: any[]) {
                const result = original.apply(this, args);
                console.log(`[AUDIT] ${message} (${propertyName}) called with arguments:`)
                console.log("[AUDIT]", args);
                console.log("[AUDIT] and returned result:")
                console.log("[AUDIT]", result);
                return result;
            }
        }
    }
}

function OneTwoThree(target: any, propertyKey: string, parameterIndex: number) {
    if (Reflect.hasMetadata("one-two-three", target, propertyKey)) {
        const existing = Reflect.getMetadata("one-two-three", target, propertyKey) as number[];
        Reflect.defineMetadata("one-two-three", existing.concat(parameterIndex), target, propertyKey);
    } else {
        Reflect.defineMetadata("one-two-three", [parameterIndex], target, propertyKey)
    }
}

function Validate() {
    return function (target: any, propertyKey:string, descriptor: PropertyDescriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args: any[]) {
            // validate parameters
            if (Reflect.hasMetadata("one-two-three", target, propertyKey)) {
                const markedParams = Reflect.getMetadata("one-two-three", target, propertyKey) as number[];
                for (const marked of markedParams) {
                    if (![1,2,3].includes(args[marked])) {
                        throw Error(`The parameter at position ${marked} can only be 1, 2 or 3`);
                    }
                }
            }
            return original.apply(this, args);
        }
    }
}

/**
 * Basketball game code
 */

interface Team {
    score: number;
    name: string;
}

@Authenticate("canUpdateScore")
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

    @MeasureDuration()
    @Audit("Updated score")
    @Validate()
    updateScore(@OneTwoThree byPoints: number, updateTeam1: boolean) {
        if (updateTeam1) {
            this.team1.score += byPoints;
        } else {
            this.team2.score += byPoints;
        }
    }
}

Reflect.defineMetadata("permissions", ["canUpdateScore"], BasketBallGame);

/**
 * Usage
 */

const game = new BasketBallGame("LA Lakers", "Boston Celtics");

game.updateScore(3, true);
game.updateScore(2, false);
game.updateScore(2, true);
game.updateScore(2, false);
game.updateScore(2, false);
game.updateScore(2, true);
game.updateScore(2, false);

console.log(game.getScore());