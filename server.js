var express = require('express');
var http = require('http');
var path = require('path');
var port = require('./portConfig');

var app = express();
var server = http.createServer(app);

app.get('/', function (req, res) {
    var fileName = 'index.html';
    var options = {
        root: path.join(__dirname, '/app')
    };
    res.sendFile(fileName, options);
});

app.use(express.static(path.join(__dirname, '/app/assets')));

server.listen(port, 'localhost');
server.on('listening', function () {
    console.log('========== server started on port ' + port + ' ==========');
});
