var _          = require('lodash');
var fs         = require('fs');
var http       = require('http');
var path       = require('path');
var async      = require('async');
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


function getHumanDate(currentDate){
    var humanDate, dateArr, timeArr, year, month, date, hour, min, sec;

    year    = currentDate.getFullYear();
    month   = currentDate.getMonth();
    date    = currentDate.getDate();
    dateArr = new Array(year, month, date);

    hour    = currentDate.getHours();
    min     = currentDate.getMinutes();
    sec     = currentDate.getSeconds();
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
    var userData = null;
    var userInfo = req.body;

    fs.readFile(userDB, 'utf-8', function (err, data) {
        if(err) throw err;
        if(data){
            userData = JSON.parse(data);
            userInfo.id = userData.length + 1;
            userData.push(userInfo);
        }else{
            userInfo.id  = 1;
            userData = new Array(userInfo);
        }
        fs.writeFile(userDB, JSON.stringify(userData), 'utf-8', function (err) {
            if(err) throw err;
            res.json(userInfo);
        });
    });
});

app.post('/user-loglist', function (req, res) {
    var userLogList = null;
    var userLogItem = req.body;

    fs.readFile(logListDB, 'utf-8', function (err, data) {
        if(err) throw err;
        if(data){
            userLogList = JSON.parse(data);
            userLogItem.id = userLogList.length + 1;
            userLogList.push(userLogItem);
        }else{
            userLogItem.id  = 1;
            userLogList = new Array(userLogItem);
        }
        fs.writeFile(logListDB, JSON.stringify(userLogList), 'utf-8', function (err) {
            if(err) throw err;
            res.json(userLogItem);
        });
    });
});

// 创建queue
// 增删log时如果有并发请求，db读写会出现问题。
// 增加async.queue来处理。每次完成db写入，才开始下一次db读取。
var q = async.queue(function (task, callback) {
    var taskLog  = null;
    var logModel = task.req.body;
    logModel.addTime = getHumanDate(new Date());

    fs.readFile(logDB, 'utf-8', function (err, data) {
        if(err) throw err;
        if(data){
            taskLog = JSON.parse(data);
            logModel.id = taskLog.length + 1;
            taskLog.push(logModel);
        }else{
            logModel.id = 1;
            taskLog = new Array(logModel);
        }
        fs.writeFile(logDB, JSON.stringify(taskLog), 'utf-8', function (err) {
            if(err) throw err;
            task.res.json(logModel);
            callback();
        });
    });
});

app.post('/task-log', function (req, res) {
    // 往queue里面push请求的数据
    // 让它按push的顺序处理每一次的读取和写入
    q.push({req: req, res: res});
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

app.get('/download-tasklog', function (req, res) {
    var userName = req.query.userName;
    var logMonth = req.query.logMonth;

    fs.readFile(logDB, 'utf-8', function (err, taskLogs) {

        if(err) throw err;

        if(taskLogs){
            var csvOpts       = { data: [] };
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

            var filteredData = _.filter(taskLogs, filterOpts);

            _.each(filteredData, function (item, index) {
                csvOpts.data[index] = {
                    index  : index + 1,
                    content: item.content,
                    status : item.status
                };
            });

            csvOpts.fieldNames = ['序号', '内容', '状态'];

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
