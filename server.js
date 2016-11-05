var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
//begin socket work
var io = require('socket.io')(http);
app.use(express.static(__dirname + '/www'));

io.on('connection', function() {
    console.log('user conacted via sockt.io');
});
http.listen(PORT, function() {
    console.log('server start at port ' + PORT);
});