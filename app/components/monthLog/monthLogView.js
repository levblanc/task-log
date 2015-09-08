var $        = require('jquery');
var _        = require('underscore');
var Backbone = require('backbone');
var mainTpl  = require("./monthLog.jade");
var itemTpl  = require("./logItem.jade");

var logNum = 0;

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

module.exports = Backbone.View.extend({
    className : 'monthLog',

    events: {
        'click .goToHome': 'goToHome',
        'click .add'     : 'addLogItem',
        'click .delete'  : 'deleteLogItem',
        'click .output'  : 'outputLog'
    },

    initialize: function (initData) {
        this.logInfo    = initData.logInfo;
        this.collection = initData.collection;

        this.render(this.logInfo);
    },

    render: function (logInfo) {
        var self = this;

        self.collection.fetch().then(function (taskLog) {
            logNum = taskLog.length;
            logInfo.taskLog = taskLog;
            self.$el.html(mainTpl(logInfo));
        });

        return self;
    },

    goToHome: function (e) {
        var homeRoute = this.logInfo.userName;
        Backbone.history.navigate(homeRoute, { trigger : true });
    },

    addLogItem: function (e) {
        var logData = {};
        logData.logNum   = ++logNum;
        logData.userName = this.logInfo.userName;        
        logData.logMonth = this.logInfo.year + '-' + this.logInfo.month;
        logData.addTime  = getHumanDate(new Date());
        logData.content  = this.$el.find('.logInput').val();

        this.$el.find('.logTable tbody').append(itemTpl(logData));
        this.$el.find('.logInput').val('').focus();

        this.collection.create(logData); // update 或 sync?
    },

    deleteLogItem: function (e) {
        // ToDo
        // 如何从数据库删除对应的model？
        // 使用event listener是否更好？
        console.dir('will delete item');
        var logList = this.$el.find('tr');
        var logIndex = $(e.currentTarget).parent().index();
        var modelIndex = logIndex - 1;
        var selectedModel = this.collection.at(modelIndex);
        this.collection.remove(selectedModel);
        logList.eq(logIndex).remove();
    },

    outputLog: function (e) {
        var outputLogRoute = '/output-tasklog' + location.pathname;
        Backbone.history.navigate(outputLogRoute, { trigger : true });
    }

});
