const express = require('express');
const indexRouter = require('./routes/index');
const carRouter = require('./routes/car');
const RateLimit=require('./ip_limit/ip_limit')
const app = express();
//rate limit
app.use(function(req,res,next){
  const ipAddress=req.connection.remoteAddress;
  if(RateLimit(ipAddress)){
    next()
  }
  else{
    res.send("error request");
  }
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/parking', carRouter);
app.use('/', indexRouter);
module.exports = app;
