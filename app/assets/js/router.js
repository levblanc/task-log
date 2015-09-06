var $ = require('jquery');
var Backbone = require('backbone');

Backbone.$ = $;

var HomeView      = require('../../components/home/homeView');
var DashboardView = require('../../components/dashboard/dashboardView');
var MonthLogView  = require('../../components/monthLog/monthLogView');
var UserModel     = require('../../shared/models/userModel');
var LogModel     = require('../../shared/models/logModel');
// var LogModel = require('../../shared/models/logModel');

module.exports = Backbone.Router.extend({
    routes: {
        '' : 'home',
        ':userName': 'userDashboard',
        ':userName/log-list': 'userLogList',
        ':userName/:year/:month': 'userMonthLog'
    },

    home: function () {
        console.dir('in home view');
        // 被请求时，先检测db里面是否已经有user
        // 若有，立刻跳转到对应user的Dashboard
        // 没有，才显示首页请求user名称
        var userModel = new UserModel();
        var homeView  = new HomeView({ model: userModel });
        $('#main').empty().append(homeView.$el);
    },

    userDashboard: function (userName) {
        console.dir("in "  + userName +  "'s dashboard");
        var logModel = new LogModel();
        var initData = {
            model    : logModel,
            userName : userName
        };
        var dashboardView = new DashboardView(initData);
        $('#main').empty().append(dashboardView.$el);
    },

    userMonthLog: function (userName, year, month) {
        console.dir("in "  + userName +  "'s " + year + month + " log");
        var logModel = new LogModel();
        var logInfo = {
            userName : userName,
            year     : year,
            month    : month
        };
        var initData = {
            model  : logModel,
            logInfo: logInfo
        };
        var monthLogView = new MonthLogView(initData);
        $('#main').empty().append(monthLogView.$el);
    }

});
