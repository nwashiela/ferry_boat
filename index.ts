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
  car: Array<theCar> = new Array();
  public  colour: string ;
  public  passengerCount: number ;

  constructor(thecolor: string, thepassengerCount: number) {
    this.car = []
    this.colour = thecolor;
    this.passengerCount = thepassengerCount;
}

board(cars : theCar ): string {
  if(this.car.length != 54){
    this.car.push(cars)
    return "accepted"
  }else{
    return "rejected"
  }

}

getPeopleCount(): number{

  let counted = 0
for(let i =0; i < this.car.length; i++){
  counted += this.car[i].passengerCount 

}
return counted

  // if(this.car.length){
  //   return this.passengerCount++
  // }

}

getCarCount(){
return this.car.length
}


}
let bmw = new Car("blue", 5)
let suzuki = new Car("red",5)


let faririr = new Ferry("green", 3)

faririr.board(bmw)
faririr.board(suzuki)
console.log(faririr.getCarCount())
console.log(faririr.getPeopleCount())

//get people
