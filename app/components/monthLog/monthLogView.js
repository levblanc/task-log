var $           = require('jquery');
var _           = require('underscore');
var Backbone    = require('backbone');
var mainTpl     = require("./monthLog.jade");
var LogItemView = require("./logItemView");


module.exports = Backbone.View.extend({
    className : 'monthLog',

    events: {
        'click .goToHome' : 'goToHome',
        'click .add'      : 'createLogItem',
        'click .download' : 'downloadLog'
    },

    initialize: function (initData) {
        this.logMonth = initData.logMonth;
        this.userName = initData.userName;
        this.monthLog = initData.collection;

        this.render();
        this.$logList = this.$el.find('.logTable tbody');

        this.listenTo(this.monthLog, 'add', this.addLogItem);
        this.listenTo(this.monthLog, 'reset', this.listMonthLog);
        this.listenTo(this.monthLog, 'destroy', this.refreshLogList);

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

        downloadUrlArr = new Array(userNameParam, logMonthParam);

        this.$el.html(mainTpl({
            logMonth : this.logMonth,
            downloadUrl: '/download-tasklog?' + downloadUrlArr.join('&'),
        }));
        return this;
    },

    goToHome: function (e) {
        var homeRoute = this.userName;
        Backbone.history.navigate(homeRoute, { trigger : true });
    },

    createLogItem: function (e) {
        var logData = {
            userName : this.userName,
            logMonth : this.logMonth,
            content  : this.$el.find('.logInput').val()
        };

        this.$el.find('.logInput').val('').focus();
        this.monthLog.create(logData);
    },

    addLogItem: function (logModel, opt) {
        var logIndex = null;

        if(typeof opt === 'object'){
            logIndex = opt.length;
        }else if(typeof opt === 'number'){
            logIndex = opt + 1;
        }

        var logItemView = new LogItemView({
            model    : logModel,
            logIndex : logIndex
        });
        this.$logList.append(logItemView.render().el);
    },

    listMonthLog: function () {
        this.$logList.html('');
        this.monthLog.each(this.addLogItem, this);
    },

    refreshLogList: function (logModel) {
        this.monthLog.fetch({
            reset: true,
            data: {
                userName : this.userName,
                logMonth : this.logMonth,
            }
        });
    }
});
