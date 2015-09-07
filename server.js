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

var userDB    = path.join(dbPath, 'user.json');
var logDB     = path.join(dbPath, 'taskLog.json');
var logListDB = path.join(dbPath, 'userLogList.json');
var userId    = 0;
var logId     = 0;

app.get('/user', function (req, res) {
    res.set('Content-Type', 'application/json');
    fs.readFile(userDB, 'utf-8', function (err, data) {
        if(err) throw err;
        if(data){
            res.send(data);
        }else{
            res.send([]);
        }
    });
});

app.get('/user-loglist/:name', function (req, res) {
    res.set('Content-Type', 'application/json');
    fs.readFile(logListDB, 'utf-8', function (err, data) {
        if(err) throw err;
        if(data){
            var targetUserLogList = _.result(_.find(JSON.parse(data), function (user) {
                return user.userName === req.params.name;
            }), 'logList');

            res.send(targetUserLogList);
        }else{
            res.send([]);
        }
    });
});

app.get('/task-log/:name/:year/:month', function (req, res) {
    var targetLogTime = req.params.year + '-' + req.params.month;

    res.set('Content-Type', 'application/json');

    fs.readFile(logDB, 'utf-8', function (err, data) {
        if(err) throw err;
        if(data){
            var targetTaskLogs = _.result(_.find(JSON.parse(data), function (user) {
                return user.userName === req.params.name;
            }), 'logList');

            var targetTaskLog = _.result(_.find(targetTaskLogs, function (log) {
                return log.logTime === targetLogTime;
            }), 'taskLog');

            res.send(targetTaskLog);
        }else{
            res.send([]);
        }
    });
});

app.post('/user', function (req, res) {
    var userInfo = req.body;

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

app.post('/user-loglist/:name', function (req, res) {
    var loglistItem = req.body;
    loglistItem.userId = ++ userId;
    loglistItem.userName = req.params.name;

    res.json(loglistItem);

    fs.readFile(logListDB, 'utf-8', function (err, data) {
        if(err) throw err;
        if(data){
            data = JSON.parse(data);

            _.each(data, function (item, index) {
                if(item.userName === loglistItem.userName &&
                    item.userId === loglistItem.userId){
                    item.logList.push(loglistItem.logTime);
                }
            });

            fs.writeFile(logListDB, JSON.stringify(data), 'utf-8', function (err) {
                if(err) throw err;
                console.log('userLogList.json saved');
            });
        }else{
            var userLogList = [{
                userId : loglistItem.userId,
                userName: loglistItem.userName,
                logList : [loglistItem.logTime]
            }];

            fs.writeFile(logListDB, JSON.stringify(userLogList), 'utf-8', function (err) {
                if(err) throw err;
                console.log('userLogList.json saved');
            });
        }
    });
});

app.post('/task-log/:name/:year/:month', function (req, res) {
    var logInfo  = req.body;
    var userName = req.params.name;
    var logTime  = req.params.year + '-' + req.params.month;

    logInfo.logId = ++ logId;
    res.json(logInfo);

    fs.readFile(logDB, 'utf-8', function (err, data) {
        if(err) throw err;
        if(data){
            data = JSON.parse(data);

            _.each(data, function (listItem, index) {
                if(listItem.userName === req.params.name){
                    _.each(listItem.logList, function (logItem, index) {
                        logItem.logTime === logTime && logItem.taskLog.push(logInfo);
                    });
                }
            });

            fs.writeFile(logDB, JSON.stringify(data), 'utf-8', function (err) {
                if(err) throw err;
                console.log('taskLog.json saved');
            });
        }else{
            var taskLogItem = {};
            taskLogItem.userName = userName;
            taskLogItem.logList = new Array({
                logTime: logTime,
                taskLog: new Array(logInfo)
            });
            var taskLog = new Array(taskLogItem);

            fs.writeFile(logDB, JSON.stringify(taskLog), 'utf-8', function (err) {
                if(err) throw err;
                console.log('taskLog.json saved');
            });
        }
    });
});

app.get('/output-tasklog/:name/:year/:month', function (req, res) {
    var userName = req.params.name;
    var logTime  = req.params.year + '-' + req.params.month;

    fs.readFile(logDB, 'utf-8', function (err, taskLog) {

        if(err) throw err;

        if(taskLog){
            var csvOpts       = {};
            var csvFolderPath = path.join(__dirname, 'app/shared/csv');
            var csvFileName   = userName + '-' + logTime + '.csv';
            var csvFilePath   = path.join(csvFolderPath, csvFileName);
            // 把从log中读取出来的字符串转换成JSON object
            var taskLogData = JSON.parse(taskLog);
            // 查找出符合条件的task log
            _.each(taskLogData, function (userLog, index) {
                // 用户名匹配
                if(userLog.userName === userName){
                    _.each(userLog.logList, function (logItem, index) {
                        // log时间匹配
                        if(logItem.logTime === logTime){
                            csvOpts.data = logItem.taskLog;
                        }
                    });
                }
            });

            // 设定需要输出的column信息
            csvOpts.fields = _.keys(_.omit(csvOpts.data[0], ['logId', 'time']));

            json2csv(csvOpts, function (err, csv) {
                console.dir('in json2csv')
                if(err) throw err;
                fs.writeFile(csvFilePath, csv, function (err) {
                    if(err) throw err;
                    console.log(csvFilePath + ' saved');
                    console.dir(csvFileName);
                    res.sendFile(csvFileName, { root: csvFolderPath });
                });
            });
        }else{
            console.dir('log is empty, nothing to output...');
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
