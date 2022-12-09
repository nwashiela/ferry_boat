"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Ferry;
