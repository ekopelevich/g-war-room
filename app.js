if(process.env.NODE_ENV !== 'production'){
  require('dotenv').load();
}
var express = require('express');
var http = require('http');
var path = require('path');
var unirest = require('unirest');
var app = express();
var server = http.Server(app);
var io = require('socket.io')(server);
var warroom = require("./warroom-client")

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', function(req, res){
  unirest.get('http://galvanize-warroom-status.herokuapp.com/')
  .end(function (response) {
    res.json(response.body);
  });
});

io.on('connection', function(socket){
  // console.log('this is warroom', warroom);
  warroom(function (error, data) {
    console.log(data);
    socket.emit('resTime', data);
  })
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

server.listen(process.env.PORT || 3000, function(){
  console.log('listening on port 3000');
})


// module.exports = app;
