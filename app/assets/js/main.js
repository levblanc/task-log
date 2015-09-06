(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Backbone = require('backbone');
var Router = require('./router');
var appRouter = new Router();

Backbone.history.start({ pushState: true });

},{"./router":2,"backbone":"backbone"}],2:[function(require,module,exports){
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

},{"../../components/dashboard/dashboardView":4,"../../components/home/homeView":6,"../../components/monthLog/monthLogView":9,"../../shared/collections/taskLog":10,"../../shared/collections/user":11,"backbone":"backbone","jquery":"jquery"}],3:[function(require,module,exports){
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
buf.push("\n<h1>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 1, jade_debug[0].filename ));
buf.push(" Welcome Master " + (jade.escape((jade_interp =  userName ) == null ? '' : jade_interp)) + "!!!");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
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
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "h1  Welcome Master #{ userName }!!!\n\n.addLog\n    | 新增Log\n    .currentYear #{ currentYear }年\n    input(type=\"text\" placeholder=\"请输入月份\")\n    button.create Create\n\n.logList\n    | 查看过往的Log\n    button.view View\n");
}
};
},{"jade/runtime":13}],4:[function(require,module,exports){
var $        = require('jquery')
var Backbone = require('backbone');
var template = require("./dashboard.jade");

var userName        = null;
var currentYear = null;
var renderData  = {};

module.exports = Backbone.View.extend({
    className : 'dashboard',

    events: {
        'click .create' : 'createLog',
        'click .view'   : 'viewLog'
    },

    initialize: function (initData) {
        userName   = initData.userName;
        this.render();
    },

    render: function () {
        renderData.userName    = userName;
        renderData.currentYear = currentYear = new Date().getFullYear();

        this.$el.html(template(renderData));

        return this;
    },

    createLog: function (e) {
        var inputMonth  = parseInt(this.$el.find('input').val(), 10);
        var logRouteArr = [userName, currentYear];
        var logRouteStr = '';
        var logData = {};

        if(inputMonth < 10){
            inputMonth = '0' + inputMonth;
        }else{
            inputMonth.toString();
        }

        logRouteArr.push(inputMonth);

        this.collection.create(logData);

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
buf.push("\n<h1 class=\"salutation\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 1, jade_debug[0].filename ));
buf.push("Welcome Dear Master!");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
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
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "h1.salutation Welcome Dear Master!\n\n.nameInput\n    input(type=\"text\" placeholder=\"请告诉我您的英文名或名字拼音\")\n    button OK\n");
}
};
},{"jade/runtime":13}],6:[function(require,module,exports){
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
},{"jade/runtime":13}],8:[function(require,module,exports){
var jade = require("jade/runtime");

module.exports = function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (month, year) {
var jade_indent = [];
jade_debug.unshift(new jade.DebugItem( 0, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n<button class=\"home\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 1, jade_debug[0].filename ));
buf.push("返回首页");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 3, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n<div class=\"addLog\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n  <input type=\"text\" placeholder=\"请输入工作内容\"/>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 5, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n  <button class=\"add\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, jade_debug[0].filename ));
buf.push("Add");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 7, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n<div class=\"logDetail\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 8, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n  <div class=\"logTitleWrapper\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 9, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n    <div class=\"logTitle\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
buf.push("" + (jade.escape((jade_interp =  year ) == null ? '' : jade_interp)) + "年 " + (jade.escape((jade_interp =  month ) == null ? '' : jade_interp)) + "月总结");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 10, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n    <div class=\"optionsBtn\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 11, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n      <button class=\"output\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 11, jade_debug[0].filename ));
buf.push("Output");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 12, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n  <table class=\"logTable\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 13, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n    <tr>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 14, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n      <th>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 14, jade_debug[0].filename ));
buf.push("序号");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 15, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n      <th>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 15, jade_debug[0].filename ));
buf.push("内容");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 16, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n      <th>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 16, jade_debug[0].filename ));
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
jade_debug.shift();}.call(this,"month" in locals_for_with?locals_for_with.month:typeof month!=="undefined"?month:undefined,"year" in locals_for_with?locals_for_with.year:typeof year!=="undefined"?year:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "button.home 返回首页\n\n.addLog\n    input(type=\"text\" placeholder=\"请输入工作内容\")\n    button.add Add\n    \n.logDetail\n    .logTitleWrapper\n        .logTitle #{ year }年 #{ month }月总结\n        .optionsBtn\n            button.output Output\n    table.logTable\n        tr\n            th 序号\n            th 内容\n            th 状态\n\n        \n            \n        \n    \n");
}
};
},{"jade/runtime":13}],9:[function(require,module,exports){
var $        = require('jquery');
var _        = require('underscore');
var Backbone = require('backbone');
var mainTpl  = require("./monthLog.jade");
var itemTpl  = require("./logItem.jade");

var logNo = 0;

module.exports = Backbone.View.extend({
    className : 'monthLog',

    events: {
        'click .add'   : 'addLogItem',
        'click .delete': 'deleteLogItem',
        'click .output': 'outputLog'
    },

    initialize: function (initData) {
        this.logInfo = initData.logInfo;

        this.render(this.logInfo);
    },

    render: function (logInfo) {
        this.$el.html(mainTpl(logInfo));
        return this;
    },

    addLogItem: function (e) {
        var logData = {};

        logData.logNo   = ++logNo;
        logData.content = this.$el.find('input').val();
        $('.logTable tbody').append(itemTpl(logData));

        // logData.title = this.$el.find('.logTitle').text();
        // logData.logStatus = this.$el.find('.logStatus').text();
        this.collection.create(logData);
    },

    deleteLogItem: function (e) {
        console.dir('will delete item');
    },

    outputLog: function (e) {
        console.dir('in view log output func')
        var logInfoStr = _.values(this.logInfo).join('-')
        var outputLogRoute = ['/output-tasklog', logInfoStr].join('/');
        Backbone.history.navigate(outputLogRoute);
    }

});

},{"./logItem.jade":7,"./monthLog.jade":8,"backbone":"backbone","jquery":"jquery","underscore":"underscore"}],10:[function(require,module,exports){
var $ = require('jquery');
var Backbone = require('backbone');
var taskLog = {};
var modelSchema = {
    "year"   : null,
    "month"  : null,
    "taskLog": [
        {
            "id"     : null,
            "logNo"  : null,
            "content": "",
            "time"   : "",
            "status" : "完成"
        }
    ]
};

/**
 * [
     {
         "userId": 1,
         "logList": [
             {
                 "year": 2015,
                 "month": 10,
                 "taskLog": [
                     {
                         "id": 1,
                         "logNo": 1,
                         "content": "test111",
                         "time": "2015-10-01 15:12:18",
                         "status": "完成"
                     }
                 ]
             }
         ]
     }

 ]
 */

taskLog.model = Backbone.Model.extend({
    defaults: modelSchema,
    validate: function (attr, opts) {
        // body...
    }
});

taskLog.collection = Backbone.Collection.extend({
    model   : taskLog.model,
    url     : function () {
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

},{}],13:[function(require,module,exports){
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

},{"fs":12}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXNzZXRzL2pzL2FwcC5qcyIsImFwcC9hc3NldHMvanMvcm91dGVyLmpzIiwiYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5qYWRlIiwiYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZFZpZXcuanMiLCJhcHAvY29tcG9uZW50cy9ob21lL2hvbWUuamFkZSIsImFwcC9jb21wb25lbnRzL2hvbWUvaG9tZVZpZXcuanMiLCJhcHAvY29tcG9uZW50cy9tb250aExvZy9sb2dJdGVtLmphZGUiLCJhcHAvY29tcG9uZW50cy9tb250aExvZy9tb250aExvZy5qYWRlIiwiYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbW9udGhMb2dWaWV3LmpzIiwiYXBwL3NoYXJlZC9jb2xsZWN0aW9ucy90YXNrTG9nLmpzIiwiYXBwL3NoYXJlZC9jb2xsZWN0aW9ucy91c2VyLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcmVzb2x2ZS9lbXB0eS5qcyIsIm5vZGVfbW9kdWxlcy9qYWRlL3J1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBOzs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIEJhY2tib25lID0gcmVxdWlyZSgnYmFja2JvbmUnKTtcbnZhciBSb3V0ZXIgPSByZXF1aXJlKCcuL3JvdXRlcicpO1xudmFyIGFwcFJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcblxuQmFja2JvbmUuaGlzdG9yeS5zdGFydCh7IHB1c2hTdGF0ZTogdHJ1ZSB9KTtcbiIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG52YXIgQmFja2JvbmUgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xuXG5CYWNrYm9uZS4kID0gJDtcblxudmFyIEhvbWVWaWV3ICAgICAgICAgID0gcmVxdWlyZSgnLi4vLi4vY29tcG9uZW50cy9ob21lL2hvbWVWaWV3Jyk7XG52YXIgRGFzaGJvYXJkVmlldyAgICAgPSByZXF1aXJlKCcuLi8uLi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmRWaWV3Jyk7XG52YXIgTW9udGhMb2dWaWV3ICAgICAgPSByZXF1aXJlKCcuLi8uLi9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nVmlldycpO1xudmFyIFVzZXJNb2RlbCAgICAgICAgID0gcmVxdWlyZSgnLi4vLi4vc2hhcmVkL2NvbGxlY3Rpb25zL3VzZXInKS5tb2RlbDtcbnZhciBVc2VyQ29sbGVjdGlvbiAgICA9IHJlcXVpcmUoJy4uLy4uL3NoYXJlZC9jb2xsZWN0aW9ucy91c2VyJykuY29sbGVjdGlvbjtcbnZhciBUYXNrTG9nTW9kZWwgICAgICA9IHJlcXVpcmUoJy4uLy4uL3NoYXJlZC9jb2xsZWN0aW9ucy90YXNrTG9nJykubW9kZWw7XG52YXIgVGFza0xvZ0NvbGxlY3Rpb24gPSByZXF1aXJlKCcuLi8uLi9zaGFyZWQvY29sbGVjdGlvbnMvdGFza0xvZycpLmNvbGxlY3Rpb247XG5cbm1vZHVsZS5leHBvcnRzID0gQmFja2JvbmUuUm91dGVyLmV4dGVuZCh7XG4gICAgcm91dGVzOiB7XG4gICAgICAgICcnIDogJ2hvbWUnLFxuICAgICAgICAnOnVzZXJOYW1lJzogJ3VzZXJEYXNoYm9hcmQnLFxuICAgICAgICAnOnVzZXJOYW1lL2xvZy1saXN0JzogJ3VzZXJMb2dMaXN0JyxcbiAgICAgICAgJzp1c2VyTmFtZS86eWVhci86bW9udGgnOiAndXNlck1vbnRoTG9nJ1xuICAgIH0sXG5cbiAgICBob21lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUuZGlyKCdpbiBob21lIHZpZXcnKTtcbiAgICAgICAgLy8gVG9EbzpcbiAgICAgICAgLy8g6KKr6K+35rGC5pe277yM5YWI5qOA5rWLZGLph4zpnaLmmK/lkKblt7Lnu4/mnIl1c2VyXG4gICAgICAgIC8vIOiLpeacie+8jOeri+WIu+i3s+i9rOWIsOWvueW6lHVzZXLnmoREYXNoYm9hcmRcbiAgICAgICAgLy8g5rKh5pyJ77yM5omN5pi+56S66aaW6aG16K+35rGCdXNlcuWQjeensFxuICAgICAgICB2YXIgdXNlckNvbGxlY3Rpb24gPSBuZXcgVXNlckNvbGxlY3Rpb24oKTtcbiAgICAgICAgdmFyIGhvbWVWaWV3ICA9IG5ldyBIb21lVmlldyh7IGNvbGxlY3Rpb246IHVzZXJDb2xsZWN0aW9uIH0pO1xuICAgICAgICAkKCcjbWFpbicpLmVtcHR5KCkuYXBwZW5kKGhvbWVWaWV3LiRlbCk7XG4gICAgfSxcblxuICAgIHVzZXJEYXNoYm9hcmQ6IGZ1bmN0aW9uICh1c2VyTmFtZSkge1xuICAgICAgICBjb25zb2xlLmRpcihcImluIFwiICArIHVzZXJOYW1lICsgIFwiJ3MgZGFzaGJvYXJkXCIpO1xuICAgICAgICB2YXIgdGFza0xvZ0NvbGxlY3Rpb24gPSBuZXcgVGFza0xvZ0NvbGxlY3Rpb24oKTtcbiAgICAgICAgdmFyIGluaXREYXRhID0ge1xuICAgICAgICAgICAgY29sbGVjdGlvbiA6IHRhc2tMb2dDb2xsZWN0aW9uLFxuICAgICAgICAgICAgdXNlck5hbWUgICA6IHVzZXJOYW1lXG4gICAgICAgIH07XG4gICAgICAgIHZhciBkYXNoYm9hcmRWaWV3ID0gbmV3IERhc2hib2FyZFZpZXcoaW5pdERhdGEpO1xuICAgICAgICAkKCcjbWFpbicpLmVtcHR5KCkuYXBwZW5kKGRhc2hib2FyZFZpZXcuJGVsKTtcbiAgICB9LFxuXG4gICAgdXNlck1vbnRoTG9nOiBmdW5jdGlvbiAodXNlck5hbWUsIHllYXIsIG1vbnRoKSB7XG4gICAgICAgIGNvbnNvbGUuZGlyKFwiaW4gXCIgICsgdXNlck5hbWUgKyAgXCIncyBcIiArIHllYXIgKyBtb250aCArIFwiIGxvZ1wiKTtcbiAgICAgICAgdmFyIHRhc2tMb2dDb2xsZWN0aW9uID0gbmV3IFRhc2tMb2dDb2xsZWN0aW9uKCk7XG4gICAgICAgIHZhciBsb2dJbmZvID0ge1xuICAgICAgICAgICAgdXNlck5hbWUgOiB1c2VyTmFtZSxcbiAgICAgICAgICAgIHllYXIgICAgIDogeWVhcixcbiAgICAgICAgICAgIG1vbnRoICAgIDogbW9udGhcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGluaXREYXRhID0ge1xuICAgICAgICAgICAgY29sbGVjdGlvbiA6IHRhc2tMb2dDb2xsZWN0aW9uLFxuICAgICAgICAgICAgbG9nSW5mbyAgICA6IGxvZ0luZm9cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG1vbnRoTG9nVmlldyA9IG5ldyBNb250aExvZ1ZpZXcoaW5pdERhdGEpO1xuICAgICAgICAkKCcjbWFpbicpLmVtcHR5KCkuYXBwZW5kKG1vbnRoTG9nVmlldy4kZWwpO1xuICAgIH1cblxufSk7XG4iLCJ2YXIgamFkZSA9IHJlcXVpcmUoXCJqYWRlL3J1bnRpbWVcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7XG52YXIgamFkZV9kZWJ1ZyA9IFsgbmV3IGphZGUuRGVidWdJdGVtKCAxLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmphZGVcIiApIF07XG50cnkge1xudmFyIGJ1ZiA9IFtdO1xudmFyIGphZGVfbWl4aW5zID0ge307XG52YXIgamFkZV9pbnRlcnA7XG47dmFyIGxvY2Fsc19mb3Jfd2l0aCA9IChsb2NhbHMgfHwge30pOyhmdW5jdGlvbiAoY3VycmVudFllYXIsIHVzZXJOYW1lKSB7XG52YXIgamFkZV9pbmRlbnQgPSBbXTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDAsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuamFkZVwiICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMSwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbjxoMT5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCIgV2VsY29tZSBNYXN0ZXIgXCIgKyAoamFkZS5lc2NhcGUoKGphZGVfaW50ZXJwID0gIHVzZXJOYW1lICkgPT0gbnVsbCA/ICcnIDogamFkZV9pbnRlcnApKSArIFwiISEhXCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L2gxPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDMsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG48ZGl2IGNsYXNzPVxcXCJhZGRMb2dcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDQsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuamFkZVwiICkpO1xuYnVmLnB1c2goXCLmlrDlop5Mb2dcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA1LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICA8ZGl2IGNsYXNzPVxcXCJjdXJyZW50WWVhclxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNSwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiXCIgKyAoamFkZS5lc2NhcGUoKGphZGVfaW50ZXJwID0gIGN1cnJlbnRZZWFyICkgPT0gbnVsbCA/ICcnIDogamFkZV9pbnRlcnApKSArIFwi5bm0XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L2Rpdj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA2LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIuivt+i+k+WFpeaciOS7vVxcXCIvPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDcsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG4gIDxidXR0b24gY2xhc3M9XFxcImNyZWF0ZVxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNywgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiQ3JlYXRlXCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L2J1dHRvbj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIlxcbjwvZGl2PlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDksIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG48ZGl2IGNsYXNzPVxcXCJsb2dMaXN0XFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxMCwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5qYWRlXCIgKSk7XG5idWYucHVzaChcIuafpeeci+i/h+W+gOeahExvZ1wiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDExLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICA8YnV0dG9uIGNsYXNzPVxcXCJ2aWV3XFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxMSwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiVmlld1wiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC9idXR0b24+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCJcXG48L2Rpdj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7fS5jYWxsKHRoaXMsXCJjdXJyZW50WWVhclwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGguY3VycmVudFllYXI6dHlwZW9mIGN1cnJlbnRZZWFyIT09XCJ1bmRlZmluZWRcIj9jdXJyZW50WWVhcjp1bmRlZmluZWQsXCJ1c2VyTmFtZVwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGgudXNlck5hbWU6dHlwZW9mIHVzZXJOYW1lIT09XCJ1bmRlZmluZWRcIj91c2VyTmFtZTp1bmRlZmluZWQpKTs7cmV0dXJuIGJ1Zi5qb2luKFwiXCIpO1xufSBjYXRjaCAoZXJyKSB7XG4gIGphZGUucmV0aHJvdyhlcnIsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUsIGphZGVfZGVidWdbMF0ubGluZW5vLCBcImgxICBXZWxjb21lIE1hc3RlciAjeyB1c2VyTmFtZSB9ISEhXFxuXFxuLmFkZExvZ1xcbiAgICB8IOaWsOWinkxvZ1xcbiAgICAuY3VycmVudFllYXIgI3sgY3VycmVudFllYXIgfeW5tFxcbiAgICBpbnB1dCh0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwi6K+36L6T5YWl5pyI5Lu9XFxcIilcXG4gICAgYnV0dG9uLmNyZWF0ZSBDcmVhdGVcXG5cXG4ubG9nTGlzdFxcbiAgICB8IOafpeeci+i/h+W+gOeahExvZ1xcbiAgICBidXR0b24udmlldyBWaWV3XFxuXCIpO1xufVxufTsiLCJ2YXIgJCAgICAgICAgPSByZXF1aXJlKCdqcXVlcnknKVxudmFyIEJhY2tib25lID0gcmVxdWlyZSgnYmFja2JvbmUnKTtcbnZhciB0ZW1wbGF0ZSA9IHJlcXVpcmUoXCIuL2Rhc2hib2FyZC5qYWRlXCIpO1xuXG52YXIgdXNlck5hbWUgICAgICAgID0gbnVsbDtcbnZhciBjdXJyZW50WWVhciA9IG51bGw7XG52YXIgcmVuZGVyRGF0YSAgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBCYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG4gICAgY2xhc3NOYW1lIDogJ2Rhc2hib2FyZCcsXG5cbiAgICBldmVudHM6IHtcbiAgICAgICAgJ2NsaWNrIC5jcmVhdGUnIDogJ2NyZWF0ZUxvZycsXG4gICAgICAgICdjbGljayAudmlldycgICA6ICd2aWV3TG9nJ1xuICAgIH0sXG5cbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiAoaW5pdERhdGEpIHtcbiAgICAgICAgdXNlck5hbWUgICA9IGluaXREYXRhLnVzZXJOYW1lO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVuZGVyRGF0YS51c2VyTmFtZSAgICA9IHVzZXJOYW1lO1xuICAgICAgICByZW5kZXJEYXRhLmN1cnJlbnRZZWFyID0gY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgdGhpcy4kZWwuaHRtbCh0ZW1wbGF0ZShyZW5kZXJEYXRhKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGNyZWF0ZUxvZzogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGlucHV0TW9udGggID0gcGFyc2VJbnQodGhpcy4kZWwuZmluZCgnaW5wdXQnKS52YWwoKSwgMTApO1xuICAgICAgICB2YXIgbG9nUm91dGVBcnIgPSBbdXNlck5hbWUsIGN1cnJlbnRZZWFyXTtcbiAgICAgICAgdmFyIGxvZ1JvdXRlU3RyID0gJyc7XG4gICAgICAgIHZhciBsb2dEYXRhID0ge307XG5cbiAgICAgICAgaWYoaW5wdXRNb250aCA8IDEwKXtcbiAgICAgICAgICAgIGlucHV0TW9udGggPSAnMCcgKyBpbnB1dE1vbnRoO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlucHV0TW9udGgudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvZ1JvdXRlQXJyLnB1c2goaW5wdXRNb250aCk7XG5cbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uLmNyZWF0ZShsb2dEYXRhKTtcblxuICAgICAgICBCYWNrYm9uZS5oaXN0b3J5Lm5hdmlnYXRlKGxvZ1JvdXRlQXJyLmpvaW4oJy8nKSwgeyB0cmlnZ2VyOiB0cnVlfSk7XG4gICAgfVxuXG5cbn0pO1xuIiwidmFyIGphZGUgPSByZXF1aXJlKFwiamFkZS9ydW50aW1lXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge1xudmFyIGphZGVfZGVidWcgPSBbIG5ldyBqYWRlLkRlYnVnSXRlbSggMSwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmphZGVcIiApIF07XG50cnkge1xudmFyIGJ1ZiA9IFtdO1xudmFyIGphZGVfbWl4aW5zID0ge307XG52YXIgamFkZV9pbnRlcnA7XG5cbnZhciBqYWRlX2luZGVudCA9IFtdO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMCwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmphZGVcIiApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbjxoMSBjbGFzcz1cXFwic2FsdXRhdGlvblxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMSwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiV2VsY29tZSBEZWFyIE1hc3RlciFcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvaDE+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMywgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuPGRpdiBjbGFzcz1cXFwibmFtZUlucHV0XFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA0LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG4gIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwi6K+35ZGK6K+J5oiR5oKo55qE6Iux5paH5ZCN5oiW5ZCN5a2X5ou86Z+zXFxcIi8+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNSwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICA8YnV0dG9uPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDUsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIk9LXCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L2J1dHRvbj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIlxcbjwvZGl2PlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTs7cmV0dXJuIGJ1Zi5qb2luKFwiXCIpO1xufSBjYXRjaCAoZXJyKSB7XG4gIGphZGUucmV0aHJvdyhlcnIsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUsIGphZGVfZGVidWdbMF0ubGluZW5vLCBcImgxLnNhbHV0YXRpb24gV2VsY29tZSBEZWFyIE1hc3RlciFcXG5cXG4ubmFtZUlucHV0XFxuICAgIGlucHV0KHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCLor7flkYror4nmiJHmgqjnmoToi7HmloflkI3miJblkI3lrZfmi7zpn7NcXFwiKVxcbiAgICBidXR0b24gT0tcXG5cIik7XG59XG59OyIsInZhciAkICAgICAgICAgPSByZXF1aXJlKCdqcXVlcnknKTtcbnZhciBCYWNrYm9uZSAgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIHRlbXBsYXRlICA9IHJlcXVpcmUoXCIuL2hvbWUuamFkZVwiKTtcbnZhciBVc2VyTW9kZWwgPSByZXF1aXJlKCcuLi8uLi9zaGFyZWQvY29sbGVjdGlvbnMvdXNlcicpLm1vZGVsO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gQmFja2JvbmUuVmlldy5leHRlbmQoe1xuICAgIGNsYXNzTmFtZSA6ICd3ZWxjb21lUGFuZWwnLFxuXG4gICAgZXZlbnRzOiB7XG4gICAgICAgICdjbGljayBidXR0b24nOiAnbmFtZUNvbmZpcm0nXG4gICAgfSxcblxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJGVsLmh0bWwodGVtcGxhdGUoKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBuYW1lQ29uZmlybTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHVzZXJEYXRhICA9IHt9O1xuICAgICAgICB2YXIgdXNlck5hbWUgID0gdGhpcy4kZWwuZmluZCgnaW5wdXQnKS52YWwoKTtcbiAgICAgICAgdmFyIHVzZXJSb3V0ZSA9ICcnO1xuXG4gICAgICAgIHVzZXJEYXRhLnVzZXJOYW1lID0gdXNlck5hbWU7XG4gICAgICAgIHVzZXJSb3V0ZSArPSB1c2VyTmFtZTtcblxuICAgICAgICB0aGlzLmNvbGxlY3Rpb24uY3JlYXRlKHVzZXJEYXRhKTtcblxuICAgICAgICBCYWNrYm9uZS5oaXN0b3J5Lm5hdmlnYXRlKHVzZXJSb3V0ZSwgeyB0cmlnZ2VyOiB0cnVlIH0pO1xuICAgIH1cbn0pO1xuIiwidmFyIGphZGUgPSByZXF1aXJlKFwiamFkZS9ydW50aW1lXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge1xudmFyIGphZGVfZGVidWcgPSBbIG5ldyBqYWRlLkRlYnVnSXRlbSggMSwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbG9nSXRlbS5qYWRlXCIgKSBdO1xudHJ5IHtcbnZhciBidWYgPSBbXTtcbnZhciBqYWRlX21peGlucyA9IHt9O1xudmFyIGphZGVfaW50ZXJwO1xuO3ZhciBsb2NhbHNfZm9yX3dpdGggPSAobG9jYWxzIHx8IHt9KTsoZnVuY3Rpb24gKGNvbnRlbnQsIGxvZ0lkLCBsb2dObykge1xudmFyIGphZGVfaW5kZW50ID0gW107XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAwLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9tb250aExvZy9sb2dJdGVtLmphZGVcIiApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL2xvZ0l0ZW0uamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG48dHI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMiwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbG9nSXRlbS5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbiAgPHRkIGNsYXNzPVxcXCJsb2dOb1xcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMiwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiXCIgKyAoamFkZS5lc2NhcGUoKGphZGVfaW50ZXJwID0gIGxvZ05vICkgPT0gbnVsbCA/ICcnIDogamFkZV9pbnRlcnApKSArIFwiXCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L3RkPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDMsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL2xvZ0l0ZW0uamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG4gIDx0ZCBjbGFzcz1cXFwibG9nQ29udGVudFxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMywgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiXCIgKyAoamFkZS5lc2NhcGUoKGphZGVfaW50ZXJwID0gIGNvbnRlbnQgKSA9PSBudWxsID8gJycgOiBqYWRlX2ludGVycCkpICsgXCJcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvdGQ+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNCwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbG9nSXRlbS5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbiAgPHRkIGNsYXNzPVxcXCJsb2dTdGF0dXNcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIuWujOaIkFwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC90ZD5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA1LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9tb250aExvZy9sb2dJdGVtLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICA8dGRcIiArIChqYWRlLmF0dHIoXCJkYXRhLWxvZy1pZFwiLCBcIlwiICsgKCBsb2dJZCApICsgXCJcIiwgdHJ1ZSwgZmFsc2UpKSArIFwiIGNsYXNzPVxcXCJkZWxldGVcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDUsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIkRlbGV0ZVwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC90ZD5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIlxcbjwvdHI+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO30uY2FsbCh0aGlzLFwiY29udGVudFwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGguY29udGVudDp0eXBlb2YgY29udGVudCE9PVwidW5kZWZpbmVkXCI/Y29udGVudDp1bmRlZmluZWQsXCJsb2dJZFwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGgubG9nSWQ6dHlwZW9mIGxvZ0lkIT09XCJ1bmRlZmluZWRcIj9sb2dJZDp1bmRlZmluZWQsXCJsb2dOb1wiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGgubG9nTm86dHlwZW9mIGxvZ05vIT09XCJ1bmRlZmluZWRcIj9sb2dObzp1bmRlZmluZWQpKTs7cmV0dXJuIGJ1Zi5qb2luKFwiXCIpO1xufSBjYXRjaCAoZXJyKSB7XG4gIGphZGUucmV0aHJvdyhlcnIsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUsIGphZGVfZGVidWdbMF0ubGluZW5vLCBcInRyXFxuICAgIHRkLmxvZ05vICN7IGxvZ05vIH1cXG4gICAgdGQubG9nQ29udGVudCAjeyBjb250ZW50IH1cXG4gICAgdGQubG9nU3RhdHVzIOWujOaIkFxcbiAgICB0ZC5kZWxldGUoZGF0YS1sb2ctaWQ9XFxcIiN7IGxvZ0lkIH1cXFwiKSBEZWxldGVcXG5cIik7XG59XG59OyIsInZhciBqYWRlID0gcmVxdWlyZShcImphZGUvcnVudGltZVwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHtcbnZhciBqYWRlX2RlYnVnID0gWyBuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApIF07XG50cnkge1xudmFyIGJ1ZiA9IFtdO1xudmFyIGphZGVfbWl4aW5zID0ge307XG52YXIgamFkZV9pbnRlcnA7XG47dmFyIGxvY2Fsc19mb3Jfd2l0aCA9IChsb2NhbHMgfHwge30pOyhmdW5jdGlvbiAobW9udGgsIHllYXIpIHtcbnZhciBqYWRlX2luZGVudCA9IFtdO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMCwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbW9udGhMb2cuamFkZVwiICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMSwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbW9udGhMb2cuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG48YnV0dG9uIGNsYXNzPVxcXCJob21lXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCLov5Tlm57pppbpobVcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvYnV0dG9uPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDMsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuPGRpdiBjbGFzcz1cXFwiYWRkTG9nXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA0LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9tb250aExvZy9tb250aExvZy5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbiAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCLor7fovpPlhaXlt6XkvZzlhoXlrrlcXFwiLz5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA1LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9tb250aExvZy9tb250aExvZy5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbiAgPGJ1dHRvbiBjbGFzcz1cXFwiYWRkXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA1LCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCJBZGRcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvYnV0dG9uPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiXFxuPC9kaXY+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNywgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbW9udGhMb2cuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG48ZGl2IGNsYXNzPVxcXCJsb2dEZXRhaWxcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDgsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICA8ZGl2IGNsYXNzPVxcXCJsb2dUaXRsZVdyYXBwZXJcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDksIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICAgIDxkaXYgY2xhc3M9XFxcImxvZ1RpdGxlXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA5LCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCJcIiArIChqYWRlLmVzY2FwZSgoamFkZV9pbnRlcnAgPSAgeWVhciApID09IG51bGwgPyAnJyA6IGphZGVfaW50ZXJwKSkgKyBcIuW5tCBcIiArIChqYWRlLmVzY2FwZSgoamFkZV9pbnRlcnAgPSAgbW9udGggKSA9PSBudWxsID8gJycgOiBqYWRlX2ludGVycCkpICsgXCLmnIjmgLvnu5NcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvZGl2PlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEwLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9tb250aExvZy9tb250aExvZy5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJvcHRpb25zQnRuXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxMSwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbW9udGhMb2cuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJvdXRwdXRcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDExLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCJPdXRwdXRcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvYnV0dG9uPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiXFxuICAgIDwvZGl2PlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiXFxuICA8L2Rpdj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxMiwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbW9udGhMb2cuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG4gIDx0YWJsZSBjbGFzcz1cXFwibG9nVGFibGVcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEzLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9tb250aExvZy9tb250aExvZy5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbiAgICA8dHI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMTQsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICAgICAgPHRoPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDE0LCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCLluo/lj7dcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvdGg+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMTUsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICAgICAgPHRoPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDE1LCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCLlhoXlrrlcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvdGg+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMTYsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICAgICAgPHRoPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDE2LCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCLnirbmgIFcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvdGg+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCJcXG4gICAgPC90cj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIlxcbiAgPC90YWJsZT5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIlxcbjwvZGl2PlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTt9LmNhbGwodGhpcyxcIm1vbnRoXCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5tb250aDp0eXBlb2YgbW9udGghPT1cInVuZGVmaW5lZFwiP21vbnRoOnVuZGVmaW5lZCxcInllYXJcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLnllYXI6dHlwZW9mIHllYXIhPT1cInVuZGVmaW5lZFwiP3llYXI6dW5kZWZpbmVkKSk7O3JldHVybiBidWYuam9pbihcIlwiKTtcbn0gY2F0Y2ggKGVycikge1xuICBqYWRlLnJldGhyb3coZXJyLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lLCBqYWRlX2RlYnVnWzBdLmxpbmVubywgXCJidXR0b24uaG9tZSDov5Tlm57pppbpobVcXG5cXG4uYWRkTG9nXFxuICAgIGlucHV0KHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCLor7fovpPlhaXlt6XkvZzlhoXlrrlcXFwiKVxcbiAgICBidXR0b24uYWRkIEFkZFxcbiAgICBcXG4ubG9nRGV0YWlsXFxuICAgIC5sb2dUaXRsZVdyYXBwZXJcXG4gICAgICAgIC5sb2dUaXRsZSAjeyB5ZWFyIH3lubQgI3sgbW9udGggfeaciOaAu+e7k1xcbiAgICAgICAgLm9wdGlvbnNCdG5cXG4gICAgICAgICAgICBidXR0b24ub3V0cHV0IE91dHB1dFxcbiAgICB0YWJsZS5sb2dUYWJsZVxcbiAgICAgICAgdHJcXG4gICAgICAgICAgICB0aCDluo/lj7dcXG4gICAgICAgICAgICB0aCDlhoXlrrlcXG4gICAgICAgICAgICB0aCDnirbmgIFcXG5cXG4gICAgICAgIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgXFxuICAgIFxcblwiKTtcbn1cbn07IiwidmFyICQgICAgICAgID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG52YXIgXyAgICAgICAgPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgQmFja2JvbmUgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIG1haW5UcGwgID0gcmVxdWlyZShcIi4vbW9udGhMb2cuamFkZVwiKTtcbnZhciBpdGVtVHBsICA9IHJlcXVpcmUoXCIuL2xvZ0l0ZW0uamFkZVwiKTtcblxudmFyIGxvZ05vID0gMDtcblxubW9kdWxlLmV4cG9ydHMgPSBCYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG4gICAgY2xhc3NOYW1lIDogJ21vbnRoTG9nJyxcblxuICAgIGV2ZW50czoge1xuICAgICAgICAnY2xpY2sgLmFkZCcgICA6ICdhZGRMb2dJdGVtJyxcbiAgICAgICAgJ2NsaWNrIC5kZWxldGUnOiAnZGVsZXRlTG9nSXRlbScsXG4gICAgICAgICdjbGljayAub3V0cHV0JzogJ291dHB1dExvZydcbiAgICB9LFxuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKGluaXREYXRhKSB7XG4gICAgICAgIHRoaXMubG9nSW5mbyA9IGluaXREYXRhLmxvZ0luZm87XG5cbiAgICAgICAgdGhpcy5yZW5kZXIodGhpcy5sb2dJbmZvKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAobG9nSW5mbykge1xuICAgICAgICB0aGlzLiRlbC5odG1sKG1haW5UcGwobG9nSW5mbykpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgYWRkTG9nSXRlbTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGxvZ0RhdGEgPSB7fTtcblxuICAgICAgICBsb2dEYXRhLmxvZ05vICAgPSArK2xvZ05vO1xuICAgICAgICBsb2dEYXRhLmNvbnRlbnQgPSB0aGlzLiRlbC5maW5kKCdpbnB1dCcpLnZhbCgpO1xuICAgICAgICAkKCcubG9nVGFibGUgdGJvZHknKS5hcHBlbmQoaXRlbVRwbChsb2dEYXRhKSk7XG5cbiAgICAgICAgLy8gbG9nRGF0YS50aXRsZSA9IHRoaXMuJGVsLmZpbmQoJy5sb2dUaXRsZScpLnRleHQoKTtcbiAgICAgICAgLy8gbG9nRGF0YS5sb2dTdGF0dXMgPSB0aGlzLiRlbC5maW5kKCcubG9nU3RhdHVzJykudGV4dCgpO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24uY3JlYXRlKGxvZ0RhdGEpO1xuICAgIH0sXG5cbiAgICBkZWxldGVMb2dJdGVtOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmRpcignd2lsbCBkZWxldGUgaXRlbScpO1xuICAgIH0sXG5cbiAgICBvdXRwdXRMb2c6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZGlyKCdpbiB2aWV3IGxvZyBvdXRwdXQgZnVuYycpXG4gICAgICAgIHZhciBsb2dJbmZvU3RyID0gXy52YWx1ZXModGhpcy5sb2dJbmZvKS5qb2luKCctJylcbiAgICAgICAgdmFyIG91dHB1dExvZ1JvdXRlID0gWycvb3V0cHV0LXRhc2tsb2cnLCBsb2dJbmZvU3RyXS5qb2luKCcvJyk7XG4gICAgICAgIEJhY2tib25lLmhpc3RvcnkubmF2aWdhdGUob3V0cHV0TG9nUm91dGUpO1xuICAgIH1cblxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xudmFyIEJhY2tib25lID0gcmVxdWlyZSgnYmFja2JvbmUnKTtcbnZhciB0YXNrTG9nID0ge307XG52YXIgbW9kZWxTY2hlbWEgPSB7XG4gICAgXCJ5ZWFyXCIgICA6IG51bGwsXG4gICAgXCJtb250aFwiICA6IG51bGwsXG4gICAgXCJ0YXNrTG9nXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiICAgICA6IG51bGwsXG4gICAgICAgICAgICBcImxvZ05vXCIgIDogbnVsbCxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBcIlwiLFxuICAgICAgICAgICAgXCJ0aW1lXCIgICA6IFwiXCIsXG4gICAgICAgICAgICBcInN0YXR1c1wiIDogXCLlrozmiJBcIlxuICAgICAgICB9XG4gICAgXVxufTtcblxuLyoqXG4gKiBbXG4gICAgIHtcbiAgICAgICAgIFwidXNlcklkXCI6IDEsXG4gICAgICAgICBcImxvZ0xpc3RcIjogW1xuICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgXCJ5ZWFyXCI6IDIwMTUsXG4gICAgICAgICAgICAgICAgIFwibW9udGhcIjogMTAsXG4gICAgICAgICAgICAgICAgIFwidGFza0xvZ1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9nTm9cIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjogXCJ0ZXN0MTExXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aW1lXCI6IFwiMjAxNS0xMC0wMSAxNToxMjoxOFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwi5a6M5oiQXCJcbiAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgIH1cbiAgICAgICAgIF1cbiAgICAgfVxuXG4gXVxuICovXG5cbnRhc2tMb2cubW9kZWwgPSBCYWNrYm9uZS5Nb2RlbC5leHRlbmQoe1xuICAgIGRlZmF1bHRzOiBtb2RlbFNjaGVtYSxcbiAgICB2YWxpZGF0ZTogZnVuY3Rpb24gKGF0dHIsIG9wdHMpIHtcbiAgICAgICAgLy8gYm9keS4uLlxuICAgIH1cbn0pO1xuXG50YXNrTG9nLmNvbGxlY3Rpb24gPSBCYWNrYm9uZS5Db2xsZWN0aW9uLmV4dGVuZCh7XG4gICAgbW9kZWwgICA6IHRhc2tMb2cubW9kZWwsXG4gICAgdXJsICAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICcvdGFzay1sb2cnICsgbG9jYXRpb24ucGF0aG5hbWU7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gdGFza0xvZztcbiIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG52YXIgQmFja2JvbmUgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIHVzZXIgPSB7fTtcblxuXG51c2VyLm1vZGVsID0gQmFja2JvbmUuTW9kZWwuZXh0ZW5kKHtcbiAgICB2YWxpZGF0ZTogZnVuY3Rpb24gKGF0dHJzLCBvcHRzKSB7XG4gICAgICAgIGlmKGF0dHJzLnVzZXJOYW1lICYmIHR5cGVvZiBhdHRycy51c2VyTmFtZSAhPT0gJ3N0cmluZycpe1xuICAgICAgICAgICAgcmV0dXJuICd2YWx1ZSBvZiB1c2VyTmFtZSBzaG91bGQgYmUgYSBTdHJpbmcnO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbnVzZXIuY29sbGVjdGlvbiA9IEJhY2tib25lLkNvbGxlY3Rpb24uZXh0ZW5kKHtcbiAgICBtb2RlbDogdXNlci5tb2RlbCxcbiAgICB1cmwgIDogJy91c2VyJ1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gdXNlcjtcbiIsbnVsbCwiKGZ1bmN0aW9uKGYpe2lmKHR5cGVvZiBleHBvcnRzPT09XCJvYmplY3RcIiYmdHlwZW9mIG1vZHVsZSE9PVwidW5kZWZpbmVkXCIpe21vZHVsZS5leHBvcnRzPWYoKX1lbHNlIGlmKHR5cGVvZiBkZWZpbmU9PT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQpe2RlZmluZShbXSxmKX1lbHNle3ZhciBnO2lmKHR5cGVvZiB3aW5kb3chPT1cInVuZGVmaW5lZFwiKXtnPXdpbmRvd31lbHNlIGlmKHR5cGVvZiBnbG9iYWwhPT1cInVuZGVmaW5lZFwiKXtnPWdsb2JhbH1lbHNlIGlmKHR5cGVvZiBzZWxmIT09XCJ1bmRlZmluZWRcIil7Zz1zZWxmfWVsc2V7Zz10aGlzfWcuamFkZSA9IGYoKX19KShmdW5jdGlvbigpe3ZhciBkZWZpbmUsbW9kdWxlLGV4cG9ydHM7cmV0dXJuIChmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNZXJnZSB0d28gYXR0cmlidXRlIG9iamVjdHMgZ2l2aW5nIHByZWNlZGVuY2VcbiAqIHRvIHZhbHVlcyBpbiBvYmplY3QgYGJgLiBDbGFzc2VzIGFyZSBzcGVjaWFsLWNhc2VkXG4gKiBhbGxvd2luZyBmb3IgYXJyYXlzIGFuZCBtZXJnaW5nL2pvaW5pbmcgYXBwcm9wcmlhdGVseVxuICogcmVzdWx0aW5nIGluIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhXG4gKiBAcGFyYW0ge09iamVjdH0gYlxuICogQHJldHVybiB7T2JqZWN0fSBhXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLm1lcmdlID0gZnVuY3Rpb24gbWVyZ2UoYSwgYikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhciBhdHRycyA9IGFbMF07XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhdHRycyA9IG1lcmdlKGF0dHJzLCBhW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGF0dHJzO1xuICB9XG4gIHZhciBhYyA9IGFbJ2NsYXNzJ107XG4gIHZhciBiYyA9IGJbJ2NsYXNzJ107XG5cbiAgaWYgKGFjIHx8IGJjKSB7XG4gICAgYWMgPSBhYyB8fCBbXTtcbiAgICBiYyA9IGJjIHx8IFtdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhYykpIGFjID0gW2FjXTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYmMpKSBiYyA9IFtiY107XG4gICAgYVsnY2xhc3MnXSA9IGFjLmNvbmNhdChiYykuZmlsdGVyKG51bGxzKTtcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgaWYgKGtleSAhPSAnY2xhc3MnKSB7XG4gICAgICBhW2tleV0gPSBiW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGE7XG59O1xuXG4vKipcbiAqIEZpbHRlciBudWxsIGB2YWxgcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIG51bGxzKHZhbCkge1xuICByZXR1cm4gdmFsICE9IG51bGwgJiYgdmFsICE9PSAnJztcbn1cblxuLyoqXG4gKiBqb2luIGFycmF5IGFzIGNsYXNzZXMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5qb2luQ2xhc3NlcyA9IGpvaW5DbGFzc2VzO1xuZnVuY3Rpb24gam9pbkNsYXNzZXModmFsKSB7XG4gIHJldHVybiAoQXJyYXkuaXNBcnJheSh2YWwpID8gdmFsLm1hcChqb2luQ2xhc3NlcykgOlxuICAgICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpID8gT2JqZWN0LmtleXModmFsKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gdmFsW2tleV07IH0pIDpcbiAgICBbdmFsXSkuZmlsdGVyKG51bGxzKS5qb2luKCcgJyk7XG59XG5cbi8qKlxuICogUmVuZGVyIHRoZSBnaXZlbiBjbGFzc2VzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGNsYXNzZXNcbiAqIEBwYXJhbSB7QXJyYXkuPEJvb2xlYW4+fSBlc2NhcGVkXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuY2xzID0gZnVuY3Rpb24gY2xzKGNsYXNzZXMsIGVzY2FwZWQpIHtcbiAgdmFyIGJ1ZiA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZXNjYXBlZCAmJiBlc2NhcGVkW2ldKSB7XG4gICAgICBidWYucHVzaChleHBvcnRzLmVzY2FwZShqb2luQ2xhc3NlcyhbY2xhc3Nlc1tpXV0pKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1Zi5wdXNoKGpvaW5DbGFzc2VzKGNsYXNzZXNbaV0pKTtcbiAgICB9XG4gIH1cbiAgdmFyIHRleHQgPSBqb2luQ2xhc3NlcyhidWYpO1xuICBpZiAodGV4dC5sZW5ndGgpIHtcbiAgICByZXR1cm4gJyBjbGFzcz1cIicgKyB0ZXh0ICsgJ1wiJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cblxuZXhwb3J0cy5zdHlsZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWwpLm1hcChmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgIHJldHVybiBzdHlsZSArICc6JyArIHZhbFtzdHlsZV07XG4gICAgfSkuam9pbignOycpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWw7XG4gIH1cbn07XG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gYXR0cmlidXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZXNjYXBlZFxuICogQHBhcmFtIHtCb29sZWFufSB0ZXJzZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmF0dHIgPSBmdW5jdGlvbiBhdHRyKGtleSwgdmFsLCBlc2NhcGVkLCB0ZXJzZSkge1xuICBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgdmFsID0gZXhwb3J0cy5zdHlsZSh2YWwpO1xuICB9XG4gIGlmICgnYm9vbGVhbicgPT0gdHlwZW9mIHZhbCB8fCBudWxsID09IHZhbCkge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHJldHVybiAnICcgKyAodGVyc2UgPyBrZXkgOiBrZXkgKyAnPVwiJyArIGtleSArICdcIicpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9IGVsc2UgaWYgKDAgPT0ga2V5LmluZGV4T2YoJ2RhdGEnKSAmJiAnc3RyaW5nJyAhPSB0eXBlb2YgdmFsKSB7XG4gICAgaWYgKEpTT04uc3RyaW5naWZ5KHZhbCkuaW5kZXhPZignJicpICE9PSAtMSkge1xuICAgICAgY29uc29sZS53YXJuKCdTaW5jZSBKYWRlIDIuMC4wLCBhbXBlcnNhbmRzIChgJmApIGluIGRhdGEgYXR0cmlidXRlcyAnICtcbiAgICAgICAgICAgICAgICAgICAnd2lsbCBiZSBlc2NhcGVkIHRvIGAmYW1wO2AnKTtcbiAgICB9O1xuICAgIGlmICh2YWwgJiYgdHlwZW9mIHZhbC50b0lTT1N0cmluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCdKYWRlIHdpbGwgZWxpbWluYXRlIHRoZSBkb3VibGUgcXVvdGVzIGFyb3VuZCBkYXRlcyBpbiAnICtcbiAgICAgICAgICAgICAgICAgICAnSVNPIGZvcm0gYWZ0ZXIgMi4wLjAnKTtcbiAgICB9XG4gICAgcmV0dXJuICcgJyArIGtleSArIFwiPSdcIiArIEpTT04uc3RyaW5naWZ5KHZhbCkucmVwbGFjZSgvJy9nLCAnJmFwb3M7JykgKyBcIidcIjtcbiAgfSBlbHNlIGlmIChlc2NhcGVkKSB7XG4gICAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsLnRvSVNPU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0phZGUgd2lsbCBzdHJpbmdpZnkgZGF0ZXMgaW4gSVNPIGZvcm0gYWZ0ZXIgMi4wLjAnKTtcbiAgICB9XG4gICAgcmV0dXJuICcgJyArIGtleSArICc9XCInICsgZXhwb3J0cy5lc2NhcGUodmFsKSArICdcIic7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsLnRvSVNPU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0phZGUgd2lsbCBzdHJpbmdpZnkgZGF0ZXMgaW4gSVNPIGZvcm0gYWZ0ZXIgMi4wLjAnKTtcbiAgICB9XG4gICAgcmV0dXJuICcgJyArIGtleSArICc9XCInICsgdmFsICsgJ1wiJztcbiAgfVxufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZXMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7T2JqZWN0fSBlc2NhcGVkXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuYXR0cnMgPSBmdW5jdGlvbiBhdHRycyhvYmosIHRlcnNlKXtcbiAgdmFyIGJ1ZiA9IFtdO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBpZiAoa2V5cy5sZW5ndGgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldXG4gICAgICAgICwgdmFsID0gb2JqW2tleV07XG5cbiAgICAgIGlmICgnY2xhc3MnID09IGtleSkge1xuICAgICAgICBpZiAodmFsID0gam9pbkNsYXNzZXModmFsKSkge1xuICAgICAgICAgIGJ1Zi5wdXNoKCcgJyArIGtleSArICc9XCInICsgdmFsICsgJ1wiJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1Zi5wdXNoKGV4cG9ydHMuYXR0cihrZXksIHZhbCwgZmFsc2UsIHRlcnNlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1Zi5qb2luKCcnKTtcbn07XG5cbi8qKlxuICogRXNjYXBlIHRoZSBnaXZlbiBzdHJpbmcgb2YgYGh0bWxgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBodG1sXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgamFkZV9lbmNvZGVfaHRtbF9ydWxlcyA9IHtcbiAgJyYnOiAnJmFtcDsnLFxuICAnPCc6ICcmbHQ7JyxcbiAgJz4nOiAnJmd0OycsXG4gICdcIic6ICcmcXVvdDsnXG59O1xudmFyIGphZGVfbWF0Y2hfaHRtbCA9IC9bJjw+XCJdL2c7XG5cbmZ1bmN0aW9uIGphZGVfZW5jb2RlX2NoYXIoYykge1xuICByZXR1cm4gamFkZV9lbmNvZGVfaHRtbF9ydWxlc1tjXSB8fCBjO1xufVxuXG5leHBvcnRzLmVzY2FwZSA9IGphZGVfZXNjYXBlO1xuZnVuY3Rpb24gamFkZV9lc2NhcGUoaHRtbCl7XG4gIHZhciByZXN1bHQgPSBTdHJpbmcoaHRtbCkucmVwbGFjZShqYWRlX21hdGNoX2h0bWwsIGphZGVfZW5jb2RlX2NoYXIpO1xuICBpZiAocmVzdWx0ID09PSAnJyArIGh0bWwpIHJldHVybiBodG1sO1xuICBlbHNlIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFJlLXRocm93IHRoZSBnaXZlbiBgZXJyYCBpbiBjb250ZXh0IHRvIHRoZVxuICogdGhlIGphZGUgaW4gYGZpbGVuYW1lYCBhdCB0aGUgZ2l2ZW4gYGxpbmVub2AuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBsaW5lbm9cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMucmV0aHJvdyA9IGZ1bmN0aW9uIHJldGhyb3coZXJyLCBmaWxlbmFtZSwgbGluZW5vLCBzdHIpe1xuICBpZiAoIShlcnIgaW5zdGFuY2VvZiBFcnJvcikpIHRocm93IGVycjtcbiAgaWYgKCh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnIHx8ICFmaWxlbmFtZSkgJiYgIXN0cikge1xuICAgIGVyci5tZXNzYWdlICs9ICcgb24gbGluZSAnICsgbGluZW5vO1xuICAgIHRocm93IGVycjtcbiAgfVxuICB0cnkge1xuICAgIHN0ciA9IHN0ciB8fCByZXF1aXJlKCdmcycpLnJlYWRGaWxlU3luYyhmaWxlbmFtZSwgJ3V0ZjgnKVxuICB9IGNhdGNoIChleCkge1xuICAgIHJldGhyb3coZXJyLCBudWxsLCBsaW5lbm8pXG4gIH1cbiAgdmFyIGNvbnRleHQgPSAzXG4gICAgLCBsaW5lcyA9IHN0ci5zcGxpdCgnXFxuJylcbiAgICAsIHN0YXJ0ID0gTWF0aC5tYXgobGluZW5vIC0gY29udGV4dCwgMClcbiAgICAsIGVuZCA9IE1hdGgubWluKGxpbmVzLmxlbmd0aCwgbGluZW5vICsgY29udGV4dCk7XG5cbiAgLy8gRXJyb3IgY29udGV4dFxuICB2YXIgY29udGV4dCA9IGxpbmVzLnNsaWNlKHN0YXJ0LCBlbmQpLm1hcChmdW5jdGlvbihsaW5lLCBpKXtcbiAgICB2YXIgY3VyciA9IGkgKyBzdGFydCArIDE7XG4gICAgcmV0dXJuIChjdXJyID09IGxpbmVubyA/ICcgID4gJyA6ICcgICAgJylcbiAgICAgICsgY3VyclxuICAgICAgKyAnfCAnXG4gICAgICArIGxpbmU7XG4gIH0pLmpvaW4oJ1xcbicpO1xuXG4gIC8vIEFsdGVyIGV4Y2VwdGlvbiBtZXNzYWdlXG4gIGVyci5wYXRoID0gZmlsZW5hbWU7XG4gIGVyci5tZXNzYWdlID0gKGZpbGVuYW1lIHx8ICdKYWRlJykgKyAnOicgKyBsaW5lbm9cbiAgICArICdcXG4nICsgY29udGV4dCArICdcXG5cXG4nICsgZXJyLm1lc3NhZ2U7XG4gIHRocm93IGVycjtcbn07XG5cbmV4cG9ydHMuRGVidWdJdGVtID0gZnVuY3Rpb24gRGVidWdJdGVtKGxpbmVubywgZmlsZW5hbWUpIHtcbiAgdGhpcy5saW5lbm8gPSBsaW5lbm87XG4gIHRoaXMuZmlsZW5hbWUgPSBmaWxlbmFtZTtcbn1cblxufSx7XCJmc1wiOjJ9XSwyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblxufSx7fV19LHt9LFsxXSkoMSlcbn0pOyJdfQ==
