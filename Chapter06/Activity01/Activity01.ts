type Motor = {
    color: string;
    doors: number;
    wheels: number;
    fourWheelDrive: boolean;
}
type Truck = {
    doubleCab: boolean;
    winch: boolean;
} 
type PickUpTruck = Motor & Truck;
function TruckBuilder (truck: PickUpTruck): PickUpTruck {
    return truck
}

const pickUpTruck: PickUpTruck = {
    color: 'red',
    doors: 4,
    doubleCab: true,
    wheels: 4,
    fourWheelDrive: true,
    winch: true
}

console.log (
    TruckBuilder(pickUpTruck)
)

