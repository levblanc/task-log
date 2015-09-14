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
        ':userName/:logMonth': 'userMonthLog'
    },

    home: function () {
        console.dir('in home view');

        var homeView  = new HomeView({ collection: userCollection });

        $('#main').empty().append(homeView.el);
    },

    userDashboard: function (userName) {
        console.dir("in "  + userName +  "'s dashboard");

        var initData = {
            collection : userLogListCollection,
            userName   : userName
        };
        var dashboardView = new DashboardView(initData);

        $('#main').empty().append(dashboardView.el);
    },

    userMonthLog: function (userName, logMonth) {
        console.dir("in "  + userName +  "'s " + logMonth + " log");

        var initData = {
            collection : taskLogCollection,
            userName : userName,
            logMonth : logMonth
        };

        var monthLogView = new MonthLogView(initData);

        $('#main').empty().append(monthLogView.el);
    }

});

},{"../../components/dashboard/dashboardView":4,"../../components/home/homeView":9,"../../components/monthLog/monthLogView":15,"../../shared/collections/taskLog":16,"../../shared/collections/user":17,"../../shared/collections/userLogList":18,"backbone":"backbone","jquery":"jquery"}],3:[function(require,module,exports){
var jade = require("jade/runtime");

module.exports = function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (currentYear, userName) {
var jade_indent = [];
jade_debug.unshift(new jade.DebugItem( 0, "/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade" ));
buf.push("\n<div class=\"header\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 1, jade_debug[0].filename ));
buf.push("Dashboard");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 2, "/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade" ));
buf.push("\n  <div class=\"userName\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, jade_debug[0].filename ));
buf.push("" + (jade.escape((jade_interp =  userName ) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 4, "/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade" ));
buf.push("\n<div class=\"dashboardContent\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, "/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade" ));
buf.push("\n  <div class=\"createMonthLog\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, jade_debug[0].filename ));
buf.push(" ");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 6, "/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade" ));
buf.push("<a class=\"createNewLog\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 6, jade_debug[0].filename ));
buf.push("新增Log");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 7, "/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade" ));
buf.push("\n    <div class=\"monthInput hidden\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 8, "/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade" ));
buf.push("\n      <div class=\"inputBox\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 9, "/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade" ));
buf.push("\n        <div class=\"currentYear\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
buf.push("" + (jade.escape((jade_interp =  currentYear ) == null ? '' : jade_interp)) + "年");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 10, "/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade" ));
buf.push("\n        <input type=\"text\" placeholder=\"请输入月份\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 11, "/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade" ));
buf.push("<a class=\"cancelBtn\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 11, jade_debug[0].filename ));
buf.push("Cancel");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"currentYear" in locals_for_with?locals_for_with.currentYear:typeof currentYear!=="undefined"?currentYear:undefined,"userName" in locals_for_with?locals_for_with.userName:typeof userName!=="undefined"?userName:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".header Dashboard\n    .userName #{ userName }\n\n.dashboardContent\n    .createMonthLog \n        a.createNewLog 新增Log\n        .monthInput.hidden\n            .inputBox\n                .currentYear #{ currentYear }年\n                input(type=\"text\" placeholder=\"请输入月份\")\n            a.cancelBtn Cancel\n");
}
};
},{"jade/runtime":20}],4:[function(require,module,exports){
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
        'click .createNewLog': 'showMonthInput',
        'click .cancelBtn'   : 'hideMonthInput',
        'keypress'           : 'createLog'
    },

    initialize: function (initData) {
        userName         = initData.userName;
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

    showMonthInput: function (e) {
        this.$el.find('.createNewLog').toggleClass('showMonthInput');
        this.$el.find('.monthInput').slideDown('fast');
    },

    hideMonthInput: function (e) {
        this.$el.find('.createNewLog').toggleClass('showMonthInput');
        this.$el.find('.monthInput').slideUp('fast');
    },

    createLog: function (e) {
        if(e.which === 13){
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
        }
    },

    listLogs: function (userLogListCollection) {
        var userLogListView = new UserLogListView({
            collection: userLogListCollection,
            userName: userName
        });

        this.$el.find('.dashboardContent').append(userLogListView.render().el);
    },

    goToMonthLog: function (logModel) {
        var logRouteArr = _.values(logModel.toJSON());
        Backbone.history.navigate(logRouteArr.join('/'), { trigger: true});
    }
});

},{"./createLog.jade":3,"./userLogListView":6,"backbone":"backbone","jquery":"jquery","underscore":"underscore"}],5:[function(require,module,exports){
var jade = require("jade/runtime");

module.exports = function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined, userLogList) {
var jade_indent = [];
jade_debug.unshift(new jade.DebugItem( 0, "/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade" ));
buf.push("\n<div class=\"note\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 1, jade_debug[0].filename ));
buf.push("查看过往的Log");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 2, "/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade" ));
if ( userLogList.length)
{
jade_debug.unshift(new jade.DebugItem( 3, "/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade" ));
jade_debug.unshift(new jade.DebugItem( 3, "/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade" ));
buf.push("\n<ul class=\"logList\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, "/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade" ));
// iterate userLogList 
;(function(){
  var $$obj = userLogList ;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var log = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 4, "/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade" ));
jade_debug.unshift(new jade.DebugItem( 5, "/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade" ));
buf.push("\n  <li class=\"listItem\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, jade_debug[0].filename ));
buf.push(" ");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 6, "/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade" ));
buf.push("<span class=\"logMonth\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 6, jade_debug[0].filename ));
buf.push("" + (jade.escape((jade_interp =  log ) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 7, "/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade" ));
buf.push("<span>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 7, jade_debug[0].filename ));
buf.push("总结");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var log = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 4, "/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade" ));
jade_debug.unshift(new jade.DebugItem( 5, "/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade" ));
buf.push("\n  <li class=\"listItem\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, jade_debug[0].filename ));
buf.push(" ");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 6, "/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade" ));
buf.push("<span class=\"logMonth\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 6, jade_debug[0].filename ));
buf.push("" + (jade.escape((jade_interp =  log ) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 7, "/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade" ));
buf.push("<span>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 7, jade_debug[0].filename ));
buf.push("总结");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("\n</ul>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift(new jade.DebugItem( 9, "/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade" ));
jade_debug.unshift(new jade.DebugItem( 9, "/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade" ));
buf.push("\n<div class=\"noLog\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
buf.push("还没有log哦，现在开始添加吧");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"userLogList" in locals_for_with?locals_for_with.userLogList:typeof userLogList!=="undefined"?userLogList:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".note 查看过往的Log\nif userLogList.length\n    ul.logList\n     each log in userLogList \n        li.listItem \n            span.logMonth #{ log }\n            span 总结\nelse\n    .noLog 还没有log哦，现在开始添加吧\n");
}
};
},{"jade/runtime":20}],6:[function(require,module,exports){
var $              = require('jquery');
var _              = require('underscore');
var Backbone       = require('backbone');
var userLogListTpl = require("./userLogList.jade");


module.exports = Backbone.View.extend({
    className: "userLogList",

    events: {
        'click .listItem': 'goToMonthLog'
    },

    initialize: function (initData) {
        this.userName = initData.userName;
    },

    render: function () {
        var userLogList = _.map(this.collection.models, function (model, index) {
            return model.toJSON().logMonth;
        });

        this.$el.html(userLogListTpl({ userLogList: userLogList }));
        return this;
    },

    goToMonthLog: function (e) {
        var logMonth = $(e.currentTarget).find('.logMonth').text();
        var monthLogRouteArr = [this.userName, logMonth];

        Backbone.history.navigate(monthLogRouteArr.join('/'), { trigger: true});
    },
});

},{"./userLogList.jade":5,"backbone":"backbone","jquery":"jquery","underscore":"underscore"}],7:[function(require,module,exports){
var jade = require("jade/runtime");

module.exports = function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "/Users/levblanc/projects/task-log/app/components/home/createUser.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
jade_debug.unshift(new jade.DebugItem( 0, "/Users/levblanc/projects/task-log/app/components/home/createUser.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "/Users/levblanc/projects/task-log/app/components/home/createUser.jade" ));
buf.push("\n<h2 class=\"salutation\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 1, jade_debug[0].filename ));
buf.push("Welcome Dear Master!");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 2, "/Users/levblanc/projects/task-log/app/components/home/createUser.jade" ));
buf.push("\n<div class=\"nameInput\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, "/Users/levblanc/projects/task-log/app/components/home/createUser.jade" ));
buf.push("\n  <input type=\"text\" placeholder=\"您的英文名或名字拼音\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "h2.salutation Welcome Dear Master!\n.nameInput\n    input(type=\"text\" placeholder=\"您的英文名或名字拼音\") \n");
}
};
},{"jade/runtime":20}],8:[function(require,module,exports){
var Backbone  = require('backbone');
var CreateUserTpl  = require("./createUser.jade");


module.exports = Backbone.View.extend({
    className: 'createUser',
    
    render: function () {
        this.$el.html(CreateUserTpl());
        return this;
    }
});

},{"./createUser.jade":7,"backbone":"backbone"}],9:[function(require,module,exports){
var $              = require('jquery');
var Backbone       = require('backbone');
var CreateUserView = require("./createUserView");
var MultiUserView  = require("./multiUserView");


module.exports = Backbone.View.extend({
    className : 'welcomePanel',

    events: {
        'keypress': 'confirmName'
    },

    initialize: function () {
        this.users = this.collection;

        this.users.fetch({ reset: true });

        this.listenTo(this.users, 'add', this.goToUserDashboard);
        this.listenTo(this.users, 'reset', this.showWelcomePanel);
    },

    confirmName: function (e) {
        var $nameInputVal = this.$el.find('input').val();
        if(e.which === 13){
            if($nameInputVal){
                var userData  = { userName : $nameInputVal };
                this.collection.create(userData);
            }else{
                alert('请先输入姓名');
            }
        }
    },

    goToUserDashboard: function (userModel) {
        var userRoute = userModel.toJSON().userName;
        Backbone.history.navigate(userRoute, { trigger: true });
    },

    showWelcomePanel: function (userCollection) {
        var users = userCollection.models;
        if(users.length){
            // 只有一个用户时，跳转到该用户的Dashboard
            if(users.length === 1){
                var userRoute = users[0].toJSON().userName;
                Backbone.history.navigate(userRoute, { trigger: true });
            }
            // 多于一个用户名时，让用户选择
            if(users.length > 1){
                var multiUserView = new MultiUserView({ collection: users });
                this.$el.html(multiUserView.render().el);
            }
        }else{
            // 未创建任何用户
            var createUserView = new CreateUserView();
            this.$el.html(createUserView.render().el);
        }
    }
});

},{"./createUserView":8,"./multiUserView":11,"backbone":"backbone","jquery":"jquery"}],10:[function(require,module,exports){
var jade = require("jade/runtime");

module.exports = function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "/Users/levblanc/projects/task-log/app/components/home/multiUser.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined, users) {
var jade_indent = [];
jade_debug.unshift(new jade.DebugItem( 0, "/Users/levblanc/projects/task-log/app/components/home/multiUser.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "/Users/levblanc/projects/task-log/app/components/home/multiUser.jade" ));
buf.push("\n<h3 class=\"note\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 1, jade_debug[0].filename ));
buf.push("请选择需要创建task log的用户：");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 2, "/Users/levblanc/projects/task-log/app/components/home/multiUser.jade" ));
buf.push("\n<div class=\"availableUsers\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, "/Users/levblanc/projects/task-log/app/components/home/multiUser.jade" ));
// iterate users
;(function(){
  var $$obj = users;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var user = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 3, "/Users/levblanc/projects/task-log/app/components/home/multiUser.jade" ));
jade_debug.unshift(new jade.DebugItem( 4, "/Users/levblanc/projects/task-log/app/components/home/multiUser.jade" ));
buf.push("<a" + (jade.attr("data-user-id", "" + ( user.userId ) + "", true, false)) + " class=\"userBtn\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, jade_debug[0].filename ));
buf.push("" + (jade.escape((jade_interp =  user.userName ) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var user = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 3, "/Users/levblanc/projects/task-log/app/components/home/multiUser.jade" ));
jade_debug.unshift(new jade.DebugItem( 4, "/Users/levblanc/projects/task-log/app/components/home/multiUser.jade" ));
buf.push("<a" + (jade.attr("data-user-id", "" + ( user.userId ) + "", true, false)) + " class=\"userBtn\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, jade_debug[0].filename ));
buf.push("" + (jade.escape((jade_interp =  user.userName ) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"users" in locals_for_with?locals_for_with.users:typeof users!=="undefined"?users:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "h3.note 请选择需要创建task log的用户：\n.availableUsers\n    each user in users\n        a.userBtn(data-user-id=\"#{ user.userId }\") #{ user.userName }\n");
}
};
},{"jade/runtime":20}],11:[function(require,module,exports){
var $            = require('jquery');
var _            = require('underscore');
var Backbone     = require('backbone');
var MultiUserTpl = require("./multiUser.jade");


module.exports = Backbone.View.extend({
    className: "chooseUser",

    events: {
        'click .userBtn': 'goToUserDashboard'
    },

    render: function () {
        var users = _.map(this.collection, function (model, index) {
            return model.toJSON();
        });

        this.$el.html(MultiUserTpl({ users: users }));
        return this;
    },

    goToUserDashboard: function (e) {
        var userRoute = $(e.currentTarget).text();
        Backbone.history.navigate(userRoute, { trigger: true });
    },
});

},{"./multiUser.jade":10,"backbone":"backbone","jquery":"jquery","underscore":"underscore"}],12:[function(require,module,exports){
var jade = require("jade/runtime");

module.exports = function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "/Users/levblanc/projects/task-log/app/components/monthLog/logItem.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (content, logIndex) {
var jade_indent = [];
jade_debug.unshift(new jade.DebugItem( 0, "/Users/levblanc/projects/task-log/app/components/monthLog/logItem.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "/Users/levblanc/projects/task-log/app/components/monthLog/logItem.jade" ));
buf.push("\n<td class=\"logIndex\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 1, jade_debug[0].filename ));
buf.push("" + (jade.escape((jade_interp =  logIndex ) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 2, "/Users/levblanc/projects/task-log/app/components/monthLog/logItem.jade" ));
buf.push("\n<td class=\"logContent\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, jade_debug[0].filename ));
buf.push("" + (jade.escape((jade_interp =  content ) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 3, "/Users/levblanc/projects/task-log/app/components/monthLog/logItem.jade" ));
buf.push("\n<td class=\"logStatus\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, jade_debug[0].filename ));
buf.push("完成");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 4, "/Users/levblanc/projects/task-log/app/components/monthLog/logItem.jade" ));
buf.push("\n<td class=\"delete\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, jade_debug[0].filename ));
buf.push("Delete");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();}.call(this,"content" in locals_for_with?locals_for_with.content:typeof content!=="undefined"?content:undefined,"logIndex" in locals_for_with?locals_for_with.logIndex:typeof logIndex!=="undefined"?logIndex:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "td.logIndex #{ logIndex }\ntd.logContent #{ content }\ntd.logStatus 完成\ntd.delete Delete\n");
}
};
},{"jade/runtime":20}],13:[function(require,module,exports){
var $          = require('jquery');
var _          = require('underscore');
var Backbone   = require('backbone');
var logItemTpl = require("./logItem.jade");


module.exports = Backbone.View.extend({
    tagName   : 'tr',

    className : 'logItem',

    events: {
        'click .delete' : 'deleteItem'
    },

    initialize: function (initData) {
        this.logIndex = initData.logIndex;
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
    },

    render: function () {
        var renderData = _.extend(this.model.toJSON(), { logIndex : this.logIndex });
        this.$el.html(logItemTpl(renderData));
        return this;
    },

    deleteItem: function (e) {
        this.model.destroy({ wait: true });
    }
});

},{"./logItem.jade":12,"backbone":"backbone","jquery":"jquery","underscore":"underscore"}],14:[function(require,module,exports){
var jade = require("jade/runtime");

module.exports = function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (downloadUrl, logMonth) {
var jade_indent = [];
jade_debug.unshift(new jade.DebugItem( 0, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n<button class=\"goToHome\">");
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
buf.push("\n  <input type=\"text\" placeholder=\"请输入工作内容\" autofocus=\"autofocus\" class=\"logInput\"/>");
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
buf.push("" + (jade.escape((jade_interp =  logMonth ) == null ? '' : jade_interp)) + "总结");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 10, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n    <div class=\"optionsBtn\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 11, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("<a" + (jade.attr("href", downloadUrl, true, false)) + " target=\"_blank\" class=\"download\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 11, jade_debug[0].filename ));
buf.push("Download");
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
jade_debug.unshift(new jade.DebugItem( 12, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n  <table class=\"logTable\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 13, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n    <thead>");
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
buf.push("\n    </thead>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 17, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n    <tbody>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</tbody>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </table>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"downloadUrl" in locals_for_with?locals_for_with.downloadUrl:typeof downloadUrl!=="undefined"?downloadUrl:undefined,"logMonth" in locals_for_with?locals_for_with.logMonth:typeof logMonth!=="undefined"?logMonth:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "button.goToHome 返回首页\n\n.addLog\n    input.logInput(type=\"text\" placeholder=\"请输入工作内容\" autofocus)\n    button.add Add\n    \n.logDetail\n    .logTitleWrapper\n        .logTitle #{ logMonth }总结\n        .optionsBtn\n            a.download(href=downloadUrl, target='_blank') Download\n    table.logTable\n        thead\n            th 序号\n            th 内容\n            th 状态\n        tbody\n                    \n\n        \n            \n        \n    \n");
}
};
},{"jade/runtime":20}],15:[function(require,module,exports){
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

},{"./logItemView":13,"./monthLog.jade":14,"backbone":"backbone","jquery":"jquery","underscore":"underscore"}],16:[function(require,module,exports){
var $ = require('jquery');
var Backbone = require('backbone');
var taskLog = {};


taskLog.model = Backbone.Model.extend({
    defaults: {
        userName : "",
        logMonth : "",
        content  : "",
        status   : "完成"
    },
    validate: function (attr, opts) {
        // body...
    }
});

taskLog.collection = Backbone.Collection.extend({
    model: taskLog.model,

    url : function () {
        return '/task-log';
    },

    // nextLogId: function () {
    //     return this.length ? this.last().get('logId') + 1 : 1;
    // },
    //
    comparator: 'id'

});

module.exports = taskLog;

},{"backbone":"backbone","jquery":"jquery"}],17:[function(require,module,exports){
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

},{"backbone":"backbone","jquery":"jquery"}],18:[function(require,module,exports){
var $ = require('jquery');
var Backbone = require('backbone');
var userLogList = {};

userLogList.model = Backbone.Model.extend({
    defaults: {
        logMonth: ""
    }
});

userLogList.collection = Backbone.Collection.extend({
    model: userLogList.model,
    url  : function () {
        return '/user-loglist';
    }
});

module.exports = userLogList;

},{"backbone":"backbone","jquery":"jquery"}],19:[function(require,module,exports){

},{}],20:[function(require,module,exports){
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

},{"fs":19}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXNzZXRzL2pzL2FwcC5qcyIsImFwcC9hc3NldHMvanMvcm91dGVyLmpzIiwiYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NyZWF0ZUxvZy5qYWRlIiwiYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZFZpZXcuanMiLCJhcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlckxvZ0xpc3QuamFkZSIsImFwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyTG9nTGlzdFZpZXcuanMiLCJhcHAvY29tcG9uZW50cy9ob21lL2NyZWF0ZVVzZXIuamFkZSIsImFwcC9jb21wb25lbnRzL2hvbWUvY3JlYXRlVXNlclZpZXcuanMiLCJhcHAvY29tcG9uZW50cy9ob21lL2hvbWVWaWV3LmpzIiwiYXBwL2NvbXBvbmVudHMvaG9tZS9tdWx0aVVzZXIuamFkZSIsImFwcC9jb21wb25lbnRzL2hvbWUvbXVsdGlVc2VyVmlldy5qcyIsImFwcC9jb21wb25lbnRzL21vbnRoTG9nL2xvZ0l0ZW0uamFkZSIsImFwcC9jb21wb25lbnRzL21vbnRoTG9nL2xvZ0l0ZW1WaWV3LmpzIiwiYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbW9udGhMb2cuamFkZSIsImFwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nVmlldy5qcyIsImFwcC9zaGFyZWQvY29sbGVjdGlvbnMvdGFza0xvZy5qcyIsImFwcC9zaGFyZWQvY29sbGVjdGlvbnMvdXNlci5qcyIsImFwcC9zaGFyZWQvY29sbGVjdGlvbnMvdXNlckxvZ0xpc3QuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1yZXNvbHZlL2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2phZGUvcnVudGltZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgQmFja2JvbmUgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIFJvdXRlciA9IHJlcXVpcmUoJy4vcm91dGVyJyk7XG52YXIgYXBwUm91dGVyID0gbmV3IFJvdXRlcigpO1xuXG5CYWNrYm9uZS5oaXN0b3J5LnN0YXJ0KHsgcHVzaFN0YXRlOiB0cnVlIH0pO1xuIiwidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbnZhciBCYWNrYm9uZSA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG5cbkJhY2tib25lLiQgPSAkO1xuXG52YXIgSG9tZVZpZXcgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi4vLi4vY29tcG9uZW50cy9ob21lL2hvbWVWaWV3Jyk7XG52YXIgRGFzaGJvYXJkVmlldyAgICAgICAgID0gcmVxdWlyZSgnLi4vLi4vY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkVmlldycpO1xudmFyIE1vbnRoTG9nVmlldyAgICAgICAgICA9IHJlcXVpcmUoJy4uLy4uL2NvbXBvbmVudHMvbW9udGhMb2cvbW9udGhMb2dWaWV3Jyk7XG52YXIgVXNlckNvbGxlY3Rpb24gICAgICAgID0gcmVxdWlyZSgnLi4vLi4vc2hhcmVkL2NvbGxlY3Rpb25zL3VzZXInKS5jb2xsZWN0aW9uO1xudmFyIFRhc2tMb2dDb2xsZWN0aW9uICAgICA9IHJlcXVpcmUoJy4uLy4uL3NoYXJlZC9jb2xsZWN0aW9ucy90YXNrTG9nJykuY29sbGVjdGlvbjtcbnZhciBVc2VyTG9nTGlzdENvbGxlY3Rpb24gPSByZXF1aXJlKCcuLi8uLi9zaGFyZWQvY29sbGVjdGlvbnMvdXNlckxvZ0xpc3QnKS5jb2xsZWN0aW9uO1xuXG52YXIgdXNlckNvbGxlY3Rpb24gICAgICAgID0gbmV3IFVzZXJDb2xsZWN0aW9uKCk7XG52YXIgdGFza0xvZ0NvbGxlY3Rpb24gICAgID0gbmV3IFRhc2tMb2dDb2xsZWN0aW9uKCk7XG52YXIgdXNlckxvZ0xpc3RDb2xsZWN0aW9uID0gbmV3IFVzZXJMb2dMaXN0Q29sbGVjdGlvbigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhY2tib25lLlJvdXRlci5leHRlbmQoe1xuICAgIHJvdXRlczoge1xuICAgICAgICAnJyA6ICdob21lJyxcbiAgICAgICAgJzp1c2VyTmFtZSc6ICd1c2VyRGFzaGJvYXJkJyxcbiAgICAgICAgJzp1c2VyTmFtZS86bG9nTW9udGgnOiAndXNlck1vbnRoTG9nJ1xuICAgIH0sXG5cbiAgICBob21lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUuZGlyKCdpbiBob21lIHZpZXcnKTtcblxuICAgICAgICB2YXIgaG9tZVZpZXcgID0gbmV3IEhvbWVWaWV3KHsgY29sbGVjdGlvbjogdXNlckNvbGxlY3Rpb24gfSk7XG5cbiAgICAgICAgJCgnI21haW4nKS5lbXB0eSgpLmFwcGVuZChob21lVmlldy5lbCk7XG4gICAgfSxcblxuICAgIHVzZXJEYXNoYm9hcmQ6IGZ1bmN0aW9uICh1c2VyTmFtZSkge1xuICAgICAgICBjb25zb2xlLmRpcihcImluIFwiICArIHVzZXJOYW1lICsgIFwiJ3MgZGFzaGJvYXJkXCIpO1xuXG4gICAgICAgIHZhciBpbml0RGF0YSA9IHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb24gOiB1c2VyTG9nTGlzdENvbGxlY3Rpb24sXG4gICAgICAgICAgICB1c2VyTmFtZSAgIDogdXNlck5hbWVcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGRhc2hib2FyZFZpZXcgPSBuZXcgRGFzaGJvYXJkVmlldyhpbml0RGF0YSk7XG5cbiAgICAgICAgJCgnI21haW4nKS5lbXB0eSgpLmFwcGVuZChkYXNoYm9hcmRWaWV3LmVsKTtcbiAgICB9LFxuXG4gICAgdXNlck1vbnRoTG9nOiBmdW5jdGlvbiAodXNlck5hbWUsIGxvZ01vbnRoKSB7XG4gICAgICAgIGNvbnNvbGUuZGlyKFwiaW4gXCIgICsgdXNlck5hbWUgKyAgXCIncyBcIiArIGxvZ01vbnRoICsgXCIgbG9nXCIpO1xuXG4gICAgICAgIHZhciBpbml0RGF0YSA9IHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb24gOiB0YXNrTG9nQ29sbGVjdGlvbixcbiAgICAgICAgICAgIHVzZXJOYW1lIDogdXNlck5hbWUsXG4gICAgICAgICAgICBsb2dNb250aCA6IGxvZ01vbnRoXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIG1vbnRoTG9nVmlldyA9IG5ldyBNb250aExvZ1ZpZXcoaW5pdERhdGEpO1xuXG4gICAgICAgICQoJyNtYWluJykuZW1wdHkoKS5hcHBlbmQobW9udGhMb2dWaWV3LmVsKTtcbiAgICB9XG5cbn0pO1xuIiwidmFyIGphZGUgPSByZXF1aXJlKFwiamFkZS9ydW50aW1lXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge1xudmFyIGphZGVfZGVidWcgPSBbIG5ldyBqYWRlLkRlYnVnSXRlbSggMSwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NyZWF0ZUxvZy5qYWRlXCIgKSBdO1xudHJ5IHtcbnZhciBidWYgPSBbXTtcbnZhciBqYWRlX21peGlucyA9IHt9O1xudmFyIGphZGVfaW50ZXJwO1xuO3ZhciBsb2NhbHNfZm9yX3dpdGggPSAobG9jYWxzIHx8IHt9KTsoZnVuY3Rpb24gKGN1cnJlbnRZZWFyLCB1c2VyTmFtZSkge1xudmFyIGphZGVfaW5kZW50ID0gW107XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAwLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvY3JlYXRlTG9nLmphZGVcIiApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9jcmVhdGVMb2cuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG48ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIkRhc2hib2FyZFwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDIsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9jcmVhdGVMb2cuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG4gIDxkaXYgY2xhc3M9XFxcInVzZXJOYW1lXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAyLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCJcIiArIChqYWRlLmVzY2FwZSgoamFkZV9pbnRlcnAgPSAgdXNlck5hbWUgKSA9PSBudWxsID8gJycgOiBqYWRlX2ludGVycCkpICsgXCJcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvZGl2PlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiXFxuPC9kaXY+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNCwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NyZWF0ZUxvZy5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbjxkaXYgY2xhc3M9XFxcImRhc2hib2FyZENvbnRlbnRcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDUsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9jcmVhdGVMb2cuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG4gIDxkaXYgY2xhc3M9XFxcImNyZWF0ZU1vbnRoTG9nXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA1LCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCIgXCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNiwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NyZWF0ZUxvZy5qYWRlXCIgKSk7XG5idWYucHVzaChcIjxhIGNsYXNzPVxcXCJjcmVhdGVOZXdMb2dcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDYsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIuaWsOWinkxvZ1wiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC9hPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDcsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9jcmVhdGVMb2cuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9udGhJbnB1dCBoaWRkZW5cXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDgsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9jcmVhdGVMb2cuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dEJveFxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggOSwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NyZWF0ZUxvZy5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY3VycmVudFllYXJcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDksIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIlwiICsgKGphZGUuZXNjYXBlKChqYWRlX2ludGVycCA9ICBjdXJyZW50WWVhciApID09IG51bGwgPyAnJyA6IGphZGVfaW50ZXJwKSkgKyBcIuW5tFwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC9kaXY+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMTAsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9jcmVhdGVMb2cuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwi6K+36L6T5YWl5pyI5Lu9XFxcIi8+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCJcXG4gICAgICA8L2Rpdj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxMSwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NyZWF0ZUxvZy5qYWRlXCIgKSk7XG5idWYucHVzaChcIjxhIGNsYXNzPVxcXCJjYW5jZWxCdG5cXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDExLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCJDYW5jZWxcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvYT5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIlxcbiAgICA8L2Rpdj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIlxcbiAgPC9kaXY+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCJcXG48L2Rpdj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7fS5jYWxsKHRoaXMsXCJjdXJyZW50WWVhclwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGguY3VycmVudFllYXI6dHlwZW9mIGN1cnJlbnRZZWFyIT09XCJ1bmRlZmluZWRcIj9jdXJyZW50WWVhcjp1bmRlZmluZWQsXCJ1c2VyTmFtZVwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGgudXNlck5hbWU6dHlwZW9mIHVzZXJOYW1lIT09XCJ1bmRlZmluZWRcIj91c2VyTmFtZTp1bmRlZmluZWQpKTs7cmV0dXJuIGJ1Zi5qb2luKFwiXCIpO1xufSBjYXRjaCAoZXJyKSB7XG4gIGphZGUucmV0aHJvdyhlcnIsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUsIGphZGVfZGVidWdbMF0ubGluZW5vLCBcIi5oZWFkZXIgRGFzaGJvYXJkXFxuICAgIC51c2VyTmFtZSAjeyB1c2VyTmFtZSB9XFxuXFxuLmRhc2hib2FyZENvbnRlbnRcXG4gICAgLmNyZWF0ZU1vbnRoTG9nIFxcbiAgICAgICAgYS5jcmVhdGVOZXdMb2cg5paw5aKeTG9nXFxuICAgICAgICAubW9udGhJbnB1dC5oaWRkZW5cXG4gICAgICAgICAgICAuaW5wdXRCb3hcXG4gICAgICAgICAgICAgICAgLmN1cnJlbnRZZWFyICN7IGN1cnJlbnRZZWFyIH3lubRcXG4gICAgICAgICAgICAgICAgaW5wdXQodHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIuivt+i+k+WFpeaciOS7vVxcXCIpXFxuICAgICAgICAgICAgYS5jYW5jZWxCdG4gQ2FuY2VsXFxuXCIpO1xufVxufTsiLCJ2YXIgJCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG52YXIgXyAgICAgICAgICAgICAgID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIEJhY2tib25lICAgICAgICA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG52YXIgY3JlYXRlTG9nVHBsICAgID0gcmVxdWlyZShcIi4vY3JlYXRlTG9nLmphZGVcIik7XG52YXIgVXNlckxvZ0xpc3RWaWV3ID0gcmVxdWlyZSgnLi91c2VyTG9nTGlzdFZpZXcnKTtcblxudmFyIHVzZXJOYW1lICAgID0gbnVsbDtcbnZhciBjdXJyZW50WWVhciA9IG51bGw7XG52YXIgcmVuZGVyRGF0YSAgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBCYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG4gICAgY2xhc3NOYW1lIDogJ2Rhc2hib2FyZCcsXG5cbiAgICBldmVudHM6IHtcbiAgICAgICAgJ2NsaWNrIC5jcmVhdGVOZXdMb2cnOiAnc2hvd01vbnRoSW5wdXQnLFxuICAgICAgICAnY2xpY2sgLmNhbmNlbEJ0bicgICA6ICdoaWRlTW9udGhJbnB1dCcsXG4gICAgICAgICdrZXlwcmVzcycgICAgICAgICAgIDogJ2NyZWF0ZUxvZydcbiAgICB9LFxuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKGluaXREYXRhKSB7XG4gICAgICAgIHVzZXJOYW1lICAgICAgICAgPSBpbml0RGF0YS51c2VyTmFtZTtcbiAgICAgICAgdGhpcy51c2VyTG9nTGlzdCA9IGluaXREYXRhLmNvbGxlY3Rpb247XG5cbiAgICAgICAgdGhpcy51c2VyTG9nTGlzdC5mZXRjaCh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgdXNlck5hbWU6IHVzZXJOYW1lXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzZXQ6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLnVzZXJMb2dMaXN0LCAnYWRkJywgdGhpcy5nb1RvTW9udGhMb2cpO1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMudXNlckxvZ0xpc3QsICdyZXNldCcsIHRoaXMubGlzdExvZ3MpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZW5kZXJEYXRhLnVzZXJOYW1lICAgID0gdXNlck5hbWU7XG4gICAgICAgIHJlbmRlckRhdGEuY3VycmVudFllYXIgPSBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xuXG4gICAgICAgIHRoaXMuJGVsLmh0bWwoY3JlYXRlTG9nVHBsKHJlbmRlckRhdGEpKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgc2hvd01vbnRoSW5wdXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHRoaXMuJGVsLmZpbmQoJy5jcmVhdGVOZXdMb2cnKS50b2dnbGVDbGFzcygnc2hvd01vbnRoSW5wdXQnKTtcbiAgICAgICAgdGhpcy4kZWwuZmluZCgnLm1vbnRoSW5wdXQnKS5zbGlkZURvd24oJ2Zhc3QnKTtcbiAgICB9LFxuXG4gICAgaGlkZU1vbnRoSW5wdXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHRoaXMuJGVsLmZpbmQoJy5jcmVhdGVOZXdMb2cnKS50b2dnbGVDbGFzcygnc2hvd01vbnRoSW5wdXQnKTtcbiAgICAgICAgdGhpcy4kZWwuZmluZCgnLm1vbnRoSW5wdXQnKS5zbGlkZVVwKCdmYXN0Jyk7XG4gICAgfSxcblxuICAgIGNyZWF0ZUxvZzogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYoZS53aGljaCA9PT0gMTMpe1xuICAgICAgICAgICAgdmFyIGlucHV0TW9udGggICA9IHBhcnNlSW50KHRoaXMuJGVsLmZpbmQoJ2lucHV0JykudmFsKCksIDEwKTtcbiAgICAgICAgICAgIHZhciBsb2dNb250aEFyciA9IFtjdXJyZW50WWVhcl07XG4gICAgICAgICAgICB2YXIgbG9nT2JqID0ge1xuICAgICAgICAgICAgICAgIHVzZXJOYW1lOiB1c2VyTmFtZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYoIWlzTmFOKGlucHV0TW9udGgpICYmIGlucHV0TW9udGggPiAwICYmIGlucHV0TW9udGggPCAxMyl7XG4gICAgICAgICAgICAgICAgaWYoaW5wdXRNb250aCA8IDEwKXtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRNb250aCA9ICcwJyArIGlucHV0TW9udGg7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0TW9udGggPSBpbnB1dE1vbnRoLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxvZ01vbnRoQXJyLnB1c2goaW5wdXRNb250aCk7XG5cbiAgICAgICAgICAgICAgICBsb2dPYmoubG9nTW9udGggPSBsb2dNb250aEFyci5qb2luKCctJyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJMb2dMaXN0LmNyZWF0ZShsb2dPYmopO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ+ivt+i+k+WFpTHliLAxMuS7peWGheeahOaVsOWtlycpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVsLmZpbmQoJ2lucHV0JykudmFsKCcnKS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGxpc3RMb2dzOiBmdW5jdGlvbiAodXNlckxvZ0xpc3RDb2xsZWN0aW9uKSB7XG4gICAgICAgIHZhciB1c2VyTG9nTGlzdFZpZXcgPSBuZXcgVXNlckxvZ0xpc3RWaWV3KHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IHVzZXJMb2dMaXN0Q29sbGVjdGlvbixcbiAgICAgICAgICAgIHVzZXJOYW1lOiB1c2VyTmFtZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRlbC5maW5kKCcuZGFzaGJvYXJkQ29udGVudCcpLmFwcGVuZCh1c2VyTG9nTGlzdFZpZXcucmVuZGVyKCkuZWwpO1xuICAgIH0sXG5cbiAgICBnb1RvTW9udGhMb2c6IGZ1bmN0aW9uIChsb2dNb2RlbCkge1xuICAgICAgICB2YXIgbG9nUm91dGVBcnIgPSBfLnZhbHVlcyhsb2dNb2RlbC50b0pTT04oKSk7XG4gICAgICAgIEJhY2tib25lLmhpc3RvcnkubmF2aWdhdGUobG9nUm91dGVBcnIuam9pbignLycpLCB7IHRyaWdnZXI6IHRydWV9KTtcbiAgICB9XG59KTtcbiIsInZhciBqYWRlID0gcmVxdWlyZShcImphZGUvcnVudGltZVwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHtcbnZhciBqYWRlX2RlYnVnID0gWyBuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyTG9nTGlzdC5qYWRlXCIgKSBdO1xudHJ5IHtcbnZhciBidWYgPSBbXTtcbnZhciBqYWRlX21peGlucyA9IHt9O1xudmFyIGphZGVfaW50ZXJwO1xuO3ZhciBsb2NhbHNfZm9yX3dpdGggPSAobG9jYWxzIHx8IHt9KTsoZnVuY3Rpb24gKHVuZGVmaW5lZCwgdXNlckxvZ0xpc3QpIHtcbnZhciBqYWRlX2luZGVudCA9IFtdO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMCwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXJMb2dMaXN0LmphZGVcIiApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyTG9nTGlzdC5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbjxkaXYgY2xhc3M9XFxcIm5vdGVcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIuafpeeci+i/h+W+gOeahExvZ1wiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC9kaXY+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMiwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXJMb2dMaXN0LmphZGVcIiApKTtcbmlmICggdXNlckxvZ0xpc3QubGVuZ3RoKVxue1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMywgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXJMb2dMaXN0LmphZGVcIiApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDMsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyTG9nTGlzdC5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbjx1bCBjbGFzcz1cXFwibG9nTGlzdFxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNCwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXJMb2dMaXN0LmphZGVcIiApKTtcbi8vIGl0ZXJhdGUgdXNlckxvZ0xpc3QgXG47KGZ1bmN0aW9uKCl7XG4gIHZhciAkJG9iaiA9IHVzZXJMb2dMaXN0IDtcbiAgaWYgKCdudW1iZXInID09IHR5cGVvZiAkJG9iai5sZW5ndGgpIHtcblxuICAgIGZvciAodmFyICRpbmRleCA9IDAsICQkbCA9ICQkb2JqLmxlbmd0aDsgJGluZGV4IDwgJCRsOyAkaW5kZXgrKykge1xuICAgICAgdmFyIGxvZyA9ICQkb2JqWyRpbmRleF07XG5cbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDQsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyTG9nTGlzdC5qYWRlXCIgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA1LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlckxvZ0xpc3QuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG4gIDxsaSBjbGFzcz1cXFwibGlzdEl0ZW1cXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDUsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIiBcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA2LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlckxvZ0xpc3QuamFkZVwiICkpO1xuYnVmLnB1c2goXCI8c3BhbiBjbGFzcz1cXFwibG9nTW9udGhcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDYsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIlwiICsgKGphZGUuZXNjYXBlKChqYWRlX2ludGVycCA9ICBsb2cgKSA9PSBudWxsID8gJycgOiBqYWRlX2ludGVycCkpICsgXCJcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvc3Bhbj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA3LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlckxvZ0xpc3QuamFkZVwiICkpO1xuYnVmLnB1c2goXCI8c3Bhbj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA3LCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCLmgLvnu5NcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvc3Bhbj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvbGk+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuICAgIH1cblxuICB9IGVsc2Uge1xuICAgIHZhciAkJGwgPSAwO1xuICAgIGZvciAodmFyICRpbmRleCBpbiAkJG9iaikge1xuICAgICAgJCRsKys7ICAgICAgdmFyIGxvZyA9ICQkb2JqWyRpbmRleF07XG5cbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDQsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyTG9nTGlzdC5qYWRlXCIgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA1LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlckxvZ0xpc3QuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG4gIDxsaSBjbGFzcz1cXFwibGlzdEl0ZW1cXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDUsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIiBcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA2LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlckxvZ0xpc3QuamFkZVwiICkpO1xuYnVmLnB1c2goXCI8c3BhbiBjbGFzcz1cXFwibG9nTW9udGhcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDYsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIlwiICsgKGphZGUuZXNjYXBlKChqYWRlX2ludGVycCA9ICBsb2cgKSA9PSBudWxsID8gJycgOiBqYWRlX2ludGVycCkpICsgXCJcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvc3Bhbj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA3LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlckxvZ0xpc3QuamFkZVwiICkpO1xuYnVmLnB1c2goXCI8c3Bhbj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA3LCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCLmgLvnu5NcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvc3Bhbj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvbGk+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuICAgIH1cblxuICB9XG59KS5jYWxsKHRoaXMpO1xuXG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIlxcbjwvdWw+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xufVxuZWxzZVxue1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggOSwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXJMb2dMaXN0LmphZGVcIiApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDksIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyTG9nTGlzdC5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbjxkaXYgY2xhc3M9XFxcIm5vTG9nXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA5LCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCLov5jmsqHmnIlsb2flk6bvvIznjrDlnKjlvIDlp4vmt7vliqDlkKdcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvZGl2PlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbn1cbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTt9LmNhbGwodGhpcyxcInVuZGVmaW5lZFwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGgudW5kZWZpbmVkOnR5cGVvZiB1bmRlZmluZWQhPT1cInVuZGVmaW5lZFwiP3VuZGVmaW5lZDp1bmRlZmluZWQsXCJ1c2VyTG9nTGlzdFwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGgudXNlckxvZ0xpc3Q6dHlwZW9mIHVzZXJMb2dMaXN0IT09XCJ1bmRlZmluZWRcIj91c2VyTG9nTGlzdDp1bmRlZmluZWQpKTs7cmV0dXJuIGJ1Zi5qb2luKFwiXCIpO1xufSBjYXRjaCAoZXJyKSB7XG4gIGphZGUucmV0aHJvdyhlcnIsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUsIGphZGVfZGVidWdbMF0ubGluZW5vLCBcIi5ub3RlIOafpeeci+i/h+W+gOeahExvZ1xcbmlmIHVzZXJMb2dMaXN0Lmxlbmd0aFxcbiAgICB1bC5sb2dMaXN0XFxuICAgICBlYWNoIGxvZyBpbiB1c2VyTG9nTGlzdCBcXG4gICAgICAgIGxpLmxpc3RJdGVtIFxcbiAgICAgICAgICAgIHNwYW4ubG9nTW9udGggI3sgbG9nIH1cXG4gICAgICAgICAgICBzcGFuIOaAu+e7k1xcbmVsc2VcXG4gICAgLm5vTG9nIOi/mOayoeaciWxvZ+WTpu+8jOeOsOWcqOW8gOWni+a3u+WKoOWQp1xcblwiKTtcbn1cbn07IiwidmFyICQgICAgICAgICAgICAgID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG52YXIgXyAgICAgICAgICAgICAgPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgQmFja2JvbmUgICAgICAgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIHVzZXJMb2dMaXN0VHBsID0gcmVxdWlyZShcIi4vdXNlckxvZ0xpc3QuamFkZVwiKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhY2tib25lLlZpZXcuZXh0ZW5kKHtcbiAgICBjbGFzc05hbWU6IFwidXNlckxvZ0xpc3RcIixcblxuICAgIGV2ZW50czoge1xuICAgICAgICAnY2xpY2sgLmxpc3RJdGVtJzogJ2dvVG9Nb250aExvZydcbiAgICB9LFxuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKGluaXREYXRhKSB7XG4gICAgICAgIHRoaXMudXNlck5hbWUgPSBpbml0RGF0YS51c2VyTmFtZTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB1c2VyTG9nTGlzdCA9IF8ubWFwKHRoaXMuY29sbGVjdGlvbi5tb2RlbHMsIGZ1bmN0aW9uIChtb2RlbCwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBtb2RlbC50b0pTT04oKS5sb2dNb250aDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZWwuaHRtbCh1c2VyTG9nTGlzdFRwbCh7IHVzZXJMb2dMaXN0OiB1c2VyTG9nTGlzdCB9KSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBnb1RvTW9udGhMb2c6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBsb2dNb250aCA9ICQoZS5jdXJyZW50VGFyZ2V0KS5maW5kKCcubG9nTW9udGgnKS50ZXh0KCk7XG4gICAgICAgIHZhciBtb250aExvZ1JvdXRlQXJyID0gW3RoaXMudXNlck5hbWUsIGxvZ01vbnRoXTtcblxuICAgICAgICBCYWNrYm9uZS5oaXN0b3J5Lm5hdmlnYXRlKG1vbnRoTG9nUm91dGVBcnIuam9pbignLycpLCB7IHRyaWdnZXI6IHRydWV9KTtcbiAgICB9LFxufSk7XG4iLCJ2YXIgamFkZSA9IHJlcXVpcmUoXCJqYWRlL3J1bnRpbWVcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7XG52YXIgamFkZV9kZWJ1ZyA9IFsgbmV3IGphZGUuRGVidWdJdGVtKCAxLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9ob21lL2NyZWF0ZVVzZXIuamFkZVwiICkgXTtcbnRyeSB7XG52YXIgYnVmID0gW107XG52YXIgamFkZV9taXhpbnMgPSB7fTtcbnZhciBqYWRlX2ludGVycDtcblxudmFyIGphZGVfaW5kZW50ID0gW107XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAwLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9ob21lL2NyZWF0ZVVzZXIuamFkZVwiICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMSwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvaG9tZS9jcmVhdGVVc2VyLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuPGgyIGNsYXNzPVxcXCJzYWx1dGF0aW9uXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCJXZWxjb21lIERlYXIgTWFzdGVyIVwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC9oMj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAyLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9ob21lL2NyZWF0ZVVzZXIuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG48ZGl2IGNsYXNzPVxcXCJuYW1lSW5wdXRcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDMsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2hvbWUvY3JlYXRlVXNlci5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbiAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCLmgqjnmoToi7HmloflkI3miJblkI3lrZfmi7zpn7NcXFwiLz5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIlxcbjwvZGl2PlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTs7cmV0dXJuIGJ1Zi5qb2luKFwiXCIpO1xufSBjYXRjaCAoZXJyKSB7XG4gIGphZGUucmV0aHJvdyhlcnIsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUsIGphZGVfZGVidWdbMF0ubGluZW5vLCBcImgyLnNhbHV0YXRpb24gV2VsY29tZSBEZWFyIE1hc3RlciFcXG4ubmFtZUlucHV0XFxuICAgIGlucHV0KHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCLmgqjnmoToi7HmloflkI3miJblkI3lrZfmi7zpn7NcXFwiKSBcXG5cIik7XG59XG59OyIsInZhciBCYWNrYm9uZSAgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIENyZWF0ZVVzZXJUcGwgID0gcmVxdWlyZShcIi4vY3JlYXRlVXNlci5qYWRlXCIpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gQmFja2JvbmUuVmlldy5leHRlbmQoe1xuICAgIGNsYXNzTmFtZTogJ2NyZWF0ZVVzZXInLFxuICAgIFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRlbC5odG1sKENyZWF0ZVVzZXJUcGwoKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0pO1xuIiwidmFyICQgICAgICAgICAgICAgID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG52YXIgQmFja2JvbmUgICAgICAgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIENyZWF0ZVVzZXJWaWV3ID0gcmVxdWlyZShcIi4vY3JlYXRlVXNlclZpZXdcIik7XG52YXIgTXVsdGlVc2VyVmlldyAgPSByZXF1aXJlKFwiLi9tdWx0aVVzZXJWaWV3XCIpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gQmFja2JvbmUuVmlldy5leHRlbmQoe1xuICAgIGNsYXNzTmFtZSA6ICd3ZWxjb21lUGFuZWwnLFxuXG4gICAgZXZlbnRzOiB7XG4gICAgICAgICdrZXlwcmVzcyc6ICdjb25maXJtTmFtZSdcbiAgICB9LFxuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVzZXJzID0gdGhpcy5jb2xsZWN0aW9uO1xuXG4gICAgICAgIHRoaXMudXNlcnMuZmV0Y2goeyByZXNldDogdHJ1ZSB9KTtcblxuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMudXNlcnMsICdhZGQnLCB0aGlzLmdvVG9Vc2VyRGFzaGJvYXJkKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLnVzZXJzLCAncmVzZXQnLCB0aGlzLnNob3dXZWxjb21lUGFuZWwpO1xuICAgIH0sXG5cbiAgICBjb25maXJtTmFtZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyICRuYW1lSW5wdXRWYWwgPSB0aGlzLiRlbC5maW5kKCdpbnB1dCcpLnZhbCgpO1xuICAgICAgICBpZihlLndoaWNoID09PSAxMyl7XG4gICAgICAgICAgICBpZigkbmFtZUlucHV0VmFsKXtcbiAgICAgICAgICAgICAgICB2YXIgdXNlckRhdGEgID0geyB1c2VyTmFtZSA6ICRuYW1lSW5wdXRWYWwgfTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxlY3Rpb24uY3JlYXRlKHVzZXJEYXRhKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGFsZXJ0KCfor7flhYjovpPlhaXlp5PlkI0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBnb1RvVXNlckRhc2hib2FyZDogZnVuY3Rpb24gKHVzZXJNb2RlbCkge1xuICAgICAgICB2YXIgdXNlclJvdXRlID0gdXNlck1vZGVsLnRvSlNPTigpLnVzZXJOYW1lO1xuICAgICAgICBCYWNrYm9uZS5oaXN0b3J5Lm5hdmlnYXRlKHVzZXJSb3V0ZSwgeyB0cmlnZ2VyOiB0cnVlIH0pO1xuICAgIH0sXG5cbiAgICBzaG93V2VsY29tZVBhbmVsOiBmdW5jdGlvbiAodXNlckNvbGxlY3Rpb24pIHtcbiAgICAgICAgdmFyIHVzZXJzID0gdXNlckNvbGxlY3Rpb24ubW9kZWxzO1xuICAgICAgICBpZih1c2Vycy5sZW5ndGgpe1xuICAgICAgICAgICAgLy8g5Y+q5pyJ5LiA5Liq55So5oi35pe277yM6Lez6L2s5Yiw6K+l55So5oi355qERGFzaGJvYXJkXG4gICAgICAgICAgICBpZih1c2Vycy5sZW5ndGggPT09IDEpe1xuICAgICAgICAgICAgICAgIHZhciB1c2VyUm91dGUgPSB1c2Vyc1swXS50b0pTT04oKS51c2VyTmFtZTtcbiAgICAgICAgICAgICAgICBCYWNrYm9uZS5oaXN0b3J5Lm5hdmlnYXRlKHVzZXJSb3V0ZSwgeyB0cmlnZ2VyOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5aSa5LqO5LiA5Liq55So5oi35ZCN5pe277yM6K6p55So5oi36YCJ5oupXG4gICAgICAgICAgICBpZih1c2Vycy5sZW5ndGggPiAxKXtcbiAgICAgICAgICAgICAgICB2YXIgbXVsdGlVc2VyVmlldyA9IG5ldyBNdWx0aVVzZXJWaWV3KHsgY29sbGVjdGlvbjogdXNlcnMgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZWwuaHRtbChtdWx0aVVzZXJWaWV3LnJlbmRlcigpLmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAvLyDmnKrliJvlu7rku7vkvZXnlKjmiLdcbiAgICAgICAgICAgIHZhciBjcmVhdGVVc2VyVmlldyA9IG5ldyBDcmVhdGVVc2VyVmlldygpO1xuICAgICAgICAgICAgdGhpcy4kZWwuaHRtbChjcmVhdGVVc2VyVmlldy5yZW5kZXIoKS5lbCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsInZhciBqYWRlID0gcmVxdWlyZShcImphZGUvcnVudGltZVwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHtcbnZhciBqYWRlX2RlYnVnID0gWyBuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2hvbWUvbXVsdGlVc2VyLmphZGVcIiApIF07XG50cnkge1xudmFyIGJ1ZiA9IFtdO1xudmFyIGphZGVfbWl4aW5zID0ge307XG52YXIgamFkZV9pbnRlcnA7XG47dmFyIGxvY2Fsc19mb3Jfd2l0aCA9IChsb2NhbHMgfHwge30pOyhmdW5jdGlvbiAodW5kZWZpbmVkLCB1c2Vycykge1xudmFyIGphZGVfaW5kZW50ID0gW107XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAwLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9ob21lL211bHRpVXNlci5qYWRlXCIgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9ob21lL211bHRpVXNlci5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbjxoMyBjbGFzcz1cXFwibm90ZVxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMSwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwi6K+36YCJ5oup6ZyA6KaB5Yib5bu6dGFzayBsb2fnmoTnlKjmiLfvvJpcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvaDM+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMiwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvaG9tZS9tdWx0aVVzZXIuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG48ZGl2IGNsYXNzPVxcXCJhdmFpbGFibGVVc2Vyc1xcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMywgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvaG9tZS9tdWx0aVVzZXIuamFkZVwiICkpO1xuLy8gaXRlcmF0ZSB1c2Vyc1xuOyhmdW5jdGlvbigpe1xuICB2YXIgJCRvYmogPSB1c2VycztcbiAgaWYgKCdudW1iZXInID09IHR5cGVvZiAkJG9iai5sZW5ndGgpIHtcblxuICAgIGZvciAodmFyICRpbmRleCA9IDAsICQkbCA9ICQkb2JqLmxlbmd0aDsgJGluZGV4IDwgJCRsOyAkaW5kZXgrKykge1xuICAgICAgdmFyIHVzZXIgPSAkJG9ialskaW5kZXhdO1xuXG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAzLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9ob21lL211bHRpVXNlci5qYWRlXCIgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA0LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9ob21lL211bHRpVXNlci5qYWRlXCIgKSk7XG5idWYucHVzaChcIjxhXCIgKyAoamFkZS5hdHRyKFwiZGF0YS11c2VyLWlkXCIsIFwiXCIgKyAoIHVzZXIudXNlcklkICkgKyBcIlwiLCB0cnVlLCBmYWxzZSkpICsgXCIgY2xhc3M9XFxcInVzZXJCdG5cXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIlwiICsgKGphZGUuZXNjYXBlKChqYWRlX2ludGVycCA9ICB1c2VyLnVzZXJOYW1lICkgPT0gbnVsbCA/ICcnIDogamFkZV9pbnRlcnApKSArIFwiXCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L2E+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuICAgIH1cblxuICB9IGVsc2Uge1xuICAgIHZhciAkJGwgPSAwO1xuICAgIGZvciAodmFyICRpbmRleCBpbiAkJG9iaikge1xuICAgICAgJCRsKys7ICAgICAgdmFyIHVzZXIgPSAkJG9ialskaW5kZXhdO1xuXG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAzLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9ob21lL211bHRpVXNlci5qYWRlXCIgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA0LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9ob21lL211bHRpVXNlci5qYWRlXCIgKSk7XG5idWYucHVzaChcIjxhXCIgKyAoamFkZS5hdHRyKFwiZGF0YS11c2VyLWlkXCIsIFwiXCIgKyAoIHVzZXIudXNlcklkICkgKyBcIlwiLCB0cnVlLCBmYWxzZSkpICsgXCIgY2xhc3M9XFxcInVzZXJCdG5cXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIlwiICsgKGphZGUuZXNjYXBlKChqYWRlX2ludGVycCA9ICB1c2VyLnVzZXJOYW1lICkgPT0gbnVsbCA/ICcnIDogamFkZV9pbnRlcnApKSArIFwiXCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L2E+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuICAgIH1cblxuICB9XG59KS5jYWxsKHRoaXMpO1xuXG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIlxcbjwvZGl2PlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTt9LmNhbGwodGhpcyxcInVuZGVmaW5lZFwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGgudW5kZWZpbmVkOnR5cGVvZiB1bmRlZmluZWQhPT1cInVuZGVmaW5lZFwiP3VuZGVmaW5lZDp1bmRlZmluZWQsXCJ1c2Vyc1wiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGgudXNlcnM6dHlwZW9mIHVzZXJzIT09XCJ1bmRlZmluZWRcIj91c2Vyczp1bmRlZmluZWQpKTs7cmV0dXJuIGJ1Zi5qb2luKFwiXCIpO1xufSBjYXRjaCAoZXJyKSB7XG4gIGphZGUucmV0aHJvdyhlcnIsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUsIGphZGVfZGVidWdbMF0ubGluZW5vLCBcImgzLm5vdGUg6K+36YCJ5oup6ZyA6KaB5Yib5bu6dGFzayBsb2fnmoTnlKjmiLfvvJpcXG4uYXZhaWxhYmxlVXNlcnNcXG4gICAgZWFjaCB1c2VyIGluIHVzZXJzXFxuICAgICAgICBhLnVzZXJCdG4oZGF0YS11c2VyLWlkPVxcXCIjeyB1c2VyLnVzZXJJZCB9XFxcIikgI3sgdXNlci51c2VyTmFtZSB9XFxuXCIpO1xufVxufTsiLCJ2YXIgJCAgICAgICAgICAgID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG52YXIgXyAgICAgICAgICAgID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIEJhY2tib25lICAgICA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG52YXIgTXVsdGlVc2VyVHBsID0gcmVxdWlyZShcIi4vbXVsdGlVc2VyLmphZGVcIik7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBCYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG4gICAgY2xhc3NOYW1lOiBcImNob29zZVVzZXJcIixcblxuICAgIGV2ZW50czoge1xuICAgICAgICAnY2xpY2sgLnVzZXJCdG4nOiAnZ29Ub1VzZXJEYXNoYm9hcmQnXG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdXNlcnMgPSBfLm1hcCh0aGlzLmNvbGxlY3Rpb24sIGZ1bmN0aW9uIChtb2RlbCwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBtb2RlbC50b0pTT04oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZWwuaHRtbChNdWx0aVVzZXJUcGwoeyB1c2VyczogdXNlcnMgfSkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgZ29Ub1VzZXJEYXNoYm9hcmQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB1c2VyUm91dGUgPSAkKGUuY3VycmVudFRhcmdldCkudGV4dCgpO1xuICAgICAgICBCYWNrYm9uZS5oaXN0b3J5Lm5hdmlnYXRlKHVzZXJSb3V0ZSwgeyB0cmlnZ2VyOiB0cnVlIH0pO1xuICAgIH0sXG59KTtcbiIsInZhciBqYWRlID0gcmVxdWlyZShcImphZGUvcnVudGltZVwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHtcbnZhciBqYWRlX2RlYnVnID0gWyBuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL2xvZ0l0ZW0uamFkZVwiICkgXTtcbnRyeSB7XG52YXIgYnVmID0gW107XG52YXIgamFkZV9taXhpbnMgPSB7fTtcbnZhciBqYWRlX2ludGVycDtcbjt2YXIgbG9jYWxzX2Zvcl93aXRoID0gKGxvY2FscyB8fCB7fSk7KGZ1bmN0aW9uIChjb250ZW50LCBsb2dJbmRleCkge1xudmFyIGphZGVfaW5kZW50ID0gW107XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAwLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9tb250aExvZy9sb2dJdGVtLmphZGVcIiApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL2xvZ0l0ZW0uamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG48dGQgY2xhc3M9XFxcImxvZ0luZGV4XFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCJcIiArIChqYWRlLmVzY2FwZSgoamFkZV9pbnRlcnAgPSAgbG9nSW5kZXggKSA9PSBudWxsID8gJycgOiBqYWRlX2ludGVycCkpICsgXCJcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvdGQ+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMiwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbG9nSXRlbS5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbjx0ZCBjbGFzcz1cXFwibG9nQ29udGVudFxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMiwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiXCIgKyAoamFkZS5lc2NhcGUoKGphZGVfaW50ZXJwID0gIGNvbnRlbnQgKSA9PSBudWxsID8gJycgOiBqYWRlX2ludGVycCkpICsgXCJcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvdGQ+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMywgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbG9nSXRlbS5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbjx0ZCBjbGFzcz1cXFwibG9nU3RhdHVzXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAzLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCLlrozmiJBcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvdGQ+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNCwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbG9nSXRlbS5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbjx0ZCBjbGFzcz1cXFwiZGVsZXRlXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA0LCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCJEZWxldGVcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvdGQ+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO30uY2FsbCh0aGlzLFwiY29udGVudFwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGguY29udGVudDp0eXBlb2YgY29udGVudCE9PVwidW5kZWZpbmVkXCI/Y29udGVudDp1bmRlZmluZWQsXCJsb2dJbmRleFwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGgubG9nSW5kZXg6dHlwZW9mIGxvZ0luZGV4IT09XCJ1bmRlZmluZWRcIj9sb2dJbmRleDp1bmRlZmluZWQpKTs7cmV0dXJuIGJ1Zi5qb2luKFwiXCIpO1xufSBjYXRjaCAoZXJyKSB7XG4gIGphZGUucmV0aHJvdyhlcnIsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUsIGphZGVfZGVidWdbMF0ubGluZW5vLCBcInRkLmxvZ0luZGV4ICN7IGxvZ0luZGV4IH1cXG50ZC5sb2dDb250ZW50ICN7IGNvbnRlbnQgfVxcbnRkLmxvZ1N0YXR1cyDlrozmiJBcXG50ZC5kZWxldGUgRGVsZXRlXFxuXCIpO1xufVxufTsiLCJ2YXIgJCAgICAgICAgICA9IHJlcXVpcmUoJ2pxdWVyeScpO1xudmFyIF8gICAgICAgICAgPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgQmFja2JvbmUgICA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG52YXIgbG9nSXRlbVRwbCA9IHJlcXVpcmUoXCIuL2xvZ0l0ZW0uamFkZVwiKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhY2tib25lLlZpZXcuZXh0ZW5kKHtcbiAgICB0YWdOYW1lICAgOiAndHInLFxuXG4gICAgY2xhc3NOYW1lIDogJ2xvZ0l0ZW0nLFxuXG4gICAgZXZlbnRzOiB7XG4gICAgICAgICdjbGljayAuZGVsZXRlJyA6ICdkZWxldGVJdGVtJ1xuICAgIH0sXG5cbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiAoaW5pdERhdGEpIHtcbiAgICAgICAgdGhpcy5sb2dJbmRleCA9IGluaXREYXRhLmxvZ0luZGV4O1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2UnLCB0aGlzLnJlbmRlcik7XG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2Rlc3Ryb3knLCB0aGlzLnJlbW92ZSk7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVuZGVyRGF0YSA9IF8uZXh0ZW5kKHRoaXMubW9kZWwudG9KU09OKCksIHsgbG9nSW5kZXggOiB0aGlzLmxvZ0luZGV4IH0pO1xuICAgICAgICB0aGlzLiRlbC5odG1sKGxvZ0l0ZW1UcGwocmVuZGVyRGF0YSkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgZGVsZXRlSXRlbTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdGhpcy5tb2RlbC5kZXN0cm95KHsgd2FpdDogdHJ1ZSB9KTtcbiAgICB9XG59KTtcbiIsInZhciBqYWRlID0gcmVxdWlyZShcImphZGUvcnVudGltZVwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHtcbnZhciBqYWRlX2RlYnVnID0gWyBuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApIF07XG50cnkge1xudmFyIGJ1ZiA9IFtdO1xudmFyIGphZGVfbWl4aW5zID0ge307XG52YXIgamFkZV9pbnRlcnA7XG47dmFyIGxvY2Fsc19mb3Jfd2l0aCA9IChsb2NhbHMgfHwge30pOyhmdW5jdGlvbiAoZG93bmxvYWRVcmwsIGxvZ01vbnRoKSB7XG52YXIgamFkZV9pbmRlbnQgPSBbXTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDAsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuPGJ1dHRvbiBjbGFzcz1cXFwiZ29Ub0hvbWVcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIui/lOWbnummlumhtVwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC9idXR0b24+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMywgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbW9udGhMb2cuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG48ZGl2IGNsYXNzPVxcXCJhZGRMb2dcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDQsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIuivt+i+k+WFpeW3peS9nOWGheWuuVxcXCIgYXV0b2ZvY3VzPVxcXCJhdXRvZm9jdXNcXFwiIGNsYXNzPVxcXCJsb2dJbnB1dFxcXCIvPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDUsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICA8YnV0dG9uIGNsYXNzPVxcXCJhZGRcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDUsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIkFkZFwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC9idXR0b24+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCJcXG48L2Rpdj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA3LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9tb250aExvZy9tb250aExvZy5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbjxkaXYgY2xhc3M9XFxcImxvZ0RldGFpbFxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggOCwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbW9udGhMb2cuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG4gIDxkaXYgY2xhc3M9XFxcImxvZ1RpdGxlV3JhcHBlclxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggOSwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbW9udGhMb2cuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG4gICAgPGRpdiBjbGFzcz1cXFwibG9nVGl0bGVcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDksIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIlwiICsgKGphZGUuZXNjYXBlKChqYWRlX2ludGVycCA9ICBsb2dNb250aCApID09IG51bGwgPyAnJyA6IGphZGVfaW50ZXJwKSkgKyBcIuaAu+e7k1wiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC9kaXY+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMTAsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICAgIDxkaXYgY2xhc3M9XFxcIm9wdGlvbnNCdG5cXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDExLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9tb250aExvZy9tb250aExvZy5qYWRlXCIgKSk7XG5idWYucHVzaChcIjxhXCIgKyAoamFkZS5hdHRyKFwiaHJlZlwiLCBkb3dubG9hZFVybCwgdHJ1ZSwgZmFsc2UpKSArIFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBjbGFzcz1cXFwiZG93bmxvYWRcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDExLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCJEb3dubG9hZFwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC9hPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC9kaXY+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCJcXG4gIDwvZGl2PlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEyLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9tb250aExvZy9tb250aExvZy5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbiAgPHRhYmxlIGNsYXNzPVxcXCJsb2dUYWJsZVxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMTMsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICAgIDx0aGVhZD5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxNCwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbW9udGhMb2cuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG4gICAgICA8dGg+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMTQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIuW6j+WPt1wiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC90aD5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxNSwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbW9udGhMb2cuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG4gICAgICA8dGg+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMTUsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIuWGheWuuVwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC90aD5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxNiwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbW9udGhMb2cuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG4gICAgICA8dGg+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMTYsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIueKtuaAgVwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC90aD5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIlxcbiAgICA8L3RoZWFkPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDE3LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9tb250aExvZy9tb250aExvZy5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbiAgICA8dGJvZHk+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L3Rib2R5PlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiXFxuICA8L3RhYmxlPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiXFxuPC9kaXY+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO30uY2FsbCh0aGlzLFwiZG93bmxvYWRVcmxcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLmRvd25sb2FkVXJsOnR5cGVvZiBkb3dubG9hZFVybCE9PVwidW5kZWZpbmVkXCI/ZG93bmxvYWRVcmw6dW5kZWZpbmVkLFwibG9nTW9udGhcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLmxvZ01vbnRoOnR5cGVvZiBsb2dNb250aCE9PVwidW5kZWZpbmVkXCI/bG9nTW9udGg6dW5kZWZpbmVkKSk7O3JldHVybiBidWYuam9pbihcIlwiKTtcbn0gY2F0Y2ggKGVycikge1xuICBqYWRlLnJldGhyb3coZXJyLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lLCBqYWRlX2RlYnVnWzBdLmxpbmVubywgXCJidXR0b24uZ29Ub0hvbWUg6L+U5Zue6aaW6aG1XFxuXFxuLmFkZExvZ1xcbiAgICBpbnB1dC5sb2dJbnB1dCh0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwi6K+36L6T5YWl5bel5L2c5YaF5a65XFxcIiBhdXRvZm9jdXMpXFxuICAgIGJ1dHRvbi5hZGQgQWRkXFxuICAgIFxcbi5sb2dEZXRhaWxcXG4gICAgLmxvZ1RpdGxlV3JhcHBlclxcbiAgICAgICAgLmxvZ1RpdGxlICN7IGxvZ01vbnRoIH3mgLvnu5NcXG4gICAgICAgIC5vcHRpb25zQnRuXFxuICAgICAgICAgICAgYS5kb3dubG9hZChocmVmPWRvd25sb2FkVXJsLCB0YXJnZXQ9J19ibGFuaycpIERvd25sb2FkXFxuICAgIHRhYmxlLmxvZ1RhYmxlXFxuICAgICAgICB0aGVhZFxcbiAgICAgICAgICAgIHRoIOW6j+WPt1xcbiAgICAgICAgICAgIHRoIOWGheWuuVxcbiAgICAgICAgICAgIHRoIOeKtuaAgVxcbiAgICAgICAgdGJvZHlcXG4gICAgICAgICAgICAgICAgICAgIFxcblxcbiAgICAgICAgXFxuICAgICAgICAgICAgXFxuICAgICAgICBcXG4gICAgXFxuXCIpO1xufVxufTsiLCJ2YXIgJCAgICAgICAgICAgPSByZXF1aXJlKCdqcXVlcnknKTtcbnZhciBfICAgICAgICAgICA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBCYWNrYm9uZSAgICA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG52YXIgbWFpblRwbCAgICAgPSByZXF1aXJlKFwiLi9tb250aExvZy5qYWRlXCIpO1xudmFyIExvZ0l0ZW1WaWV3ID0gcmVxdWlyZShcIi4vbG9nSXRlbVZpZXdcIik7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBCYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG4gICAgY2xhc3NOYW1lIDogJ21vbnRoTG9nJyxcblxuICAgIGV2ZW50czoge1xuICAgICAgICAnY2xpY2sgLmdvVG9Ib21lJyA6ICdnb1RvSG9tZScsXG4gICAgICAgICdjbGljayAuYWRkJyAgICAgIDogJ2NyZWF0ZUxvZ0l0ZW0nLFxuICAgICAgICAnY2xpY2sgLmRvd25sb2FkJyA6ICdkb3dubG9hZExvZydcbiAgICB9LFxuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKGluaXREYXRhKSB7XG4gICAgICAgIHRoaXMubG9nTW9udGggPSBpbml0RGF0YS5sb2dNb250aDtcbiAgICAgICAgdGhpcy51c2VyTmFtZSA9IGluaXREYXRhLnVzZXJOYW1lO1xuICAgICAgICB0aGlzLm1vbnRoTG9nID0gaW5pdERhdGEuY29sbGVjdGlvbjtcblxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB0aGlzLiRsb2dMaXN0ID0gdGhpcy4kZWwuZmluZCgnLmxvZ1RhYmxlIHRib2R5Jyk7XG5cbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vbnRoTG9nLCAnYWRkJywgdGhpcy5hZGRMb2dJdGVtKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vbnRoTG9nLCAncmVzZXQnLCB0aGlzLmxpc3RNb250aExvZyk7XG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb250aExvZywgJ2Rlc3Ryb3knLCB0aGlzLnJlZnJlc2hMb2dMaXN0KTtcblxuICAgICAgICB0aGlzLm1vbnRoTG9nLmZldGNoKHtcbiAgICAgICAgICAgIHJlc2V0OiB0cnVlLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHVzZXJOYW1lIDogdGhpcy51c2VyTmFtZSxcbiAgICAgICAgICAgICAgICBsb2dNb250aCA6IHRoaXMubG9nTW9udGgsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHVzZXJOYW1lUGFyYW0gPSAndXNlck5hbWU9JyArIHRoaXMudXNlck5hbWU7XG4gICAgICAgIHZhciBsb2dNb250aFBhcmFtID0gJ2xvZ01vbnRoPScgKyB0aGlzLmxvZ01vbnRoO1xuXG4gICAgICAgIGRvd25sb2FkVXJsQXJyID0gbmV3IEFycmF5KHVzZXJOYW1lUGFyYW0sIGxvZ01vbnRoUGFyYW0pO1xuXG4gICAgICAgIHRoaXMuJGVsLmh0bWwobWFpblRwbCh7XG4gICAgICAgICAgICBsb2dNb250aCA6IHRoaXMubG9nTW9udGgsXG4gICAgICAgICAgICBkb3dubG9hZFVybDogJy9kb3dubG9hZC10YXNrbG9nPycgKyBkb3dubG9hZFVybEFyci5qb2luKCcmJyksXG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGdvVG9Ib21lOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgaG9tZVJvdXRlID0gdGhpcy51c2VyTmFtZTtcbiAgICAgICAgQmFja2JvbmUuaGlzdG9yeS5uYXZpZ2F0ZShob21lUm91dGUsIHsgdHJpZ2dlciA6IHRydWUgfSk7XG4gICAgfSxcblxuICAgIGNyZWF0ZUxvZ0l0ZW06IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBsb2dEYXRhID0ge1xuICAgICAgICAgICAgdXNlck5hbWUgOiB0aGlzLnVzZXJOYW1lLFxuICAgICAgICAgICAgbG9nTW9udGggOiB0aGlzLmxvZ01vbnRoLFxuICAgICAgICAgICAgY29udGVudCAgOiB0aGlzLiRlbC5maW5kKCcubG9nSW5wdXQnKS52YWwoKVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuJGVsLmZpbmQoJy5sb2dJbnB1dCcpLnZhbCgnJykuZm9jdXMoKTtcbiAgICAgICAgdGhpcy5tb250aExvZy5jcmVhdGUobG9nRGF0YSk7XG4gICAgfSxcblxuICAgIGFkZExvZ0l0ZW06IGZ1bmN0aW9uIChsb2dNb2RlbCwgb3B0KSB7XG4gICAgICAgIHZhciBsb2dJbmRleCA9IG51bGw7XG5cbiAgICAgICAgaWYodHlwZW9mIG9wdCA9PT0gJ29iamVjdCcpe1xuICAgICAgICAgICAgbG9nSW5kZXggPSBvcHQubGVuZ3RoO1xuICAgICAgICB9ZWxzZSBpZih0eXBlb2Ygb3B0ID09PSAnbnVtYmVyJyl7XG4gICAgICAgICAgICBsb2dJbmRleCA9IG9wdCArIDE7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbG9nSXRlbVZpZXcgPSBuZXcgTG9nSXRlbVZpZXcoe1xuICAgICAgICAgICAgbW9kZWwgICAgOiBsb2dNb2RlbCxcbiAgICAgICAgICAgIGxvZ0luZGV4IDogbG9nSW5kZXhcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJGxvZ0xpc3QuYXBwZW5kKGxvZ0l0ZW1WaWV3LnJlbmRlcigpLmVsKTtcbiAgICB9LFxuXG4gICAgbGlzdE1vbnRoTG9nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJGxvZ0xpc3QuaHRtbCgnJyk7XG4gICAgICAgIHRoaXMubW9udGhMb2cuZWFjaCh0aGlzLmFkZExvZ0l0ZW0sIHRoaXMpO1xuICAgIH0sXG5cbiAgICByZWZyZXNoTG9nTGlzdDogZnVuY3Rpb24gKGxvZ01vZGVsKSB7XG4gICAgICAgIHRoaXMubW9udGhMb2cuZmV0Y2goe1xuICAgICAgICAgICAgcmVzZXQ6IHRydWUsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgdXNlck5hbWUgOiB0aGlzLnVzZXJOYW1lLFxuICAgICAgICAgICAgICAgIGxvZ01vbnRoIDogdGhpcy5sb2dNb250aCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xudmFyIEJhY2tib25lID0gcmVxdWlyZSgnYmFja2JvbmUnKTtcbnZhciB0YXNrTG9nID0ge307XG5cblxudGFza0xvZy5tb2RlbCA9IEJhY2tib25lLk1vZGVsLmV4dGVuZCh7XG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgdXNlck5hbWUgOiBcIlwiLFxuICAgICAgICBsb2dNb250aCA6IFwiXCIsXG4gICAgICAgIGNvbnRlbnQgIDogXCJcIixcbiAgICAgICAgc3RhdHVzICAgOiBcIuWujOaIkFwiXG4gICAgfSxcbiAgICB2YWxpZGF0ZTogZnVuY3Rpb24gKGF0dHIsIG9wdHMpIHtcbiAgICAgICAgLy8gYm9keS4uLlxuICAgIH1cbn0pO1xuXG50YXNrTG9nLmNvbGxlY3Rpb24gPSBCYWNrYm9uZS5Db2xsZWN0aW9uLmV4dGVuZCh7XG4gICAgbW9kZWw6IHRhc2tMb2cubW9kZWwsXG5cbiAgICB1cmwgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAnL3Rhc2stbG9nJztcbiAgICB9LFxuXG4gICAgLy8gbmV4dExvZ0lkOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmxlbmd0aCA/IHRoaXMubGFzdCgpLmdldCgnbG9nSWQnKSArIDEgOiAxO1xuICAgIC8vIH0sXG4gICAgLy9cbiAgICBjb21wYXJhdG9yOiAnaWQnXG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRhc2tMb2c7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xudmFyIEJhY2tib25lID0gcmVxdWlyZSgnYmFja2JvbmUnKTtcbnZhciB1c2VyID0ge307XG5cblxudXNlci5tb2RlbCA9IEJhY2tib25lLk1vZGVsLmV4dGVuZCh7XG4gICAgdmFsaWRhdGU6IGZ1bmN0aW9uIChhdHRycywgb3B0cykge1xuICAgICAgICBpZihhdHRycy51c2VyTmFtZSAmJiB0eXBlb2YgYXR0cnMudXNlck5hbWUgIT09ICdzdHJpbmcnKXtcbiAgICAgICAgICAgIHJldHVybiAndmFsdWUgb2YgdXNlck5hbWUgc2hvdWxkIGJlIGEgU3RyaW5nJztcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG51c2VyLmNvbGxlY3Rpb24gPSBCYWNrYm9uZS5Db2xsZWN0aW9uLmV4dGVuZCh7XG4gICAgbW9kZWw6IHVzZXIubW9kZWwsXG4gICAgdXJsICA6ICcvdXNlcidcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVzZXI7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xudmFyIEJhY2tib25lID0gcmVxdWlyZSgnYmFja2JvbmUnKTtcbnZhciB1c2VyTG9nTGlzdCA9IHt9O1xuXG51c2VyTG9nTGlzdC5tb2RlbCA9IEJhY2tib25lLk1vZGVsLmV4dGVuZCh7XG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgbG9nTW9udGg6IFwiXCJcbiAgICB9XG59KTtcblxudXNlckxvZ0xpc3QuY29sbGVjdGlvbiA9IEJhY2tib25lLkNvbGxlY3Rpb24uZXh0ZW5kKHtcbiAgICBtb2RlbDogdXNlckxvZ0xpc3QubW9kZWwsXG4gICAgdXJsICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICcvdXNlci1sb2dsaXN0JztcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB1c2VyTG9nTGlzdDtcbiIsbnVsbCwiKGZ1bmN0aW9uKGYpe2lmKHR5cGVvZiBleHBvcnRzPT09XCJvYmplY3RcIiYmdHlwZW9mIG1vZHVsZSE9PVwidW5kZWZpbmVkXCIpe21vZHVsZS5leHBvcnRzPWYoKX1lbHNlIGlmKHR5cGVvZiBkZWZpbmU9PT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQpe2RlZmluZShbXSxmKX1lbHNle3ZhciBnO2lmKHR5cGVvZiB3aW5kb3chPT1cInVuZGVmaW5lZFwiKXtnPXdpbmRvd31lbHNlIGlmKHR5cGVvZiBnbG9iYWwhPT1cInVuZGVmaW5lZFwiKXtnPWdsb2JhbH1lbHNlIGlmKHR5cGVvZiBzZWxmIT09XCJ1bmRlZmluZWRcIil7Zz1zZWxmfWVsc2V7Zz10aGlzfWcuamFkZSA9IGYoKX19KShmdW5jdGlvbigpe3ZhciBkZWZpbmUsbW9kdWxlLGV4cG9ydHM7cmV0dXJuIChmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNZXJnZSB0d28gYXR0cmlidXRlIG9iamVjdHMgZ2l2aW5nIHByZWNlZGVuY2VcbiAqIHRvIHZhbHVlcyBpbiBvYmplY3QgYGJgLiBDbGFzc2VzIGFyZSBzcGVjaWFsLWNhc2VkXG4gKiBhbGxvd2luZyBmb3IgYXJyYXlzIGFuZCBtZXJnaW5nL2pvaW5pbmcgYXBwcm9wcmlhdGVseVxuICogcmVzdWx0aW5nIGluIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhXG4gKiBAcGFyYW0ge09iamVjdH0gYlxuICogQHJldHVybiB7T2JqZWN0fSBhXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLm1lcmdlID0gZnVuY3Rpb24gbWVyZ2UoYSwgYikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhciBhdHRycyA9IGFbMF07XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhdHRycyA9IG1lcmdlKGF0dHJzLCBhW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGF0dHJzO1xuICB9XG4gIHZhciBhYyA9IGFbJ2NsYXNzJ107XG4gIHZhciBiYyA9IGJbJ2NsYXNzJ107XG5cbiAgaWYgKGFjIHx8IGJjKSB7XG4gICAgYWMgPSBhYyB8fCBbXTtcbiAgICBiYyA9IGJjIHx8IFtdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhYykpIGFjID0gW2FjXTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYmMpKSBiYyA9IFtiY107XG4gICAgYVsnY2xhc3MnXSA9IGFjLmNvbmNhdChiYykuZmlsdGVyKG51bGxzKTtcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgaWYgKGtleSAhPSAnY2xhc3MnKSB7XG4gICAgICBhW2tleV0gPSBiW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGE7XG59O1xuXG4vKipcbiAqIEZpbHRlciBudWxsIGB2YWxgcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIG51bGxzKHZhbCkge1xuICByZXR1cm4gdmFsICE9IG51bGwgJiYgdmFsICE9PSAnJztcbn1cblxuLyoqXG4gKiBqb2luIGFycmF5IGFzIGNsYXNzZXMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5qb2luQ2xhc3NlcyA9IGpvaW5DbGFzc2VzO1xuZnVuY3Rpb24gam9pbkNsYXNzZXModmFsKSB7XG4gIHJldHVybiAoQXJyYXkuaXNBcnJheSh2YWwpID8gdmFsLm1hcChqb2luQ2xhc3NlcykgOlxuICAgICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpID8gT2JqZWN0LmtleXModmFsKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gdmFsW2tleV07IH0pIDpcbiAgICBbdmFsXSkuZmlsdGVyKG51bGxzKS5qb2luKCcgJyk7XG59XG5cbi8qKlxuICogUmVuZGVyIHRoZSBnaXZlbiBjbGFzc2VzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGNsYXNzZXNcbiAqIEBwYXJhbSB7QXJyYXkuPEJvb2xlYW4+fSBlc2NhcGVkXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuY2xzID0gZnVuY3Rpb24gY2xzKGNsYXNzZXMsIGVzY2FwZWQpIHtcbiAgdmFyIGJ1ZiA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZXNjYXBlZCAmJiBlc2NhcGVkW2ldKSB7XG4gICAgICBidWYucHVzaChleHBvcnRzLmVzY2FwZShqb2luQ2xhc3NlcyhbY2xhc3Nlc1tpXV0pKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1Zi5wdXNoKGpvaW5DbGFzc2VzKGNsYXNzZXNbaV0pKTtcbiAgICB9XG4gIH1cbiAgdmFyIHRleHQgPSBqb2luQ2xhc3NlcyhidWYpO1xuICBpZiAodGV4dC5sZW5ndGgpIHtcbiAgICByZXR1cm4gJyBjbGFzcz1cIicgKyB0ZXh0ICsgJ1wiJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cblxuZXhwb3J0cy5zdHlsZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWwpLm1hcChmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgIHJldHVybiBzdHlsZSArICc6JyArIHZhbFtzdHlsZV07XG4gICAgfSkuam9pbignOycpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWw7XG4gIH1cbn07XG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gYXR0cmlidXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZXNjYXBlZFxuICogQHBhcmFtIHtCb29sZWFufSB0ZXJzZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmF0dHIgPSBmdW5jdGlvbiBhdHRyKGtleSwgdmFsLCBlc2NhcGVkLCB0ZXJzZSkge1xuICBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgdmFsID0gZXhwb3J0cy5zdHlsZSh2YWwpO1xuICB9XG4gIGlmICgnYm9vbGVhbicgPT0gdHlwZW9mIHZhbCB8fCBudWxsID09IHZhbCkge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHJldHVybiAnICcgKyAodGVyc2UgPyBrZXkgOiBrZXkgKyAnPVwiJyArIGtleSArICdcIicpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9IGVsc2UgaWYgKDAgPT0ga2V5LmluZGV4T2YoJ2RhdGEnKSAmJiAnc3RyaW5nJyAhPSB0eXBlb2YgdmFsKSB7XG4gICAgaWYgKEpTT04uc3RyaW5naWZ5KHZhbCkuaW5kZXhPZignJicpICE9PSAtMSkge1xuICAgICAgY29uc29sZS53YXJuKCdTaW5jZSBKYWRlIDIuMC4wLCBhbXBlcnNhbmRzIChgJmApIGluIGRhdGEgYXR0cmlidXRlcyAnICtcbiAgICAgICAgICAgICAgICAgICAnd2lsbCBiZSBlc2NhcGVkIHRvIGAmYW1wO2AnKTtcbiAgICB9O1xuICAgIGlmICh2YWwgJiYgdHlwZW9mIHZhbC50b0lTT1N0cmluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCdKYWRlIHdpbGwgZWxpbWluYXRlIHRoZSBkb3VibGUgcXVvdGVzIGFyb3VuZCBkYXRlcyBpbiAnICtcbiAgICAgICAgICAgICAgICAgICAnSVNPIGZvcm0gYWZ0ZXIgMi4wLjAnKTtcbiAgICB9XG4gICAgcmV0dXJuICcgJyArIGtleSArIFwiPSdcIiArIEpTT04uc3RyaW5naWZ5KHZhbCkucmVwbGFjZSgvJy9nLCAnJmFwb3M7JykgKyBcIidcIjtcbiAgfSBlbHNlIGlmIChlc2NhcGVkKSB7XG4gICAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsLnRvSVNPU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0phZGUgd2lsbCBzdHJpbmdpZnkgZGF0ZXMgaW4gSVNPIGZvcm0gYWZ0ZXIgMi4wLjAnKTtcbiAgICB9XG4gICAgcmV0dXJuICcgJyArIGtleSArICc9XCInICsgZXhwb3J0cy5lc2NhcGUodmFsKSArICdcIic7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsLnRvSVNPU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0phZGUgd2lsbCBzdHJpbmdpZnkgZGF0ZXMgaW4gSVNPIGZvcm0gYWZ0ZXIgMi4wLjAnKTtcbiAgICB9XG4gICAgcmV0dXJuICcgJyArIGtleSArICc9XCInICsgdmFsICsgJ1wiJztcbiAgfVxufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZXMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7T2JqZWN0fSBlc2NhcGVkXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuYXR0cnMgPSBmdW5jdGlvbiBhdHRycyhvYmosIHRlcnNlKXtcbiAgdmFyIGJ1ZiA9IFtdO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBpZiAoa2V5cy5sZW5ndGgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldXG4gICAgICAgICwgdmFsID0gb2JqW2tleV07XG5cbiAgICAgIGlmICgnY2xhc3MnID09IGtleSkge1xuICAgICAgICBpZiAodmFsID0gam9pbkNsYXNzZXModmFsKSkge1xuICAgICAgICAgIGJ1Zi5wdXNoKCcgJyArIGtleSArICc9XCInICsgdmFsICsgJ1wiJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1Zi5wdXNoKGV4cG9ydHMuYXR0cihrZXksIHZhbCwgZmFsc2UsIHRlcnNlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1Zi5qb2luKCcnKTtcbn07XG5cbi8qKlxuICogRXNjYXBlIHRoZSBnaXZlbiBzdHJpbmcgb2YgYGh0bWxgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBodG1sXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgamFkZV9lbmNvZGVfaHRtbF9ydWxlcyA9IHtcbiAgJyYnOiAnJmFtcDsnLFxuICAnPCc6ICcmbHQ7JyxcbiAgJz4nOiAnJmd0OycsXG4gICdcIic6ICcmcXVvdDsnXG59O1xudmFyIGphZGVfbWF0Y2hfaHRtbCA9IC9bJjw+XCJdL2c7XG5cbmZ1bmN0aW9uIGphZGVfZW5jb2RlX2NoYXIoYykge1xuICByZXR1cm4gamFkZV9lbmNvZGVfaHRtbF9ydWxlc1tjXSB8fCBjO1xufVxuXG5leHBvcnRzLmVzY2FwZSA9IGphZGVfZXNjYXBlO1xuZnVuY3Rpb24gamFkZV9lc2NhcGUoaHRtbCl7XG4gIHZhciByZXN1bHQgPSBTdHJpbmcoaHRtbCkucmVwbGFjZShqYWRlX21hdGNoX2h0bWwsIGphZGVfZW5jb2RlX2NoYXIpO1xuICBpZiAocmVzdWx0ID09PSAnJyArIGh0bWwpIHJldHVybiBodG1sO1xuICBlbHNlIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFJlLXRocm93IHRoZSBnaXZlbiBgZXJyYCBpbiBjb250ZXh0IHRvIHRoZVxuICogdGhlIGphZGUgaW4gYGZpbGVuYW1lYCBhdCB0aGUgZ2l2ZW4gYGxpbmVub2AuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBsaW5lbm9cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMucmV0aHJvdyA9IGZ1bmN0aW9uIHJldGhyb3coZXJyLCBmaWxlbmFtZSwgbGluZW5vLCBzdHIpe1xuICBpZiAoIShlcnIgaW5zdGFuY2VvZiBFcnJvcikpIHRocm93IGVycjtcbiAgaWYgKCh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnIHx8ICFmaWxlbmFtZSkgJiYgIXN0cikge1xuICAgIGVyci5tZXNzYWdlICs9ICcgb24gbGluZSAnICsgbGluZW5vO1xuICAgIHRocm93IGVycjtcbiAgfVxuICB0cnkge1xuICAgIHN0ciA9IHN0ciB8fCByZXF1aXJlKCdmcycpLnJlYWRGaWxlU3luYyhmaWxlbmFtZSwgJ3V0ZjgnKVxuICB9IGNhdGNoIChleCkge1xuICAgIHJldGhyb3coZXJyLCBudWxsLCBsaW5lbm8pXG4gIH1cbiAgdmFyIGNvbnRleHQgPSAzXG4gICAgLCBsaW5lcyA9IHN0ci5zcGxpdCgnXFxuJylcbiAgICAsIHN0YXJ0ID0gTWF0aC5tYXgobGluZW5vIC0gY29udGV4dCwgMClcbiAgICAsIGVuZCA9IE1hdGgubWluKGxpbmVzLmxlbmd0aCwgbGluZW5vICsgY29udGV4dCk7XG5cbiAgLy8gRXJyb3IgY29udGV4dFxuICB2YXIgY29udGV4dCA9IGxpbmVzLnNsaWNlKHN0YXJ0LCBlbmQpLm1hcChmdW5jdGlvbihsaW5lLCBpKXtcbiAgICB2YXIgY3VyciA9IGkgKyBzdGFydCArIDE7XG4gICAgcmV0dXJuIChjdXJyID09IGxpbmVubyA/ICcgID4gJyA6ICcgICAgJylcbiAgICAgICsgY3VyclxuICAgICAgKyAnfCAnXG4gICAgICArIGxpbmU7XG4gIH0pLmpvaW4oJ1xcbicpO1xuXG4gIC8vIEFsdGVyIGV4Y2VwdGlvbiBtZXNzYWdlXG4gIGVyci5wYXRoID0gZmlsZW5hbWU7XG4gIGVyci5tZXNzYWdlID0gKGZpbGVuYW1lIHx8ICdKYWRlJykgKyAnOicgKyBsaW5lbm9cbiAgICArICdcXG4nICsgY29udGV4dCArICdcXG5cXG4nICsgZXJyLm1lc3NhZ2U7XG4gIHRocm93IGVycjtcbn07XG5cbmV4cG9ydHMuRGVidWdJdGVtID0gZnVuY3Rpb24gRGVidWdJdGVtKGxpbmVubywgZmlsZW5hbWUpIHtcbiAgdGhpcy5saW5lbm8gPSBsaW5lbm87XG4gIHRoaXMuZmlsZW5hbWUgPSBmaWxlbmFtZTtcbn1cblxufSx7XCJmc1wiOjJ9XSwyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblxufSx7fV19LHt9LFsxXSkoMSlcbn0pOyJdfQ==
