var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var xssFilters = require('xss-filters');
//begin socket work
var io = require('socket.io')(http);
app.use(express.static(__dirname + '/www'));

io.on('connection', function(socket) {
    console.log('user conacted via sockt.io');

    // send msg to all exept the sender
    socket.on('eventname', function(data) {
        data.text = xssFilters.inHTMLData(data.text);
        console.log(data.text);


        //send to all
        io.emit('eventname', data);


        //send data to all clinet except sender
        //   socket.broadcast.emit('eventname', data);

    });


    //send data to clinet

    socket.emit('eventname', {
        text: "hey these is my chat "
    });

});
http.listen(PORT, function() {
    console.log('server start at port ' + PORT);
});