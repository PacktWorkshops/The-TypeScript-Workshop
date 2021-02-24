// basic enum
var Switch;
(function (Switch) {
    Switch[Switch["On"] = 0] = "On";
    Switch[Switch["Off"] = 1] = "Off";
})(Switch || (Switch = {}));
console.log(Switch);
var livingRoomSwitch = {
    room: 'living room',
    "switch": Switch.On
};
function roomStatus(Switch, switchInstance) {
    if (switchInstance["switch"] in Switch) {
        console.log("switch has on off option");
    }
    else {
        console.log("bad switch");
    }
    if (switchInstance["switch"]) {
        console.log("light is off");
    }
    if (!switchInstance["switch"]) {
        console.log("light is on");
    }
}
roomStatus(Switch, livingRoomSwitch);
