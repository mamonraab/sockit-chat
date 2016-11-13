var moment = require('moment');

var now = moment();

console.log(now.format());

console.log(now.format('MMM Do YYYY , h:m a'));


// get unix  timestamp which is time in secend sinces 1970
console.log(now.format('X'));

// get java unix timestamp  which is time in mili secend sinces 1970 

console.log(now.format('x'));

//for logic opration we need to get  these

console.log(now.valueOf());

var timestamp = 1479030597866;
var timestampmoment = moment.utc(timestamp);

console.log(timestampmoment.local().format('h:m a'));


