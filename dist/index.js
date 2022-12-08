"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ferry = void 0;
// interface boarding{
//   board(): string;
// }
class Car {
    constructor(thecolor, thepassengerCount) {
        this.colour = thecolor;
        this.passengerCount = thepassengerCount;
    }
}
exports.default = Car;
let aCar = new Car("black", 8);
// aCar.board()
console.log(aCar);
class Ferry {
    constructor(countP, countCar) {
        this.people = 0;
        this.cars = 0;
        // this.car = []
        this.people_count = countP;
        this.car_count = countCar;
    }
    board(carr) {
        //check if true / not false
        const spaceForCars = this.cars + 1 <= this.car_count;
        const spaceForPeople = this.people + carr.passengerCount <= this.people_count;
        console.log(spaceForPeople, spaceForCars);
        if (spaceForCars && spaceForPeople) {
            this.people += carr.passengerCount;
            this.cars++;
            return "accepted";
        }
        return "rejected";
    }
    getPeopleCount() {
        return this.people;
        //   let counted = 0
        // for(let i =0; i < this.car.length; i++){
        //   counted += this.car[i].passengerCount 
        // }
        // return counted
    }
    getCarCount() {
        return this.car_count;
    }
}
exports.Ferry = Ferry;
const faririr = new Ferry(25, 4);
const bmw = new Car("blue", 9);
faririr.board(bmw);
faririr.board(bmw);
faririr.board(bmw);
console.log(faririr.board(bmw));
console.log(faririr.getCarCount());
console.log(faririr.getPeopleCount());
// console.log(faririr.getCarCount())
// console.log(faririr.getPeopleCount())
// let suzuki = new Car("red",5) 
// let lasiz = new Car("red",5) 
// faririr.board(suzuki)
// faririr.board(lasiz)
// console.log(faririr.getCar_count())
// console.log(faririr.getPeopleCount())
// //get people
