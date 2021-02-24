// basic enum
enum Switch {
    On,
    Off
}

console.log(Switch)

type mySwitch = {
    room: string,
    switch: Switch
}

const livingRoomSwitch: mySwitch = {
    room: 'living room',
    switch: Switch.On
}

function roomStatus(Switch, switchInstance: mySwitch) {
   if (switchInstance.switch in Switch) {
    console.log("switch has on off option")
   } else {
       console.log("bad switch")
   }
   if(switchInstance.switch) {
       console.log("light is off")
   } 
   if(!switchInstance.switch) {
       console.log("light is on")
   }

}

roomStatus(Switch, livingRoomSwitch);