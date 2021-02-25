interface PackageStatus { 
    [status: string]: boolean;}
    type Package = {
        packageStatus: PackageStatus,
        barcode:  number,
        weight: number
    }
   
    class PackageProcess {
        
        pack: Package
    
        constructor(pack: Package) {
            this.pack = pack;
        }
        
        Status () {
            return this.pack.packageStatus;
        }
        UpdateStatus(status: string, state: boolean) {
            this.pack.packageStatus[status] = state;
            return this.Status();}
    }
    
    const pack: Package = {
        packageStatus: {"shipped": false, "packed": true, "delivered": true},
        barcode: 123456,
        weight: 28 
    };
    const processPack = new PackageProcess(pack)
    console.log(processPack.Status());
    console.log(
        processPack.UpdateStatus("shipped", true)
    );
                