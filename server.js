var _          = require('lodash');
var fs         = require('fs');
var http       = require('http');
var path       = require('path');
var bodyParser = require('body-parser');
var express    = require('express');
var json2csv   = require('json2csv');
var port       = require('./portConfig');
var dbPath     = path.join(__dirname, 'app/shared/db');

var app    = express();
var server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'app/assets')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var userDB = path.join(dbPath, 'user.json');
var logDB  = path.join(dbPath, 'taskLog.json');
var userId = 0;
var logId  = 0;

app.post('/user', function (req, res) {
    var userInfo    = req.body;
    var userName    = req.body.userName;
    var taskLogInfo = {};

    userInfo.userId      = ++ userId;
    taskLogInfo.userId   = userInfo.userId;
    taskLogInfo.userName = userName;
    taskLogInfo.logList  = [];
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
            var taskLogData = new Array(taskLogInfo);

            fs.writeFile(userDB, JSON.stringify(userData), 'utf-8', function (err) {
                if(err) throw err;
                console.log('user.json saved');
            });

            fs.writeFile(logDB, JSON.stringify(taskLogData), 'utf-8', function (err) {
                if(err) throw err;
                console.log('taskLog.json saved');
            });
        }
    });
});

app.post('/task-log/:name/:year/:month', function (req, res) {
    var logInfo = req.body;

    var reqName = req.params.name;
    var reqYear = req.params.year;
    var reqMonth = req.params.month;

    logInfo.logId = ++ logId;
    res.json(logInfo);

    fs.readFile(logDB, 'utf-8', function (err, data) {
        if(err) throw err;
        if(data){
            data = JSON.parse(data);

            _.each(data, function (item, index) {
                if(item.userName === req.params.name){
                    _.each(item.logList, function (log, index) {
                        log.year === reqYear && log.month === reqMonth && log.taskLog.push(logInfo);
                    });
                }
            });
            console.dir(JSON.stringify(data));
            fs.writeFile(logDB, JSON.stringify(data), 'utf-8', function (err) {
                if(err) throw err;
                console.log('taskLog.json saved');
            });
        }else{
            console.dir('no such user exists! Please check.');
        }
    });
});

app.get('/output-tasklog/:logInfo', function (req, res) {
    fs.readFile(logDB, 'utf-8', function (err, taskLog) {
        var csvOpts = {};
        var csvFolderPath = path.join(__dirname, 'app/shared/csv');
        var csvFileName = req.params.logInfo + '.csv';
        var csvFilePath = path.join(csvFolderPath, csvFileName);

        if(err) throw err;
        // 把从log中读取出来的字符串转换成JSON object
        csvOpts.data   = JSON.parse(taskLog);
        // 设定需要输出的column信息
        csvOpts.fields = _.keys(_.omit(csvOpts.data[0], ['logId', 'title']));

        json2csv(csvOpts, function (err, csv) {
            if(err) throw err;
            fs.writeFile(csvFilePath, csv, function (err) {
                if(err) throw err;
                console.log(csvFilePath + ' saved');
                res.sendFile(csvFileName, { root: csvFolderPath });
            });
        });
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
