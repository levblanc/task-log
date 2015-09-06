var $ = require('jquery');
var Backbone = require('backbone');

Backbone.$ = $;

var HomeView      = require('../../components/home/homeView');
var DashboardView = require('../../components/dashboard/dashboardView');
var MonthLogView  = require('../../components/monthLog/monthLogView');
var UserModel     = require('../../shared/models/userModel');
// var LogModel = require('../../shared/models/logModel');

module.exports = Backbone.Router.extend({
    routes: {
        '' : 'home',
        ':name': 'userDashboard',
        '/:name/log-list': 'userLogList',
        ':name/:year/:month': 'userMonthLog'
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

    userDashboard: function (name) {
        console.dir("in "  + name +  "'s dashboard");
        var dashboardView = new DashboardView({ name: name });
        $('#main').empty().append(dashboardView.$el);
    },

    userMonthLog: function (name, year, month) {
        console.dir("in "  + name +  "'s " + year + month + " log");
        var logInfo = {
            userName : name,
            year     : year,
            month    : month
        };

        var monthLogView = new MonthLogView(logInfo);
        $('#main').empty().append(monthLogView.$el);
    }

});
