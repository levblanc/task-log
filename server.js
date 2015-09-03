var express    = require('express');
var http       = require('http');
var path       = require('path');
var bodyParser = require('body-parser');
var port       = require('./portConfig');

var app = express();
var server = http.createServer(app);

app.use(express.static(path.join(__dirname, '/app/assets')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/user', function (req, res) {
    var body = req.body;
    res.json(body);
});


app.get('*', function (req, res) {
    var fileName = 'index.html';
    var options = {
        root: path.join(__dirname, '/app')
    };
    res.sendFile(fileName, options);
});


server.listen(port, 'localhost');
server.on('listening', function () {
    console.log('========== server started on port ' + port + ' ==========');
});
