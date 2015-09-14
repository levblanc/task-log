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
buf.push("" + (jade.escape((jade_interp =  userName ) == null ? '' : jade_interp)) + "'s Dashboard");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 3, "/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade" ));
buf.push("\n<div class=\"dashboardContent\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, "/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade" ));
buf.push("\n  <div class=\"createMonthLog\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, jade_debug[0].filename ));
buf.push(" ");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 5, "/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade" ));
buf.push("<a class=\"createNewLog\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, jade_debug[0].filename ));
buf.push("新增Log");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 6, "/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade" ));
buf.push("\n    <div class=\"monthInput hidden\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 7, "/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade" ));
buf.push("\n      <div class=\"inputBox\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 8, "/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade" ));
buf.push("\n        <div class=\"currentYear\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 8, jade_debug[0].filename ));
buf.push("" + (jade.escape((jade_interp =  currentYear ) == null ? '' : jade_interp)) + "年");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 9, "/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade" ));
buf.push("\n        <input type=\"text\" placeholder=\"请输入月份\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 10, "/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade" ));
buf.push("<a class=\"cancelBtn\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 10, jade_debug[0].filename ));
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
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".header #{ userName }'s Dashboard\n\n.dashboardContent\n    .createMonthLog \n        a.createNewLog 新增Log\n        .monthInput.hidden\n            .inputBox\n                .currentYear #{ currentYear }年\n                input(type=\"text\" placeholder=\"请输入月份\")\n            a.cancelBtn Cancel\n");
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
        this.$el.find('.monthInput').slideUp('fast');
        this.$el.find('.createNewLog').toggleClass('showMonthInput');        
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
buf.push("\n<div class=\"title\">");
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
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".title 查看过往的Log\nif userLogList.length\n    ul.logList\n     each log in userLogList \n        li.listItem \n            span.logMonth #{ log }\n            span 总结\nelse\n    .noLog 还没有log哦，现在开始添加吧\n");
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
buf.push(" ");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 5, "/Users/levblanc/projects/task-log/app/components/monthLog/logItem.jade" ));
buf.push("<a>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, jade_debug[0].filename ));
buf.push("Delete");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();}.call(this,"content" in locals_for_with?locals_for_with.content:typeof content!=="undefined"?content:undefined,"logIndex" in locals_for_with?locals_for_with.logIndex:typeof logIndex!=="undefined"?logIndex:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "td.logIndex #{ logIndex }\ntd.logContent #{ content }\ntd.logStatus 完成\ntd.delete \n    a Delete\n");
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
    },

    render: function () {
        var renderData = _.extend(this.model.toJSON(), { logIndex : this.logIndex });
        this.$el.html(logItemTpl(renderData));
        return this;
    },

    deleteItem: function (e) {
        // collection可以监听到model的destory，
        // 在monthLogView里面重新把整个log render一次，
        // 所以在这里不需要监听自己的destory事件来remove当前view
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
buf.push("\n<div class=\"header\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 1, jade_debug[0].filename ));
buf.push("" + (jade.escape((jade_interp =  logMonth ) == null ? '' : jade_interp)) + "总结详情");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 2, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("<a class=\"goToDashboard options\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, jade_debug[0].filename ));
buf.push("Dashboard");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 3, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("<a" + (jade.attr("href", downloadUrl, true, false)) + " target=\"_blank\" class=\"downloadBtn options\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, jade_debug[0].filename ));
buf.push("Download");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 4, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n<div class=\"addLog\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n  <div class=\"note\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, jade_debug[0].filename ));
buf.push("添加新条目");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 6, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n  <input type=\"text\" placeholder=\"请输入工作内容\" autofocus=\"autofocus\" class=\"logInput\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 7, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n<div class=\"logDetail\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 7, jade_debug[0].filename ));
buf.push("   ");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 8, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n  <table class=\"logTable\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 9, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n    <thead>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 10, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n      <th>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 10, jade_debug[0].filename ));
buf.push("序号");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 11, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n      <th>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 11, jade_debug[0].filename ));
buf.push("内容");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 12, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n      <th>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 12, jade_debug[0].filename ));
buf.push("状态");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 13, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
buf.push("\n      <th>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 13, jade_debug[0].filename ));
buf.push("             ");
jade_debug.shift();
jade_debug.shift();
buf.push("</th>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </thead>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 14, "/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade" ));
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
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".header #{ logMonth }总结详情\n    a.goToDashboard.options Dashboard\n    a.downloadBtn.options(href=downloadUrl, target='_blank') Download\n.addLog\n    .note 添加新条目\n    input.logInput(type=\"text\" placeholder=\"请输入工作内容\" autofocus)    \n.logDetail    \n    table.logTable\n        thead\n            th 序号\n            th 内容\n            th 状态\n            th              \n        tbody\n                    \n\n        \n            \n        \n    \n");
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
        if(e.which === 13){
            var logData = {
                userName : this.userName,
                logMonth : this.logMonth,
                content  : this.$el.find('.logInput').val()
            };

            this.$el.find('.logInput').val('').focus();
            this.monthLog.create(logData);
        }
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

    refreshLogList: function () {
        // destory model之后，collection会监听到
        // 并且已经从collection中删除掉该model
        // 同时，执行delete请求之后后端会马上同步数据库
        // 所以前端和后端的数据是一致的，不需要重新fetch数据
        this.listMonthLog();
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXNzZXRzL2pzL2FwcC5qcyIsImFwcC9hc3NldHMvanMvcm91dGVyLmpzIiwiYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NyZWF0ZUxvZy5qYWRlIiwiYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZFZpZXcuanMiLCJhcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlckxvZ0xpc3QuamFkZSIsImFwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyTG9nTGlzdFZpZXcuanMiLCJhcHAvY29tcG9uZW50cy9ob21lL2NyZWF0ZVVzZXIuamFkZSIsImFwcC9jb21wb25lbnRzL2hvbWUvY3JlYXRlVXNlclZpZXcuanMiLCJhcHAvY29tcG9uZW50cy9ob21lL2hvbWVWaWV3LmpzIiwiYXBwL2NvbXBvbmVudHMvaG9tZS9tdWx0aVVzZXIuamFkZSIsImFwcC9jb21wb25lbnRzL2hvbWUvbXVsdGlVc2VyVmlldy5qcyIsImFwcC9jb21wb25lbnRzL21vbnRoTG9nL2xvZ0l0ZW0uamFkZSIsImFwcC9jb21wb25lbnRzL21vbnRoTG9nL2xvZ0l0ZW1WaWV3LmpzIiwiYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbW9udGhMb2cuamFkZSIsImFwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nVmlldy5qcyIsImFwcC9zaGFyZWQvY29sbGVjdGlvbnMvdGFza0xvZy5qcyIsImFwcC9zaGFyZWQvY29sbGVjdGlvbnMvdXNlci5qcyIsImFwcC9zaGFyZWQvY29sbGVjdGlvbnMvdXNlckxvZ0xpc3QuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1yZXNvbHZlL2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2phZGUvcnVudGltZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBCYWNrYm9uZSA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG52YXIgUm91dGVyID0gcmVxdWlyZSgnLi9yb3V0ZXInKTtcbnZhciBhcHBSb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5cbkJhY2tib25lLmhpc3Rvcnkuc3RhcnQoeyBwdXNoU3RhdGU6IHRydWUgfSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xudmFyIEJhY2tib25lID0gcmVxdWlyZSgnYmFja2JvbmUnKTtcblxuQmFja2JvbmUuJCA9ICQ7XG5cbnZhciBIb21lVmlldyAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLi8uLi9jb21wb25lbnRzL2hvbWUvaG9tZVZpZXcnKTtcbnZhciBEYXNoYm9hcmRWaWV3ICAgICAgICAgPSByZXF1aXJlKCcuLi8uLi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmRWaWV3Jyk7XG52YXIgTW9udGhMb2dWaWV3ICAgICAgICAgID0gcmVxdWlyZSgnLi4vLi4vY29tcG9uZW50cy9tb250aExvZy9tb250aExvZ1ZpZXcnKTtcbnZhciBVc2VyQ29sbGVjdGlvbiAgICAgICAgPSByZXF1aXJlKCcuLi8uLi9zaGFyZWQvY29sbGVjdGlvbnMvdXNlcicpLmNvbGxlY3Rpb247XG52YXIgVGFza0xvZ0NvbGxlY3Rpb24gICAgID0gcmVxdWlyZSgnLi4vLi4vc2hhcmVkL2NvbGxlY3Rpb25zL3Rhc2tMb2cnKS5jb2xsZWN0aW9uO1xudmFyIFVzZXJMb2dMaXN0Q29sbGVjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL3NoYXJlZC9jb2xsZWN0aW9ucy91c2VyTG9nTGlzdCcpLmNvbGxlY3Rpb247XG5cbnZhciB1c2VyQ29sbGVjdGlvbiAgICAgICAgPSBuZXcgVXNlckNvbGxlY3Rpb24oKTtcbnZhciB0YXNrTG9nQ29sbGVjdGlvbiAgICAgPSBuZXcgVGFza0xvZ0NvbGxlY3Rpb24oKTtcbnZhciB1c2VyTG9nTGlzdENvbGxlY3Rpb24gPSBuZXcgVXNlckxvZ0xpc3RDb2xsZWN0aW9uKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gQmFja2JvbmUuUm91dGVyLmV4dGVuZCh7XG4gICAgcm91dGVzOiB7XG4gICAgICAgICcnIDogJ2hvbWUnLFxuICAgICAgICAnOnVzZXJOYW1lJzogJ3VzZXJEYXNoYm9hcmQnLFxuICAgICAgICAnOnVzZXJOYW1lLzpsb2dNb250aCc6ICd1c2VyTW9udGhMb2cnXG4gICAgfSxcblxuICAgIGhvbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5kaXIoJ2luIGhvbWUgdmlldycpO1xuXG4gICAgICAgIHZhciBob21lVmlldyAgPSBuZXcgSG9tZVZpZXcoeyBjb2xsZWN0aW9uOiB1c2VyQ29sbGVjdGlvbiB9KTtcblxuICAgICAgICAkKCcjbWFpbicpLmVtcHR5KCkuYXBwZW5kKGhvbWVWaWV3LmVsKTtcbiAgICB9LFxuXG4gICAgdXNlckRhc2hib2FyZDogZnVuY3Rpb24gKHVzZXJOYW1lKSB7XG4gICAgICAgIGNvbnNvbGUuZGlyKFwiaW4gXCIgICsgdXNlck5hbWUgKyAgXCIncyBkYXNoYm9hcmRcIik7XG5cbiAgICAgICAgdmFyIGluaXREYXRhID0ge1xuICAgICAgICAgICAgY29sbGVjdGlvbiA6IHVzZXJMb2dMaXN0Q29sbGVjdGlvbixcbiAgICAgICAgICAgIHVzZXJOYW1lICAgOiB1c2VyTmFtZVxuICAgICAgICB9O1xuICAgICAgICB2YXIgZGFzaGJvYXJkVmlldyA9IG5ldyBEYXNoYm9hcmRWaWV3KGluaXREYXRhKTtcblxuICAgICAgICAkKCcjbWFpbicpLmVtcHR5KCkuYXBwZW5kKGRhc2hib2FyZFZpZXcuZWwpO1xuICAgIH0sXG5cbiAgICB1c2VyTW9udGhMb2c6IGZ1bmN0aW9uICh1c2VyTmFtZSwgbG9nTW9udGgpIHtcbiAgICAgICAgY29uc29sZS5kaXIoXCJpbiBcIiAgKyB1c2VyTmFtZSArICBcIidzIFwiICsgbG9nTW9udGggKyBcIiBsb2dcIik7XG5cbiAgICAgICAgdmFyIGluaXREYXRhID0ge1xuICAgICAgICAgICAgY29sbGVjdGlvbiA6IHRhc2tMb2dDb2xsZWN0aW9uLFxuICAgICAgICAgICAgdXNlck5hbWUgOiB1c2VyTmFtZSxcbiAgICAgICAgICAgIGxvZ01vbnRoIDogbG9nTW9udGhcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgbW9udGhMb2dWaWV3ID0gbmV3IE1vbnRoTG9nVmlldyhpbml0RGF0YSk7XG5cbiAgICAgICAgJCgnI21haW4nKS5lbXB0eSgpLmFwcGVuZChtb250aExvZ1ZpZXcuZWwpO1xuICAgIH1cblxufSk7XG4iLCJ2YXIgamFkZSA9IHJlcXVpcmUoXCJqYWRlL3J1bnRpbWVcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7XG52YXIgamFkZV9kZWJ1ZyA9IFsgbmV3IGphZGUuRGVidWdJdGVtKCAxLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvY3JlYXRlTG9nLmphZGVcIiApIF07XG50cnkge1xudmFyIGJ1ZiA9IFtdO1xudmFyIGphZGVfbWl4aW5zID0ge307XG52YXIgamFkZV9pbnRlcnA7XG47dmFyIGxvY2Fsc19mb3Jfd2l0aCA9IChsb2NhbHMgfHwge30pOyhmdW5jdGlvbiAoY3VycmVudFllYXIsIHVzZXJOYW1lKSB7XG52YXIgamFkZV9pbmRlbnQgPSBbXTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDAsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9jcmVhdGVMb2cuamFkZVwiICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMSwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NyZWF0ZUxvZy5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbjxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMSwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiXCIgKyAoamFkZS5lc2NhcGUoKGphZGVfaW50ZXJwID0gIHVzZXJOYW1lICkgPT0gbnVsbCA/ICcnIDogamFkZV9pbnRlcnApKSArIFwiJ3MgRGFzaGJvYXJkXCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L2Rpdj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAzLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvY3JlYXRlTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuPGRpdiBjbGFzcz1cXFwiZGFzaGJvYXJkQ29udGVudFxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNCwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NyZWF0ZUxvZy5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbiAgPGRpdiBjbGFzcz1cXFwiY3JlYXRlTW9udGhMb2dcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIiBcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA1LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvY3JlYXRlTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiPGEgY2xhc3M9XFxcImNyZWF0ZU5ld0xvZ1xcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNSwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwi5paw5aKeTG9nXCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L2E+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNiwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NyZWF0ZUxvZy5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb250aElucHV0IGhpZGRlblxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNywgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NyZWF0ZUxvZy5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0Qm94XFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA4LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvY3JlYXRlTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjdXJyZW50WWVhclxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggOCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiXCIgKyAoamFkZS5lc2NhcGUoKGphZGVfaW50ZXJwID0gIGN1cnJlbnRZZWFyICkgPT0gbnVsbCA/ICcnIDogamFkZV9pbnRlcnApKSArIFwi5bm0XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L2Rpdj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA5LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvY3JlYXRlTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIuivt+i+k+WFpeaciOS7vVxcXCIvPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiXFxuICAgICAgPC9kaXY+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMTAsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9jcmVhdGVMb2cuamFkZVwiICkpO1xuYnVmLnB1c2goXCI8YSBjbGFzcz1cXFwiY2FuY2VsQnRuXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxMCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiQ2FuY2VsXCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L2E+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCJcXG4gICAgPC9kaXY+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCJcXG4gIDwvZGl2PlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiXFxuPC9kaXY+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO30uY2FsbCh0aGlzLFwiY3VycmVudFllYXJcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLmN1cnJlbnRZZWFyOnR5cGVvZiBjdXJyZW50WWVhciE9PVwidW5kZWZpbmVkXCI/Y3VycmVudFllYXI6dW5kZWZpbmVkLFwidXNlck5hbWVcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLnVzZXJOYW1lOnR5cGVvZiB1c2VyTmFtZSE9PVwidW5kZWZpbmVkXCI/dXNlck5hbWU6dW5kZWZpbmVkKSk7O3JldHVybiBidWYuam9pbihcIlwiKTtcbn0gY2F0Y2ggKGVycikge1xuICBqYWRlLnJldGhyb3coZXJyLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lLCBqYWRlX2RlYnVnWzBdLmxpbmVubywgXCIuaGVhZGVyICN7IHVzZXJOYW1lIH0ncyBEYXNoYm9hcmRcXG5cXG4uZGFzaGJvYXJkQ29udGVudFxcbiAgICAuY3JlYXRlTW9udGhMb2cgXFxuICAgICAgICBhLmNyZWF0ZU5ld0xvZyDmlrDlop5Mb2dcXG4gICAgICAgIC5tb250aElucHV0LmhpZGRlblxcbiAgICAgICAgICAgIC5pbnB1dEJveFxcbiAgICAgICAgICAgICAgICAuY3VycmVudFllYXIgI3sgY3VycmVudFllYXIgfeW5tFxcbiAgICAgICAgICAgICAgICBpbnB1dCh0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwi6K+36L6T5YWl5pyI5Lu9XFxcIilcXG4gICAgICAgICAgICBhLmNhbmNlbEJ0biBDYW5jZWxcXG5cIik7XG59XG59OyIsInZhciAkICAgICAgICAgICAgICAgPSByZXF1aXJlKCdqcXVlcnknKTtcbnZhciBfICAgICAgICAgICAgICAgPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgQmFja2JvbmUgICAgICAgID0gcmVxdWlyZSgnYmFja2JvbmUnKTtcbnZhciBjcmVhdGVMb2dUcGwgICAgPSByZXF1aXJlKFwiLi9jcmVhdGVMb2cuamFkZVwiKTtcbnZhciBVc2VyTG9nTGlzdFZpZXcgPSByZXF1aXJlKCcuL3VzZXJMb2dMaXN0VmlldycpO1xuXG52YXIgdXNlck5hbWUgICAgPSBudWxsO1xudmFyIGN1cnJlbnRZZWFyID0gbnVsbDtcbnZhciByZW5kZXJEYXRhICA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhY2tib25lLlZpZXcuZXh0ZW5kKHtcbiAgICBjbGFzc05hbWUgOiAnZGFzaGJvYXJkJyxcblxuICAgIGV2ZW50czoge1xuICAgICAgICAnY2xpY2sgLmNyZWF0ZU5ld0xvZyc6ICdzaG93TW9udGhJbnB1dCcsXG4gICAgICAgICdjbGljayAuY2FuY2VsQnRuJyAgIDogJ2hpZGVNb250aElucHV0JyxcbiAgICAgICAgJ2tleXByZXNzJyAgICAgICAgICAgOiAnY3JlYXRlTG9nJ1xuICAgIH0sXG5cbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiAoaW5pdERhdGEpIHtcbiAgICAgICAgdXNlck5hbWUgICAgICAgICA9IGluaXREYXRhLnVzZXJOYW1lO1xuICAgICAgICB0aGlzLnVzZXJMb2dMaXN0ID0gaW5pdERhdGEuY29sbGVjdGlvbjtcblxuICAgICAgICB0aGlzLnVzZXJMb2dMaXN0LmZldGNoKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB1c2VyTmFtZTogdXNlck5hbWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXNldDogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMudXNlckxvZ0xpc3QsICdhZGQnLCB0aGlzLmdvVG9Nb250aExvZyk7XG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy51c2VyTG9nTGlzdCwgJ3Jlc2V0JywgdGhpcy5saXN0TG9ncyk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlbmRlckRhdGEudXNlck5hbWUgICAgPSB1c2VyTmFtZTtcbiAgICAgICAgcmVuZGVyRGF0YS5jdXJyZW50WWVhciA9IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgdGhpcy4kZWwuaHRtbChjcmVhdGVMb2dUcGwocmVuZGVyRGF0YSkpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBzaG93TW9udGhJbnB1dDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdGhpcy4kZWwuZmluZCgnLmNyZWF0ZU5ld0xvZycpLnRvZ2dsZUNsYXNzKCdzaG93TW9udGhJbnB1dCcpO1xuICAgICAgICB0aGlzLiRlbC5maW5kKCcubW9udGhJbnB1dCcpLnNsaWRlRG93bignZmFzdCcpO1xuICAgIH0sXG5cbiAgICBoaWRlTW9udGhJbnB1dDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdGhpcy4kZWwuZmluZCgnLm1vbnRoSW5wdXQnKS5zbGlkZVVwKCdmYXN0Jyk7XG4gICAgICAgIHRoaXMuJGVsLmZpbmQoJy5jcmVhdGVOZXdMb2cnKS50b2dnbGVDbGFzcygnc2hvd01vbnRoSW5wdXQnKTsgICAgICAgIFxuICAgIH0sXG5cbiAgICBjcmVhdGVMb2c6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmKGUud2hpY2ggPT09IDEzKXtcbiAgICAgICAgICAgIHZhciBpbnB1dE1vbnRoICAgPSBwYXJzZUludCh0aGlzLiRlbC5maW5kKCdpbnB1dCcpLnZhbCgpLCAxMCk7XG4gICAgICAgICAgICB2YXIgbG9nTW9udGhBcnIgPSBbY3VycmVudFllYXJdO1xuICAgICAgICAgICAgdmFyIGxvZ09iaiA9IHtcbiAgICAgICAgICAgICAgICB1c2VyTmFtZTogdXNlck5hbWVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmKCFpc05hTihpbnB1dE1vbnRoKSAmJiBpbnB1dE1vbnRoID4gMCAmJiBpbnB1dE1vbnRoIDwgMTMpe1xuICAgICAgICAgICAgICAgIGlmKGlucHV0TW9udGggPCAxMCl7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0TW9udGggPSAnMCcgKyBpbnB1dE1vbnRoO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBpbnB1dE1vbnRoID0gaW5wdXRNb250aC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb2dNb250aEFyci5wdXNoKGlucHV0TW9udGgpO1xuXG4gICAgICAgICAgICAgICAgbG9nT2JqLmxvZ01vbnRoID0gbG9nTW9udGhBcnIuam9pbignLScpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyTG9nTGlzdC5jcmVhdGUobG9nT2JqKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGFsZXJ0KCfor7fovpPlhaUx5YiwMTLku6XlhoXnmoTmlbDlrZcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbC5maW5kKCdpbnB1dCcpLnZhbCgnJykuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBsaXN0TG9nczogZnVuY3Rpb24gKHVzZXJMb2dMaXN0Q29sbGVjdGlvbikge1xuICAgICAgICB2YXIgdXNlckxvZ0xpc3RWaWV3ID0gbmV3IFVzZXJMb2dMaXN0Vmlldyh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uOiB1c2VyTG9nTGlzdENvbGxlY3Rpb24sXG4gICAgICAgICAgICB1c2VyTmFtZTogdXNlck5hbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZWwuZmluZCgnLmRhc2hib2FyZENvbnRlbnQnKS5hcHBlbmQodXNlckxvZ0xpc3RWaWV3LnJlbmRlcigpLmVsKTtcbiAgICB9LFxuXG4gICAgZ29Ub01vbnRoTG9nOiBmdW5jdGlvbiAobG9nTW9kZWwpIHtcbiAgICAgICAgdmFyIGxvZ1JvdXRlQXJyID0gXy52YWx1ZXMobG9nTW9kZWwudG9KU09OKCkpO1xuICAgICAgICBCYWNrYm9uZS5oaXN0b3J5Lm5hdmlnYXRlKGxvZ1JvdXRlQXJyLmpvaW4oJy8nKSwgeyB0cmlnZ2VyOiB0cnVlfSk7XG4gICAgfVxufSk7XG4iLCJ2YXIgamFkZSA9IHJlcXVpcmUoXCJqYWRlL3J1bnRpbWVcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7XG52YXIgamFkZV9kZWJ1ZyA9IFsgbmV3IGphZGUuRGVidWdJdGVtKCAxLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlckxvZ0xpc3QuamFkZVwiICkgXTtcbnRyeSB7XG52YXIgYnVmID0gW107XG52YXIgamFkZV9taXhpbnMgPSB7fTtcbnZhciBqYWRlX2ludGVycDtcbjt2YXIgbG9jYWxzX2Zvcl93aXRoID0gKGxvY2FscyB8fCB7fSk7KGZ1bmN0aW9uICh1bmRlZmluZWQsIHVzZXJMb2dMaXN0KSB7XG52YXIgamFkZV9pbmRlbnQgPSBbXTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDAsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyTG9nTGlzdC5qYWRlXCIgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlckxvZ0xpc3QuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG48ZGl2IGNsYXNzPVxcXCJ0aXRsZVxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMSwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwi5p+l55yL6L+H5b6A55qETG9nXCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L2Rpdj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAyLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlckxvZ0xpc3QuamFkZVwiICkpO1xuaWYgKCB1c2VyTG9nTGlzdC5sZW5ndGgpXG57XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAzLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlckxvZ0xpc3QuamFkZVwiICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMywgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXJMb2dMaXN0LmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuPHVsIGNsYXNzPVxcXCJsb2dMaXN0XFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA0LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlckxvZ0xpc3QuamFkZVwiICkpO1xuLy8gaXRlcmF0ZSB1c2VyTG9nTGlzdCBcbjsoZnVuY3Rpb24oKXtcbiAgdmFyICQkb2JqID0gdXNlckxvZ0xpc3QgO1xuICBpZiAoJ251bWJlcicgPT0gdHlwZW9mICQkb2JqLmxlbmd0aCkge1xuXG4gICAgZm9yICh2YXIgJGluZGV4ID0gMCwgJCRsID0gJCRvYmoubGVuZ3RoOyAkaW5kZXggPCAkJGw7ICRpbmRleCsrKSB7XG4gICAgICB2YXIgbG9nID0gJCRvYmpbJGluZGV4XTtcblxuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNCwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXJMb2dMaXN0LmphZGVcIiApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDUsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyTG9nTGlzdC5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbiAgPGxpIGNsYXNzPVxcXCJsaXN0SXRlbVxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNSwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiIFwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDYsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyTG9nTGlzdC5qYWRlXCIgKSk7XG5idWYucHVzaChcIjxzcGFuIGNsYXNzPVxcXCJsb2dNb250aFxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNiwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiXCIgKyAoamFkZS5lc2NhcGUoKGphZGVfaW50ZXJwID0gIGxvZyApID09IG51bGwgPyAnJyA6IGphZGVfaW50ZXJwKSkgKyBcIlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC9zcGFuPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDcsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyTG9nTGlzdC5qYWRlXCIgKSk7XG5idWYucHVzaChcIjxzcGFuPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDcsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIuaAu+e7k1wiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC9zcGFuPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC9saT5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG4gICAgfVxuXG4gIH0gZWxzZSB7XG4gICAgdmFyICQkbCA9IDA7XG4gICAgZm9yICh2YXIgJGluZGV4IGluICQkb2JqKSB7XG4gICAgICAkJGwrKzsgICAgICB2YXIgbG9nID0gJCRvYmpbJGluZGV4XTtcblxuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNCwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXJMb2dMaXN0LmphZGVcIiApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDUsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyTG9nTGlzdC5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbiAgPGxpIGNsYXNzPVxcXCJsaXN0SXRlbVxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNSwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiIFwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDYsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyTG9nTGlzdC5qYWRlXCIgKSk7XG5idWYucHVzaChcIjxzcGFuIGNsYXNzPVxcXCJsb2dNb250aFxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNiwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiXCIgKyAoamFkZS5lc2NhcGUoKGphZGVfaW50ZXJwID0gIGxvZyApID09IG51bGwgPyAnJyA6IGphZGVfaW50ZXJwKSkgKyBcIlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC9zcGFuPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDcsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyTG9nTGlzdC5qYWRlXCIgKSk7XG5idWYucHVzaChcIjxzcGFuPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDcsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIuaAu+e7k1wiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC9zcGFuPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC9saT5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG4gICAgfVxuXG4gIH1cbn0pLmNhbGwodGhpcyk7XG5cbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiXFxuPC91bD5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG59XG5lbHNlXG57XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA5LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlckxvZ0xpc3QuamFkZVwiICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggOSwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXJMb2dMaXN0LmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuPGRpdiBjbGFzcz1cXFwibm9Mb2dcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDksIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIui/mOayoeaciWxvZ+WTpu+8jOeOsOWcqOW8gOWni+a3u+WKoOWQp1wiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC9kaXY+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xufVxuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO30uY2FsbCh0aGlzLFwidW5kZWZpbmVkXCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC51bmRlZmluZWQ6dHlwZW9mIHVuZGVmaW5lZCE9PVwidW5kZWZpbmVkXCI/dW5kZWZpbmVkOnVuZGVmaW5lZCxcInVzZXJMb2dMaXN0XCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC51c2VyTG9nTGlzdDp0eXBlb2YgdXNlckxvZ0xpc3QhPT1cInVuZGVmaW5lZFwiP3VzZXJMb2dMaXN0OnVuZGVmaW5lZCkpOztyZXR1cm4gYnVmLmpvaW4oXCJcIik7XG59IGNhdGNoIChlcnIpIHtcbiAgamFkZS5yZXRocm93KGVyciwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSwgamFkZV9kZWJ1Z1swXS5saW5lbm8sIFwiLnRpdGxlIOafpeeci+i/h+W+gOeahExvZ1xcbmlmIHVzZXJMb2dMaXN0Lmxlbmd0aFxcbiAgICB1bC5sb2dMaXN0XFxuICAgICBlYWNoIGxvZyBpbiB1c2VyTG9nTGlzdCBcXG4gICAgICAgIGxpLmxpc3RJdGVtIFxcbiAgICAgICAgICAgIHNwYW4ubG9nTW9udGggI3sgbG9nIH1cXG4gICAgICAgICAgICBzcGFuIOaAu+e7k1xcbmVsc2VcXG4gICAgLm5vTG9nIOi/mOayoeaciWxvZ+WTpu+8jOeOsOWcqOW8gOWni+a3u+WKoOWQp1xcblwiKTtcbn1cbn07IiwidmFyICQgICAgICAgICAgICAgID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG52YXIgXyAgICAgICAgICAgICAgPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgQmFja2JvbmUgICAgICAgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIHVzZXJMb2dMaXN0VHBsID0gcmVxdWlyZShcIi4vdXNlckxvZ0xpc3QuamFkZVwiKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhY2tib25lLlZpZXcuZXh0ZW5kKHtcbiAgICBjbGFzc05hbWU6IFwidXNlckxvZ0xpc3RcIixcblxuICAgIGV2ZW50czoge1xuICAgICAgICAnY2xpY2sgLmxpc3RJdGVtJzogJ2dvVG9Nb250aExvZydcbiAgICB9LFxuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKGluaXREYXRhKSB7XG4gICAgICAgIHRoaXMudXNlck5hbWUgPSBpbml0RGF0YS51c2VyTmFtZTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB1c2VyTG9nTGlzdCA9IF8ubWFwKHRoaXMuY29sbGVjdGlvbi5tb2RlbHMsIGZ1bmN0aW9uIChtb2RlbCwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBtb2RlbC50b0pTT04oKS5sb2dNb250aDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZWwuaHRtbCh1c2VyTG9nTGlzdFRwbCh7IHVzZXJMb2dMaXN0OiB1c2VyTG9nTGlzdCB9KSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBnb1RvTW9udGhMb2c6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBsb2dNb250aCA9ICQoZS5jdXJyZW50VGFyZ2V0KS5maW5kKCcubG9nTW9udGgnKS50ZXh0KCk7XG4gICAgICAgIHZhciBtb250aExvZ1JvdXRlQXJyID0gW3RoaXMudXNlck5hbWUsIGxvZ01vbnRoXTtcblxuICAgICAgICBCYWNrYm9uZS5oaXN0b3J5Lm5hdmlnYXRlKG1vbnRoTG9nUm91dGVBcnIuam9pbignLycpLCB7IHRyaWdnZXI6IHRydWV9KTtcbiAgICB9LFxufSk7XG4iLCJ2YXIgamFkZSA9IHJlcXVpcmUoXCJqYWRlL3J1bnRpbWVcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7XG52YXIgamFkZV9kZWJ1ZyA9IFsgbmV3IGphZGUuRGVidWdJdGVtKCAxLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9ob21lL2NyZWF0ZVVzZXIuamFkZVwiICkgXTtcbnRyeSB7XG52YXIgYnVmID0gW107XG52YXIgamFkZV9taXhpbnMgPSB7fTtcbnZhciBqYWRlX2ludGVycDtcblxudmFyIGphZGVfaW5kZW50ID0gW107XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAwLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9ob21lL2NyZWF0ZVVzZXIuamFkZVwiICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMSwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvaG9tZS9jcmVhdGVVc2VyLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuPGgyIGNsYXNzPVxcXCJzYWx1dGF0aW9uXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCJXZWxjb21lIERlYXIgTWFzdGVyIVwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC9oMj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAyLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9ob21lL2NyZWF0ZVVzZXIuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG48ZGl2IGNsYXNzPVxcXCJuYW1lSW5wdXRcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDMsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2hvbWUvY3JlYXRlVXNlci5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbiAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCLmgqjnmoToi7HmloflkI3miJblkI3lrZfmi7zpn7NcXFwiLz5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIlxcbjwvZGl2PlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTs7cmV0dXJuIGJ1Zi5qb2luKFwiXCIpO1xufSBjYXRjaCAoZXJyKSB7XG4gIGphZGUucmV0aHJvdyhlcnIsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUsIGphZGVfZGVidWdbMF0ubGluZW5vLCBcImgyLnNhbHV0YXRpb24gV2VsY29tZSBEZWFyIE1hc3RlciFcXG4ubmFtZUlucHV0XFxuICAgIGlucHV0KHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCLmgqjnmoToi7HmloflkI3miJblkI3lrZfmi7zpn7NcXFwiKSBcXG5cIik7XG59XG59OyIsInZhciBCYWNrYm9uZSAgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIENyZWF0ZVVzZXJUcGwgID0gcmVxdWlyZShcIi4vY3JlYXRlVXNlci5qYWRlXCIpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gQmFja2JvbmUuVmlldy5leHRlbmQoe1xuICAgIGNsYXNzTmFtZTogJ2NyZWF0ZVVzZXInLFxuICAgIFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRlbC5odG1sKENyZWF0ZVVzZXJUcGwoKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0pO1xuIiwidmFyICQgICAgICAgICAgICAgID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG52YXIgQmFja2JvbmUgICAgICAgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIENyZWF0ZVVzZXJWaWV3ID0gcmVxdWlyZShcIi4vY3JlYXRlVXNlclZpZXdcIik7XG52YXIgTXVsdGlVc2VyVmlldyAgPSByZXF1aXJlKFwiLi9tdWx0aVVzZXJWaWV3XCIpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gQmFja2JvbmUuVmlldy5leHRlbmQoe1xuICAgIGNsYXNzTmFtZSA6ICd3ZWxjb21lUGFuZWwnLFxuXG4gICAgZXZlbnRzOiB7XG4gICAgICAgICdrZXlwcmVzcyc6ICdjb25maXJtTmFtZSdcbiAgICB9LFxuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVzZXJzID0gdGhpcy5jb2xsZWN0aW9uO1xuXG4gICAgICAgIHRoaXMudXNlcnMuZmV0Y2goeyByZXNldDogdHJ1ZSB9KTtcblxuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMudXNlcnMsICdhZGQnLCB0aGlzLmdvVG9Vc2VyRGFzaGJvYXJkKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLnVzZXJzLCAncmVzZXQnLCB0aGlzLnNob3dXZWxjb21lUGFuZWwpO1xuICAgIH0sXG5cbiAgICBjb25maXJtTmFtZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyICRuYW1lSW5wdXRWYWwgPSB0aGlzLiRlbC5maW5kKCdpbnB1dCcpLnZhbCgpO1xuICAgICAgICBpZihlLndoaWNoID09PSAxMyl7XG4gICAgICAgICAgICBpZigkbmFtZUlucHV0VmFsKXtcbiAgICAgICAgICAgICAgICB2YXIgdXNlckRhdGEgID0geyB1c2VyTmFtZSA6ICRuYW1lSW5wdXRWYWwgfTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxlY3Rpb24uY3JlYXRlKHVzZXJEYXRhKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGFsZXJ0KCfor7flhYjovpPlhaXlp5PlkI0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBnb1RvVXNlckRhc2hib2FyZDogZnVuY3Rpb24gKHVzZXJNb2RlbCkge1xuICAgICAgICB2YXIgdXNlclJvdXRlID0gdXNlck1vZGVsLnRvSlNPTigpLnVzZXJOYW1lO1xuICAgICAgICBCYWNrYm9uZS5oaXN0b3J5Lm5hdmlnYXRlKHVzZXJSb3V0ZSwgeyB0cmlnZ2VyOiB0cnVlIH0pO1xuICAgIH0sXG5cbiAgICBzaG93V2VsY29tZVBhbmVsOiBmdW5jdGlvbiAodXNlckNvbGxlY3Rpb24pIHtcbiAgICAgICAgdmFyIHVzZXJzID0gdXNlckNvbGxlY3Rpb24ubW9kZWxzO1xuICAgICAgICBpZih1c2Vycy5sZW5ndGgpe1xuICAgICAgICAgICAgLy8g5Y+q5pyJ5LiA5Liq55So5oi35pe277yM6Lez6L2s5Yiw6K+l55So5oi355qERGFzaGJvYXJkXG4gICAgICAgICAgICBpZih1c2Vycy5sZW5ndGggPT09IDEpe1xuICAgICAgICAgICAgICAgIHZhciB1c2VyUm91dGUgPSB1c2Vyc1swXS50b0pTT04oKS51c2VyTmFtZTtcbiAgICAgICAgICAgICAgICBCYWNrYm9uZS5oaXN0b3J5Lm5hdmlnYXRlKHVzZXJSb3V0ZSwgeyB0cmlnZ2VyOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5aSa5LqO5LiA5Liq55So5oi35ZCN5pe277yM6K6p55So5oi36YCJ5oupXG4gICAgICAgICAgICBpZih1c2Vycy5sZW5ndGggPiAxKXtcbiAgICAgICAgICAgICAgICB2YXIgbXVsdGlVc2VyVmlldyA9IG5ldyBNdWx0aVVzZXJWaWV3KHsgY29sbGVjdGlvbjogdXNlcnMgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZWwuaHRtbChtdWx0aVVzZXJWaWV3LnJlbmRlcigpLmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAvLyDmnKrliJvlu7rku7vkvZXnlKjmiLdcbiAgICAgICAgICAgIHZhciBjcmVhdGVVc2VyVmlldyA9IG5ldyBDcmVhdGVVc2VyVmlldygpO1xuICAgICAgICAgICAgdGhpcy4kZWwuaHRtbChjcmVhdGVVc2VyVmlldy5yZW5kZXIoKS5lbCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsInZhciBqYWRlID0gcmVxdWlyZShcImphZGUvcnVudGltZVwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHtcbnZhciBqYWRlX2RlYnVnID0gWyBuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2hvbWUvbXVsdGlVc2VyLmphZGVcIiApIF07XG50cnkge1xudmFyIGJ1ZiA9IFtdO1xudmFyIGphZGVfbWl4aW5zID0ge307XG52YXIgamFkZV9pbnRlcnA7XG47dmFyIGxvY2Fsc19mb3Jfd2l0aCA9IChsb2NhbHMgfHwge30pOyhmdW5jdGlvbiAodW5kZWZpbmVkLCB1c2Vycykge1xudmFyIGphZGVfaW5kZW50ID0gW107XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAwLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9ob21lL211bHRpVXNlci5qYWRlXCIgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9ob21lL211bHRpVXNlci5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbjxoMyBjbGFzcz1cXFwibm90ZVxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMSwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwi6K+36YCJ5oup6ZyA6KaB5Yib5bu6dGFzayBsb2fnmoTnlKjmiLfvvJpcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvaDM+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMiwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvaG9tZS9tdWx0aVVzZXIuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG48ZGl2IGNsYXNzPVxcXCJhdmFpbGFibGVVc2Vyc1xcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMywgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvaG9tZS9tdWx0aVVzZXIuamFkZVwiICkpO1xuLy8gaXRlcmF0ZSB1c2Vyc1xuOyhmdW5jdGlvbigpe1xuICB2YXIgJCRvYmogPSB1c2VycztcbiAgaWYgKCdudW1iZXInID09IHR5cGVvZiAkJG9iai5sZW5ndGgpIHtcblxuICAgIGZvciAodmFyICRpbmRleCA9IDAsICQkbCA9ICQkb2JqLmxlbmd0aDsgJGluZGV4IDwgJCRsOyAkaW5kZXgrKykge1xuICAgICAgdmFyIHVzZXIgPSAkJG9ialskaW5kZXhdO1xuXG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAzLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9ob21lL211bHRpVXNlci5qYWRlXCIgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA0LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9ob21lL211bHRpVXNlci5qYWRlXCIgKSk7XG5idWYucHVzaChcIjxhXCIgKyAoamFkZS5hdHRyKFwiZGF0YS11c2VyLWlkXCIsIFwiXCIgKyAoIHVzZXIudXNlcklkICkgKyBcIlwiLCB0cnVlLCBmYWxzZSkpICsgXCIgY2xhc3M9XFxcInVzZXJCdG5cXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIlwiICsgKGphZGUuZXNjYXBlKChqYWRlX2ludGVycCA9ICB1c2VyLnVzZXJOYW1lICkgPT0gbnVsbCA/ICcnIDogamFkZV9pbnRlcnApKSArIFwiXCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L2E+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuICAgIH1cblxuICB9IGVsc2Uge1xuICAgIHZhciAkJGwgPSAwO1xuICAgIGZvciAodmFyICRpbmRleCBpbiAkJG9iaikge1xuICAgICAgJCRsKys7ICAgICAgdmFyIHVzZXIgPSAkJG9ialskaW5kZXhdO1xuXG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAzLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9ob21lL211bHRpVXNlci5qYWRlXCIgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA0LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9ob21lL211bHRpVXNlci5qYWRlXCIgKSk7XG5idWYucHVzaChcIjxhXCIgKyAoamFkZS5hdHRyKFwiZGF0YS11c2VyLWlkXCIsIFwiXCIgKyAoIHVzZXIudXNlcklkICkgKyBcIlwiLCB0cnVlLCBmYWxzZSkpICsgXCIgY2xhc3M9XFxcInVzZXJCdG5cXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIlwiICsgKGphZGUuZXNjYXBlKChqYWRlX2ludGVycCA9ICB1c2VyLnVzZXJOYW1lICkgPT0gbnVsbCA/ICcnIDogamFkZV9pbnRlcnApKSArIFwiXCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L2E+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuICAgIH1cblxuICB9XG59KS5jYWxsKHRoaXMpO1xuXG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIlxcbjwvZGl2PlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTt9LmNhbGwodGhpcyxcInVuZGVmaW5lZFwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGgudW5kZWZpbmVkOnR5cGVvZiB1bmRlZmluZWQhPT1cInVuZGVmaW5lZFwiP3VuZGVmaW5lZDp1bmRlZmluZWQsXCJ1c2Vyc1wiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGgudXNlcnM6dHlwZW9mIHVzZXJzIT09XCJ1bmRlZmluZWRcIj91c2Vyczp1bmRlZmluZWQpKTs7cmV0dXJuIGJ1Zi5qb2luKFwiXCIpO1xufSBjYXRjaCAoZXJyKSB7XG4gIGphZGUucmV0aHJvdyhlcnIsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUsIGphZGVfZGVidWdbMF0ubGluZW5vLCBcImgzLm5vdGUg6K+36YCJ5oup6ZyA6KaB5Yib5bu6dGFzayBsb2fnmoTnlKjmiLfvvJpcXG4uYXZhaWxhYmxlVXNlcnNcXG4gICAgZWFjaCB1c2VyIGluIHVzZXJzXFxuICAgICAgICBhLnVzZXJCdG4oZGF0YS11c2VyLWlkPVxcXCIjeyB1c2VyLnVzZXJJZCB9XFxcIikgI3sgdXNlci51c2VyTmFtZSB9XFxuXCIpO1xufVxufTsiLCJ2YXIgJCAgICAgICAgICAgID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG52YXIgXyAgICAgICAgICAgID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIEJhY2tib25lICAgICA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG52YXIgTXVsdGlVc2VyVHBsID0gcmVxdWlyZShcIi4vbXVsdGlVc2VyLmphZGVcIik7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBCYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG4gICAgY2xhc3NOYW1lOiBcImNob29zZVVzZXJcIixcblxuICAgIGV2ZW50czoge1xuICAgICAgICAnY2xpY2sgLnVzZXJCdG4nOiAnZ29Ub1VzZXJEYXNoYm9hcmQnXG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdXNlcnMgPSBfLm1hcCh0aGlzLmNvbGxlY3Rpb24sIGZ1bmN0aW9uIChtb2RlbCwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBtb2RlbC50b0pTT04oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZWwuaHRtbChNdWx0aVVzZXJUcGwoeyB1c2VyczogdXNlcnMgfSkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgZ29Ub1VzZXJEYXNoYm9hcmQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB1c2VyUm91dGUgPSAkKGUuY3VycmVudFRhcmdldCkudGV4dCgpO1xuICAgICAgICBCYWNrYm9uZS5oaXN0b3J5Lm5hdmlnYXRlKHVzZXJSb3V0ZSwgeyB0cmlnZ2VyOiB0cnVlIH0pO1xuICAgIH0sXG59KTtcbiIsInZhciBqYWRlID0gcmVxdWlyZShcImphZGUvcnVudGltZVwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHtcbnZhciBqYWRlX2RlYnVnID0gWyBuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL2xvZ0l0ZW0uamFkZVwiICkgXTtcbnRyeSB7XG52YXIgYnVmID0gW107XG52YXIgamFkZV9taXhpbnMgPSB7fTtcbnZhciBqYWRlX2ludGVycDtcbjt2YXIgbG9jYWxzX2Zvcl93aXRoID0gKGxvY2FscyB8fCB7fSk7KGZ1bmN0aW9uIChjb250ZW50LCBsb2dJbmRleCkge1xudmFyIGphZGVfaW5kZW50ID0gW107XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAwLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9tb250aExvZy9sb2dJdGVtLmphZGVcIiApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL2xvZ0l0ZW0uamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG48dGQgY2xhc3M9XFxcImxvZ0luZGV4XFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCJcIiArIChqYWRlLmVzY2FwZSgoamFkZV9pbnRlcnAgPSAgbG9nSW5kZXggKSA9PSBudWxsID8gJycgOiBqYWRlX2ludGVycCkpICsgXCJcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvdGQ+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMiwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbG9nSXRlbS5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbjx0ZCBjbGFzcz1cXFwibG9nQ29udGVudFxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMiwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiXCIgKyAoamFkZS5lc2NhcGUoKGphZGVfaW50ZXJwID0gIGNvbnRlbnQgKSA9PSBudWxsID8gJycgOiBqYWRlX2ludGVycCkpICsgXCJcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvdGQ+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMywgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbG9nSXRlbS5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbjx0ZCBjbGFzcz1cXFwibG9nU3RhdHVzXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAzLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCLlrozmiJBcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvdGQ+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNCwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbG9nSXRlbS5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbjx0ZCBjbGFzcz1cXFwiZGVsZXRlXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA0LCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCIgXCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNSwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbG9nSXRlbS5qYWRlXCIgKSk7XG5idWYucHVzaChcIjxhPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDUsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIkRlbGV0ZVwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC9hPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC90ZD5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7fS5jYWxsKHRoaXMsXCJjb250ZW50XCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5jb250ZW50OnR5cGVvZiBjb250ZW50IT09XCJ1bmRlZmluZWRcIj9jb250ZW50OnVuZGVmaW5lZCxcImxvZ0luZGV4XCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5sb2dJbmRleDp0eXBlb2YgbG9nSW5kZXghPT1cInVuZGVmaW5lZFwiP2xvZ0luZGV4OnVuZGVmaW5lZCkpOztyZXR1cm4gYnVmLmpvaW4oXCJcIik7XG59IGNhdGNoIChlcnIpIHtcbiAgamFkZS5yZXRocm93KGVyciwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSwgamFkZV9kZWJ1Z1swXS5saW5lbm8sIFwidGQubG9nSW5kZXggI3sgbG9nSW5kZXggfVxcbnRkLmxvZ0NvbnRlbnQgI3sgY29udGVudCB9XFxudGQubG9nU3RhdHVzIOWujOaIkFxcbnRkLmRlbGV0ZSBcXG4gICAgYSBEZWxldGVcXG5cIik7XG59XG59OyIsInZhciAkICAgICAgICAgID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG52YXIgXyAgICAgICAgICA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBCYWNrYm9uZSAgID0gcmVxdWlyZSgnYmFja2JvbmUnKTtcbnZhciBsb2dJdGVtVHBsID0gcmVxdWlyZShcIi4vbG9nSXRlbS5qYWRlXCIpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gQmFja2JvbmUuVmlldy5leHRlbmQoe1xuICAgIHRhZ05hbWUgICA6ICd0cicsXG5cbiAgICBjbGFzc05hbWUgOiAnbG9nSXRlbScsXG5cbiAgICBldmVudHM6IHtcbiAgICAgICAgJ2NsaWNrIC5kZWxldGUnIDogJ2RlbGV0ZUl0ZW0nXG4gICAgfSxcblxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIChpbml0RGF0YSkge1xuICAgICAgICB0aGlzLmxvZ0luZGV4ID0gaW5pdERhdGEubG9nSW5kZXg7XG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZScsIHRoaXMucmVuZGVyKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZW5kZXJEYXRhID0gXy5leHRlbmQodGhpcy5tb2RlbC50b0pTT04oKSwgeyBsb2dJbmRleCA6IHRoaXMubG9nSW5kZXggfSk7XG4gICAgICAgIHRoaXMuJGVsLmh0bWwobG9nSXRlbVRwbChyZW5kZXJEYXRhKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBkZWxldGVJdGVtOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBjb2xsZWN0aW9u5Y+v5Lul55uR5ZCs5YiwbW9kZWznmoRkZXN0b3J577yMXG4gICAgICAgIC8vIOWcqG1vbnRoTG9nVmlld+mHjOmdoumHjeaWsOaKiuaVtOS4qmxvZyByZW5kZXLkuIDmrKHvvIxcbiAgICAgICAgLy8g5omA5Lul5Zyo6L+Z6YeM5LiN6ZyA6KaB55uR5ZCs6Ieq5bex55qEZGVzdG9yeeS6i+S7tuadpXJlbW92ZeW9k+WJjXZpZXdcbiAgICAgICAgdGhpcy5tb2RlbC5kZXN0cm95KHsgd2FpdDogdHJ1ZSB9KTtcbiAgICB9XG59KTtcbiIsInZhciBqYWRlID0gcmVxdWlyZShcImphZGUvcnVudGltZVwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHtcbnZhciBqYWRlX2RlYnVnID0gWyBuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApIF07XG50cnkge1xudmFyIGJ1ZiA9IFtdO1xudmFyIGphZGVfbWl4aW5zID0ge307XG52YXIgamFkZV9pbnRlcnA7XG47dmFyIGxvY2Fsc19mb3Jfd2l0aCA9IChsb2NhbHMgfHwge30pOyhmdW5jdGlvbiAoZG93bmxvYWRVcmwsIGxvZ01vbnRoKSB7XG52YXIgamFkZV9pbmRlbnQgPSBbXTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDAsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCJcIiArIChqYWRlLmVzY2FwZSgoamFkZV9pbnRlcnAgPSAgbG9nTW9udGggKSA9PSBudWxsID8gJycgOiBqYWRlX2ludGVycCkpICsgXCLmgLvnu5Por6bmg4VcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAyLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9tb250aExvZy9tb250aExvZy5qYWRlXCIgKSk7XG5idWYucHVzaChcIjxhIGNsYXNzPVxcXCJnb1RvRGFzaGJvYXJkIG9wdGlvbnNcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDIsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIkRhc2hib2FyZFwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC9hPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDMsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiPGFcIiArIChqYWRlLmF0dHIoXCJocmVmXCIsIGRvd25sb2FkVXJsLCB0cnVlLCBmYWxzZSkpICsgXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGNsYXNzPVxcXCJkb3dubG9hZEJ0biBvcHRpb25zXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAzLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCJEb3dubG9hZFwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC9hPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC9kaXY+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNCwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbW9udGhMb2cuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG48ZGl2IGNsYXNzPVxcXCJhZGRMb2dcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDUsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICA8ZGl2IGNsYXNzPVxcXCJub3RlXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA1LCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCLmt7vliqDmlrDmnaHnm65cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvZGl2PlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDYsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIuivt+i+k+WFpeW3peS9nOWGheWuuVxcXCIgYXV0b2ZvY3VzPVxcXCJhdXRvZm9jdXNcXFwiIGNsYXNzPVxcXCJsb2dJbnB1dFxcXCIvPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiXFxuPC9kaXY+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNywgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbW9udGhMb2cuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG48ZGl2IGNsYXNzPVxcXCJsb2dEZXRhaWxcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDcsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIiAgIFwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDgsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICA8dGFibGUgY2xhc3M9XFxcImxvZ1RhYmxlXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA5LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9tb250aExvZy9tb250aExvZy5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbiAgICA8dGhlYWQ+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMTAsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICAgICAgPHRoPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEwLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCLluo/lj7dcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvdGg+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMTEsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICAgICAgPHRoPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDExLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCLlhoXlrrlcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvdGg+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMTIsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICAgICAgPHRoPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEyLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCLnirbmgIFcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvdGg+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMTMsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICAgICAgPHRoPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEzLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCIgICAgICAgICAgICAgXCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L3RoPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiXFxuICAgIDwvdGhlYWQ+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMTQsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICAgIDx0Ym9keT5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvdGJvZHk+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCJcXG4gIDwvdGFibGU+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCJcXG48L2Rpdj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7fS5jYWxsKHRoaXMsXCJkb3dubG9hZFVybFwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGguZG93bmxvYWRVcmw6dHlwZW9mIGRvd25sb2FkVXJsIT09XCJ1bmRlZmluZWRcIj9kb3dubG9hZFVybDp1bmRlZmluZWQsXCJsb2dNb250aFwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGgubG9nTW9udGg6dHlwZW9mIGxvZ01vbnRoIT09XCJ1bmRlZmluZWRcIj9sb2dNb250aDp1bmRlZmluZWQpKTs7cmV0dXJuIGJ1Zi5qb2luKFwiXCIpO1xufSBjYXRjaCAoZXJyKSB7XG4gIGphZGUucmV0aHJvdyhlcnIsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUsIGphZGVfZGVidWdbMF0ubGluZW5vLCBcIi5oZWFkZXIgI3sgbG9nTW9udGggfeaAu+e7k+ivpuaDhVxcbiAgICBhLmdvVG9EYXNoYm9hcmQub3B0aW9ucyBEYXNoYm9hcmRcXG4gICAgYS5kb3dubG9hZEJ0bi5vcHRpb25zKGhyZWY9ZG93bmxvYWRVcmwsIHRhcmdldD0nX2JsYW5rJykgRG93bmxvYWRcXG4uYWRkTG9nXFxuICAgIC5ub3RlIOa3u+WKoOaWsOadoeebrlxcbiAgICBpbnB1dC5sb2dJbnB1dCh0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwi6K+36L6T5YWl5bel5L2c5YaF5a65XFxcIiBhdXRvZm9jdXMpICAgIFxcbi5sb2dEZXRhaWwgICAgXFxuICAgIHRhYmxlLmxvZ1RhYmxlXFxuICAgICAgICB0aGVhZFxcbiAgICAgICAgICAgIHRoIOW6j+WPt1xcbiAgICAgICAgICAgIHRoIOWGheWuuVxcbiAgICAgICAgICAgIHRoIOeKtuaAgVxcbiAgICAgICAgICAgIHRoICAgICAgICAgICAgICBcXG4gICAgICAgIHRib2R5XFxuICAgICAgICAgICAgICAgICAgICBcXG5cXG4gICAgICAgIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgXFxuICAgIFxcblwiKTtcbn1cbn07IiwidmFyICQgICAgICAgICAgID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG52YXIgXyAgICAgICAgICAgPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgQmFja2JvbmUgICAgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIG1haW5UcGwgICAgID0gcmVxdWlyZShcIi4vbW9udGhMb2cuamFkZVwiKTtcbnZhciBMb2dJdGVtVmlldyA9IHJlcXVpcmUoXCIuL2xvZ0l0ZW1WaWV3XCIpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gQmFja2JvbmUuVmlldy5leHRlbmQoe1xuICAgIGNsYXNzTmFtZSA6ICdtb250aExvZycsXG5cbiAgICBldmVudHM6IHtcbiAgICAgICAgJ2NsaWNrIC5nb1RvRGFzaGJvYXJkJyA6ICdnb1RvRGFzaGJvYXJkJyxcbiAgICAgICAgJ2NsaWNrIC5kb3dubG9hZEJ0bicgICA6ICdkb3dubG9hZExvZycsXG4gICAgICAgICdrZXlwcmVzcycgICAgICAgICAgICAgOiAnY3JlYXRlTG9nSXRlbSdcbiAgICB9LFxuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKGluaXREYXRhKSB7XG4gICAgICAgIHRoaXMubG9nTW9udGggPSBpbml0RGF0YS5sb2dNb250aDtcbiAgICAgICAgdGhpcy51c2VyTmFtZSA9IGluaXREYXRhLnVzZXJOYW1lO1xuICAgICAgICB0aGlzLm1vbnRoTG9nID0gaW5pdERhdGEuY29sbGVjdGlvbjtcblxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB0aGlzLiRsb2dMaXN0ID0gdGhpcy4kZWwuZmluZCgnLmxvZ1RhYmxlIHRib2R5Jyk7XG5cbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vbnRoTG9nLCAnYWRkJywgdGhpcy5hZGRMb2dJdGVtKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vbnRoTG9nLCAncmVzZXQnLCB0aGlzLmxpc3RNb250aExvZyk7XG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb250aExvZywgJ2Rlc3Ryb3knLCB0aGlzLnJlZnJlc2hMb2dMaXN0KTtcblxuICAgICAgICB0aGlzLm1vbnRoTG9nLmZldGNoKHtcbiAgICAgICAgICAgIHJlc2V0OiB0cnVlLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHVzZXJOYW1lIDogdGhpcy51c2VyTmFtZSxcbiAgICAgICAgICAgICAgICBsb2dNb250aCA6IHRoaXMubG9nTW9udGgsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHVzZXJOYW1lUGFyYW0gPSAndXNlck5hbWU9JyArIHRoaXMudXNlck5hbWU7XG4gICAgICAgIHZhciBsb2dNb250aFBhcmFtID0gJ2xvZ01vbnRoPScgKyB0aGlzLmxvZ01vbnRoO1xuXG4gICAgICAgIGRvd25sb2FkVXJsQXJyID0gbmV3IEFycmF5KHVzZXJOYW1lUGFyYW0sIGxvZ01vbnRoUGFyYW0pO1xuXG4gICAgICAgIHRoaXMuJGVsLmh0bWwobWFpblRwbCh7XG4gICAgICAgICAgICBsb2dNb250aCA6IHRoaXMubG9nTW9udGgsXG4gICAgICAgICAgICBkb3dubG9hZFVybDogJy9kb3dubG9hZC10YXNrbG9nPycgKyBkb3dubG9hZFVybEFyci5qb2luKCcmJyksXG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGdvVG9EYXNoYm9hcmQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBob21lUm91dGUgPSB0aGlzLnVzZXJOYW1lO1xuICAgICAgICBCYWNrYm9uZS5oaXN0b3J5Lm5hdmlnYXRlKGhvbWVSb3V0ZSwgeyB0cmlnZ2VyIDogdHJ1ZSB9KTtcbiAgICB9LFxuXG4gICAgY3JlYXRlTG9nSXRlbTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYoZS53aGljaCA9PT0gMTMpe1xuICAgICAgICAgICAgdmFyIGxvZ0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgdXNlck5hbWUgOiB0aGlzLnVzZXJOYW1lLFxuICAgICAgICAgICAgICAgIGxvZ01vbnRoIDogdGhpcy5sb2dNb250aCxcbiAgICAgICAgICAgICAgICBjb250ZW50ICA6IHRoaXMuJGVsLmZpbmQoJy5sb2dJbnB1dCcpLnZhbCgpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLiRlbC5maW5kKCcubG9nSW5wdXQnKS52YWwoJycpLmZvY3VzKCk7XG4gICAgICAgICAgICB0aGlzLm1vbnRoTG9nLmNyZWF0ZShsb2dEYXRhKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhZGRMb2dJdGVtOiBmdW5jdGlvbiAobG9nTW9kZWwsIG9wdCkge1xuICAgICAgICB2YXIgbG9nSW5kZXggPSBudWxsO1xuXG4gICAgICAgIGlmKHR5cGVvZiBvcHQgPT09ICdvYmplY3QnKXtcbiAgICAgICAgICAgIGxvZ0luZGV4ID0gb3B0Lmxlbmd0aDtcbiAgICAgICAgfWVsc2UgaWYodHlwZW9mIG9wdCA9PT0gJ251bWJlcicpe1xuICAgICAgICAgICAgbG9nSW5kZXggPSBvcHQgKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxvZ0l0ZW1WaWV3ID0gbmV3IExvZ0l0ZW1WaWV3KHtcbiAgICAgICAgICAgIG1vZGVsICAgIDogbG9nTW9kZWwsXG4gICAgICAgICAgICBsb2dJbmRleCA6IGxvZ0luZGV4XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLiRsb2dMaXN0LmFwcGVuZChsb2dJdGVtVmlldy5yZW5kZXIoKS5lbCk7XG4gICAgfSxcblxuICAgIGxpc3RNb250aExvZzogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRsb2dMaXN0Lmh0bWwoJycpO1xuICAgICAgICB0aGlzLm1vbnRoTG9nLmVhY2godGhpcy5hZGRMb2dJdGVtLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgcmVmcmVzaExvZ0xpc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gZGVzdG9yeSBtb2RlbOS5i+WQju+8jGNvbGxlY3Rpb27kvJrnm5HlkKzliLBcbiAgICAgICAgLy8g5bm25LiU5bey57uP5LuOY29sbGVjdGlvbuS4reWIoOmZpOaOieivpW1vZGVsXG4gICAgICAgIC8vIOWQjOaXtu+8jOaJp+ihjGRlbGV0Zeivt+axguS5i+WQjuWQjuerr+S8mumprOS4iuWQjOatpeaVsOaNruW6k1xuICAgICAgICAvLyDmiYDku6XliY3nq6/lkozlkI7nq6/nmoTmlbDmja7mmK/kuIDoh7TnmoTvvIzkuI3pnIDopoHph43mlrBmZXRjaOaVsOaNrlxuICAgICAgICB0aGlzLmxpc3RNb250aExvZygpO1xuICAgIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbnZhciBCYWNrYm9uZSA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG52YXIgdGFza0xvZyA9IHt9O1xuXG5cbnRhc2tMb2cubW9kZWwgPSBCYWNrYm9uZS5Nb2RlbC5leHRlbmQoe1xuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIHVzZXJOYW1lIDogXCJcIixcbiAgICAgICAgbG9nTW9udGggOiBcIlwiLFxuICAgICAgICBjb250ZW50ICA6IFwiXCIsXG4gICAgICAgIHN0YXR1cyAgIDogXCLlrozmiJBcIlxuICAgIH0sXG4gICAgdmFsaWRhdGU6IGZ1bmN0aW9uIChhdHRyLCBvcHRzKSB7XG4gICAgICAgIC8vIGJvZHkuLi5cbiAgICB9XG59KTtcblxudGFza0xvZy5jb2xsZWN0aW9uID0gQmFja2JvbmUuQ29sbGVjdGlvbi5leHRlbmQoe1xuICAgIG1vZGVsOiB0YXNrTG9nLm1vZGVsLFxuXG4gICAgdXJsIDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJy90YXNrLWxvZyc7XG4gICAgfSxcblxuICAgIGNvbXBhcmF0b3I6ICdpZCdcblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gdGFza0xvZztcbiIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG52YXIgQmFja2JvbmUgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIHVzZXIgPSB7fTtcblxuXG51c2VyLm1vZGVsID0gQmFja2JvbmUuTW9kZWwuZXh0ZW5kKHtcbiAgICB2YWxpZGF0ZTogZnVuY3Rpb24gKGF0dHJzLCBvcHRzKSB7XG4gICAgICAgIGlmKGF0dHJzLnVzZXJOYW1lICYmIHR5cGVvZiBhdHRycy51c2VyTmFtZSAhPT0gJ3N0cmluZycpe1xuICAgICAgICAgICAgcmV0dXJuICd2YWx1ZSBvZiB1c2VyTmFtZSBzaG91bGQgYmUgYSBTdHJpbmcnO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbnVzZXIuY29sbGVjdGlvbiA9IEJhY2tib25lLkNvbGxlY3Rpb24uZXh0ZW5kKHtcbiAgICBtb2RlbDogdXNlci5tb2RlbCxcbiAgICB1cmwgIDogJy91c2VyJ1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gdXNlcjtcbiIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG52YXIgQmFja2JvbmUgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIHVzZXJMb2dMaXN0ID0ge307XG5cbnVzZXJMb2dMaXN0Lm1vZGVsID0gQmFja2JvbmUuTW9kZWwuZXh0ZW5kKHtcbiAgICBkZWZhdWx0czoge1xuICAgICAgICBsb2dNb250aDogXCJcIlxuICAgIH1cbn0pO1xuXG51c2VyTG9nTGlzdC5jb2xsZWN0aW9uID0gQmFja2JvbmUuQ29sbGVjdGlvbi5leHRlbmQoe1xuICAgIG1vZGVsOiB1c2VyTG9nTGlzdC5tb2RlbCxcbiAgICB1cmwgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJy91c2VyLWxvZ2xpc3QnO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVzZXJMb2dMaXN0O1xuIixudWxsLCIoZnVuY3Rpb24oZil7aWYodHlwZW9mIGV4cG9ydHM9PT1cIm9iamVjdFwiJiZ0eXBlb2YgbW9kdWxlIT09XCJ1bmRlZmluZWRcIil7bW9kdWxlLmV4cG9ydHM9ZigpfWVsc2UgaWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtdLGYpfWVsc2V7dmFyIGc7aWYodHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCIpe2c9d2luZG93fWVsc2UgaWYodHlwZW9mIGdsb2JhbCE9PVwidW5kZWZpbmVkXCIpe2c9Z2xvYmFsfWVsc2UgaWYodHlwZW9mIHNlbGYhPT1cInVuZGVmaW5lZFwiKXtnPXNlbGZ9ZWxzZXtnPXRoaXN9Zy5qYWRlID0gZigpfX0pKGZ1bmN0aW9uKCl7dmFyIGRlZmluZSxtb2R1bGUsZXhwb3J0cztyZXR1cm4gKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1lcmdlIHR3byBhdHRyaWJ1dGUgb2JqZWN0cyBnaXZpbmcgcHJlY2VkZW5jZVxuICogdG8gdmFsdWVzIGluIG9iamVjdCBgYmAuIENsYXNzZXMgYXJlIHNwZWNpYWwtY2FzZWRcbiAqIGFsbG93aW5nIGZvciBhcnJheXMgYW5kIG1lcmdpbmcvam9pbmluZyBhcHByb3ByaWF0ZWx5XG4gKiByZXN1bHRpbmcgaW4gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBiXG4gKiBAcmV0dXJuIHtPYmplY3R9IGFcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMubWVyZ2UgPSBmdW5jdGlvbiBtZXJnZShhLCBiKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgdmFyIGF0dHJzID0gYVswXTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGF0dHJzID0gbWVyZ2UoYXR0cnMsIGFbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gYXR0cnM7XG4gIH1cbiAgdmFyIGFjID0gYVsnY2xhc3MnXTtcbiAgdmFyIGJjID0gYlsnY2xhc3MnXTtcblxuICBpZiAoYWMgfHwgYmMpIHtcbiAgICBhYyA9IGFjIHx8IFtdO1xuICAgIGJjID0gYmMgfHwgW107XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFjKSkgYWMgPSBbYWNdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShiYykpIGJjID0gW2JjXTtcbiAgICBhWydjbGFzcyddID0gYWMuY29uY2F0KGJjKS5maWx0ZXIobnVsbHMpO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICBpZiAoa2V5ICE9ICdjbGFzcycpIHtcbiAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYTtcbn07XG5cbi8qKlxuICogRmlsdGVyIG51bGwgYHZhbGBzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbnVsbHModmFsKSB7XG4gIHJldHVybiB2YWwgIT0gbnVsbCAmJiB2YWwgIT09ICcnO1xufVxuXG4vKipcbiAqIGpvaW4gYXJyYXkgYXMgY2xhc3Nlcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmpvaW5DbGFzc2VzID0gam9pbkNsYXNzZXM7XG5mdW5jdGlvbiBqb2luQ2xhc3Nlcyh2YWwpIHtcbiAgcmV0dXJuIChBcnJheS5pc0FycmF5KHZhbCkgPyB2YWwubWFwKGpvaW5DbGFzc2VzKSA6XG4gICAgKHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JykgPyBPYmplY3Qua2V5cyh2YWwpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7IHJldHVybiB2YWxba2V5XTsgfSkgOlxuICAgIFt2YWxdKS5maWx0ZXIobnVsbHMpLmpvaW4oJyAnKTtcbn1cblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGNsYXNzZXMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gY2xhc3Nlc1xuICogQHBhcmFtIHtBcnJheS48Qm9vbGVhbj59IGVzY2FwZWRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5jbHMgPSBmdW5jdGlvbiBjbHMoY2xhc3NlcywgZXNjYXBlZCkge1xuICB2YXIgYnVmID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlc2NhcGVkICYmIGVzY2FwZWRbaV0pIHtcbiAgICAgIGJ1Zi5wdXNoKGV4cG9ydHMuZXNjYXBlKGpvaW5DbGFzc2VzKFtjbGFzc2VzW2ldXSkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnVmLnB1c2goam9pbkNsYXNzZXMoY2xhc3Nlc1tpXSkpO1xuICAgIH1cbiAgfVxuICB2YXIgdGV4dCA9IGpvaW5DbGFzc2VzKGJ1Zik7XG4gIGlmICh0ZXh0Lmxlbmd0aCkge1xuICAgIHJldHVybiAnIGNsYXNzPVwiJyArIHRleHQgKyAnXCInO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJztcbiAgfVxufTtcblxuXG5leHBvcnRzLnN0eWxlID0gZnVuY3Rpb24gKHZhbCkge1xuICBpZiAodmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbCkubWFwKGZ1bmN0aW9uIChzdHlsZSkge1xuICAgICAgcmV0dXJuIHN0eWxlICsgJzonICsgdmFsW3N0eWxlXTtcbiAgICB9KS5qb2luKCc7Jyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxufTtcbi8qKlxuICogUmVuZGVyIHRoZSBnaXZlbiBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbFxuICogQHBhcmFtIHtCb29sZWFufSBlc2NhcGVkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHRlcnNlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuYXR0ciA9IGZ1bmN0aW9uIGF0dHIoa2V5LCB2YWwsIGVzY2FwZWQsIHRlcnNlKSB7XG4gIGlmIChrZXkgPT09ICdzdHlsZScpIHtcbiAgICB2YWwgPSBleHBvcnRzLnN0eWxlKHZhbCk7XG4gIH1cbiAgaWYgKCdib29sZWFuJyA9PSB0eXBlb2YgdmFsIHx8IG51bGwgPT0gdmFsKSB7XG4gICAgaWYgKHZhbCkge1xuICAgICAgcmV0dXJuICcgJyArICh0ZXJzZSA/IGtleSA6IGtleSArICc9XCInICsga2V5ICsgJ1wiJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH0gZWxzZSBpZiAoMCA9PSBrZXkuaW5kZXhPZignZGF0YScpICYmICdzdHJpbmcnICE9IHR5cGVvZiB2YWwpIHtcbiAgICBpZiAoSlNPTi5zdHJpbmdpZnkodmFsKS5pbmRleE9mKCcmJykgIT09IC0xKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1NpbmNlIEphZGUgMi4wLjAsIGFtcGVyc2FuZHMgKGAmYCkgaW4gZGF0YSBhdHRyaWJ1dGVzICcgK1xuICAgICAgICAgICAgICAgICAgICd3aWxsIGJlIGVzY2FwZWQgdG8gYCZhbXA7YCcpO1xuICAgIH07XG4gICAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsLnRvSVNPU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0phZGUgd2lsbCBlbGltaW5hdGUgdGhlIGRvdWJsZSBxdW90ZXMgYXJvdW5kIGRhdGVzIGluICcgK1xuICAgICAgICAgICAgICAgICAgICdJU08gZm9ybSBhZnRlciAyLjAuMCcpO1xuICAgIH1cbiAgICByZXR1cm4gJyAnICsga2V5ICsgXCI9J1wiICsgSlNPTi5zdHJpbmdpZnkodmFsKS5yZXBsYWNlKC8nL2csICcmYXBvczsnKSArIFwiJ1wiO1xuICB9IGVsc2UgaWYgKGVzY2FwZWQpIHtcbiAgICBpZiAodmFsICYmIHR5cGVvZiB2YWwudG9JU09TdHJpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignSmFkZSB3aWxsIHN0cmluZ2lmeSBkYXRlcyBpbiBJU08gZm9ybSBhZnRlciAyLjAuMCcpO1xuICAgIH1cbiAgICByZXR1cm4gJyAnICsga2V5ICsgJz1cIicgKyBleHBvcnRzLmVzY2FwZSh2YWwpICsgJ1wiJztcbiAgfSBlbHNlIHtcbiAgICBpZiAodmFsICYmIHR5cGVvZiB2YWwudG9JU09TdHJpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignSmFkZSB3aWxsIHN0cmluZ2lmeSBkYXRlcyBpbiBJU08gZm9ybSBhZnRlciAyLjAuMCcpO1xuICAgIH1cbiAgICByZXR1cm4gJyAnICsga2V5ICsgJz1cIicgKyB2YWwgKyAnXCInO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gYXR0cmlidXRlcyBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtPYmplY3R9IGVzY2FwZWRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRycyA9IGZ1bmN0aW9uIGF0dHJzKG9iaiwgdGVyc2Upe1xuICB2YXIgYnVmID0gW107XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGlmIChrZXlzLmxlbmd0aCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV1cbiAgICAgICAgLCB2YWwgPSBvYmpba2V5XTtcblxuICAgICAgaWYgKCdjbGFzcycgPT0ga2V5KSB7XG4gICAgICAgIGlmICh2YWwgPSBqb2luQ2xhc3Nlcyh2YWwpKSB7XG4gICAgICAgICAgYnVmLnB1c2goJyAnICsga2V5ICsgJz1cIicgKyB2YWwgKyAnXCInKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnVmLnB1c2goZXhwb3J0cy5hdHRyKGtleSwgdmFsLCBmYWxzZSwgdGVyc2UpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmLmpvaW4oJycpO1xufTtcblxuLyoqXG4gKiBFc2NhcGUgdGhlIGdpdmVuIHN0cmluZyBvZiBgaHRtbGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciBqYWRlX2VuY29kZV9odG1sX3J1bGVzID0ge1xuICAnJic6ICcmYW1wOycsXG4gICc8JzogJyZsdDsnLFxuICAnPic6ICcmZ3Q7JyxcbiAgJ1wiJzogJyZxdW90Oydcbn07XG52YXIgamFkZV9tYXRjaF9odG1sID0gL1smPD5cIl0vZztcblxuZnVuY3Rpb24gamFkZV9lbmNvZGVfY2hhcihjKSB7XG4gIHJldHVybiBqYWRlX2VuY29kZV9odG1sX3J1bGVzW2NdIHx8IGM7XG59XG5cbmV4cG9ydHMuZXNjYXBlID0gamFkZV9lc2NhcGU7XG5mdW5jdGlvbiBqYWRlX2VzY2FwZShodG1sKXtcbiAgdmFyIHJlc3VsdCA9IFN0cmluZyhodG1sKS5yZXBsYWNlKGphZGVfbWF0Y2hfaHRtbCwgamFkZV9lbmNvZGVfY2hhcik7XG4gIGlmIChyZXN1bHQgPT09ICcnICsgaHRtbCkgcmV0dXJuIGh0bWw7XG4gIGVsc2UgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogUmUtdGhyb3cgdGhlIGdpdmVuIGBlcnJgIGluIGNvbnRleHQgdG8gdGhlXG4gKiB0aGUgamFkZSBpbiBgZmlsZW5hbWVgIGF0IHRoZSBnaXZlbiBgbGluZW5vYC5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGxpbmVub1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5yZXRocm93ID0gZnVuY3Rpb24gcmV0aHJvdyhlcnIsIGZpbGVuYW1lLCBsaW5lbm8sIHN0cil7XG4gIGlmICghKGVyciBpbnN0YW5jZW9mIEVycm9yKSkgdGhyb3cgZXJyO1xuICBpZiAoKHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgfHwgIWZpbGVuYW1lKSAmJiAhc3RyKSB7XG4gICAgZXJyLm1lc3NhZ2UgKz0gJyBvbiBsaW5lICcgKyBsaW5lbm87XG4gICAgdGhyb3cgZXJyO1xuICB9XG4gIHRyeSB7XG4gICAgc3RyID0gc3RyIHx8IHJlcXVpcmUoJ2ZzJykucmVhZEZpbGVTeW5jKGZpbGVuYW1lLCAndXRmOCcpXG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgcmV0aHJvdyhlcnIsIG51bGwsIGxpbmVubylcbiAgfVxuICB2YXIgY29udGV4dCA9IDNcbiAgICAsIGxpbmVzID0gc3RyLnNwbGl0KCdcXG4nKVxuICAgICwgc3RhcnQgPSBNYXRoLm1heChsaW5lbm8gLSBjb250ZXh0LCAwKVxuICAgICwgZW5kID0gTWF0aC5taW4obGluZXMubGVuZ3RoLCBsaW5lbm8gKyBjb250ZXh0KTtcblxuICAvLyBFcnJvciBjb250ZXh0XG4gIHZhciBjb250ZXh0ID0gbGluZXMuc2xpY2Uoc3RhcnQsIGVuZCkubWFwKGZ1bmN0aW9uKGxpbmUsIGkpe1xuICAgIHZhciBjdXJyID0gaSArIHN0YXJ0ICsgMTtcbiAgICByZXR1cm4gKGN1cnIgPT0gbGluZW5vID8gJyAgPiAnIDogJyAgICAnKVxuICAgICAgKyBjdXJyXG4gICAgICArICd8ICdcbiAgICAgICsgbGluZTtcbiAgfSkuam9pbignXFxuJyk7XG5cbiAgLy8gQWx0ZXIgZXhjZXB0aW9uIG1lc3NhZ2VcbiAgZXJyLnBhdGggPSBmaWxlbmFtZTtcbiAgZXJyLm1lc3NhZ2UgPSAoZmlsZW5hbWUgfHwgJ0phZGUnKSArICc6JyArIGxpbmVub1xuICAgICsgJ1xcbicgKyBjb250ZXh0ICsgJ1xcblxcbicgKyBlcnIubWVzc2FnZTtcbiAgdGhyb3cgZXJyO1xufTtcblxuZXhwb3J0cy5EZWJ1Z0l0ZW0gPSBmdW5jdGlvbiBEZWJ1Z0l0ZW0obGluZW5vLCBmaWxlbmFtZSkge1xuICB0aGlzLmxpbmVubyA9IGxpbmVubztcbiAgdGhpcy5maWxlbmFtZSA9IGZpbGVuYW1lO1xufVxuXG59LHtcImZzXCI6Mn1dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXG59LHt9XX0se30sWzFdKSgxKVxufSk7Il19
