var $           = require('jquery');
var _           = require('underscore');
var Backbone    = require('backbone');
var mainTpl     = require("./monthLog.jade");
var LogItemView = require("./logItemView");
var logNum      = 0;

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
        'click .add'     : 'createLogItem',
        'click .output'  : 'outputLog'
    },

    initialize: function (initData) {
        this.logInfo  = initData.logInfo;
        this.monthLog = initData.collection;

        this.render(this.logInfo);
        this.$logList = this.$el.find('.logTable tbody');

        this.listenTo(this.monthLog, 'add', this.addLogItemView);
        this.listenTo(this.monthLog, 'reset', this.listMonthLog);

        this.monthLog.fetch({ reset: true });
    },

    render: function (logInfo) {
        this.$el.html(mainTpl(logInfo));
        return this;
    },

    goToHome: function (e) {
        var homeRoute = this.logInfo.userName;
        Backbone.history.navigate(homeRoute, { trigger : true });
    },

    createLogItem: function (e) {
        var logData = {};
        logData.logNum   = ++logNum;
        logData.userName = this.logInfo.userName;
        logData.logMonth = this.logInfo.year + '-' + this.logInfo.month;
        logData.addTime  = getHumanDate(new Date());
        logData.content  = this.$el.find('.logInput').val();

        this.$el.find('.logInput').val('').focus();
        this.monthLog.create(logData);
    },

    addLogItemView: function (log) {
        var logItemView = new LogItemView({ model: log });
        this.$logList.append(logItemView.render().el);
    },

    listMonthLog: function () {
        this.$logList.html('');
        this.monthLog.each(this.addLogItemView, this);
    }
});
