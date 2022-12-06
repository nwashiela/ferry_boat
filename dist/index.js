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
    constructor(thecolor, thepassengerCount) {
        this.car = new Array();
        this.car = [];
        this.colour = thecolor;
        this.passengerCount = thepassengerCount;
    }
    board(cars) {
        if (this.car.length != 54) {
            this.car.push(cars);
            return "accepted";
        }
        else {
            return "rejected";
        }
    }
    getPeopleCount() {
        let counted = 0;
        for (let i = 0; i < this.car.length; i++) {
            counted += this.car[i].passengerCount;
        }
        return counted;
        // if(this.car.length){
        //   return this.passengerCount++
        // }
    }
    getCarCount() {
        return this.car.length;
    }
}
exports.Ferry = Ferry;
let bmw = new Car("blue", 5);
let suzuki = new Car("red", 5);
let faririr = new Ferry("green", 3);
faririr.board(bmw);
faririr.board(suzuki);
console.log(faririr.getCarCount());
console.log(faririr.getPeopleCount());
//get people
