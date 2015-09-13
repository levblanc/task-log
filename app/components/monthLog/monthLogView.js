var $           = require('jquery');
var _           = require('underscore');
var Backbone    = require('backbone');
var mainTpl     = require("./monthLog.jade");
var LogItemView = require("./logItemView");


module.exports = Backbone.View.extend({
    className : 'monthLog',

    events: {
        'click .goToHome': 'goToHome',
        'click .add'     : 'createLogItem',
        'click .output'  : 'outputLog'
    },

    initialize: function (initData) {
        this.logMonth  = initData.logMonth;
        this.userName  = initData.userName;
        this.monthLog = initData.collection;

        this.render();
        this.$logList = this.$el.find('.logTable tbody');

        this.listenTo(this.monthLog, 'add', this.addLogItemView);
        this.listenTo(this.monthLog, 'reset', this.listMonthLog);
        this.listenTo(this.monthLog, 'destroy', this.deleteLog);

        this.monthLog.fetch({
            reset: true,
            data: {
                userName : this.userName,
                logMonth : this.logMonth,
            }
        });
    },

    render: function () {
        var userNameParam = 'userName=' + this.userName;
        var logMonthParam = 'logMonth=' + this.logMonth;

        outPutUrlArr = new Array(userNameParam, logMonthParam);

        this.$el.html(mainTpl({
            logMonth : this.logMonth,
            outPutUrl: '/output-tasklog?' + outPutUrlArr.join('&'),
        }));
        return this;
    },

    goToHome: function (e) {
        var homeRoute = this.userName;
        Backbone.history.navigate(homeRoute, { trigger : true });
    },

    createLogItem: function (e) {
        var logData = {
            logId    : this.monthLog.nextLogId(),
            userName : this.userName,
            logMonth : this.logMonth,
            content  : this.$el.find('.logInput').val()
        };

        this.$el.find('.logInput').val('').focus();
        this.monthLog.create(logData);
    },

    addLogItemView: function (logModel) {
        var logItemView = new LogItemView({ model: logModel });
        this.$logList.append(logItemView.render().el);
    },

    listMonthLog: function () {
        this.monthLog.each(this.addLogItemView, this);
    },

    deleteLog: function (logModel) {
        console.dir('asasas');
        console.dir(logModel);
    }
});
