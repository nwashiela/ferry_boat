
export default class Car  {
    public readonly colour: string ;
    public readonly passengerCount: number ;
   
    constructor(thecolor: string, thepassengerCount: number) {
        this.colour = thecolor;
        this.passengerCount = thepassengerCount;
    }
 
  }

let aCar = new Car("black", 8)

// aCar.board()
console.log(aCar);

