var $ = require('jquery');
var Backbone = require('backbone');

Backbone.$ = $;

var HomeView          = require('../../components/home/homeView');
var DashboardView     = require('../../components/dashboard/dashboardView');
var MonthLogView      = require('../../components/monthLog/monthLogView');
var UserModel         = require('../../shared/collections/user').model;
var UserCollection    = require('../../shared/collections/user').collection;
var TaskLogModel      = require('../../shared/collections/taskLog').model;
var TaskLogCollection = require('../../shared/collections/taskLog').collection;

module.exports = Backbone.Router.extend({
    routes: {
        '' : 'home',
        ':userName': 'userDashboard',
        ':userName/log-list': 'userLogList',
        ':userName/:year/:month': 'userMonthLog'
    },

    home: function () {
        console.dir('in home view');
        // ToDo:
        // 被请求时，先检测db里面是否已经有user
        // 若有，立刻跳转到对应user的Dashboard
        // 没有，才显示首页请求user名称
        var userCollection = new UserCollection();
        var homeView  = new HomeView({ collection: userCollection });
        $('#main').empty().append(homeView.$el);
    },

    userDashboard: function (userName) {
        console.dir("in "  + userName +  "'s dashboard");
        var taskLogCollection = new TaskLogCollection();
        var initData = {
            collection : taskLogCollection,
            userName   : userName
        };
        var dashboardView = new DashboardView(initData);
        $('#main').empty().append(dashboardView.$el);
    },

    userMonthLog: function (userName, year, month) {
        console.dir("in "  + userName +  "'s " + year + month + " log");
        var taskLogCollection = new TaskLogCollection();
        var logInfo = {
            userName : userName,
            year     : year,
            month    : month
        };
        var initData = {
            collection : taskLogCollection,
            logInfo    : logInfo
        };
        var monthLogView = new MonthLogView(initData);
        $('#main').empty().append(monthLogView.$el);
    }

});
