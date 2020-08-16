var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var indexRouter = require('./routes/index');
var carRouter = require('./routes/car');
var RateLimit=require('./ip_limit/ip_limit')


var app = express();

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
app.use(cookieParser());

app.use('/parking', carRouter);
app.use('/', indexRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
