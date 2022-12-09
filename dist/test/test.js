"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const ferry_1 = __importDefault(require("../ferry"));
const car_1 = __importDefault(require("../car"));
describe('My function', function () {
    it('should test', function () {
        assert_1.default.equal(2, 2);
    });
    it("should return checked ", () => {
        let getToBoat = new ferry_1.default(1, 4);
        const bmw = new car_1.default("blue", 5);
        getToBoat.board(bmw);
        let actual = 5;
        let expected = undefined;
        assert_1.default.notEqual(actual, expected);
    });
});
