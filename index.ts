interface theCar{
  colour: string;
  passengerCount: number;
 
}

// interface boarding{
//   board(): string;
// }

export default class Car implements theCar {
    public readonly colour: string ;
    public readonly passengerCount: number ;
   
    constructor(thecolor: string, thepassengerCount: number) {
        this.colour = thecolor;
        this.passengerCount = thepassengerCount;
    }

    // board(count: number = 7){
    //   console.log(this.colour + "counter is " + count)
    // }
   
  }

let aCar = new Car("black", 8)
// aCar.board()
console.log(aCar);



export class Ferry implements theCar {
  car = []
  public  colour: string ;
  public  passengerCount: number ;

  constructor(thecolor: string, thepassengerCount: number) {
    this.car = []
    this.colour = thecolor;
    this.passengerCount = thepassengerCount;
}

board(): any {
  if(this.car.length != 54){
    this.car.push()
    return "accepted"
  }else{
    return "rejected"
  }

}

getPeopleCount(){
  if(this.car.length){
    return this.passengerCount++
  }

}

getCarCount(){
return this.car.length
}
}


