class ParkingDb {
    constructor(size) {
        this.parkingCollection = [...Array(Number(size))].map((park, slot) => { return { slot, carNumber: "" } })
    }
    addCar(carNumber) {
        for (let carPark of this.parkingCollection) {
            if (!carPark.carNumber) {
                carPark.carNumber = carNumber;
                return `the car has been added to slot number ${carPark.slot}`;
            }
        }
       return `there is no place to park`;

    }
    deleteCar(carNumber, slot) {
        for (let carPark of this.parkingCollection) {
            if (carPark.carNumber === carNumber || slot === carPark.slot) {
                carPark.carNumber="";
                return true;
            }
        }
        return false;
    }

    getCar(carNumber, slot) {
        for (let carPark of this.parkingCollection) {
            if (carPark.carNumber === carNumber || slot === carPark.slot) {
                return carPark;
            }
        }
        return false;
    }
}

module.exports = new ParkingDb(process.env.SIZE || 10);