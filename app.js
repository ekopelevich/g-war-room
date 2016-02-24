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
  warroom(function (error, data) {
    console.log(data);
    socket.emit('resTime', data);
  })
});

server.listen(process.env.PORT || 3000, function(){
  console.log('listening on port 3000');
})
