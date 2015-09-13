var $               = require('jquery');
var _               = require('underscore');
var Backbone        = require('backbone');
var createLogTpl    = require("./createLog.jade");
var UserLogListView = require('./userLogListView');

var userName    = null;
var currentYear = null;
var renderData  = {};

module.exports = Backbone.View.extend({
    className : 'dashboard',

    events: {
        'click .create' : 'createLog'
    },

    initialize: function (initData) {
        userName        = initData.userName;
        this.userLogList = initData.collection;

        this.userLogList.fetch({
            data: {
                userName: userName
            },
            reset: true
        });

        this.listenTo(this.userLogList, 'add', this.goToMonthLog);
        this.listenTo(this.userLogList, 'reset', this.listLogs);

        this.render();
    },

    render: function () {
        renderData.userName    = userName;
        renderData.currentYear = currentYear = new Date().getFullYear().toString();

        this.$el.html(createLogTpl(renderData));

        return this;
    },

    createLog: function (e) {
        var inputMonth   = parseInt(this.$el.find('input').val(), 10);
        var logMonthArr = [currentYear];
        var logObj = {
            userName: userName
        };

        if(!isNaN(inputMonth) && inputMonth > 0 && inputMonth < 13){
            if(inputMonth < 10){
                inputMonth = '0' + inputMonth;
            }else{
                inputMonth = inputMonth.toString();
            }
            logMonthArr.push(inputMonth);

            logObj.logMonth = logMonthArr.join('-');

            this.userLogList.create(logObj);
        }else{
            alert('请输入1到12以内的数字');
            this.$el.find('input').val('').focus();
        }
    },

    listLogs: function (userLogListCollection) {
        var userLogListView = new UserLogListView({
            collection: userLogListCollection,
            userName: userName
        });

        this.$el.append(userLogListView.render().el);
    },

    goToMonthLog: function (logModel) {
        var logRouteArr = _.values(logModel.toJSON());
        Backbone.history.navigate(logRouteArr.join('/'), { trigger: true});
    }
});
