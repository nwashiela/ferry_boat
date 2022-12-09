import {theCar} from "./theCar"

export default class Ferry {
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