// example Car class
class Car {
    
    private status: string = 'stopped'
    
    readonly wheels: number = 4
    readonly sideMirror: number = 2
    readonly indicators: number = 4
    readonly wipers: number = 3
    
    height: number
    width: number
    length: number
    
    fwd: boolean
    capacity: number
    
    Start () {
        if (this.status === 'stopped') {this.status = 'running'}
    }
    Stop () {
        if(this.status === 'running') {this.status = 'stopped'}
    }
    GetStatus() {
        return this.status
    }
}

// step 1 
class Suv extends Car {
    
    height = 5
    width = 4
    length = 7
    readonly fwd: false
    capacity: 7
    autoDoor: string = 'close'

    GetStatus() {
        return `status: ${super.GetStatus()} autoDoor: ${this.autoDoor}`

    }

    ToggleDoors() {
        if(this.autoDoor === 'close') {
            this.autoDoor = 'open'
        } else {
            this.autoDoor = 'close'
        }
    }
}

// step 2
class Truck extends  Car {
    height = 5
    width = 4
    length = 15
    readonly fwd: true
    capacity: 2
    load: number 
    tray: string = 'down'

    Start(){
        if(super.GetStatus() === 'stopped') {
            super.Start()
        }
    }

    ToggleTray() {
        if(this.tray === 'down') {
            this.tray = 'up'
        } else {
            this.tray = 'down'
        }
    }
}

// step 3
const subSuv = new Suv()
const dumpTruck = new Truck()


// step 4
// subSuv
subSuv.Start()
subSuv.ToggleDoors()
subSuv.GetStatus()
console.log(subSuv)

dumpTruck.Start()
dumpTruck.GetStatus()
dumpTruck.ToggleTray()
console.log(dumpTruck)