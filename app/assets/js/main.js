(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Backbone = require('backbone');
var Router = require('./router');
var appRouter = new Router();

Backbone.history.start({ pushState: true });

},{"./router":2,"backbone":"backbone"}],2:[function(require,module,exports){
var $ = require('jquery');
var Backbone = require('backbone');

Backbone.$ = $;

var HomeView              = require('../../components/home/homeView');
var DashboardView         = require('../../components/dashboard/dashboardView');
var MonthLogView          = require('../../components/monthLog/monthLogView');
var UserCollection        = require('../../shared/collections/user').collection;
var TaskLogCollection     = require('../../shared/collections/taskLog').collection;
var UserLogListCollection = require('../../shared/collections/userLogList').collection;

var userCollection        = new UserCollection();
var taskLogCollection     = new TaskLogCollection();
var userLogListCollection = new UserLogListCollection();

module.exports = Backbone.Router.extend({
    routes: {
        '' : 'home',
        ':userName': 'userDashboard',
        ':userName/:year/:month': 'userMonthLog',
        'output-tasklog/:username/:year/:month': 'outputTaskLog'
    },

    home: function () {
        console.dir('in home view');
        // ToDo:
        // 被请求时，先检测db里面是否已经有user
        // 若有，立刻跳转到对应user的Dashboard
        // 没有，才显示首页请求user名称
        var homeView  = new HomeView({ collection: userCollection });

        $('#main').empty().append(homeView.$el);
    },

    userDashboard: function (userName) {
        console.dir("in "  + userName +  "'s dashboard");

        var initData = {
            collection : userLogListCollection,
            userName   : userName
        };
        var dashboardView = new DashboardView(initData);

        $('#main').empty().append(dashboardView.$el);
    },

    userMonthLog: function (userName, year, month) {
        console.dir("in "  + userName +  "'s " + year + month + " log");

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
    },

    outputTaskLog: function (userName, year, month) {
        console.dir("outputing " + userName + "'s log of " + year + "-" + month);
    }

});

},{"../../components/dashboard/dashboardView":4,"../../components/home/homeView":6,"../../components/monthLog/monthLogView":9,"../../shared/collections/taskLog":10,"../../shared/collections/user":11,"../../shared/collections/userLogList":12,"backbone":"backbone","jquery":"jquery"}],3:[function(require,module,exports){
var jade = require("jade/runtime");

module.exports = function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "/Users/levblanc/projects/task-log/app/components/dashboard/dashboard.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (currentYear, userName) {
var jade_indent = [];
jade_debug.unshift(new jade.DebugItem( 0, "/Users/levblanc/projects/task-log/app/components/dashboard/dashboard.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "/Users/levblanc/projects/task-log/app/components/dashboard/dashboard.jade" ));
buf.push("\n<p>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 1, jade_debug[0].filename ));
buf.push(" Welcome Master " + (jade.escape((jade_interp =  userName ) == null ? '' : jade_interp)) + "!!!");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 3, "/Users/levblanc/projects/task-log/app/components/dashboard/dashboard.jade" ));
buf.push("\n<div class=\"addLog\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, "/Users/levblanc/projects/task-log/app/components/dashboard/dashboard.jade" ));
buf.push("新增Log");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 5, "/Users/levblanc/projects/task-log/app/components/dashboard/dashboard.jade" ));
buf.push("\n  <div class=\"currentYear\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, jade_debug[0].filename ));
buf.push("" + (jade.escape((jade_interp =  currentYear ) == null ? '' : jade_interp)) + "年");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 6, "/Users/levblanc/projects/task-log/app/components/dashboard/dashboard.jade" ));
buf.push("\n  <input type=\"text\" placeholder=\"请输入月份\"/>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 7, "/Users/levblanc/projects/task-log/app/components/dashboard/dashboard.jade" ));
buf.push("\n  <button class=\"create\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 7, jade_debug[0].filename ));
buf.push("Create");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 9, "/Users/levblanc/projects/task-log/app/components/dashboard/dashboard.jade" ));
buf.push("\n<div class=\"logList\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 10, "/Users/levblanc/projects/task-log/app/components/dashboard/dashboard.jade" ));
buf.push("查看过往的Log");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 11, "/Users/levblanc/projects/task-log/app/components/dashboard/dashboard.jade" ));
buf.push("\n  <button class=\"view\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 11, jade_debug[0].filename ));
buf.push("View");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"currentYear" in locals_for_with?locals_for_with.currentYear:typeof currentYear!=="undefined"?currentYear:undefined,"userName" in locals_for_with?locals_for_with.userName:typeof userName!=="undefined"?userName:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "p  Welcome Master #{ userName }!!!\n\n.addLog\n    | 新增Log\n    .currentYear #{ currentYear }年\n    input(type=\"text\" placeholder=\"请输入月份\")\n    button.create Create\n\n.logList\n    | 查看过往的Log\n    button.view View\n");
}
};
},{"jade/runtime":14}],4:[function(require,module,exports){
var $        = require('jquery')
var Backbone = require('backbone');
var template = require("./dashboard.jade");

var userName    = null;
var currentYear = null;
var renderData  = {};

module.exports = Backbone.View.extend({
    className : 'dashboard',

    events: {
        'click .create' : 'createLog',
        'click .view'   : 'viewLog'
    },

    initialize: function (initData) {
        userName        = initData.userName;
        this.collection = initData.collection;

        this.render();
    },

    render: function () {
        renderData.userName    = userName;
        renderData.currentYear = currentYear = new Date().getFullYear().toString();

        this.$el.html(template(renderData));

        return this;
    },

    createLog: function (e) {
        var inputMonth   = parseInt(this.$el.find('input').val(), 10);
        var logRouteArr  = [userName, currentYear];
        var logListItems = [currentYear];

        if(inputMonth < 10){
            inputMonth = '0' + inputMonth;
        }else{
            inputMonth = inputMonth.toString();
        }

        logRouteArr.push(inputMonth);
        logListItems.push(inputMonth);

        this.collection.create({ logTime: logListItems.join('-')});

        Backbone.history.navigate(logRouteArr.join('/'), { trigger: true});
    }


});

},{"./dashboard.jade":3,"backbone":"backbone","jquery":"jquery"}],5:[function(require,module,exports){
var jade = require("jade/runtime");

module.exports = function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "/Users/levblanc/projects/task-log/app/components/home/home.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
jade_debug.unshift(new jade.DebugItem( 0, "/Users/levblanc/projects/task-log/app/components/home/home.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "/Users/levblanc/projects/task-log/app/components/home/home.jade" ));
buf.push("\n<p class=\"salutation\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 1, jade_debug[0].filename ));
buf.push("Welcome Dear Master!");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 3, "/Users/levblanc/projects/task-log/app/components/home/home.jade" ));
buf.push("\n<div class=\"nameInput\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, "/Users/levblanc/projects/task-log/app/components/home/home.jade" ));
buf.push("\n  <input type=\"text\" placeholder=\"请告诉我您的英文名或名字拼音\"/>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 5, "/Users/levblanc/projects/task-log/app/components/home/home.jade" ));
buf.push("\n  <button>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, jade_debug[0].filename ));
buf.push("OK");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "p.salutation Welcome Dear Master!\n\n.nameInput\n    input(type=\"text\" placeholder=\"请告诉我您的英文名或名字拼音\")\n    button OK\n");
}
};
},{"jade/runtime":14}],6:[function(require,module,exports){
var $         = require('jquery');
var Backbone  = require('backbone');
var template  = require("./home.jade");
var UserModel = require('../../shared/collections/user').model;


module.exports = Backbone.View.extend({
    className : 'welcomePanel',

    events: {
        'click button': 'nameConfirm'
    },

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(template());
        return this;
    },

    nameConfirm: function (e) {
        var userData  = {};
        var userName  = this.$el.find('input').val();
        var userRoute = '';

        userData.userName = userName;
        userRoute += userName;

        this.collection.create(userData);

        Backbone.history.navigate(userRoute, { trigger: true });
    }
});

},{"../../shared/collections/user":11,"./home.jade":5,"backbone":"backbone","jquery":"jquery"}],7:[function(require,module,exports){
var jade = require("jade/runtime");

module.exports = function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "/Users/levblanc/projects/task-log/app/components/monthLog/logItem.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (content, logId, logNo) {
var jade_indent = [];
jade_debug.unshift(new jade.DebugItem( 0, "/Users/levblanc/projects/task-log/app/components/monthLog/logItem.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "/Users/levblanc/projects/task-log/app/components/monthLog/logItem.jade" ));
buf.push("\n<tr>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "/Users/levblanc/projects/task-log/app/components/monthLog/logItem.jade" ));
buf.push("\n  <td class=\"logNo\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, jade_debug[0].filename ));
buf.push("" + (jade.escape((jade_interp =  logNo ) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 3, "/Users/levblanc/projects/task-log/app/components/monthLog/logItem.jade" ));
buf.push("\n  <td class=\"logContent\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, jade_debug[0].filename ));
buf.push("" + (jade.escape((jade_interp =  content ) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 4, "/Users/levblanc/projects/task-log/app/components/monthLog/logItem.jade" ));
buf.push("\n  <td class=\"logStatus\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, jade_debug[0].filename ));
buf.push("完成");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 5, "/Users/levblanc/projects/task-log/app/components/monthLog/logItem.jade" ));
buf.push("\n  <td" + (jade.attr("data-log-id", "" + ( logId ) + "", true, false)) + " class=\"delete\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, jade_debug[0].filename ));
buf.push("Delete");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</tr>");
jade_debug.shift();
jade_debug.shift();}.call(this,"content" in locals_for_with?locals_for_with.content:typeof content!=="undefined"?content:undefined,"logId" in locals_for_with?locals_for_with.logId:typeof logId!=="undefined"?logId:undefined,"logNo" in locals_for_with?locals_for_with.logNo:typeof logNo!=="undefined"?logNo:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "tr\n    td.logNo #{ logNo }\n    td.logContent #{ content }\n    td.logStatus 完成\n    td.delete(data-log-id=\"#{ logId }\") Delete\n");
}
};
},{"jade/runtime":14}],8:[function(require,module,exports){
var jade = require("jade/runtime");

module.exports = function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (Array, month, userName, year) {
var jade_indent = [];
jade_debug.unshift(new jade.DebugItem( 0, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
var outputUrlArr = new Array(userName, year, month);
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 2, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
var outputUrl = '/output-tasklog/' + outputUrlArr.join('/');
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 4, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n<button class=\"home\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, jade_debug[0].filename ));
buf.push("返回首页");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 6, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n<div class=\"addLog\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 7, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n  <input type=\"text\" placeholder=\"请输入工作内容\" autofocus=\"autofocus\" class=\"logInput\"/>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 8, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n  <button class=\"add\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 8, jade_debug[0].filename ));
buf.push("Add");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 10, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n<div class=\"logDetail\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 11, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n  <div class=\"logTitleWrapper\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 12, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n    <div class=\"logTitle\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 12, jade_debug[0].filename ));
buf.push("" + (jade.escape((jade_interp =  year ) == null ? '' : jade_interp)) + "年 " + (jade.escape((jade_interp =  month ) == null ? '' : jade_interp)) + "月总结");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 13, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n    <div class=\"optionsBtn\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 14, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("<a" + (jade.attr("href", outputUrl, true, false)) + " class=\"output\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 14, jade_debug[0].filename ));
buf.push("Output");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 15, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n  <table class=\"logTable\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 16, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n    <tr>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 17, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n      <th>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 17, jade_debug[0].filename ));
buf.push("序号");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 18, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n      <th>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 18, jade_debug[0].filename ));
buf.push("内容");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 19, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n      <th>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 19, jade_debug[0].filename ));
buf.push("状态");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </tr>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </table>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"Array" in locals_for_with?locals_for_with.Array:typeof Array!=="undefined"?Array:undefined,"month" in locals_for_with?locals_for_with.month:typeof month!=="undefined"?month:undefined,"userName" in locals_for_with?locals_for_with.userName:typeof userName!=="undefined"?userName:undefined,"year" in locals_for_with?locals_for_with.year:typeof year!=="undefined"?year:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "- var outputUrlArr = new Array(userName, year, month);\n- var outputUrl = '/output-tasklog/' + outputUrlArr.join('/');\n\nbutton.home 返回首页\n\n.addLog\n    input.logInput(type=\"text\" placeholder=\"请输入工作内容\" autofocus)\n    button.add Add\n    \n.logDetail\n    .logTitleWrapper\n        .logTitle #{ year }年 #{ month }月总结\n        .optionsBtn\n            a.output(href=outputUrl) Output\n    table.logTable\n        tr\n            th 序号\n            th 内容\n            th 状态\n\n        \n            \n        \n    \n");
}
};
},{"jade/runtime":14}],9:[function(require,module,exports){
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
        this.$el.html(mainTpl(logInfo));
        return this;
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

},{"./logItem.jade":7,"./monthLog.jade":8,"backbone":"backbone","jquery":"jquery","underscore":"underscore"}],10:[function(require,module,exports){
var $ = require('jquery');
var Backbone = require('backbone');
var taskLog = {};

var modelSchema = {
     "logNo"  : null,
     "content": "",
     "time"   : "",
     "status" : "完成"
 };

taskLog.model = Backbone.Model.extend({
    defaults: modelSchema,
    validate: function (attr, opts) {
        // body...
    }
});

taskLog.collection = Backbone.Collection.extend({
    model: taskLog.model,
    url  : function () {
        return '/task-log' + location.pathname;
    }
});

module.exports = taskLog;

},{"backbone":"backbone","jquery":"jquery"}],11:[function(require,module,exports){
var $ = require('jquery');
var Backbone = require('backbone');
var user = {};


user.model = Backbone.Model.extend({
    validate: function (attrs, opts) {
        if(attrs.userName && typeof attrs.userName !== 'string'){
            return 'value of userName should be a String';
        }
    }
});

user.collection = Backbone.Collection.extend({
    model: user.model,
    url  : '/user'
});

module.exports = user;

},{"backbone":"backbone","jquery":"jquery"}],12:[function(require,module,exports){
var $ = require('jquery');
var Backbone = require('backbone');
var userLogList = {};

userLogList.model = Backbone.Model.extend({
    defaults: {
        userId : null,
        logTime: ""
    },
    validate: function (attr, opts) {
        // body...
    }
});

userLogList.collection = Backbone.Collection.extend({
    model: userLogList.model,
    url  : function () {
        return '/user-loglist' + location.pathname;
    }
});

module.exports = userLogList;

},{"backbone":"backbone","jquery":"jquery"}],13:[function(require,module,exports){

},{}],14:[function(require,module,exports){
(function (global){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.jade = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = function merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = merge(attrs, a[i]);
    }
    return attrs;
  }
  var ac = a['class'];
  var bc = b['class'];

  if (ac || bc) {
    ac = ac || [];
    bc = bc || [];
    if (!Array.isArray(ac)) ac = [ac];
    if (!Array.isArray(bc)) bc = [bc];
    a['class'] = ac.concat(bc).filter(nulls);
  }

  for (var key in b) {
    if (key != 'class') {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Filter null `val`s.
 *
 * @param {*} val
 * @return {Boolean}
 * @api private
 */

function nulls(val) {
  return val != null && val !== '';
}

/**
 * join array as classes.
 *
 * @param {*} val
 * @return {String}
 */
exports.joinClasses = joinClasses;
function joinClasses(val) {
  return (Array.isArray(val) ? val.map(joinClasses) :
    (val && typeof val === 'object') ? Object.keys(val).filter(function (key) { return val[key]; }) :
    [val]).filter(nulls).join(' ');
}

/**
 * Render the given classes.
 *
 * @param {Array} classes
 * @param {Array.<Boolean>} escaped
 * @return {String}
 */
exports.cls = function cls(classes, escaped) {
  var buf = [];
  for (var i = 0; i < classes.length; i++) {
    if (escaped && escaped[i]) {
      buf.push(exports.escape(joinClasses([classes[i]])));
    } else {
      buf.push(joinClasses(classes[i]));
    }
  }
  var text = joinClasses(buf);
  if (text.length) {
    return ' class="' + text + '"';
  } else {
    return '';
  }
};


exports.style = function (val) {
  if (val && typeof val === 'object') {
    return Object.keys(val).map(function (style) {
      return style + ':' + val[style];
    }).join(';');
  } else {
    return val;
  }
};
/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = function attr(key, val, escaped, terse) {
  if (key === 'style') {
    val = exports.style(val);
  }
  if ('boolean' == typeof val || null == val) {
    if (val) {
      return ' ' + (terse ? key : key + '="' + key + '"');
    } else {
      return '';
    }
  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
    if (JSON.stringify(val).indexOf('&') !== -1) {
      console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' +
                   'will be escaped to `&amp;`');
    };
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will eliminate the double quotes around dates in ' +
                   'ISO form after 2.0.0');
    }
    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
  } else if (escaped) {
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will stringify dates in ISO form after 2.0.0');
    }
    return ' ' + key + '="' + exports.escape(val) + '"';
  } else {
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will stringify dates in ISO form after 2.0.0');
    }
    return ' ' + key + '="' + val + '"';
  }
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} escaped
 * @return {String}
 */
