var createError = require('http-errors');
var express = require('express');
var path = require('path');
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose');

var eventRouter = require('./routes/event');
var indexRouter = require('./routes/index');
var ratesRouter = require('./routes/rates');
var apiMapsRouter = require('./routes/api-maps');
var userRouter = require('./routes/user');

var app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(`mongodb://zainal:zainal123@ds045604.mlab.com:45604/groupproject1`, {
    useNewUrlParser: true,
    useCreateIndex: true
});

app.use('/event', eventRouter);

app.use('/', indexRouter);
app.use('/rates', ratesRouter);
app.use('/api-maps', apiMapsRouter);
app.use('/users', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.status(500).json({message: "Unhandled Error"});
});

module.exports = app;
