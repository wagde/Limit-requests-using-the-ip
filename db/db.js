const { carAddedSucc, carAddedFail, carDeletedSucc, carDeletedFail, carGetFail, alreadyExist } = require('../res_massges/response_massages');
class ParkingDb {
    constructor(size) {
        this.parkingCollection = [...Array(Number(size))].map((park, slot) => { return { slot: slot + 1, carNumber: "" } })
    }
    addCar(carNumber) {
        if (!this.getCar(carNumber,undefined,true)) {
            for (let carPark of this.parkingCollection) {
                if (!carPark.carNumber) {
                    carPark.carNumber = carNumber;
                    return `${carAddedSucc} ${carPark.slot}`;
                }
            }
            return carAddedFail;

        }
        else {
            return alreadyExist;
        }
    }

    deleteCar(slot) {
        const {parkingCollection}=this;
        if (isNaN(Number(slot)) || !(parkingCollection[slot - 1] && parkingCollection[slot - 1].carNumber)) return carDeletedFail
        parkingCollection[slot - 1]['carNumber'] = "";
        return carDeletedSucc;
    }

    getCar(carNumber, slot, ifExist = false) {
        const multiCheck = carNumber !== undefined && slot && true;
        for (let carPark of this.parkingCollection) {
            if (multiCheck) {
                if (carPark.carNumber === carNumber && slot === carPark.slot) {
                    return carPark;
                }
            }
            else {
                if (carPark.carNumber === carNumber || slot === carPark.slot) {
                    return carPark;
                }
            }
        }
        return !ifExist && carGetFail;
    }
}

module.exports = new ParkingDb(process.env.SIZE || 10);