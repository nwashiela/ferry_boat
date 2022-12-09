import assert from 'assert';
import Ferry from "../ferry"
import Car from "../car"


describe('My function', function() {
    it('should test', function() {
        assert.equal(2, 2);
    });

    it("should return number of passengers  ", () => {
       
       let bmw = new Car("black", 5)
       
        let actual = 5
        let expected = bmw.passengerCount

        assert.equal(actual, expected)
    })

    it("should return undefined if passengers are over the maximu number of farry boat ", () => {
        let getToBoat = new Ferry(1,4)

        const bmw = new Car("blue", 5)
        getToBoat.board(bmw)

        let actual = 5
        let expected = undefined

        assert.notEqual(actual, expected)
    })
    it("should return undefined if cars are over the maximu number of farry boat ", () => {
        let getToBoat = new Ferry(1,4)

        const bmw = new Car("blue", 1)
        getToBoat.board(bmw)
        const suzuki = new Car("blue", 1)
        getToBoat.board(suzuki)
        const peace = new Car("blue", 1)
        getToBoat.board(peace)
        

        let actual = 3
        let expected = undefined

        assert.notEqual(actual, expected)
    })

    it("should count passengers ", () => {
        let getToBoat = new Ferry(15,4)

        const bmw = new Car("black", 5)
        getToBoat.board(bmw)
        const suzuki = new Car("black", 5)
        getToBoat.board(suzuki)
        const ford = new Car("black", 5)
        getToBoat.board(ford)

         let actual = 15
         let expected = getToBoat.getPeopleCount()
        console.log(actual, expected)
         assert.equal(actual, expected)
     })

     it("should count passengers ", () => {
        let getToBoat = new Ferry(15,4)

        const bmw = new Car("black", 5)
        getToBoat.board(bmw)
        const suzuki = new Car("black", 5)
        getToBoat.board(suzuki)
        const ford = new Car("black", 5)
        getToBoat.board(ford)

         let actual = 4
         let expected = getToBoat.getCarCount()
        console.log(actual, expected)
         assert.equal(actual, expected)
     })
});