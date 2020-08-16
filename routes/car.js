const express = require('express');
const router = express.Router();
const parkDb = require('../db/db');
const { inputNotFound, carAddedSucc, carAddedFail, carDeletedSucc, carDeletedFail,carGetFail ,alreadyExist} = require('../res_massges/response_massages');

router.post('/add_car', function (req, res) {
  const carNumber = req.body && req.body.car_number;
  if (carNumber!==undefined) {
    const slotStatus = parkDb.addCar(carNumber);
    res.send(slotStatus);
  } else {
    res.send(inputNotFound);
  }
});



router.delete('/delete_car/:slot', function (req, res) {
  const slot = req.params.slot;
  if (typeof slot !== "undefined") {
    res.send(parkDb.deleteCar(slot))
  }
  else {
    res.status.send(inputNotFound);
  }
});


router.get('/get_car', function (req, res) {
  const { car_number, slot } = req.query;
  if (car_number !== undefined || slot !== undefined) {
    const parkSlotData=parkDb.getCar(car_number,Number(slot));
    res.json(parkSlotData)
  } else {
    res.send(inputNotFound);
  }});


module.exports = router;