exports.attrs = function attrs(obj, terse){
  var buf = [];

  var keys = Object.keys(obj);

  if (keys.length) {
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i]
        , val = obj[key];

      if ('class' == key) {
        if (val = joinClasses(val)) {
          buf.push(' ' + key + '="' + val + '"');
        }
      } else {
        buf.push(exports.attr(key, val, false, terse));
      }
    }
  }

  return buf.join('');
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var jade_encode_html_rules = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;'
};
var jade_match_html = /[&<>"]/g;

function jade_encode_char(c) {
  return jade_encode_html_rules[c] || c;
}

exports.escape = jade_escape;
function jade_escape(html){
  var result = String(html).replace(jade_match_html, jade_encode_char);
  if (result === '' + html) return html;
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the jade in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @api private
 */

exports.rethrow = function rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || require('fs').readFileSync(filename, 'utf8')
  } catch (ex) {
    rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};

exports.DebugItem = function DebugItem(lineno, filename) {
  this.lineno = lineno;
  this.filename = filename;
}

},{"fs":2}],2:[function(require,module,exports){

},{}]},{},[1])(1)
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"fs":13}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXNzZXRzL2pzL2FwcC5qcyIsImFwcC9hc3NldHMvanMvcm91dGVyLmpzIiwiYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5qYWRlIiwiYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZFZpZXcuanMiLCJhcHAvY29tcG9uZW50cy9ob21lL2hvbWUuamFkZSIsImFwcC9jb21wb25lbnRzL2hvbWUvaG9tZVZpZXcuanMiLCJhcHAvY29tcG9uZW50cy9tb250aExvZy9sb2dJdGVtLmphZGUiLCJhcHAvY29tcG9uZW50cy9tb250aExvZy9tb250aExvZy5qYWRlIiwiYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbW9udGhMb2dWaWV3LmpzIiwiYXBwL3NoYXJlZC9jb2xsZWN0aW9ucy90YXNrTG9nLmpzIiwiYXBwL3NoYXJlZC9jb2xsZWN0aW9ucy91c2VyLmpzIiwiYXBwL3NoYXJlZC9jb2xsZWN0aW9ucy91c2VyTG9nTGlzdC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXJlc29sdmUvZW1wdHkuanMiLCJub2RlX21vZHVsZXMvamFkZS9ydW50aW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBCYWNrYm9uZSA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG52YXIgUm91dGVyID0gcmVxdWlyZSgnLi9yb3V0ZXInKTtcbnZhciBhcHBSb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5cbkJhY2tib25lLmhpc3Rvcnkuc3RhcnQoeyBwdXNoU3RhdGU6IHRydWUgfSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xudmFyIEJhY2tib25lID0gcmVxdWlyZSgnYmFja2JvbmUnKTtcblxuQmFja2JvbmUuJCA9ICQ7XG5cbnZhciBIb21lVmlldyAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLi8uLi9jb21wb25lbnRzL2hvbWUvaG9tZVZpZXcnKTtcbnZhciBEYXNoYm9hcmRWaWV3ICAgICAgICAgPSByZXF1aXJlKCcuLi8uLi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmRWaWV3Jyk7XG52YXIgTW9udGhMb2dWaWV3ICAgICAgICAgID0gcmVxdWlyZSgnLi4vLi4vY29tcG9uZW50cy9tb250aExvZy9tb250aExvZ1ZpZXcnKTtcbnZhciBVc2VyQ29sbGVjdGlvbiAgICAgICAgPSByZXF1aXJlKCcuLi8uLi9zaGFyZWQvY29sbGVjdGlvbnMvdXNlcicpLmNvbGxlY3Rpb247XG52YXIgVGFza0xvZ0NvbGxlY3Rpb24gICAgID0gcmVxdWlyZSgnLi4vLi4vc2hhcmVkL2NvbGxlY3Rpb25zL3Rhc2tMb2cnKS5jb2xsZWN0aW9uO1xudmFyIFVzZXJMb2dMaXN0Q29sbGVjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL3NoYXJlZC9jb2xsZWN0aW9ucy91c2VyTG9nTGlzdCcpLmNvbGxlY3Rpb247XG5cbnZhciB1c2VyQ29sbGVjdGlvbiAgICAgICAgPSBuZXcgVXNlckNvbGxlY3Rpb24oKTtcbnZhciB0YXNrTG9nQ29sbGVjdGlvbiAgICAgPSBuZXcgVGFza0xvZ0NvbGxlY3Rpb24oKTtcbnZhciB1c2VyTG9nTGlzdENvbGxlY3Rpb24gPSBuZXcgVXNlckxvZ0xpc3RDb2xsZWN0aW9uKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gQmFja2JvbmUuUm91dGVyLmV4dGVuZCh7XG4gICAgcm91dGVzOiB7XG4gICAgICAgICcnIDogJ2hvbWUnLFxuICAgICAgICAnOnVzZXJOYW1lJzogJ3VzZXJEYXNoYm9hcmQnLFxuICAgICAgICAnOnVzZXJOYW1lLzp5ZWFyLzptb250aCc6ICd1c2VyTW9udGhMb2cnLFxuICAgICAgICAnb3V0cHV0LXRhc2tsb2cvOnVzZXJuYW1lLzp5ZWFyLzptb250aCc6ICdvdXRwdXRUYXNrTG9nJ1xuICAgIH0sXG5cbiAgICBob21lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUuZGlyKCdpbiBob21lIHZpZXcnKTtcbiAgICAgICAgLy8gVG9EbzpcbiAgICAgICAgLy8g6KKr6K+35rGC5pe277yM5YWI5qOA5rWLZGLph4zpnaLmmK/lkKblt7Lnu4/mnIl1c2VyXG4gICAgICAgIC8vIOiLpeacie+8jOeri+WIu+i3s+i9rOWIsOWvueW6lHVzZXLnmoREYXNoYm9hcmRcbiAgICAgICAgLy8g5rKh5pyJ77yM5omN5pi+56S66aaW6aG16K+35rGCdXNlcuWQjeensFxuICAgICAgICB2YXIgaG9tZVZpZXcgID0gbmV3IEhvbWVWaWV3KHsgY29sbGVjdGlvbjogdXNlckNvbGxlY3Rpb24gfSk7XG5cbiAgICAgICAgJCgnI21haW4nKS5lbXB0eSgpLmFwcGVuZChob21lVmlldy4kZWwpO1xuICAgIH0sXG5cbiAgICB1c2VyRGFzaGJvYXJkOiBmdW5jdGlvbiAodXNlck5hbWUpIHtcbiAgICAgICAgY29uc29sZS5kaXIoXCJpbiBcIiAgKyB1c2VyTmFtZSArICBcIidzIGRhc2hib2FyZFwiKTtcblxuICAgICAgICB2YXIgaW5pdERhdGEgPSB7XG4gICAgICAgICAgICBjb2xsZWN0aW9uIDogdXNlckxvZ0xpc3RDb2xsZWN0aW9uLFxuICAgICAgICAgICAgdXNlck5hbWUgICA6IHVzZXJOYW1lXG4gICAgICAgIH07XG4gICAgICAgIHZhciBkYXNoYm9hcmRWaWV3ID0gbmV3IERhc2hib2FyZFZpZXcoaW5pdERhdGEpO1xuXG4gICAgICAgICQoJyNtYWluJykuZW1wdHkoKS5hcHBlbmQoZGFzaGJvYXJkVmlldy4kZWwpO1xuICAgIH0sXG5cbiAgICB1c2VyTW9udGhMb2c6IGZ1bmN0aW9uICh1c2VyTmFtZSwgeWVhciwgbW9udGgpIHtcbiAgICAgICAgY29uc29sZS5kaXIoXCJpbiBcIiAgKyB1c2VyTmFtZSArICBcIidzIFwiICsgeWVhciArIG1vbnRoICsgXCIgbG9nXCIpO1xuXG4gICAgICAgIHZhciBsb2dJbmZvID0ge1xuICAgICAgICAgICAgdXNlck5hbWUgOiB1c2VyTmFtZSxcbiAgICAgICAgICAgIHllYXIgICAgIDogeWVhcixcbiAgICAgICAgICAgIG1vbnRoICAgIDogbW9udGhcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGluaXREYXRhID0ge1xuICAgICAgICAgICAgY29sbGVjdGlvbiA6IHRhc2tMb2dDb2xsZWN0aW9uLFxuICAgICAgICAgICAgbG9nSW5mbyAgICA6IGxvZ0luZm9cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgbW9udGhMb2dWaWV3ID0gbmV3IE1vbnRoTG9nVmlldyhpbml0RGF0YSk7XG5cbiAgICAgICAgJCgnI21haW4nKS5lbXB0eSgpLmFwcGVuZChtb250aExvZ1ZpZXcuJGVsKTtcbiAgICB9LFxuXG4gICAgb3V0cHV0VGFza0xvZzogZnVuY3Rpb24gKHVzZXJOYW1lLCB5ZWFyLCBtb250aCkge1xuICAgICAgICBjb25zb2xlLmRpcihcIm91dHB1dGluZyBcIiArIHVzZXJOYW1lICsgXCIncyBsb2cgb2YgXCIgKyB5ZWFyICsgXCItXCIgKyBtb250aCk7XG4gICAgfVxuXG59KTtcbiIsInZhciBqYWRlID0gcmVxdWlyZShcImphZGUvcnVudGltZVwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHtcbnZhciBqYWRlX2RlYnVnID0gWyBuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuamFkZVwiICkgXTtcbnRyeSB7XG52YXIgYnVmID0gW107XG52YXIgamFkZV9taXhpbnMgPSB7fTtcbnZhciBqYWRlX2ludGVycDtcbjt2YXIgbG9jYWxzX2Zvcl93aXRoID0gKGxvY2FscyB8fCB7fSk7KGZ1bmN0aW9uIChjdXJyZW50WWVhciwgdXNlck5hbWUpIHtcbnZhciBqYWRlX2luZGVudCA9IFtdO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMCwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5qYWRlXCIgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuPHA+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMSwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiIFdlbGNvbWUgTWFzdGVyIFwiICsgKGphZGUuZXNjYXBlKChqYWRlX2ludGVycCA9ICB1c2VyTmFtZSApID09IG51bGwgPyAnJyA6IGphZGVfaW50ZXJwKSkgKyBcIiEhIVwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC9wPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDMsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG48ZGl2IGNsYXNzPVxcXCJhZGRMb2dcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDQsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuamFkZVwiICkpO1xuYnVmLnB1c2goXCLmlrDlop5Mb2dcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA1LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICA8ZGl2IGNsYXNzPVxcXCJjdXJyZW50WWVhclxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNSwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiXCIgKyAoamFkZS5lc2NhcGUoKGphZGVfaW50ZXJwID0gIGN1cnJlbnRZZWFyICkgPT0gbnVsbCA/ICcnIDogamFkZV9pbnRlcnApKSArIFwi5bm0XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L2Rpdj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA2LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIuivt+i+k+WFpeaciOS7vVxcXCIvPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDcsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG4gIDxidXR0b24gY2xhc3M9XFxcImNyZWF0ZVxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNywgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiQ3JlYXRlXCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L2J1dHRvbj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIlxcbjwvZGl2PlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDksIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG48ZGl2IGNsYXNzPVxcXCJsb2dMaXN0XFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxMCwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5qYWRlXCIgKSk7XG5idWYucHVzaChcIuafpeeci+i/h+W+gOeahExvZ1wiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDExLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICA8YnV0dG9uIGNsYXNzPVxcXCJ2aWV3XFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxMSwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiVmlld1wiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC9idXR0b24+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCJcXG48L2Rpdj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7fS5jYWxsKHRoaXMsXCJjdXJyZW50WWVhclwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGguY3VycmVudFllYXI6dHlwZW9mIGN1cnJlbnRZZWFyIT09XCJ1bmRlZmluZWRcIj9jdXJyZW50WWVhcjp1bmRlZmluZWQsXCJ1c2VyTmFtZVwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGgudXNlck5hbWU6dHlwZW9mIHVzZXJOYW1lIT09XCJ1bmRlZmluZWRcIj91c2VyTmFtZTp1bmRlZmluZWQpKTs7cmV0dXJuIGJ1Zi5qb2luKFwiXCIpO1xufSBjYXRjaCAoZXJyKSB7XG4gIGphZGUucmV0aHJvdyhlcnIsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUsIGphZGVfZGVidWdbMF0ubGluZW5vLCBcInAgIFdlbGNvbWUgTWFzdGVyICN7IHVzZXJOYW1lIH0hISFcXG5cXG4uYWRkTG9nXFxuICAgIHwg5paw5aKeTG9nXFxuICAgIC5jdXJyZW50WWVhciAjeyBjdXJyZW50WWVhciB95bm0XFxuICAgIGlucHV0KHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCLor7fovpPlhaXmnIjku71cXFwiKVxcbiAgICBidXR0b24uY3JlYXRlIENyZWF0ZVxcblxcbi5sb2dMaXN0XFxuICAgIHwg5p+l55yL6L+H5b6A55qETG9nXFxuICAgIGJ1dHRvbi52aWV3IFZpZXdcXG5cIik7XG59XG59OyIsInZhciAkICAgICAgICA9IHJlcXVpcmUoJ2pxdWVyeScpXG52YXIgQmFja2JvbmUgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIHRlbXBsYXRlID0gcmVxdWlyZShcIi4vZGFzaGJvYXJkLmphZGVcIik7XG5cbnZhciB1c2VyTmFtZSAgICA9IG51bGw7XG52YXIgY3VycmVudFllYXIgPSBudWxsO1xudmFyIHJlbmRlckRhdGEgID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gQmFja2JvbmUuVmlldy5leHRlbmQoe1xuICAgIGNsYXNzTmFtZSA6ICdkYXNoYm9hcmQnLFxuXG4gICAgZXZlbnRzOiB7XG4gICAgICAgICdjbGljayAuY3JlYXRlJyA6ICdjcmVhdGVMb2cnLFxuICAgICAgICAnY2xpY2sgLnZpZXcnICAgOiAndmlld0xvZydcbiAgICB9LFxuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKGluaXREYXRhKSB7XG4gICAgICAgIHVzZXJOYW1lICAgICAgICA9IGluaXREYXRhLnVzZXJOYW1lO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSBpbml0RGF0YS5jb2xsZWN0aW9uO1xuXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZW5kZXJEYXRhLnVzZXJOYW1lICAgID0gdXNlck5hbWU7XG4gICAgICAgIHJlbmRlckRhdGEuY3VycmVudFllYXIgPSBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xuXG4gICAgICAgIHRoaXMuJGVsLmh0bWwodGVtcGxhdGUocmVuZGVyRGF0YSkpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBjcmVhdGVMb2c6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBpbnB1dE1vbnRoICAgPSBwYXJzZUludCh0aGlzLiRlbC5maW5kKCdpbnB1dCcpLnZhbCgpLCAxMCk7XG4gICAgICAgIHZhciBsb2dSb3V0ZUFyciAgPSBbdXNlck5hbWUsIGN1cnJlbnRZZWFyXTtcbiAgICAgICAgdmFyIGxvZ0xpc3RJdGVtcyA9IFtjdXJyZW50WWVhcl07XG5cbiAgICAgICAgaWYoaW5wdXRNb250aCA8IDEwKXtcbiAgICAgICAgICAgIGlucHV0TW9udGggPSAnMCcgKyBpbnB1dE1vbnRoO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlucHV0TW9udGggPSBpbnB1dE1vbnRoLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsb2dSb3V0ZUFyci5wdXNoKGlucHV0TW9udGgpO1xuICAgICAgICBsb2dMaXN0SXRlbXMucHVzaChpbnB1dE1vbnRoKTtcblxuICAgICAgICB0aGlzLmNvbGxlY3Rpb24uY3JlYXRlKHsgbG9nVGltZTogbG9nTGlzdEl0ZW1zLmpvaW4oJy0nKX0pO1xuXG4gICAgICAgIEJhY2tib25lLmhpc3RvcnkubmF2aWdhdGUobG9nUm91dGVBcnIuam9pbignLycpLCB7IHRyaWdnZXI6IHRydWV9KTtcbiAgICB9XG5cblxufSk7XG4iLCJ2YXIgamFkZSA9IHJlcXVpcmUoXCJqYWRlL3J1bnRpbWVcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7XG52YXIgamFkZV9kZWJ1ZyA9IFsgbmV3IGphZGUuRGVidWdJdGVtKCAxLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuamFkZVwiICkgXTtcbnRyeSB7XG52YXIgYnVmID0gW107XG52YXIgamFkZV9taXhpbnMgPSB7fTtcbnZhciBqYWRlX2ludGVycDtcblxudmFyIGphZGVfaW5kZW50ID0gW107XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAwLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuamFkZVwiICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMSwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuPHAgY2xhc3M9XFxcInNhbHV0YXRpb25cXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIldlbGNvbWUgRGVhciBNYXN0ZXIhXCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L3A+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMywgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuPGRpdiBjbGFzcz1cXFwibmFtZUlucHV0XFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA0LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG4gIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwi6K+35ZGK6K+J5oiR5oKo55qE6Iux5paH5ZCN5oiW5ZCN5a2X5ou86Z+zXFxcIi8+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNSwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICA8YnV0dG9uPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDUsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIk9LXCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L2J1dHRvbj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIlxcbjwvZGl2PlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTs7cmV0dXJuIGJ1Zi5qb2luKFwiXCIpO1xufSBjYXRjaCAoZXJyKSB7XG4gIGphZGUucmV0aHJvdyhlcnIsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUsIGphZGVfZGVidWdbMF0ubGluZW5vLCBcInAuc2FsdXRhdGlvbiBXZWxjb21lIERlYXIgTWFzdGVyIVxcblxcbi5uYW1lSW5wdXRcXG4gICAgaW5wdXQodHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIuivt+WRiuivieaIkeaCqOeahOiLseaWh+WQjeaIluWQjeWtl+aLvOmfs1xcXCIpXFxuICAgIGJ1dHRvbiBPS1xcblwiKTtcbn1cbn07IiwidmFyICQgICAgICAgICA9IHJlcXVpcmUoJ2pxdWVyeScpO1xudmFyIEJhY2tib25lICA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG52YXIgdGVtcGxhdGUgID0gcmVxdWlyZShcIi4vaG9tZS5qYWRlXCIpO1xudmFyIFVzZXJNb2RlbCA9IHJlcXVpcmUoJy4uLy4uL3NoYXJlZC9jb2xsZWN0aW9ucy91c2VyJykubW9kZWw7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBCYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG4gICAgY2xhc3NOYW1lIDogJ3dlbGNvbWVQYW5lbCcsXG5cbiAgICBldmVudHM6IHtcbiAgICAgICAgJ2NsaWNrIGJ1dHRvbic6ICduYW1lQ29uZmlybSdcbiAgICB9LFxuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kZWwuaHRtbCh0ZW1wbGF0ZSgpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIG5hbWVDb25maXJtOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdXNlckRhdGEgID0ge307XG4gICAgICAgIHZhciB1c2VyTmFtZSAgPSB0aGlzLiRlbC5maW5kKCdpbnB1dCcpLnZhbCgpO1xuICAgICAgICB2YXIgdXNlclJvdXRlID0gJyc7XG5cbiAgICAgICAgdXNlckRhdGEudXNlck5hbWUgPSB1c2VyTmFtZTtcbiAgICAgICAgdXNlclJvdXRlICs9IHVzZXJOYW1lO1xuXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbi5jcmVhdGUodXNlckRhdGEpO1xuXG4gICAgICAgIEJhY2tib25lLmhpc3RvcnkubmF2aWdhdGUodXNlclJvdXRlLCB7IHRyaWdnZXI6IHRydWUgfSk7XG4gICAgfVxufSk7XG4iLCJ2YXIgamFkZSA9IHJlcXVpcmUoXCJqYWRlL3J1bnRpbWVcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7XG52YXIgamFkZV9kZWJ1ZyA9IFsgbmV3IGphZGUuRGVidWdJdGVtKCAxLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9tb250aExvZy9sb2dJdGVtLmphZGVcIiApIF07XG50cnkge1xudmFyIGJ1ZiA9IFtdO1xudmFyIGphZGVfbWl4aW5zID0ge307XG52YXIgamFkZV9pbnRlcnA7XG47dmFyIGxvY2Fsc19mb3Jfd2l0aCA9IChsb2NhbHMgfHwge30pOyhmdW5jdGlvbiAoY29udGVudCwgbG9nSWQsIGxvZ05vKSB7XG52YXIgamFkZV9pbmRlbnQgPSBbXTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDAsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL2xvZ0l0ZW0uamFkZVwiICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMSwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbG9nSXRlbS5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbjx0cj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAyLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9tb250aExvZy9sb2dJdGVtLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICA8dGQgY2xhc3M9XFxcImxvZ05vXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAyLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCJcIiArIChqYWRlLmVzY2FwZSgoamFkZV9pbnRlcnAgPSAgbG9nTm8gKSA9PSBudWxsID8gJycgOiBqYWRlX2ludGVycCkpICsgXCJcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvdGQ+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMywgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbG9nSXRlbS5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbiAgPHRkIGNsYXNzPVxcXCJsb2dDb250ZW50XFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAzLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCJcIiArIChqYWRlLmVzY2FwZSgoamFkZV9pbnRlcnAgPSAgY29udGVudCApID09IG51bGwgPyAnJyA6IGphZGVfaW50ZXJwKSkgKyBcIlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC90ZD5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA0LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9tb250aExvZy9sb2dJdGVtLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICA8dGQgY2xhc3M9XFxcImxvZ1N0YXR1c1xcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwi5a6M5oiQXCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L3RkPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDUsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL2xvZ0l0ZW0uamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG4gIDx0ZFwiICsgKGphZGUuYXR0cihcImRhdGEtbG9nLWlkXCIsIFwiXCIgKyAoIGxvZ0lkICkgKyBcIlwiLCB0cnVlLCBmYWxzZSkpICsgXCIgY2xhc3M9XFxcImRlbGV0ZVxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNSwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiRGVsZXRlXCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L3RkPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiXFxuPC90cj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7fS5jYWxsKHRoaXMsXCJjb250ZW50XCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5jb250ZW50OnR5cGVvZiBjb250ZW50IT09XCJ1bmRlZmluZWRcIj9jb250ZW50OnVuZGVmaW5lZCxcImxvZ0lkXCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5sb2dJZDp0eXBlb2YgbG9nSWQhPT1cInVuZGVmaW5lZFwiP2xvZ0lkOnVuZGVmaW5lZCxcImxvZ05vXCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5sb2dObzp0eXBlb2YgbG9nTm8hPT1cInVuZGVmaW5lZFwiP2xvZ05vOnVuZGVmaW5lZCkpOztyZXR1cm4gYnVmLmpvaW4oXCJcIik7XG59IGNhdGNoIChlcnIpIHtcbiAgamFkZS5yZXRocm93KGVyciwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSwgamFkZV9kZWJ1Z1swXS5saW5lbm8sIFwidHJcXG4gICAgdGQubG9nTm8gI3sgbG9nTm8gfVxcbiAgICB0ZC5sb2dDb250ZW50ICN7IGNvbnRlbnQgfVxcbiAgICB0ZC5sb2dTdGF0dXMg5a6M5oiQXFxuICAgIHRkLmRlbGV0ZShkYXRhLWxvZy1pZD1cXFwiI3sgbG9nSWQgfVxcXCIpIERlbGV0ZVxcblwiKTtcbn1cbn07IiwidmFyIGphZGUgPSByZXF1aXJlKFwiamFkZS9ydW50aW1lXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge1xudmFyIGphZGVfZGVidWcgPSBbIG5ldyBqYWRlLkRlYnVnSXRlbSggMSwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbW9udGhMb2cuamFkZVwiICkgXTtcbnRyeSB7XG52YXIgYnVmID0gW107XG52YXIgamFkZV9taXhpbnMgPSB7fTtcbnZhciBqYWRlX2ludGVycDtcbjt2YXIgbG9jYWxzX2Zvcl93aXRoID0gKGxvY2FscyB8fCB7fSk7KGZ1bmN0aW9uIChBcnJheSwgbW9udGgsIHVzZXJOYW1lLCB5ZWFyKSB7XG52YXIgamFkZV9pbmRlbnQgPSBbXTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDAsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbnZhciBvdXRwdXRVcmxBcnIgPSBuZXcgQXJyYXkodXNlck5hbWUsIHllYXIsIG1vbnRoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDIsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbnZhciBvdXRwdXRVcmwgPSAnL291dHB1dC10YXNrbG9nLycgKyBvdXRwdXRVcmxBcnIuam9pbignLycpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNCwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbW9udGhMb2cuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG48YnV0dG9uIGNsYXNzPVxcXCJob21lXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA0LCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCLov5Tlm57pppbpobVcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvYnV0dG9uPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDYsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuPGRpdiBjbGFzcz1cXFwiYWRkTG9nXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA3LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9tb250aExvZy9tb250aExvZy5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbiAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCLor7fovpPlhaXlt6XkvZzlhoXlrrlcXFwiIGF1dG9mb2N1cz1cXFwiYXV0b2ZvY3VzXFxcIiBjbGFzcz1cXFwibG9nSW5wdXRcXFwiLz5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA4LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9tb250aExvZy9tb250aExvZy5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbiAgPGJ1dHRvbiBjbGFzcz1cXFwiYWRkXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA4LCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCJBZGRcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvYnV0dG9uPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiXFxuPC9kaXY+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMTAsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuPGRpdiBjbGFzcz1cXFwibG9nRGV0YWlsXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxMSwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbW9udGhMb2cuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG4gIDxkaXYgY2xhc3M9XFxcImxvZ1RpdGxlV3JhcHBlclxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMTIsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICAgIDxkaXYgY2xhc3M9XFxcImxvZ1RpdGxlXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxMiwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiXCIgKyAoamFkZS5lc2NhcGUoKGphZGVfaW50ZXJwID0gIHllYXIgKSA9PSBudWxsID8gJycgOiBqYWRlX2ludGVycCkpICsgXCLlubQgXCIgKyAoamFkZS5lc2NhcGUoKGphZGVfaW50ZXJwID0gIG1vbnRoICkgPT0gbnVsbCA/ICcnIDogamFkZV9pbnRlcnApKSArIFwi5pyI5oC757uTXCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L2Rpdj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxMywgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbW9udGhMb2cuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG4gICAgPGRpdiBjbGFzcz1cXFwib3B0aW9uc0J0blxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMTQsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiPGFcIiArIChqYWRlLmF0dHIoXCJocmVmXCIsIG91dHB1dFVybCwgdHJ1ZSwgZmFsc2UpKSArIFwiIGNsYXNzPVxcXCJvdXRwdXRcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDE0LCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCJPdXRwdXRcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvYT5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvZGl2PlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiXFxuICA8L2Rpdj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxNSwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbW9udGhMb2cuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG4gIDx0YWJsZSBjbGFzcz1cXFwibG9nVGFibGVcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDE2LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9tb250aExvZy9tb250aExvZy5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbiAgICA8dHI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMTcsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICAgICAgPHRoPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDE3LCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCLluo/lj7dcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvdGg+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMTgsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICAgICAgPHRoPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDE4LCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCLlhoXlrrlcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvdGg+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMTksIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICAgICAgPHRoPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDE5LCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCLnirbmgIFcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvdGg+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCJcXG4gICAgPC90cj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIlxcbiAgPC90YWJsZT5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIlxcbjwvZGl2PlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTt9LmNhbGwodGhpcyxcIkFycmF5XCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5BcnJheTp0eXBlb2YgQXJyYXkhPT1cInVuZGVmaW5lZFwiP0FycmF5OnVuZGVmaW5lZCxcIm1vbnRoXCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5tb250aDp0eXBlb2YgbW9udGghPT1cInVuZGVmaW5lZFwiP21vbnRoOnVuZGVmaW5lZCxcInVzZXJOYW1lXCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC51c2VyTmFtZTp0eXBlb2YgdXNlck5hbWUhPT1cInVuZGVmaW5lZFwiP3VzZXJOYW1lOnVuZGVmaW5lZCxcInllYXJcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLnllYXI6dHlwZW9mIHllYXIhPT1cInVuZGVmaW5lZFwiP3llYXI6dW5kZWZpbmVkKSk7O3JldHVybiBidWYuam9pbihcIlwiKTtcbn0gY2F0Y2ggKGVycikge1xuICBqYWRlLnJldGhyb3coZXJyLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lLCBqYWRlX2RlYnVnWzBdLmxpbmVubywgXCItIHZhciBvdXRwdXRVcmxBcnIgPSBuZXcgQXJyYXkodXNlck5hbWUsIHllYXIsIG1vbnRoKTtcXG4tIHZhciBvdXRwdXRVcmwgPSAnL291dHB1dC10YXNrbG9nLycgKyBvdXRwdXRVcmxBcnIuam9pbignLycpO1xcblxcbmJ1dHRvbi5ob21lIOi/lOWbnummlumhtVxcblxcbi5hZGRMb2dcXG4gICAgaW5wdXQubG9nSW5wdXQodHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIuivt+i+k+WFpeW3peS9nOWGheWuuVxcXCIgYXV0b2ZvY3VzKVxcbiAgICBidXR0b24uYWRkIEFkZFxcbiAgICBcXG4ubG9nRGV0YWlsXFxuICAgIC5sb2dUaXRsZVdyYXBwZXJcXG4gICAgICAgIC5sb2dUaXRsZSAjeyB5ZWFyIH3lubQgI3sgbW9udGggfeaciOaAu+e7k1xcbiAgICAgICAgLm9wdGlvbnNCdG5cXG4gICAgICAgICAgICBhLm91dHB1dChocmVmPW91dHB1dFVybCkgT3V0cHV0XFxuICAgIHRhYmxlLmxvZ1RhYmxlXFxuICAgICAgICB0clxcbiAgICAgICAgICAgIHRoIOW6j+WPt1xcbiAgICAgICAgICAgIHRoIOWGheWuuVxcbiAgICAgICAgICAgIHRoIOeKtuaAgVxcblxcbiAgICAgICAgXFxuICAgICAgICAgICAgXFxuICAgICAgICBcXG4gICAgXFxuXCIpO1xufVxufTsiLCJ2YXIgJCAgICAgICAgPSByZXF1aXJlKCdqcXVlcnknKTtcbnZhciBfICAgICAgICA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBCYWNrYm9uZSA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG52YXIgbWFpblRwbCAgPSByZXF1aXJlKFwiLi9tb250aExvZy5qYWRlXCIpO1xudmFyIGl0ZW1UcGwgID0gcmVxdWlyZShcIi4vbG9nSXRlbS5qYWRlXCIpO1xuXG52YXIgbG9nTm8gPSAwO1xuXG5mdW5jdGlvbiBnZXRIdW1hbkRhdGUoY3VycmVudERhdGUpe1xuICAgIHZhciBodW1hbkRhdGUsIGRhdGVBcnIsIHRpbWVBcnIsIHllYXIsIG1vbnRoLCBkYXRlLCBob3VyLCBtaW4sIHNlYztcblxuICAgIHllYXIgID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBtb250aCA9IGN1cnJlbnREYXRlLmdldE1vbnRoKCk7XG4gICAgZGF0ZSAgPSBjdXJyZW50RGF0ZS5nZXREYXRlKCk7XG4gICAgZGF0ZUFyciA9IG5ldyBBcnJheSh5ZWFyLCBtb250aCwgZGF0ZSk7XG5cbiAgICBob3VyICA9IGN1cnJlbnREYXRlLmdldEhvdXJzKCk7XG4gICAgbWluICAgPSBjdXJyZW50RGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgc2VjICAgPSBjdXJyZW50RGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgdGltZUFyciA9IG5ldyBBcnJheShob3VyLCBtaW4sIHNlYyk7XG5cbiAgICBfLmVhY2goZGF0ZUFyciwgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIGlmKGl0ZW0gPCAxMCl7XG4gICAgICAgICAgICBpdGVtID0gJzAnICsgaXRlbTtcbiAgICAgICAgfVxuICAgICAgICBkYXRlQXJyW2luZGV4XSA9IGl0ZW07XG4gICAgfSk7XG5cbiAgICBfLmVhY2godGltZUFyciwgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIGlmKGl0ZW0gPCAxMCl7XG4gICAgICAgICAgICBpdGVtID0gJzAnICsgaXRlbTtcbiAgICAgICAgfVxuICAgICAgICB0aW1lQXJyW2luZGV4XSA9IGl0ZW07XG4gICAgfSk7XG5cbiAgICBodW1hbkRhdGUgPSBkYXRlQXJyLmpvaW4oJy0nKSArICcgJyArIHRpbWVBcnIuam9pbignOicpO1xuXG4gICAgcmV0dXJuIGh1bWFuRGF0ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG4gICAgY2xhc3NOYW1lIDogJ21vbnRoTG9nJyxcblxuICAgIGV2ZW50czoge1xuICAgICAgICAnY2xpY2sgLmFkZCcgICA6ICdhZGRMb2dJdGVtJyxcbiAgICAgICAgJ2NsaWNrIC5kZWxldGUnOiAnZGVsZXRlTG9nSXRlbScsXG4gICAgICAgICdjbGljayAub3V0cHV0JzogJ291dHB1dExvZydcbiAgICB9LFxuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKGluaXREYXRhKSB7XG4gICAgICAgIHRoaXMubG9nSW5mbyAgICA9IGluaXREYXRhLmxvZ0luZm87XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IGluaXREYXRhLmNvbGxlY3Rpb247XG4gICAgICAgIHRoaXMucmVuZGVyKHRoaXMubG9nSW5mbyk7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKGxvZ0luZm8pIHtcbiAgICAgICAgdGhpcy4kZWwuaHRtbChtYWluVHBsKGxvZ0luZm8pKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGFkZExvZ0l0ZW06IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBsb2dEYXRhID0ge307XG4gICAgICAgIGxvZ0RhdGEubG9nTm8gICA9ICsrbG9nTm87XG4gICAgICAgIGxvZ0RhdGEuY29udGVudCA9IHRoaXMuJGVsLmZpbmQoJy5sb2dJbnB1dCcpLnZhbCgpO1xuICAgICAgICBsb2dEYXRhLnRpbWUgICAgPSBnZXRIdW1hbkRhdGUobmV3IERhdGUoKSk7XG5cbiAgICAgICAgdGhpcy4kZWwuZmluZCgnLmxvZ1RhYmxlIHRib2R5JykuYXBwZW5kKGl0ZW1UcGwobG9nRGF0YSkpO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24uY3JlYXRlKGxvZ0RhdGEpOyAvLyB1cGRhdGUg5oiWIHN5bmM/XG4gICAgICAgIHRoaXMuJGVsLmZpbmQoJy5sb2dJbnB1dCcpLnZhbCgnJykuZm9jdXMoKTtcbiAgICB9LFxuXG4gICAgZGVsZXRlTG9nSXRlbTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5kaXIoJ3dpbGwgZGVsZXRlIGl0ZW0nKTtcbiAgICB9LFxuXG4gICAgb3V0cHV0TG9nOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmRpcignaW4gdmlldyBsb2cgb3V0cHV0IGZ1bmMnKVxuICAgICAgICB2YXIgb3V0cHV0TG9nUm91dGUgPSAnL291dHB1dC10YXNrbG9nJyArIGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgICBCYWNrYm9uZS5oaXN0b3J5Lm5hdmlnYXRlKG91dHB1dExvZ1JvdXRlLCB7IHRyaWdnZXIgOiB0cnVlIH0pO1xuICAgIH1cblxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xudmFyIEJhY2tib25lID0gcmVxdWlyZSgnYmFja2JvbmUnKTtcbnZhciB0YXNrTG9nID0ge307XG5cbnZhciBtb2RlbFNjaGVtYSA9IHtcbiAgICAgXCJsb2dOb1wiICA6IG51bGwsXG4gICAgIFwiY29udGVudFwiOiBcIlwiLFxuICAgICBcInRpbWVcIiAgIDogXCJcIixcbiAgICAgXCJzdGF0dXNcIiA6IFwi5a6M5oiQXCJcbiB9O1xuXG50YXNrTG9nLm1vZGVsID0gQmFja2JvbmUuTW9kZWwuZXh0ZW5kKHtcbiAgICBkZWZhdWx0czogbW9kZWxTY2hlbWEsXG4gICAgdmFsaWRhdGU6IGZ1bmN0aW9uIChhdHRyLCBvcHRzKSB7XG4gICAgICAgIC8vIGJvZHkuLi5cbiAgICB9XG59KTtcblxudGFza0xvZy5jb2xsZWN0aW9uID0gQmFja2JvbmUuQ29sbGVjdGlvbi5leHRlbmQoe1xuICAgIG1vZGVsOiB0YXNrTG9nLm1vZGVsLFxuICAgIHVybCAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAnL3Rhc2stbG9nJyArIGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRhc2tMb2c7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xudmFyIEJhY2tib25lID0gcmVxdWlyZSgnYmFja2JvbmUnKTtcbnZhciB1c2VyID0ge307XG5cblxudXNlci5tb2RlbCA9IEJhY2tib25lLk1vZGVsLmV4dGVuZCh7XG4gICAgdmFsaWRhdGU6IGZ1bmN0aW9uIChhdHRycywgb3B0cykge1xuICAgICAgICBpZihhdHRycy51c2VyTmFtZSAmJiB0eXBlb2YgYXR0cnMudXNlck5hbWUgIT09ICdzdHJpbmcnKXtcbiAgICAgICAgICAgIHJldHVybiAndmFsdWUgb2YgdXNlck5hbWUgc2hvdWxkIGJlIGEgU3RyaW5nJztcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG51c2VyLmNvbGxlY3Rpb24gPSBCYWNrYm9uZS5Db2xsZWN0aW9uLmV4dGVuZCh7XG4gICAgbW9kZWw6IHVzZXIubW9kZWwsXG4gICAgdXJsICA6ICcvdXNlcidcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVzZXI7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xudmFyIEJhY2tib25lID0gcmVxdWlyZSgnYmFja2JvbmUnKTtcbnZhciB1c2VyTG9nTGlzdCA9IHt9O1xuXG51c2VyTG9nTGlzdC5tb2RlbCA9IEJhY2tib25lLk1vZGVsLmV4dGVuZCh7XG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgdXNlcklkIDogbnVsbCxcbiAgICAgICAgbG9nVGltZTogXCJcIlxuICAgIH0sXG4gICAgdmFsaWRhdGU6IGZ1bmN0aW9uIChhdHRyLCBvcHRzKSB7XG4gICAgICAgIC8vIGJvZHkuLi5cbiAgICB9XG59KTtcblxudXNlckxvZ0xpc3QuY29sbGVjdGlvbiA9IEJhY2tib25lLkNvbGxlY3Rpb24uZXh0ZW5kKHtcbiAgICBtb2RlbDogdXNlckxvZ0xpc3QubW9kZWwsXG4gICAgdXJsICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICcvdXNlci1sb2dsaXN0JyArIGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVzZXJMb2dMaXN0O1xuIixudWxsLCIoZnVuY3Rpb24oZil7aWYodHlwZW9mIGV4cG9ydHM9PT1cIm9iamVjdFwiJiZ0eXBlb2YgbW9kdWxlIT09XCJ1bmRlZmluZWRcIil7bW9kdWxlLmV4cG9ydHM9ZigpfWVsc2UgaWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtdLGYpfWVsc2V7dmFyIGc7aWYodHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCIpe2c9d2luZG93fWVsc2UgaWYodHlwZW9mIGdsb2JhbCE9PVwidW5kZWZpbmVkXCIpe2c9Z2xvYmFsfWVsc2UgaWYodHlwZW9mIHNlbGYhPT1cInVuZGVmaW5lZFwiKXtnPXNlbGZ9ZWxzZXtnPXRoaXN9Zy5qYWRlID0gZigpfX0pKGZ1bmN0aW9uKCl7dmFyIGRlZmluZSxtb2R1bGUsZXhwb3J0cztyZXR1cm4gKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1lcmdlIHR3byBhdHRyaWJ1dGUgb2JqZWN0cyBnaXZpbmcgcHJlY2VkZW5jZVxuICogdG8gdmFsdWVzIGluIG9iamVjdCBgYmAuIENsYXNzZXMgYXJlIHNwZWNpYWwtY2FzZWRcbiAqIGFsbG93aW5nIGZvciBhcnJheXMgYW5kIG1lcmdpbmcvam9pbmluZyBhcHByb3ByaWF0ZWx5XG4gKiByZXN1bHRpbmcgaW4gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBiXG4gKiBAcmV0dXJuIHtPYmplY3R9IGFcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMubWVyZ2UgPSBmdW5jdGlvbiBtZXJnZShhLCBiKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgdmFyIGF0dHJzID0gYVswXTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGF0dHJzID0gbWVyZ2UoYXR0cnMsIGFbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gYXR0cnM7XG4gIH1cbiAgdmFyIGFjID0gYVsnY2xhc3MnXTtcbiAgdmFyIGJjID0gYlsnY2xhc3MnXTtcblxuICBpZiAoYWMgfHwgYmMpIHtcbiAgICBhYyA9IGFjIHx8IFtdO1xuICAgIGJjID0gYmMgfHwgW107XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFjKSkgYWMgPSBbYWNdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShiYykpIGJjID0gW2JjXTtcbiAgICBhWydjbGFzcyddID0gYWMuY29uY2F0KGJjKS5maWx0ZXIobnVsbHMpO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICBpZiAoa2V5ICE9ICdjbGFzcycpIHtcbiAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYTtcbn07XG5cbi8qKlxuICogRmlsdGVyIG51bGwgYHZhbGBzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbnVsbHModmFsKSB7XG4gIHJldHVybiB2YWwgIT0gbnVsbCAmJiB2YWwgIT09ICcnO1xufVxuXG4vKipcbiAqIGpvaW4gYXJyYXkgYXMgY2xhc3Nlcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmpvaW5DbGFzc2VzID0gam9pbkNsYXNzZXM7XG5mdW5jdGlvbiBqb2luQ2xhc3Nlcyh2YWwpIHtcbiAgcmV0dXJuIChBcnJheS5pc0FycmF5KHZhbCkgPyB2YWwubWFwKGpvaW5DbGFzc2VzKSA6XG4gICAgKHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JykgPyBPYmplY3Qua2V5cyh2YWwpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7IHJldHVybiB2YWxba2V5XTsgfSkgOlxuICAgIFt2YWxdKS5maWx0ZXIobnVsbHMpLmpvaW4oJyAnKTtcbn1cblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGNsYXNzZXMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gY2xhc3Nlc1xuICogQHBhcmFtIHtBcnJheS48Qm9vbGVhbj59IGVzY2FwZWRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5jbHMgPSBmdW5jdGlvbiBjbHMoY2xhc3NlcywgZXNjYXBlZCkge1xuICB2YXIgYnVmID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlc2NhcGVkICYmIGVzY2FwZWRbaV0pIHtcbiAgICAgIGJ1Zi5wdXNoKGV4cG9ydHMuZXNjYXBlKGpvaW5DbGFzc2VzKFtjbGFzc2VzW2ldXSkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnVmLnB1c2goam9pbkNsYXNzZXMoY2xhc3Nlc1tpXSkpO1xuICAgIH1cbiAgfVxuICB2YXIgdGV4dCA9IGpvaW5DbGFzc2VzKGJ1Zik7XG4gIGlmICh0ZXh0Lmxlbmd0aCkge1xuICAgIHJldHVybiAnIGNsYXNzPVwiJyArIHRleHQgKyAnXCInO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJztcbiAgfVxufTtcblxuXG5leHBvcnRzLnN0eWxlID0gZnVuY3Rpb24gKHZhbCkge1xuICBpZiAodmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbCkubWFwKGZ1bmN0aW9uIChzdHlsZSkge1xuICAgICAgcmV0dXJuIHN0eWxlICsgJzonICsgdmFsW3N0eWxlXTtcbiAgICB9KS5qb2luKCc7Jyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxufTtcbi8qKlxuICogUmVuZGVyIHRoZSBnaXZlbiBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbFxuICogQHBhcmFtIHtCb29sZWFufSBlc2NhcGVkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHRlcnNlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuYXR0ciA9IGZ1bmN0aW9uIGF0dHIoa2V5LCB2YWwsIGVzY2FwZWQsIHRlcnNlKSB7XG4gIGlmIChrZXkgPT09ICdzdHlsZScpIHtcbiAgICB2YWwgPSBleHBvcnRzLnN0eWxlKHZhbCk7XG4gIH1cbiAgaWYgKCdib29sZWFuJyA9PSB0eXBlb2YgdmFsIHx8IG51bGwgPT0gdmFsKSB7XG4gICAgaWYgKHZhbCkge1xuICAgICAgcmV0dXJuICcgJyArICh0ZXJzZSA/IGtleSA6IGtleSArICc9XCInICsga2V5ICsgJ1wiJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH0gZWxzZSBpZiAoMCA9PSBrZXkuaW5kZXhPZignZGF0YScpICYmICdzdHJpbmcnICE9IHR5cGVvZiB2YWwpIHtcbiAgICBpZiAoSlNPTi5zdHJpbmdpZnkodmFsKS5pbmRleE9mKCcmJykgIT09IC0xKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1NpbmNlIEphZGUgMi4wLjAsIGFtcGVyc2FuZHMgKGAmYCkgaW4gZGF0YSBhdHRyaWJ1dGVzICcgK1xuICAgICAgICAgICAgICAgICAgICd3aWxsIGJlIGVzY2FwZWQgdG8gYCZhbXA7YCcpO1xuICAgIH07XG4gICAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsLnRvSVNPU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0phZGUgd2lsbCBlbGltaW5hdGUgdGhlIGRvdWJsZSBxdW90ZXMgYXJvdW5kIGRhdGVzIGluICcgK1xuICAgICAgICAgICAgICAgICAgICdJU08gZm9ybSBhZnRlciAyLjAuMCcpO1xuICAgIH1cbiAgICByZXR1cm4gJyAnICsga2V5ICsgXCI9J1wiICsgSlNPTi5zdHJpbmdpZnkodmFsKS5yZXBsYWNlKC8nL2csICcmYXBvczsnKSArIFwiJ1wiO1xuICB9IGVsc2UgaWYgKGVzY2FwZWQpIHtcbiAgICBpZiAodmFsICYmIHR5cGVvZiB2YWwudG9JU09TdHJpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignSmFkZSB3aWxsIHN0cmluZ2lmeSBkYXRlcyBpbiBJU08gZm9ybSBhZnRlciAyLjAuMCcpO1xuICAgIH1cbiAgICByZXR1cm4gJyAnICsga2V5ICsgJz1cIicgKyBleHBvcnRzLmVzY2FwZSh2YWwpICsgJ1wiJztcbiAgfSBlbHNlIHtcbiAgICBpZiAodmFsICYmIHR5cGVvZiB2YWwudG9JU09TdHJpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignSmFkZSB3aWxsIHN0cmluZ2lmeSBkYXRlcyBpbiBJU08gZm9ybSBhZnRlciAyLjAuMCcpO1xuICAgIH1cbiAgICByZXR1cm4gJyAnICsga2V5ICsgJz1cIicgKyB2YWwgKyAnXCInO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gYXR0cmlidXRlcyBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtPYmplY3R9IGVzY2FwZWRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRycyA9IGZ1bmN0aW9uIGF0dHJzKG9iaiwgdGVyc2Upe1xuICB2YXIgYnVmID0gW107XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGlmIChrZXlzLmxlbmd0aCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV1cbiAgICAgICAgLCB2YWwgPSBvYmpba2V5XTtcblxuICAgICAgaWYgKCdjbGFzcycgPT0ga2V5KSB7XG4gICAgICAgIGlmICh2YWwgPSBqb2luQ2xhc3Nlcyh2YWwpKSB7XG4gICAgICAgICAgYnVmLnB1c2goJyAnICsga2V5ICsgJz1cIicgKyB2YWwgKyAnXCInKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnVmLnB1c2goZXhwb3J0cy5hdHRyKGtleSwgdmFsLCBmYWxzZSwgdGVyc2UpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmLmpvaW4oJycpO1xufTtcblxuLyoqXG4gKiBFc2NhcGUgdGhlIGdpdmVuIHN0cmluZyBvZiBgaHRtbGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciBqYWRlX2VuY29kZV9odG1sX3J1bGVzID0ge1xuICAnJic6ICcmYW1wOycsXG4gICc8JzogJyZsdDsnLFxuICAnPic6ICcmZ3Q7JyxcbiAgJ1wiJzogJyZxdW90Oydcbn07XG52YXIgamFkZV9tYXRjaF9odG1sID0gL1smPD5cIl0vZztcblxuZnVuY3Rpb24gamFkZV9lbmNvZGVfY2hhcihjKSB7XG4gIHJldHVybiBqYWRlX2VuY29kZV9odG1sX3J1bGVzW2NdIHx8IGM7XG59XG5cbmV4cG9ydHMuZXNjYXBlID0gamFkZV9lc2NhcGU7XG5mdW5jdGlvbiBqYWRlX2VzY2FwZShodG1sKXtcbiAgdmFyIHJlc3VsdCA9IFN0cmluZyhodG1sKS5yZXBsYWNlKGphZGVfbWF0Y2hfaHRtbCwgamFkZV9lbmNvZGVfY2hhcik7XG4gIGlmIChyZXN1bHQgPT09ICcnICsgaHRtbCkgcmV0dXJuIGh0bWw7XG4gIGVsc2UgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogUmUtdGhyb3cgdGhlIGdpdmVuIGBlcnJgIGluIGNvbnRleHQgdG8gdGhlXG4gKiB0aGUgamFkZSBpbiBgZmlsZW5hbWVgIGF0IHRoZSBnaXZlbiBgbGluZW5vYC5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGxpbmVub1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5yZXRocm93ID0gZnVuY3Rpb24gcmV0aHJvdyhlcnIsIGZpbGVuYW1lLCBsaW5lbm8sIHN0cil7XG4gIGlmICghKGVyciBpbnN0YW5jZW9mIEVycm9yKSkgdGhyb3cgZXJyO1xuICBpZiAoKHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgfHwgIWZpbGVuYW1lKSAmJiAhc3RyKSB7XG4gICAgZXJyLm1lc3NhZ2UgKz0gJyBvbiBsaW5lICcgKyBsaW5lbm87XG4gICAgdGhyb3cgZXJyO1xuICB9XG4gIHRyeSB7XG4gICAgc3RyID0gc3RyIHx8IHJlcXVpcmUoJ2ZzJykucmVhZEZpbGVTeW5jKGZpbGVuYW1lLCAndXRmOCcpXG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgcmV0aHJvdyhlcnIsIG51bGwsIGxpbmVubylcbiAgfVxuICB2YXIgY29udGV4dCA9IDNcbiAgICAsIGxpbmVzID0gc3RyLnNwbGl0KCdcXG4nKVxuICAgICwgc3RhcnQgPSBNYXRoLm1heChsaW5lbm8gLSBjb250ZXh0LCAwKVxuICAgICwgZW5kID0gTWF0aC5taW4obGluZXMubGVuZ3RoLCBsaW5lbm8gKyBjb250ZXh0KTtcblxuICAvLyBFcnJvciBjb250ZXh0XG4gIHZhciBjb250ZXh0ID0gbGluZXMuc2xpY2Uoc3RhcnQsIGVuZCkubWFwKGZ1bmN0aW9uKGxpbmUsIGkpe1xuICAgIHZhciBjdXJyID0gaSArIHN0YXJ0ICsgMTtcbiAgICByZXR1cm4gKGN1cnIgPT0gbGluZW5vID8gJyAgPiAnIDogJyAgICAnKVxuICAgICAgKyBjdXJyXG4gICAgICArICd8ICdcbiAgICAgICsgbGluZTtcbiAgfSkuam9pbignXFxuJyk7XG5cbiAgLy8gQWx0ZXIgZXhjZXB0aW9uIG1lc3NhZ2VcbiAgZXJyLnBhdGggPSBmaWxlbmFtZTtcbiAgZXJyLm1lc3NhZ2UgPSAoZmlsZW5hbWUgfHwgJ0phZGUnKSArICc6JyArIGxpbmVub1xuICAgICsgJ1xcbicgKyBjb250ZXh0ICsgJ1xcblxcbicgKyBlcnIubWVzc2FnZTtcbiAgdGhyb3cgZXJyO1xufTtcblxuZXhwb3J0cy5EZWJ1Z0l0ZW0gPSBmdW5jdGlvbiBEZWJ1Z0l0ZW0obGluZW5vLCBmaWxlbmFtZSkge1xuICB0aGlzLmxpbmVubyA9IGxpbmVubztcbiAgdGhpcy5maWxlbmFtZSA9IGZpbGVuYW1lO1xufVxuXG59LHtcImZzXCI6Mn1dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXG59LHt9XX0se30sWzFdKSgxKVxufSk7Il19
