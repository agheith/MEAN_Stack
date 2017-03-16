var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

//static content
app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded(true));

// view engin
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//seperate routes file
var routes = require('./routes/routes.js')(app);
// routes is a function that is invoked and an app is passed


var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  console.log("WE ARE USING SOCKETS!");
  console.log(socket.id);
  //all the socket code goes in here!

  socket.on("button_clicked", function (data){
      console.log('Someone clicked a button!  Reason: ' + data.reason);
      socket.emit('server_response', {response: "sockets are the best!"});
  })

  io.sockets.on('connection', function (socket) {
      //  EMIT:
      socket.emit('my_emit_event');
      //  BROADCAST:
      socket.broadcast.emit("my_broadcast_event");
      //  FULL BROADCAST:
      io.emit("my_full_broadcast_event");
  })  

})
