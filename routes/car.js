var express = require('express');
var router = express.Router();
var parkDb = require('../db/db');

console.log(process.env.PARKING_SIZE)

router.post('/add_car', function(req, res, next) {
let carNumber= req.body && req.body.car_number;
if(carNumber){
  res.send(parkDb.addCar(carNumber));
}else{
  res.send("please enter the car number");
}});

router.delete('/delete_car', function(req, res, next) {
console.log(req.ip)
if(req.body){


  
}
  res.send('respond with a resource');

});


router.get('/get_car', function(req, res, next) {
const ipAddress=req.connection.remoteAddress;
console.log(req.connection)

  res.send('respond with a resource');
});


module.exports = router;
