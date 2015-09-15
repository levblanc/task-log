var $           = require('jquery');
var _           = require('underscore');
var Backbone    = require('backbone');
var mainTpl     = require("./monthLog.jade");
var LogItemView = require("./logItemView");


module.exports = Backbone.View.extend({
    className : 'monthLog',

    events: {
        'click .goToDashboard' : 'goToDashboard',
        'click .downloadBtn'   : 'downloadLog',
        'keypress'             : 'createLogItem'
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

    goToDashboard: function (e) {
        var homeRoute = this.userName;
        Backbone.history.navigate(homeRoute, { trigger : true });
    },

    createLogItem: function (e) {
        var self = this;
        var logDataBase = {
            userName : this.userName,
            logMonth : this.logMonth,
            content  : ""
        };

        if(e.which === 13){
            var enteredText = self.$el.find('.logInput').val();
            var textArr = enteredText.trim().split('\n');

            _.each(textArr, function (text, index) {
                var logData = _.clone(logDataBase);
                logData.content = text;
                self.monthLog.create(logData, { wait: true });
            });

            self.$el.find('.logInput').val('').focus();
        }
    },

    addLogItem: function (logModel, opt) {
        var logIndex = null;
        var $logDetail = this.$el.find('.logDetail');

        if(typeof opt === 'object'){
            logIndex = opt.length;
        }else if(typeof opt === 'number'){
            logIndex = opt + 1;
        }

        var logItemView = new LogItemView({
            model    : logModel,
            logIndex : logIndex
        });

        $logDetail.hasClass('hidden') && $logDetail.removeClass('hidden');
        this.$logList.append(logItemView.render().el);
    },

    listMonthLog: function () {
        var $logDetail = this.$el.find('.logDetail');
        var $noLog = this.$el.find('.noLog');

        if(this.monthLog.length){
            $logDetail.removeClass('hidden');
            this.$logList.html('');
            this.monthLog.each(this.addLogItem, this);
        }else{
            !$logDetail.hasClass('hidden') && $logDetail.addClass('hidden');
        }
    },

    refreshLogList: function () {
        // destory model之后，collection会监听到
        // 并且已经从collection中删除掉该model
        // 同时，执行delete请求之后后端会马上同步数据库
        // 所以前端和后端的数据是一致的，不需要重新fetch数据
        this.listMonthLog();
    }
});
