var socket = io();

socket.on('connect', function() {
    alert('conacteds !!!!!');
});

socket.on('eventname', function(data) {
    console.log(data.text);

    jQuery('.msgs').append('<p>' + data.text + '</p>')
});

//handling form submit and msg
var $Form = jQuery('#message-form');

$Form.on('submit', function(evnt) {

    evnt.preventDefault();
    socket.emit('eventname', {
        text: $Form.find('input[name=msg]').val()
    });
    $Form.find('input[name=msg]').val('');
});