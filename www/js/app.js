var socket = io();
var now = moment();
socket.on('connect', function() {
    alert('conacteds !!!!!');
});

socket.on('eventname', function(data) {
    console.log(data.text);
    var timestamp = data.time;
    var timestampmoment = now.utc(timestamp);
    var datatime = timestampmoment.local().format('h:m a');

    jQuery('.msgs').append('<p>' + datatime + ' :  ' + data.text + '</p>')
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