interface theCar{
  colour: string;
  passengerCount: number;
 
}

// interface boarding{
//   board(): string;
// }

export default class Car  {
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


export class Ferry  {
  // car = new Array();
  
  public  people_count: number ;
  public  car_count: number ;
  private people: number = 0
  private cars: number = 0

  constructor(countP: number, countCar: number) {
    // this.car = []
    this.people_count = countP;
    this.car_count = countCar;
}

board(carr : theCar ): string{
  //check if true / not false
const spaceForCars = this.cars+1  <= this.car_count
const spaceForPeople = this.people + carr.passengerCount <= this.people_count  

console.log(spaceForPeople,spaceForCars)
if(spaceForCars && spaceForPeople){
  this.people += carr.passengerCount;
  this.cars++

  return "accepted"
} 
return "rejected"
}

getPeopleCount(): number{
return this.people
//   let counted = 0
// for(let i =0; i < this.car.length; i++){
//   counted += this.car[i].passengerCount 

// }
// return counted
}

getCarCount(): number{
return this.car_count
}
}

const faririr = new Ferry(25, 4)

const bmw = new Car("blue", 9)


faririr.board(bmw)
faririr.board(bmw)
faririr.board(bmw)

console.log(faririr.board(bmw))

console.log(faririr.getCarCount())
console.log(faririr.getPeopleCount())

// console.log(faririr.getCarCount())
// console.log(faririr.getPeopleCount())

// let suzuki = new Car("red",5) 
// let lasiz = new Car("red",5) 

// faririr.board(suzuki)
// faririr.board(lasiz)

// console.log(faririr.getCar_count())
// console.log(faririr.getPeopleCount())

// //get people
