var express = require('express');
var socket = require('socket.io');
var http = require('http');
var path = require('path');
var unirest = require('unirest');
var warroom = require("./warroom-client")
var db = require('mongoDB')('localhost/...')

var app = express();
var server = http.Server(app);
var io = socket(server);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/servers', function(){
  warroom();
});

function warroom(error, data){
  console.log(data);
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
