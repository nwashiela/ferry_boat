
import Car from "./car"
import Ferry from "./ferry"

const faririr = new Ferry(25, 4)

const bmw = new Car("blue", 5)

faririr.board(bmw)
faririr.board(bmw)
faririr.board(bmw)

console.log(faririr.board(bmw))

console.log(faririr.getCarCount())
console.log(faririr.getPeopleCount())

