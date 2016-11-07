var socket = io();

socket.on('connect', function() {
    alert('conacted');
});