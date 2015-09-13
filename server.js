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

var userDB        = path.join(dbPath, 'user.json');
var logDB         = path.join(dbPath, 'taskLog.json');
var logListDB     = path.join(dbPath, 'userLogList.json');
var userId        = 0;
var userLogItemId = 0;
var logId         = 0;

function getHumanDate(currentDate){
    var humanDate, dateArr, timeArr, year, month, date, hour, min, sec;

    year  = currentDate.getFullYear();
    month = currentDate.getMonth();
    date  = currentDate.getDate();
    dateArr = new Array(year, month, date);

    hour  = currentDate.getHours();
    min   = currentDate.getMinutes();
    sec   = currentDate.getSeconds();
    timeArr = new Array(hour, min, sec);

    _.each(dateArr, function (item, index) {
        if(item < 10){
            item = '0' + item;
        }
        dateArr[index] = item;
    });

    _.each(timeArr, function (item, index) {
        if(item < 10){
            item = '0' + item;
        }
        timeArr[index] = item;
    });

    humanDate = dateArr.join('-') + ' ' + timeArr.join(':');

    return humanDate;
}

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

app.get('/user-loglist', function (req, res) {
    res.set('Content-Type', 'application/json');
    fs.readFile(logListDB, 'utf-8', function (err, data) {
        if(err) throw err;
        if(data){
            var filterOpts = {
                userName: req.query.userName
            };
            // var targetUserLogList = _.pluck(_.filter(JSON.parse(data), filterOpts), 'logMonth');
            var targetUserLogList = _.filter(JSON.parse(data), filterOpts);

            res.send(targetUserLogList);
        }else{
            res.send([]);
        }
    });
});

app.get('/task-log', function (req, res) {
    res.set('Content-Type', 'application/json');

    fs.readFile(logDB, 'utf-8', function (err, data) {
        if(err) throw err;
        if(data){
            var filterOpts = {
                userName: req.query.userName,
                logMonth: req.query.logMonth
            };
            var targetTaskLog = _.filter(JSON.parse(data), filterOpts);

            res.send(targetTaskLog);
        }else{
            res.send([]);
        }
    });
});

app.post('/user', function (req, res) {
    var userInfo = req.body;

    userInfo.id = ++ userId;

    fs.readFile(userDB, 'utf-8', function (err, data) {
        if(err) throw err;
        if(data){
            data = JSON.parse(data);
            data.push(userInfo);
            fs.writeFile(userDB, JSON.stringify(data), 'utf-8', function (err) {
                if(err) throw err;
                res.json(userInfo);
            });
        }else{
            var userData = new Array(userInfo);

            fs.writeFile(userDB, JSON.stringify(userData), 'utf-8', function (err) {
                if(err) throw err;
                res.json(userInfo);
            });
        }
    });
});

app.post('/user-loglist', function (req, res) {
    var userLogItem = req.body;
    userLogItem.id = ++ userLogItemId;

    fs.readFile(logListDB, 'utf-8', function (err, data) {
        if(err) throw err;
        if(data){
            data = JSON.parse(data);
            data.push(userLogItem);

            fs.writeFile(logListDB, JSON.stringify(data), 'utf-8', function (err) {
                if(err) throw err;
                res.json(userLogItem);
            });
        }else{
            var userLogList = [userLogItem];

            fs.writeFile(logListDB, JSON.stringify(userLogList), 'utf-8', function (err) {
                if(err) throw err;
                res.json(userLogItem);
            });
        }
    });
});

app.post('/task-log', function (req, res) {
    var logModel = req.body;
    var userName = logModel.userName;
    var logMonth = logModel.logMonth;

    logModel.addTime = getHumanDate(new Date());
    logModel.id = ++logId;

    fs.readFile(logDB, 'utf-8', function (err, data) {
        if(err) throw err;
        if(data){
            data = JSON.parse(data);
            data.push(logModel);

            fs.writeFile(logDB, JSON.stringify(data), 'utf-8', function (err) {
                if(err) throw err;
                res.json(logModel);
            });
        }else{
            var taskLog = new Array(logModel);

            fs.writeFile(logDB, JSON.stringify(taskLog), 'utf-8', function (err) {
                if(err) throw err;
                res.json(logModel);
            });
        }
    });
});

app.delete('/task-log/:id', function (req, res) {

    fs.readFile(logDB, 'utf-8', function (err, data) {
        if(err) throw err;

        data = JSON.parse(data);

        var targetTaskLog = _.find(data, function(log){
            return log.id === parseInt(req.params.id, 10);
        });

        data = _.without(data, targetTaskLog);

        fs.writeFile(logDB, JSON.stringify(data), 'utf-8', function (err) {
            if(err) throw err;
            res.json({
                statusCode: 1,
                status : 'success',
                info: 'task log id: ' + req.params.id + ' deleted'
            });
        });
    });
});

app.get('/output-tasklog', function (req, res) {
    var userName = req.query.userName;
    var logMonth = req.query.logMonth;

    fs.readFile(logDB, 'utf-8', function (err, taskLogs) {

        if(err) throw err;

        if(taskLogs){
            var csvOpts       = {};
            var csvFolderPath = path.join(__dirname, 'app/csv');
            var csvFileName   = userName + '-' + logMonth + '.csv';
            var csvFilePath   = path.join(csvFolderPath, csvFileName);
            // 把从log中读取出来的字符串转换成JSON object
            taskLogs = JSON.parse(taskLogs);
            // 查找出符合条件的task log - 用户名匹配 && log月份匹配
            var filterOpts = {
                userName : userName,
                logMonth : logMonth
            };

            csvOpts.data = _.filter(taskLogs, filterOpts);

            // 设定需要输出的column信息
            var omitFields = ['id', 'userName', 'logMonth', 'addTime'];
            csvOpts.fields = _.keys(_.omit(csvOpts.data[0], omitFields));

            json2csv(csvOpts, function (err, csv) {
                if(err) throw err;
                fs.writeFile(csvFilePath, csv, function (err) {
                    if(err) throw err;
                    res.download(csvFilePath, csvFileName);
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
