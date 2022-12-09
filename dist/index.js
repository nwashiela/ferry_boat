"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = __importDefault(require("./car"));
const ferry_1 = __importDefault(require("./ferry"));
const faririr = new ferry_1.default(25, 4);
const bmw = new car_1.default("blue", 5);
faririr.board(bmw);
faririr.board(bmw);
faririr.board(bmw);
console.log(faririr.board(bmw));
console.log(faririr.getCarCount());
console.log(faririr.getPeopleCount());
