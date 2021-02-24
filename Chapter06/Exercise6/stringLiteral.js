// create a gate class
var GateControl = /** @class */ (function () {
    function GateControl() {
    }
    // operate the front gate
    GateControl.prototype.frontGate = function (gate) {
        // type guard using sting literal
        if (gate === "open") {
            console.log("front gate is open !!!");
            return "true";
        }
        else {
            console.log("front gate is closed");
            return "false";
        }
    };
    return GateControl;
}());
// instance of Gate class
var gateControl = new GateControl;
// user returning string literal 
if (gateControl.frontGate("open") === 'true') {
    console.log("drive your car in !!!");
}
else {
    console.log("call the front desk");
}
