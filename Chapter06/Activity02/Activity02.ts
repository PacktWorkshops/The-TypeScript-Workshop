type LandPack = {
    height: number,
    weight: number,
    type: "land",
    label?: string };

type AirPack = {
    height: number,
    weight: number,
    type : "air",
    label?: string };

    type ComboPack = LandPack | AirPack
    class Shipping {
        Process(pack: ComboPack) {
            // check package type
            if(pack.type === "land") {
                return this.ToLand(pack);
            } else {
                return this.ToAir(pack);
            }
        }
        ToAir(pack: AirPack): AirPack {
            pack.label = "air cargo"
            return pack;
        }
        ToLand(pack: LandPack): LandPack {
            pack.label = "land cargo"
            return pack;
        }
    }
    const airPack: AirPack = {
        height: 5,
        weight: 10,
        type: "air",
    };
    
    const landPack: LandPack = {
        height: 5,
        weight: 10,
        type: "land",
    };
    
    const shipping = new Shipping;
    
    console.log(
        shipping.Process(airPack)
    );
    
    console.log(
        shipping.Process(landPack)
    );
        