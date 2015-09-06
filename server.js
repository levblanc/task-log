var express    = require('express');
var fs         = require('fs');
var http       = require('http');
var path       = require('path');
var bodyParser = require('body-parser');
var port       = require('./portConfig');
var dbPath     = path.join(__dirname, 'app/shared/db');

var app = express();
var server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'app/assets')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var userId = 0;

app.post('/user', function (req, res) {
    var userInfo = req.body;
    var userDB = path.join(dbPath, 'user.json');
    
    userInfo.userId = ++ userId;
    res.json(userInfo);

    fs.readFile(userDB, 'utf-8', function (err, data) {
        if(err) throw err;
        if(data){
            data = JSON.parse(data);
            data.push(userInfo);
            fs.writeFile(userDB, JSON.stringify(data), 'utf-8', function (err) {
                if(err) throw err;
                console.log('user.json saved');
            });
        }else{
            var userData = new Array(userInfo);

            fs.writeFile(userDB, JSON.stringify(userData), 'utf-8', function (err) {
                if(err) throw err;
                console.log('user.json saved');
            });
        }
    });
});


app.get('*', function (req, res) {
    var fileName = 'index.html';
    var options = {
        root: path.join(__dirname, 'app')
    };
    res.sendFile(fileName, options);
});


server.listen(port, 'localhost');
server.on('listening', function () {
    console.log('========== server started on port ' + port + ' ==========');
});
