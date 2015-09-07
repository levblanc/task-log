var $        = require('jquery');
var _        = require('underscore');
var Backbone = require('backbone');
var mainTpl  = require("./monthLog.jade");
var itemTpl  = require("./logItem.jade");

var logNo = 0;

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
        'click .add'   : 'addLogItem',
        'click .delete': 'deleteLogItem',
        'click .output': 'outputLog'
    },

    initialize: function (initData) {
        this.logInfo    = initData.logInfo;
        this.collection = initData.collection;
        this.render(this.logInfo);
    },

    render: function (logInfo) {
        var self = this;

        self.collection.fetch().then(function (taskLog) {
            logInfo.taskLog = taskLog;
            self.$el.html(mainTpl(logInfo));
        });

        return self;
    },

    addLogItem: function (e) {
        var logData = {};
        logData.logNo   = ++logNo;
        logData.content = this.$el.find('.logInput').val();
        logData.time    = getHumanDate(new Date());

        this.$el.find('.logTable tbody').append(itemTpl(logData));
        this.collection.create(logData); // update 或 sync?
        this.$el.find('.logInput').val('').focus();
    },

    deleteLogItem: function (e) {
        console.dir('will delete item');
    },

    outputLog: function (e) {
        console.dir('in view log output func')
        var outputLogRoute = '/output-tasklog' + location.pathname;
        Backbone.history.navigate(outputLogRoute, { trigger : true });
    }

});
