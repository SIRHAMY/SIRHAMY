var express = require('express');
var app = express();

app.use(express.static(__dirname));

var PORTNUM = 8080;
var IP = '0.0.0.0';

app.listen(PORTNUM, IP, function() {
    console.log("Server starting on " + PORTNUM + ", IP: " + IP );
});