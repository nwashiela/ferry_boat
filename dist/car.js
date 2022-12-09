"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
