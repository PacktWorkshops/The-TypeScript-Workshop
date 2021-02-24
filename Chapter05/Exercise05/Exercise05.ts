class Phone {
    powerButton: boolean;
    mic: boolean;
    speaker: boolean;
    serialNumber: string;
    powerOn: boolean = false;
    restart: boolean = false;
    
    constructor(
    powerButton: boolean,
    mic: boolean,
    speaker: boolean,
    serialNumber: string,
    ) {
    
    this.powerButton = powerButton
    this.mic = mic;
    this.speaker = speaker;
    this.serialNumber = serialNumber;
    }
    
    
    togglePower(): void {
    this.powerOn ? this.powerOn = false : this.powerOn = true
    }
    
    
    reboot(): void {
    this.restart = true
    }
}
// step 2
class Smart extends Phone {
    touchScreen: boolean = true;
    fourG: boolean = true;
    
    constructor(serial: string) {
    super(true, true, true, serial)
    }
    
    playVideo(fileName: string): boolean {
    return true
    }
    }
// step 3
class Standard extends Phone {
    dialPad: boolean = true;
    threeG: boolean = true;
    
    constructor(serial: string) {
    super(true, true, true, serial)
    }
    
    
    NumberToLetter(number: number): string {
    const letter = ['a', 'b', 'c', 'd']
    return letter[number]
    }
    }
// step 4
const smartPhone = new Smart('12345678')
const standardPhone = new Standard('67890')

// step 5
console.log(smartPhone.playVideo('videoOne'))
console.log(standardPhone.NumberToLetter(3))
console.log(smartPhone)
console.log(standardPhone)
        
    