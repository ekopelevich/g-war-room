if(process.env.NODE_ENV !== 'production'){
  require('dotenv').load();
}
var express = require('express');
var http = require('http');
var path = require('path');
var unirest = require('unirest');
var server = http.Server(app);
var io = require('socket.io')(server);
var warroom = require("./warroom-client")
// var db = require('mongoDB')('localhost/...')

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', function(req, res){
  unirest.get('http://galvanize-warroom-status.herokuapp.com/')
  .end(function (response) {
    res.json(response.body);
  });
});

io.on('connection', function(socket){
  console.log('this is warroom', warroom);
  warroom()
  .end(function (data) {
    var total = 0;
    var lastTen = [];
    var average = function(resTime){
      if (lastTen.length < 5){
        lastTen.push(resTime);
        for (var i = 0; i < lastTen.length; i++) {
          total += i;
          average = total/5;
        }
      }
      return average;
    };
    io.emit('resTime', resTime);
    console.log('resTime: ' + resTime);
    console.log('average: ' + average);
  });
});

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
