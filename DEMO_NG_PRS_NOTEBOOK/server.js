var express = require('express');
var app = express();

app.use('/', express.static('public'));
app.listen(5000);
console.log('---------------------------');
console.log("DEMO_PRS Listening port 5000");
console.log('---------------------------');