class Motor {
    
    private name: string
    wheels: number
    bodyType: string

    constructor(name: string, wheels: number, bodyType: string) {
        this.name = name
        this.wheels = wheels
        this.bodyType
    }

    protected getName(): string {
        return this.name
    }

    buildMotor()  {
        return {
            wheels: this.wheels,
            bodyType: this.bodyType,
            name: this.name
        }
    }


}


class Car extends Motor {
    rideHeight: number
    constructor(name: string, wheels: number, bodyType: string, rideHeight: number) {
        super(name, wheels, bodyType)
        this.rideHeight
    }

    _buildMotor() {
        return {
            ...super.buildMotor,
            rideHeight: this.rideHeight
        }
    }
}


class Truck extends Motor {
    offRoad: boolean
    constructor(name: string, wheels: number, bodyType: string, offRoad: boolean) {
        super(name, wheels, bodyType)
        this.offRoad
    } 
    
    _buildMotor()  {
        return {
            wheels: this.wheels,
            bodyType: this.bodyType,
            offRoad: this.offRoad
        }
    }
}

const car: Car = new Car('blueBird', 4, 'sudan', 14)
const truck: Truck = new Truck('blueBird', 4, 'sudan', true)

console.log(
    car, truck
)