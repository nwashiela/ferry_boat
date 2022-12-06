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
        this.car = [];
        this.car = [];
        this.colour = thecolor;
        this.passengerCount = thepassengerCount;
    }
    board() {
        if (this.car.length != 54) {
            this.car.push();
            return "accepted";
        }
        else {
            return "rejected";
        }
    }
    getPeopleCount() {
        if (this.car.length) {
            return this.passengerCount++;
        }
    }
    getCarCount() {
        return this.car.length;
    }
}
exports.Ferry = Ferry;
