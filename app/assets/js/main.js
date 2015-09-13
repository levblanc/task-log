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
buf.push("\n<p>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 1, jade_debug[0].filename ));
buf.push(" Welcome Master " + (jade.escape((jade_interp =  userName ) == null ? '' : jade_interp)) + "!!!");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 3, "/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade" ));
buf.push("\n<div class=\"createMonthLog\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, "/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade" ));
buf.push("\n  <div class=\"note\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, jade_debug[0].filename ));
buf.push("新增Log");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 5, "/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade" ));
buf.push("\n  <div class=\"monthInput\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 6, "/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade" ));
buf.push("\n    <div class=\"currentYear\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 6, jade_debug[0].filename ));
buf.push("" + (jade.escape((jade_interp =  currentYear ) == null ? '' : jade_interp)) + "年");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 7, "/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade" ));
buf.push("\n    <input type=\"text\" placeholder=\"请输入月份\"/>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 8, "/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade" ));
buf.push("\n    <button class=\"create\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 8, jade_debug[0].filename ));
buf.push("Create");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"currentYear" in locals_for_with?locals_for_with.currentYear:typeof currentYear!=="undefined"?currentYear:undefined,"userName" in locals_for_with?locals_for_with.userName:typeof userName!=="undefined"?userName:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "p  Welcome Master #{ userName }!!!\n\n.createMonthLog\n    .note 新增Log\n    .monthInput\n        .currentYear #{ currentYear }年\n        input(type=\"text\" placeholder=\"请输入月份\")\n        button.create Create\n");
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

        if(inputMonth < 10){
            inputMonth = '0' + inputMonth;
        }else{
            inputMonth = inputMonth.toString();
        }

        logMonthArr.push(inputMonth);

        logObj.logMonth = logMonthArr.join('-');

        this.userLogList.create(logObj);
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
buf.push("\n<ul class=\"logList\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, "/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade" ));
// iterate userLogList 
;(function(){
  var $$obj = userLogList ;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var log = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 3, "/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade" ));
jade_debug.unshift(new jade.DebugItem( 4, "/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade" ));
buf.push("\n  <li>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, jade_debug[0].filename ));
buf.push(" ");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 5, "/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade" ));
buf.push("<span class=\"logMonth\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, jade_debug[0].filename ));
buf.push("" + (jade.escape((jade_interp =  log ) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 6, "/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade" ));
buf.push("\n    <button class=\"view\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 6, jade_debug[0].filename ));
buf.push("View");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </li>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var log = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 3, "/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade" ));
jade_debug.unshift(new jade.DebugItem( 4, "/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade" ));
buf.push("\n  <li>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, jade_debug[0].filename ));
buf.push(" ");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 5, "/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade" ));
buf.push("<span class=\"logMonth\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, jade_debug[0].filename ));
buf.push("" + (jade.escape((jade_interp =  log ) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 6, "/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade" ));
buf.push("\n    <button class=\"view\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 6, jade_debug[0].filename ));
buf.push("View");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </li>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("\n</ul>");
jade_debug.shift();
jade_debug.shift();}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"userLogList" in locals_for_with?locals_for_with.userLogList:typeof userLogList!=="undefined"?userLogList:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".note 查看过往的Log\nul.logList\n each log in userLogList \n    li \n        span.logMonth #{ log }\n        button.view View\n");
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
        'click .view': 'goToMonthLog'
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
        var logMonth = $(e.currentTarget).siblings('.logMonth').text();
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
buf.push("\n<p class=\"salutation\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 1, jade_debug[0].filename ));
buf.push("Welcome Dear Master!");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 2, "/Users/levblanc/projects/task-log/app/components/home/createUser.jade" ));
buf.push("\n<div class=\"nameInput\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, "/Users/levblanc/projects/task-log/app/components/home/createUser.jade" ));
buf.push("\n  <input type=\"text\" placeholder=\"请告诉我您的英文名或名字拼音\"/>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 4, "/Users/levblanc/projects/task-log/app/components/home/createUser.jade" ));
buf.push("\n  <button class=\"confirmName\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, jade_debug[0].filename ));
buf.push("OK    ");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "p.salutation Welcome Dear Master!\n.nameInput\n    input(type=\"text\" placeholder=\"请告诉我您的英文名或名字拼音\")\n    button.confirmName OK    \n");
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
        'click .confirmName': 'confirmName'
    },

    initialize: function () {
        this.users = this.collection;

        this.users.fetch({ reset: true });

        this.listenTo(this.users, 'add', this.goToUserDashboard);
        this.listenTo(this.users, 'reset', this.showWelcomePanel);
    },

    confirmName: function (e) {
        var userData  = { userName : this.$el.find('input').val() };
        this.collection.create(userData);
    },

    goToUserDashboard: function (userModel) {
        var userRoute = userModel.toJSON().userName;
        Backbone.history.navigate(userRoute, { trigger: true });
    },

    showWelcomePanel: function (userCollection) {
        var users = userCollection.models
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
buf.push("\n<div class=\"note\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 1, jade_debug[0].filename ));
buf.push("请选择需要创建task log的用户：");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
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
buf.push("\n  <button" + (jade.attr("data-user-id", "" + ( user.userId ) + "", true, false)) + " class=\"user\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, jade_debug[0].filename ));
buf.push("" + (jade.escape((jade_interp =  user.userName ) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var user = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 3, "/Users/levblanc/projects/task-log/app/components/home/multiUser.jade" ));
jade_debug.unshift(new jade.DebugItem( 4, "/Users/levblanc/projects/task-log/app/components/home/multiUser.jade" ));
buf.push("\n  <button" + (jade.attr("data-user-id", "" + ( user.userId ) + "", true, false)) + " class=\"user\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, jade_debug[0].filename ));
buf.push("" + (jade.escape((jade_interp =  user.userName ) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
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
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".note 请选择需要创建task log的用户：\n.availableUsers\n    each user in users\n        button.user(data-user-id=\"#{ user.userId }\") #{ user.userName }\n");
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
        'click .user': 'goToUserDashboard'
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
;var locals_for_with = (locals || {});(function (content, logId) {
var jade_indent = [];
jade_debug.unshift(new jade.DebugItem( 0, "/Users/levblanc/projects/task-log/app/components/monthLog/logItem.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "/Users/levblanc/projects/task-log/app/components/monthLog/logItem.jade" ));
buf.push("\n<td class=\"logId\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 1, jade_debug[0].filename ));
buf.push("" + (jade.escape((jade_interp =  logId ) == null ? '' : jade_interp)) + "");
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
buf.push("\n<td" + (jade.attr("data-log-id", "" + ( logId ) + "", true, false)) + " class=\"delete\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, jade_debug[0].filename ));
buf.push("Delete");
jade_debug.shift();
jade_debug.shift();
buf.push("</td>");
jade_debug.shift();
jade_debug.shift();}.call(this,"content" in locals_for_with?locals_for_with.content:typeof content!=="undefined"?content:undefined,"logId" in locals_for_with?locals_for_with.logId:typeof logId!=="undefined"?logId:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "td.logId #{ logId }\ntd.logContent #{ content }\ntd.logStatus 完成\ntd.delete(data-log-id=\"#{ logId }\") Delete\n");
}
};
},{"jade/runtime":20}],13:[function(require,module,exports){
var $        = require('jquery');
var _        = require('underscore');
var Backbone = require('backbone');
var logItemTpl  = require("./logItem.jade");


module.exports = Backbone.View.extend({
    tagName   : 'tr',
    className : 'logItem',

    events: {
        'click .delete' : 'deleteItem'
    },

    initialize: function () {
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
    },

    render: function () {
        this.$el.html(logItemTpl(this.model.toJSON()));
        return this;
    },

    deleteItem: function (e) {
        this.model.destroy();
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
;var locals_for_with = (locals || {});(function (logMonth, outPutUrl) {
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
buf.push("<a" + (jade.attr("href", outPutUrl, true, false)) + " target=\"_blank\" class=\"output\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 11, jade_debug[0].filename ));
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
jade_debug.shift();}.call(this,"logMonth" in locals_for_with?locals_for_with.logMonth:typeof logMonth!=="undefined"?logMonth:undefined,"outPutUrl" in locals_for_with?locals_for_with.outPutUrl:typeof outPutUrl!=="undefined"?outPutUrl:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "button.goToHome 返回首页\n\n.addLog\n    input.logInput(type=\"text\" placeholder=\"请输入工作内容\" autofocus)\n    button.add Add\n    \n.logDetail\n    .logTitleWrapper\n        .logTitle #{ logMonth }总结\n        .optionsBtn\n            a.output(href=outPutUrl, target='_blank') Output\n    table.logTable\n        tr\n            th 序号\n            th 内容\n            th 状态\n                    \n\n        \n            \n        \n    \n");
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
        'click .goToHome': 'goToHome',
        'click .add'     : 'createLogItem',
        'click .output'  : 'outputLog'
    },

    initialize: function (initData) {
        this.logMonth  = initData.logMonth;
        this.userName  = initData.userName;
        this.monthLog = initData.collection;

        this.render();
        this.$logList = this.$el.find('.logTable tbody');

        this.listenTo(this.monthLog, 'add', this.addLogItemView);
        this.listenTo(this.monthLog, 'reset', this.listMonthLog);
        this.listenTo(this.monthLog, 'destroy', this.deleteLog);

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

        outPutUrlArr = new Array(userNameParam, logMonthParam);

        this.$el.html(mainTpl({
            logMonth : this.logMonth,
            outPutUrl: '/output-tasklog?' + outPutUrlArr.join('&'),
        }));
        return this;
    },

    goToHome: function (e) {
        var homeRoute = this.userName;
        Backbone.history.navigate(homeRoute, { trigger : true });
    },

    createLogItem: function (e) {
        var logData = {
            logId    : this.monthLog.nextLogId(),
            userName : this.userName,
            logMonth : this.logMonth,
            content  : this.$el.find('.logInput').val()
        };

        this.$el.find('.logInput').val('').focus();
        this.monthLog.create(logData);
    },

    addLogItemView: function (logModel) {
        var logItemView = new LogItemView({ model: logModel });
        this.$logList.append(logItemView.render().el);
    },

    listMonthLog: function () {
        this.monthLog.each(this.addLogItemView, this);
    },

    deleteLog: function (logModel) {
        console.dir('asasas');
        console.dir(logModel);
    }
});

},{"./logItemView":13,"./monthLog.jade":14,"backbone":"backbone","jquery":"jquery","underscore":"underscore"}],16:[function(require,module,exports){
var $ = require('jquery');
var Backbone = require('backbone');
var taskLog = {};


taskLog.model = Backbone.Model.extend({
    defaults: {
        logId    : 0,
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

    nextLogId: function () {
        return this.length ? this.last().get('logId') + 1 : 1;
    },

    comparator: 'logId'

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
    },
    validate: function (attr, opts) {
        // body...
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXNzZXRzL2pzL2FwcC5qcyIsImFwcC9hc3NldHMvanMvcm91dGVyLmpzIiwiYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NyZWF0ZUxvZy5qYWRlIiwiYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZFZpZXcuanMiLCJhcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlckxvZ0xpc3QuamFkZSIsImFwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyTG9nTGlzdFZpZXcuanMiLCJhcHAvY29tcG9uZW50cy9ob21lL2NyZWF0ZVVzZXIuamFkZSIsImFwcC9jb21wb25lbnRzL2hvbWUvY3JlYXRlVXNlclZpZXcuanMiLCJhcHAvY29tcG9uZW50cy9ob21lL2hvbWVWaWV3LmpzIiwiYXBwL2NvbXBvbmVudHMvaG9tZS9tdWx0aVVzZXIuamFkZSIsImFwcC9jb21wb25lbnRzL2hvbWUvbXVsdGlVc2VyVmlldy5qcyIsImFwcC9jb21wb25lbnRzL21vbnRoTG9nL2xvZ0l0ZW0uamFkZSIsImFwcC9jb21wb25lbnRzL21vbnRoTG9nL2xvZ0l0ZW1WaWV3LmpzIiwiYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbW9udGhMb2cuamFkZSIsImFwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nVmlldy5qcyIsImFwcC9zaGFyZWQvY29sbGVjdGlvbnMvdGFza0xvZy5qcyIsImFwcC9zaGFyZWQvY29sbGVjdGlvbnMvdXNlci5qcyIsImFwcC9zaGFyZWQvY29sbGVjdGlvbnMvdXNlckxvZ0xpc3QuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1yZXNvbHZlL2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2phZGUvcnVudGltZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBOzs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIEJhY2tib25lID0gcmVxdWlyZSgnYmFja2JvbmUnKTtcbnZhciBSb3V0ZXIgPSByZXF1aXJlKCcuL3JvdXRlcicpO1xudmFyIGFwcFJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcblxuQmFja2JvbmUuaGlzdG9yeS5zdGFydCh7IHB1c2hTdGF0ZTogdHJ1ZSB9KTtcbiIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG52YXIgQmFja2JvbmUgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xuXG5CYWNrYm9uZS4kID0gJDtcblxudmFyIEhvbWVWaWV3ICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4uLy4uL2NvbXBvbmVudHMvaG9tZS9ob21lVmlldycpO1xudmFyIERhc2hib2FyZFZpZXcgICAgICAgICA9IHJlcXVpcmUoJy4uLy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZFZpZXcnKTtcbnZhciBNb250aExvZ1ZpZXcgICAgICAgICAgPSByZXF1aXJlKCcuLi8uLi9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nVmlldycpO1xudmFyIFVzZXJDb2xsZWN0aW9uICAgICAgICA9IHJlcXVpcmUoJy4uLy4uL3NoYXJlZC9jb2xsZWN0aW9ucy91c2VyJykuY29sbGVjdGlvbjtcbnZhciBUYXNrTG9nQ29sbGVjdGlvbiAgICAgPSByZXF1aXJlKCcuLi8uLi9zaGFyZWQvY29sbGVjdGlvbnMvdGFza0xvZycpLmNvbGxlY3Rpb247XG52YXIgVXNlckxvZ0xpc3RDb2xsZWN0aW9uID0gcmVxdWlyZSgnLi4vLi4vc2hhcmVkL2NvbGxlY3Rpb25zL3VzZXJMb2dMaXN0JykuY29sbGVjdGlvbjtcblxudmFyIHVzZXJDb2xsZWN0aW9uICAgICAgICA9IG5ldyBVc2VyQ29sbGVjdGlvbigpO1xudmFyIHRhc2tMb2dDb2xsZWN0aW9uICAgICA9IG5ldyBUYXNrTG9nQ29sbGVjdGlvbigpO1xudmFyIHVzZXJMb2dMaXN0Q29sbGVjdGlvbiA9IG5ldyBVc2VyTG9nTGlzdENvbGxlY3Rpb24oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBCYWNrYm9uZS5Sb3V0ZXIuZXh0ZW5kKHtcbiAgICByb3V0ZXM6IHtcbiAgICAgICAgJycgOiAnaG9tZScsXG4gICAgICAgICc6dXNlck5hbWUnOiAndXNlckRhc2hib2FyZCcsXG4gICAgICAgICc6dXNlck5hbWUvOmxvZ01vbnRoJzogJ3VzZXJNb250aExvZydcbiAgICB9LFxuXG4gICAgaG9tZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmRpcignaW4gaG9tZSB2aWV3Jyk7XG5cbiAgICAgICAgdmFyIGhvbWVWaWV3ICA9IG5ldyBIb21lVmlldyh7IGNvbGxlY3Rpb246IHVzZXJDb2xsZWN0aW9uIH0pO1xuXG4gICAgICAgICQoJyNtYWluJykuZW1wdHkoKS5hcHBlbmQoaG9tZVZpZXcuZWwpO1xuICAgIH0sXG5cbiAgICB1c2VyRGFzaGJvYXJkOiBmdW5jdGlvbiAodXNlck5hbWUpIHtcbiAgICAgICAgY29uc29sZS5kaXIoXCJpbiBcIiAgKyB1c2VyTmFtZSArICBcIidzIGRhc2hib2FyZFwiKTtcblxuICAgICAgICB2YXIgaW5pdERhdGEgPSB7XG4gICAgICAgICAgICBjb2xsZWN0aW9uIDogdXNlckxvZ0xpc3RDb2xsZWN0aW9uLFxuICAgICAgICAgICAgdXNlck5hbWUgICA6IHVzZXJOYW1lXG4gICAgICAgIH07XG4gICAgICAgIHZhciBkYXNoYm9hcmRWaWV3ID0gbmV3IERhc2hib2FyZFZpZXcoaW5pdERhdGEpO1xuXG4gICAgICAgICQoJyNtYWluJykuZW1wdHkoKS5hcHBlbmQoZGFzaGJvYXJkVmlldy5lbCk7XG4gICAgfSxcblxuICAgIHVzZXJNb250aExvZzogZnVuY3Rpb24gKHVzZXJOYW1lLCBsb2dNb250aCkge1xuICAgICAgICBjb25zb2xlLmRpcihcImluIFwiICArIHVzZXJOYW1lICsgIFwiJ3MgXCIgKyBsb2dNb250aCArIFwiIGxvZ1wiKTtcblxuICAgICAgICB2YXIgaW5pdERhdGEgPSB7XG4gICAgICAgICAgICBjb2xsZWN0aW9uIDogdGFza0xvZ0NvbGxlY3Rpb24sXG4gICAgICAgICAgICB1c2VyTmFtZSA6IHVzZXJOYW1lLFxuICAgICAgICAgICAgbG9nTW9udGggOiBsb2dNb250aFxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBtb250aExvZ1ZpZXcgPSBuZXcgTW9udGhMb2dWaWV3KGluaXREYXRhKTtcblxuICAgICAgICAkKCcjbWFpbicpLmVtcHR5KCkuYXBwZW5kKG1vbnRoTG9nVmlldy5lbCk7XG4gICAgfVxuXG59KTtcbiIsInZhciBqYWRlID0gcmVxdWlyZShcImphZGUvcnVudGltZVwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHtcbnZhciBqYWRlX2RlYnVnID0gWyBuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9jcmVhdGVMb2cuamFkZVwiICkgXTtcbnRyeSB7XG52YXIgYnVmID0gW107XG52YXIgamFkZV9taXhpbnMgPSB7fTtcbnZhciBqYWRlX2ludGVycDtcbjt2YXIgbG9jYWxzX2Zvcl93aXRoID0gKGxvY2FscyB8fCB7fSk7KGZ1bmN0aW9uIChjdXJyZW50WWVhciwgdXNlck5hbWUpIHtcbnZhciBqYWRlX2luZGVudCA9IFtdO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMCwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NyZWF0ZUxvZy5qYWRlXCIgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvY3JlYXRlTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuPHA+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMSwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiIFdlbGNvbWUgTWFzdGVyIFwiICsgKGphZGUuZXNjYXBlKChqYWRlX2ludGVycCA9ICB1c2VyTmFtZSApID09IG51bGwgPyAnJyA6IGphZGVfaW50ZXJwKSkgKyBcIiEhIVwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC9wPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDMsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9jcmVhdGVMb2cuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG48ZGl2IGNsYXNzPVxcXCJjcmVhdGVNb250aExvZ1xcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNCwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NyZWF0ZUxvZy5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbiAgPGRpdiBjbGFzcz1cXFwibm90ZVxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwi5paw5aKeTG9nXCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L2Rpdj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA1LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvY3JlYXRlTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICA8ZGl2IGNsYXNzPVxcXCJtb250aElucHV0XFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA2LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvY3JlYXRlTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICAgIDxkaXYgY2xhc3M9XFxcImN1cnJlbnRZZWFyXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA2LCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCJcIiArIChqYWRlLmVzY2FwZSgoamFkZV9pbnRlcnAgPSAgY3VycmVudFllYXIgKSA9PSBudWxsID8gJycgOiBqYWRlX2ludGVycCkpICsgXCLlubRcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvZGl2PlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDcsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9jcmVhdGVMb2cuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG4gICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCLor7fovpPlhaXmnIjku71cXFwiLz5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA4LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvY3JlYXRlTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImNyZWF0ZVxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggOCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiQ3JlYXRlXCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L2J1dHRvbj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIlxcbiAgPC9kaXY+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCJcXG48L2Rpdj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7fS5jYWxsKHRoaXMsXCJjdXJyZW50WWVhclwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGguY3VycmVudFllYXI6dHlwZW9mIGN1cnJlbnRZZWFyIT09XCJ1bmRlZmluZWRcIj9jdXJyZW50WWVhcjp1bmRlZmluZWQsXCJ1c2VyTmFtZVwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGgudXNlck5hbWU6dHlwZW9mIHVzZXJOYW1lIT09XCJ1bmRlZmluZWRcIj91c2VyTmFtZTp1bmRlZmluZWQpKTs7cmV0dXJuIGJ1Zi5qb2luKFwiXCIpO1xufSBjYXRjaCAoZXJyKSB7XG4gIGphZGUucmV0aHJvdyhlcnIsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUsIGphZGVfZGVidWdbMF0ubGluZW5vLCBcInAgIFdlbGNvbWUgTWFzdGVyICN7IHVzZXJOYW1lIH0hISFcXG5cXG4uY3JlYXRlTW9udGhMb2dcXG4gICAgLm5vdGUg5paw5aKeTG9nXFxuICAgIC5tb250aElucHV0XFxuICAgICAgICAuY3VycmVudFllYXIgI3sgY3VycmVudFllYXIgfeW5tFxcbiAgICAgICAgaW5wdXQodHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIuivt+i+k+WFpeaciOS7vVxcXCIpXFxuICAgICAgICBidXR0b24uY3JlYXRlIENyZWF0ZVxcblwiKTtcbn1cbn07IiwidmFyICQgICAgICAgICAgICAgICA9IHJlcXVpcmUoJ2pxdWVyeScpO1xudmFyIF8gICAgICAgICAgICAgICA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBCYWNrYm9uZSAgICAgICAgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIGNyZWF0ZUxvZ1RwbCAgICA9IHJlcXVpcmUoXCIuL2NyZWF0ZUxvZy5qYWRlXCIpO1xudmFyIFVzZXJMb2dMaXN0VmlldyA9IHJlcXVpcmUoJy4vdXNlckxvZ0xpc3RWaWV3Jyk7XG5cbnZhciB1c2VyTmFtZSAgICA9IG51bGw7XG52YXIgY3VycmVudFllYXIgPSBudWxsO1xudmFyIHJlbmRlckRhdGEgID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gQmFja2JvbmUuVmlldy5leHRlbmQoe1xuICAgIGNsYXNzTmFtZSA6ICdkYXNoYm9hcmQnLFxuXG4gICAgZXZlbnRzOiB7XG4gICAgICAgICdjbGljayAuY3JlYXRlJyA6ICdjcmVhdGVMb2cnXG4gICAgfSxcblxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIChpbml0RGF0YSkge1xuICAgICAgICB1c2VyTmFtZSAgICAgICAgPSBpbml0RGF0YS51c2VyTmFtZTtcbiAgICAgICAgdGhpcy51c2VyTG9nTGlzdCA9IGluaXREYXRhLmNvbGxlY3Rpb247XG5cbiAgICAgICAgdGhpcy51c2VyTG9nTGlzdC5mZXRjaCh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgdXNlck5hbWU6IHVzZXJOYW1lXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzZXQ6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLnVzZXJMb2dMaXN0LCAnYWRkJywgdGhpcy5nb1RvTW9udGhMb2cpO1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMudXNlckxvZ0xpc3QsICdyZXNldCcsIHRoaXMubGlzdExvZ3MpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZW5kZXJEYXRhLnVzZXJOYW1lICAgID0gdXNlck5hbWU7XG4gICAgICAgIHJlbmRlckRhdGEuY3VycmVudFllYXIgPSBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xuXG4gICAgICAgIHRoaXMuJGVsLmh0bWwoY3JlYXRlTG9nVHBsKHJlbmRlckRhdGEpKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgY3JlYXRlTG9nOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgaW5wdXRNb250aCAgID0gcGFyc2VJbnQodGhpcy4kZWwuZmluZCgnaW5wdXQnKS52YWwoKSwgMTApO1xuICAgICAgICB2YXIgbG9nTW9udGhBcnIgPSBbY3VycmVudFllYXJdO1xuICAgICAgICB2YXIgbG9nT2JqID0ge1xuICAgICAgICAgICAgdXNlck5hbWU6IHVzZXJOYW1lXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYoaW5wdXRNb250aCA8IDEwKXtcbiAgICAgICAgICAgIGlucHV0TW9udGggPSAnMCcgKyBpbnB1dE1vbnRoO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlucHV0TW9udGggPSBpbnB1dE1vbnRoLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsb2dNb250aEFyci5wdXNoKGlucHV0TW9udGgpO1xuXG4gICAgICAgIGxvZ09iai5sb2dNb250aCA9IGxvZ01vbnRoQXJyLmpvaW4oJy0nKTtcblxuICAgICAgICB0aGlzLnVzZXJMb2dMaXN0LmNyZWF0ZShsb2dPYmopO1xuICAgIH0sXG5cbiAgICBsaXN0TG9nczogZnVuY3Rpb24gKHVzZXJMb2dMaXN0Q29sbGVjdGlvbikge1xuICAgICAgICB2YXIgdXNlckxvZ0xpc3RWaWV3ID0gbmV3IFVzZXJMb2dMaXN0Vmlldyh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uOiB1c2VyTG9nTGlzdENvbGxlY3Rpb24sXG4gICAgICAgICAgICB1c2VyTmFtZTogdXNlck5hbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZWwuYXBwZW5kKHVzZXJMb2dMaXN0Vmlldy5yZW5kZXIoKS5lbCk7XG4gICAgfSxcblxuICAgIGdvVG9Nb250aExvZzogZnVuY3Rpb24gKGxvZ01vZGVsKSB7XG4gICAgICAgIHZhciBsb2dSb3V0ZUFyciA9IF8udmFsdWVzKGxvZ01vZGVsLnRvSlNPTigpKTtcbiAgICAgICAgQmFja2JvbmUuaGlzdG9yeS5uYXZpZ2F0ZShsb2dSb3V0ZUFyci5qb2luKCcvJyksIHsgdHJpZ2dlcjogdHJ1ZX0pO1xuICAgIH1cbn0pO1xuIiwidmFyIGphZGUgPSByZXF1aXJlKFwiamFkZS9ydW50aW1lXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge1xudmFyIGphZGVfZGVidWcgPSBbIG5ldyBqYWRlLkRlYnVnSXRlbSggMSwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXJMb2dMaXN0LmphZGVcIiApIF07XG50cnkge1xudmFyIGJ1ZiA9IFtdO1xudmFyIGphZGVfbWl4aW5zID0ge307XG52YXIgamFkZV9pbnRlcnA7XG47dmFyIGxvY2Fsc19mb3Jfd2l0aCA9IChsb2NhbHMgfHwge30pOyhmdW5jdGlvbiAodW5kZWZpbmVkLCB1c2VyTG9nTGlzdCkge1xudmFyIGphZGVfaW5kZW50ID0gW107XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAwLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlckxvZ0xpc3QuamFkZVwiICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMSwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXJMb2dMaXN0LmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuPGRpdiBjbGFzcz1cXFwibm90ZVxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMSwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwi5p+l55yL6L+H5b6A55qETG9nXCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L2Rpdj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAyLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlckxvZ0xpc3QuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG48dWwgY2xhc3M9XFxcImxvZ0xpc3RcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDMsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyTG9nTGlzdC5qYWRlXCIgKSk7XG4vLyBpdGVyYXRlIHVzZXJMb2dMaXN0IFxuOyhmdW5jdGlvbigpe1xuICB2YXIgJCRvYmogPSB1c2VyTG9nTGlzdCA7XG4gIGlmICgnbnVtYmVyJyA9PSB0eXBlb2YgJCRvYmoubGVuZ3RoKSB7XG5cbiAgICBmb3IgKHZhciAkaW5kZXggPSAwLCAkJGwgPSAkJG9iai5sZW5ndGg7ICRpbmRleCA8ICQkbDsgJGluZGV4KyspIHtcbiAgICAgIHZhciBsb2cgPSAkJG9ialskaW5kZXhdO1xuXG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAzLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlckxvZ0xpc3QuamFkZVwiICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNCwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXJMb2dMaXN0LmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICA8bGk+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiIFwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDUsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyTG9nTGlzdC5qYWRlXCIgKSk7XG5idWYucHVzaChcIjxzcGFuIGNsYXNzPVxcXCJsb2dNb250aFxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNSwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiXCIgKyAoamFkZS5lc2NhcGUoKGphZGVfaW50ZXJwID0gIGxvZyApID09IG51bGwgPyAnJyA6IGphZGVfaW50ZXJwKSkgKyBcIlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC9zcGFuPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDYsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyTG9nTGlzdC5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJ2aWV3XFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA2LCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCJWaWV3XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L2J1dHRvbj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIlxcbiAgPC9saT5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG4gICAgfVxuXG4gIH0gZWxzZSB7XG4gICAgdmFyICQkbCA9IDA7XG4gICAgZm9yICh2YXIgJGluZGV4IGluICQkb2JqKSB7XG4gICAgICAkJGwrKzsgICAgICB2YXIgbG9nID0gJCRvYmpbJGluZGV4XTtcblxuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMywgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3VzZXJMb2dMaXN0LmphZGVcIiApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDQsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC91c2VyTG9nTGlzdC5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbiAgPGxpPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIiBcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA1LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlckxvZ0xpc3QuamFkZVwiICkpO1xuYnVmLnB1c2goXCI8c3BhbiBjbGFzcz1cXFwibG9nTW9udGhcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDUsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIlwiICsgKGphZGUuZXNjYXBlKChqYWRlX2ludGVycCA9ICBsb2cgKSA9PSBudWxsID8gJycgOiBqYWRlX2ludGVycCkpICsgXCJcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvc3Bhbj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA2LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdXNlckxvZ0xpc3QuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwidmlld1xcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNiwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiVmlld1wiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC9idXR0b24+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCJcXG4gIDwvbGk+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuICAgIH1cblxuICB9XG59KS5jYWxsKHRoaXMpO1xuXG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIlxcbjwvdWw+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO30uY2FsbCh0aGlzLFwidW5kZWZpbmVkXCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC51bmRlZmluZWQ6dHlwZW9mIHVuZGVmaW5lZCE9PVwidW5kZWZpbmVkXCI/dW5kZWZpbmVkOnVuZGVmaW5lZCxcInVzZXJMb2dMaXN0XCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC51c2VyTG9nTGlzdDp0eXBlb2YgdXNlckxvZ0xpc3QhPT1cInVuZGVmaW5lZFwiP3VzZXJMb2dMaXN0OnVuZGVmaW5lZCkpOztyZXR1cm4gYnVmLmpvaW4oXCJcIik7XG59IGNhdGNoIChlcnIpIHtcbiAgamFkZS5yZXRocm93KGVyciwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSwgamFkZV9kZWJ1Z1swXS5saW5lbm8sIFwiLm5vdGUg5p+l55yL6L+H5b6A55qETG9nXFxudWwubG9nTGlzdFxcbiBlYWNoIGxvZyBpbiB1c2VyTG9nTGlzdCBcXG4gICAgbGkgXFxuICAgICAgICBzcGFuLmxvZ01vbnRoICN7IGxvZyB9XFxuICAgICAgICBidXR0b24udmlldyBWaWV3XFxuXCIpO1xufVxufTsiLCJ2YXIgJCAgICAgICAgICAgICAgPSByZXF1aXJlKCdqcXVlcnknKTtcbnZhciBfICAgICAgICAgICAgICA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBCYWNrYm9uZSAgICAgICA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG52YXIgdXNlckxvZ0xpc3RUcGwgPSByZXF1aXJlKFwiLi91c2VyTG9nTGlzdC5qYWRlXCIpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gQmFja2JvbmUuVmlldy5leHRlbmQoe1xuICAgIGNsYXNzTmFtZTogXCJ1c2VyTG9nTGlzdFwiLFxuXG4gICAgZXZlbnRzOiB7XG4gICAgICAgICdjbGljayAudmlldyc6ICdnb1RvTW9udGhMb2cnXG4gICAgfSxcblxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIChpbml0RGF0YSkge1xuICAgICAgICB0aGlzLnVzZXJOYW1lID0gaW5pdERhdGEudXNlck5hbWU7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdXNlckxvZ0xpc3QgPSBfLm1hcCh0aGlzLmNvbGxlY3Rpb24ubW9kZWxzLCBmdW5jdGlvbiAobW9kZWwsIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gbW9kZWwudG9KU09OKCkubG9nTW9udGg7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGVsLmh0bWwodXNlckxvZ0xpc3RUcGwoeyB1c2VyTG9nTGlzdDogdXNlckxvZ0xpc3QgfSkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgZ29Ub01vbnRoTG9nOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgbG9nTW9udGggPSAkKGUuY3VycmVudFRhcmdldCkuc2libGluZ3MoJy5sb2dNb250aCcpLnRleHQoKTtcbiAgICAgICAgdmFyIG1vbnRoTG9nUm91dGVBcnIgPSBbdGhpcy51c2VyTmFtZSwgbG9nTW9udGhdO1xuXG4gICAgICAgIEJhY2tib25lLmhpc3RvcnkubmF2aWdhdGUobW9udGhMb2dSb3V0ZUFyci5qb2luKCcvJyksIHsgdHJpZ2dlcjogdHJ1ZX0pO1xuICAgIH0sXG59KTtcbiIsInZhciBqYWRlID0gcmVxdWlyZShcImphZGUvcnVudGltZVwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHtcbnZhciBqYWRlX2RlYnVnID0gWyBuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2hvbWUvY3JlYXRlVXNlci5qYWRlXCIgKSBdO1xudHJ5IHtcbnZhciBidWYgPSBbXTtcbnZhciBqYWRlX21peGlucyA9IHt9O1xudmFyIGphZGVfaW50ZXJwO1xuXG52YXIgamFkZV9pbmRlbnQgPSBbXTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDAsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2hvbWUvY3JlYXRlVXNlci5qYWRlXCIgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9ob21lL2NyZWF0ZVVzZXIuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG48cCBjbGFzcz1cXFwic2FsdXRhdGlvblxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMSwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiV2VsY29tZSBEZWFyIE1hc3RlciFcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvcD5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAyLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9ob21lL2NyZWF0ZVVzZXIuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG48ZGl2IGNsYXNzPVxcXCJuYW1lSW5wdXRcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDMsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2hvbWUvY3JlYXRlVXNlci5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbiAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCLor7flkYror4nmiJHmgqjnmoToi7HmloflkI3miJblkI3lrZfmi7zpn7NcXFwiLz5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA0LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9ob21lL2NyZWF0ZVVzZXIuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG4gIDxidXR0b24gY2xhc3M9XFxcImNvbmZpcm1OYW1lXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA0LCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCJPSyAgICBcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvYnV0dG9uPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiXFxuPC9kaXY+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpOztyZXR1cm4gYnVmLmpvaW4oXCJcIik7XG59IGNhdGNoIChlcnIpIHtcbiAgamFkZS5yZXRocm93KGVyciwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSwgamFkZV9kZWJ1Z1swXS5saW5lbm8sIFwicC5zYWx1dGF0aW9uIFdlbGNvbWUgRGVhciBNYXN0ZXIhXFxuLm5hbWVJbnB1dFxcbiAgICBpbnB1dCh0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwi6K+35ZGK6K+J5oiR5oKo55qE6Iux5paH5ZCN5oiW5ZCN5a2X5ou86Z+zXFxcIilcXG4gICAgYnV0dG9uLmNvbmZpcm1OYW1lIE9LICAgIFxcblwiKTtcbn1cbn07IiwidmFyIEJhY2tib25lICA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG52YXIgQ3JlYXRlVXNlclRwbCAgPSByZXF1aXJlKFwiLi9jcmVhdGVVc2VyLmphZGVcIik7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBCYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG4gICAgY2xhc3NOYW1lOiAnY3JlYXRlVXNlcicsXG4gICAgXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJGVsLmh0bWwoQ3JlYXRlVXNlclRwbCgpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSk7XG4iLCJ2YXIgJCAgICAgICAgICAgICAgPSByZXF1aXJlKCdqcXVlcnknKTtcbnZhciBCYWNrYm9uZSAgICAgICA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG52YXIgQ3JlYXRlVXNlclZpZXcgPSByZXF1aXJlKFwiLi9jcmVhdGVVc2VyVmlld1wiKTtcbnZhciBNdWx0aVVzZXJWaWV3ICA9IHJlcXVpcmUoXCIuL211bHRpVXNlclZpZXdcIik7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBCYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG4gICAgY2xhc3NOYW1lIDogJ3dlbGNvbWVQYW5lbCcsXG5cbiAgICBldmVudHM6IHtcbiAgICAgICAgJ2NsaWNrIC5jb25maXJtTmFtZSc6ICdjb25maXJtTmFtZSdcbiAgICB9LFxuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVzZXJzID0gdGhpcy5jb2xsZWN0aW9uO1xuXG4gICAgICAgIHRoaXMudXNlcnMuZmV0Y2goeyByZXNldDogdHJ1ZSB9KTtcblxuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMudXNlcnMsICdhZGQnLCB0aGlzLmdvVG9Vc2VyRGFzaGJvYXJkKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLnVzZXJzLCAncmVzZXQnLCB0aGlzLnNob3dXZWxjb21lUGFuZWwpO1xuICAgIH0sXG5cbiAgICBjb25maXJtTmFtZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHVzZXJEYXRhICA9IHsgdXNlck5hbWUgOiB0aGlzLiRlbC5maW5kKCdpbnB1dCcpLnZhbCgpIH07XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbi5jcmVhdGUodXNlckRhdGEpO1xuICAgIH0sXG5cbiAgICBnb1RvVXNlckRhc2hib2FyZDogZnVuY3Rpb24gKHVzZXJNb2RlbCkge1xuICAgICAgICB2YXIgdXNlclJvdXRlID0gdXNlck1vZGVsLnRvSlNPTigpLnVzZXJOYW1lO1xuICAgICAgICBCYWNrYm9uZS5oaXN0b3J5Lm5hdmlnYXRlKHVzZXJSb3V0ZSwgeyB0cmlnZ2VyOiB0cnVlIH0pO1xuICAgIH0sXG5cbiAgICBzaG93V2VsY29tZVBhbmVsOiBmdW5jdGlvbiAodXNlckNvbGxlY3Rpb24pIHtcbiAgICAgICAgdmFyIHVzZXJzID0gdXNlckNvbGxlY3Rpb24ubW9kZWxzXG4gICAgICAgIGlmKHVzZXJzLmxlbmd0aCl7XG4gICAgICAgICAgICAvLyDlj6rmnInkuIDkuKrnlKjmiLfml7bvvIzot7PovazliLDor6XnlKjmiLfnmoREYXNoYm9hcmRcbiAgICAgICAgICAgIGlmKHVzZXJzLmxlbmd0aCA9PT0gMSl7XG4gICAgICAgICAgICAgICAgdmFyIHVzZXJSb3V0ZSA9IHVzZXJzWzBdLnRvSlNPTigpLnVzZXJOYW1lO1xuICAgICAgICAgICAgICAgIEJhY2tib25lLmhpc3RvcnkubmF2aWdhdGUodXNlclJvdXRlLCB7IHRyaWdnZXI6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDlpJrkuo7kuIDkuKrnlKjmiLflkI3ml7bvvIzorqnnlKjmiLfpgInmi6lcbiAgICAgICAgICAgIGlmKHVzZXJzLmxlbmd0aCA+IDEpe1xuICAgICAgICAgICAgICAgIHZhciBtdWx0aVVzZXJWaWV3ID0gbmV3IE11bHRpVXNlclZpZXcoeyBjb2xsZWN0aW9uOiB1c2VycyB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbC5odG1sKG11bHRpVXNlclZpZXcucmVuZGVyKCkuZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIC8vIOacquWIm+W7uuS7u+S9leeUqOaIt1xuICAgICAgICAgICAgdmFyIGNyZWF0ZVVzZXJWaWV3ID0gbmV3IENyZWF0ZVVzZXJWaWV3KCk7XG4gICAgICAgICAgICB0aGlzLiRlbC5odG1sKGNyZWF0ZVVzZXJWaWV3LnJlbmRlcigpLmVsKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIiwidmFyIGphZGUgPSByZXF1aXJlKFwiamFkZS9ydW50aW1lXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge1xudmFyIGphZGVfZGVidWcgPSBbIG5ldyBqYWRlLkRlYnVnSXRlbSggMSwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvaG9tZS9tdWx0aVVzZXIuamFkZVwiICkgXTtcbnRyeSB7XG52YXIgYnVmID0gW107XG52YXIgamFkZV9taXhpbnMgPSB7fTtcbnZhciBqYWRlX2ludGVycDtcbjt2YXIgbG9jYWxzX2Zvcl93aXRoID0gKGxvY2FscyB8fCB7fSk7KGZ1bmN0aW9uICh1bmRlZmluZWQsIHVzZXJzKSB7XG52YXIgamFkZV9pbmRlbnQgPSBbXTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDAsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2hvbWUvbXVsdGlVc2VyLmphZGVcIiApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2hvbWUvbXVsdGlVc2VyLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuPGRpdiBjbGFzcz1cXFwibm90ZVxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMSwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwi6K+36YCJ5oup6ZyA6KaB5Yib5bu6dGFzayBsb2fnmoTnlKjmiLfvvJpcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvZGl2PlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDIsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2hvbWUvbXVsdGlVc2VyLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuPGRpdiBjbGFzcz1cXFwiYXZhaWxhYmxlVXNlcnNcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDMsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL2hvbWUvbXVsdGlVc2VyLmphZGVcIiApKTtcbi8vIGl0ZXJhdGUgdXNlcnNcbjsoZnVuY3Rpb24oKXtcbiAgdmFyICQkb2JqID0gdXNlcnM7XG4gIGlmICgnbnVtYmVyJyA9PSB0eXBlb2YgJCRvYmoubGVuZ3RoKSB7XG5cbiAgICBmb3IgKHZhciAkaW5kZXggPSAwLCAkJGwgPSAkJG9iai5sZW5ndGg7ICRpbmRleCA8ICQkbDsgJGluZGV4KyspIHtcbiAgICAgIHZhciB1c2VyID0gJCRvYmpbJGluZGV4XTtcblxuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMywgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvaG9tZS9tdWx0aVVzZXIuamFkZVwiICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNCwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvaG9tZS9tdWx0aVVzZXIuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG4gIDxidXR0b25cIiArIChqYWRlLmF0dHIoXCJkYXRhLXVzZXItaWRcIiwgXCJcIiArICggdXNlci51c2VySWQgKSArIFwiXCIsIHRydWUsIGZhbHNlKSkgKyBcIiBjbGFzcz1cXFwidXNlclxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiXCIgKyAoamFkZS5lc2NhcGUoKGphZGVfaW50ZXJwID0gIHVzZXIudXNlck5hbWUgKSA9PSBudWxsID8gJycgOiBqYWRlX2ludGVycCkpICsgXCJcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvYnV0dG9uPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbiAgICB9XG5cbiAgfSBlbHNlIHtcbiAgICB2YXIgJCRsID0gMDtcbiAgICBmb3IgKHZhciAkaW5kZXggaW4gJCRvYmopIHtcbiAgICAgICQkbCsrOyAgICAgIHZhciB1c2VyID0gJCRvYmpbJGluZGV4XTtcblxuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMywgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvaG9tZS9tdWx0aVVzZXIuamFkZVwiICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNCwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvaG9tZS9tdWx0aVVzZXIuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG4gIDxidXR0b25cIiArIChqYWRlLmF0dHIoXCJkYXRhLXVzZXItaWRcIiwgXCJcIiArICggdXNlci51c2VySWQgKSArIFwiXCIsIHRydWUsIGZhbHNlKSkgKyBcIiBjbGFzcz1cXFwidXNlclxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiXCIgKyAoamFkZS5lc2NhcGUoKGphZGVfaW50ZXJwID0gIHVzZXIudXNlck5hbWUgKSA9PSBudWxsID8gJycgOiBqYWRlX2ludGVycCkpICsgXCJcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvYnV0dG9uPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbiAgICB9XG5cbiAgfVxufSkuY2FsbCh0aGlzKTtcblxuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCJcXG48L2Rpdj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7fS5jYWxsKHRoaXMsXCJ1bmRlZmluZWRcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLnVuZGVmaW5lZDp0eXBlb2YgdW5kZWZpbmVkIT09XCJ1bmRlZmluZWRcIj91bmRlZmluZWQ6dW5kZWZpbmVkLFwidXNlcnNcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLnVzZXJzOnR5cGVvZiB1c2VycyE9PVwidW5kZWZpbmVkXCI/dXNlcnM6dW5kZWZpbmVkKSk7O3JldHVybiBidWYuam9pbihcIlwiKTtcbn0gY2F0Y2ggKGVycikge1xuICBqYWRlLnJldGhyb3coZXJyLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lLCBqYWRlX2RlYnVnWzBdLmxpbmVubywgXCIubm90ZSDor7fpgInmi6npnIDopoHliJvlu7p0YXNrIGxvZ+eahOeUqOaIt++8mlxcbi5hdmFpbGFibGVVc2Vyc1xcbiAgICBlYWNoIHVzZXIgaW4gdXNlcnNcXG4gICAgICAgIGJ1dHRvbi51c2VyKGRhdGEtdXNlci1pZD1cXFwiI3sgdXNlci51c2VySWQgfVxcXCIpICN7IHVzZXIudXNlck5hbWUgfVxcblwiKTtcbn1cbn07IiwidmFyICQgICAgICAgICAgICA9IHJlcXVpcmUoJ2pxdWVyeScpO1xudmFyIF8gICAgICAgICAgICA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBCYWNrYm9uZSAgICAgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIE11bHRpVXNlclRwbCA9IHJlcXVpcmUoXCIuL211bHRpVXNlci5qYWRlXCIpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gQmFja2JvbmUuVmlldy5leHRlbmQoe1xuICAgIGNsYXNzTmFtZTogXCJjaG9vc2VVc2VyXCIsXG5cbiAgICBldmVudHM6IHtcbiAgICAgICAgJ2NsaWNrIC51c2VyJzogJ2dvVG9Vc2VyRGFzaGJvYXJkJ1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHVzZXJzID0gXy5tYXAodGhpcy5jb2xsZWN0aW9uLCBmdW5jdGlvbiAobW9kZWwsIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gbW9kZWwudG9KU09OKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGVsLmh0bWwoTXVsdGlVc2VyVHBsKHsgdXNlcnM6IHVzZXJzIH0pKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGdvVG9Vc2VyRGFzaGJvYXJkOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdXNlclJvdXRlID0gJChlLmN1cnJlbnRUYXJnZXQpLnRleHQoKTtcbiAgICAgICAgQmFja2JvbmUuaGlzdG9yeS5uYXZpZ2F0ZSh1c2VyUm91dGUsIHsgdHJpZ2dlcjogdHJ1ZSB9KTtcbiAgICB9LFxufSk7XG4iLCJ2YXIgamFkZSA9IHJlcXVpcmUoXCJqYWRlL3J1bnRpbWVcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7XG52YXIgamFkZV9kZWJ1ZyA9IFsgbmV3IGphZGUuRGVidWdJdGVtKCAxLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9tb250aExvZy9sb2dJdGVtLmphZGVcIiApIF07XG50cnkge1xudmFyIGJ1ZiA9IFtdO1xudmFyIGphZGVfbWl4aW5zID0ge307XG52YXIgamFkZV9pbnRlcnA7XG47dmFyIGxvY2Fsc19mb3Jfd2l0aCA9IChsb2NhbHMgfHwge30pOyhmdW5jdGlvbiAoY29udGVudCwgbG9nSWQpIHtcbnZhciBqYWRlX2luZGVudCA9IFtdO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMCwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbG9nSXRlbS5qYWRlXCIgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9tb250aExvZy9sb2dJdGVtLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuPHRkIGNsYXNzPVxcXCJsb2dJZFxcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMSwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwiXCIgKyAoamFkZS5lc2NhcGUoKGphZGVfaW50ZXJwID0gIGxvZ0lkICkgPT0gbnVsbCA/ICcnIDogamFkZV9pbnRlcnApKSArIFwiXCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L3RkPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDIsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL2xvZ0l0ZW0uamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG48dGQgY2xhc3M9XFxcImxvZ0NvbnRlbnRcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDIsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIlwiICsgKGphZGUuZXNjYXBlKChqYWRlX2ludGVycCA9ICBjb250ZW50ICkgPT0gbnVsbCA/ICcnIDogamFkZV9pbnRlcnApKSArIFwiXCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L3RkPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDMsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL2xvZ0l0ZW0uamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG48dGQgY2xhc3M9XFxcImxvZ1N0YXR1c1xcXCI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMywgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmJ1Zi5wdXNoKFwi5a6M5oiQXCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCI8L3RkPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDQsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL2xvZ0l0ZW0uamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG48dGRcIiArIChqYWRlLmF0dHIoXCJkYXRhLWxvZy1pZFwiLCBcIlwiICsgKCBsb2dJZCApICsgXCJcIiwgdHJ1ZSwgZmFsc2UpKSArIFwiIGNsYXNzPVxcXCJkZWxldGVcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5idWYucHVzaChcIkRlbGV0ZVwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiPC90ZD5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7fS5jYWxsKHRoaXMsXCJjb250ZW50XCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5jb250ZW50OnR5cGVvZiBjb250ZW50IT09XCJ1bmRlZmluZWRcIj9jb250ZW50OnVuZGVmaW5lZCxcImxvZ0lkXCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5sb2dJZDp0eXBlb2YgbG9nSWQhPT1cInVuZGVmaW5lZFwiP2xvZ0lkOnVuZGVmaW5lZCkpOztyZXR1cm4gYnVmLmpvaW4oXCJcIik7XG59IGNhdGNoIChlcnIpIHtcbiAgamFkZS5yZXRocm93KGVyciwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSwgamFkZV9kZWJ1Z1swXS5saW5lbm8sIFwidGQubG9nSWQgI3sgbG9nSWQgfVxcbnRkLmxvZ0NvbnRlbnQgI3sgY29udGVudCB9XFxudGQubG9nU3RhdHVzIOWujOaIkFxcbnRkLmRlbGV0ZShkYXRhLWxvZy1pZD1cXFwiI3sgbG9nSWQgfVxcXCIpIERlbGV0ZVxcblwiKTtcbn1cbn07IiwidmFyICQgICAgICAgID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG52YXIgXyAgICAgICAgPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgQmFja2JvbmUgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIGxvZ0l0ZW1UcGwgID0gcmVxdWlyZShcIi4vbG9nSXRlbS5qYWRlXCIpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gQmFja2JvbmUuVmlldy5leHRlbmQoe1xuICAgIHRhZ05hbWUgICA6ICd0cicsXG4gICAgY2xhc3NOYW1lIDogJ2xvZ0l0ZW0nLFxuXG4gICAgZXZlbnRzOiB7XG4gICAgICAgICdjbGljayAuZGVsZXRlJyA6ICdkZWxldGVJdGVtJ1xuICAgIH0sXG5cbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZScsIHRoaXMucmVuZGVyKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnZGVzdHJveScsIHRoaXMucmVtb3ZlKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJGVsLmh0bWwobG9nSXRlbVRwbCh0aGlzLm1vZGVsLnRvSlNPTigpKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBkZWxldGVJdGVtOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0aGlzLm1vZGVsLmRlc3Ryb3koKTtcbiAgICB9XG59KTtcbiIsInZhciBqYWRlID0gcmVxdWlyZShcImphZGUvcnVudGltZVwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHtcbnZhciBqYWRlX2RlYnVnID0gWyBuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApIF07XG50cnkge1xudmFyIGJ1ZiA9IFtdO1xudmFyIGphZGVfbWl4aW5zID0ge307XG52YXIgamFkZV9pbnRlcnA7XG47dmFyIGxvY2Fsc19mb3Jfd2l0aCA9IChsb2NhbHMgfHwge30pOyhmdW5jdGlvbiAobG9nTW9udGgsIG91dFB1dFVybCkge1xudmFyIGphZGVfaW5kZW50ID0gW107XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAwLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9tb250aExvZy9tb250aExvZy5qYWRlXCIgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9tb250aExvZy9tb250aExvZy5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbjxidXR0b24gY2xhc3M9XFxcImdvVG9Ib21lXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCLov5Tlm57pppbpobVcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvYnV0dG9uPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDMsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuPGRpdiBjbGFzcz1cXFwiYWRkTG9nXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA0LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9tb250aExvZy9tb250aExvZy5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbiAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCLor7fovpPlhaXlt6XkvZzlhoXlrrlcXFwiIGF1dG9mb2N1cz1cXFwiYXV0b2ZvY3VzXFxcIiBjbGFzcz1cXFwibG9nSW5wdXRcXFwiLz5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA1LCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9tb250aExvZy9tb250aExvZy5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbiAgPGJ1dHRvbiBjbGFzcz1cXFwiYWRkXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA1LCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCJBZGRcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvYnV0dG9uPlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiXFxuPC9kaXY+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggNywgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbW9udGhMb2cuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG48ZGl2IGNsYXNzPVxcXCJsb2dEZXRhaWxcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDgsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICA8ZGl2IGNsYXNzPVxcXCJsb2dUaXRsZVdyYXBwZXJcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDksIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICAgIDxkaXYgY2xhc3M9XFxcImxvZ1RpdGxlXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCA5LCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCJcIiArIChqYWRlLmVzY2FwZSgoamFkZV9pbnRlcnAgPSAgbG9nTW9udGggKSA9PSBudWxsID8gJycgOiBqYWRlX2ludGVycCkpICsgXCLmgLvnu5NcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvZGl2PlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEwLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9tb250aExvZy9tb250aExvZy5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJvcHRpb25zQnRuXFxcIj5cIik7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCB1bmRlZmluZWQsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUgKSk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxMSwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbW9udGhMb2cuamFkZVwiICkpO1xuYnVmLnB1c2goXCI8YVwiICsgKGphZGUuYXR0cihcImhyZWZcIiwgb3V0UHV0VXJsLCB0cnVlLCBmYWxzZSkpICsgXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGNsYXNzPVxcXCJvdXRwdXRcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDExLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCJPdXRwdXRcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvYT5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvZGl2PlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmJ1Zi5wdXNoKFwiXFxuICA8L2Rpdj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnVuc2hpZnQobmV3IGphZGUuRGVidWdJdGVtKCAxMiwgXCIvVXNlcnMvbGV2YmxhbmMvcHJvamVjdHMvdGFzay1sb2cvYXBwL2NvbXBvbmVudHMvbW9udGhMb2cvbW9udGhMb2cuamFkZVwiICkpO1xuYnVmLnB1c2goXCJcXG4gIDx0YWJsZSBjbGFzcz1cXFwibG9nVGFibGVcXFwiPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDEzLCBcIi9Vc2Vycy9sZXZibGFuYy9wcm9qZWN0cy90YXNrLWxvZy9hcHAvY29tcG9uZW50cy9tb250aExvZy9tb250aExvZy5qYWRlXCIgKSk7XG5idWYucHVzaChcIlxcbiAgICA8dHI+XCIpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggdW5kZWZpbmVkLCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMTQsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICAgICAgPHRoPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDE0LCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCLluo/lj7dcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvdGg+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMTUsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICAgICAgPHRoPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDE1LCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCLlhoXlrrlcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvdGg+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy51bnNoaWZ0KG5ldyBqYWRlLkRlYnVnSXRlbSggMTYsIFwiL1VzZXJzL2xldmJsYW5jL3Byb2plY3RzL3Rhc2stbG9nL2FwcC9jb21wb25lbnRzL21vbnRoTG9nL21vbnRoTG9nLmphZGVcIiApKTtcbmJ1Zi5wdXNoKFwiXFxuICAgICAgPHRoPlwiKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIHVuZGVmaW5lZCwgamFkZV9kZWJ1Z1swXS5maWxlbmFtZSApKTtcbmphZGVfZGVidWcudW5zaGlmdChuZXcgamFkZS5EZWJ1Z0l0ZW0oIDE2LCBqYWRlX2RlYnVnWzBdLmZpbGVuYW1lICkpO1xuYnVmLnB1c2goXCLnirbmgIFcIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIjwvdGg+XCIpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuamFkZV9kZWJ1Zy5zaGlmdCgpO1xuYnVmLnB1c2goXCJcXG4gICAgPC90cj5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIlxcbiAgPC90YWJsZT5cIik7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5qYWRlX2RlYnVnLnNoaWZ0KCk7XG5idWYucHVzaChcIlxcbjwvZGl2PlwiKTtcbmphZGVfZGVidWcuc2hpZnQoKTtcbmphZGVfZGVidWcuc2hpZnQoKTt9LmNhbGwodGhpcyxcImxvZ01vbnRoXCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5sb2dNb250aDp0eXBlb2YgbG9nTW9udGghPT1cInVuZGVmaW5lZFwiP2xvZ01vbnRoOnVuZGVmaW5lZCxcIm91dFB1dFVybFwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGgub3V0UHV0VXJsOnR5cGVvZiBvdXRQdXRVcmwhPT1cInVuZGVmaW5lZFwiP291dFB1dFVybDp1bmRlZmluZWQpKTs7cmV0dXJuIGJ1Zi5qb2luKFwiXCIpO1xufSBjYXRjaCAoZXJyKSB7XG4gIGphZGUucmV0aHJvdyhlcnIsIGphZGVfZGVidWdbMF0uZmlsZW5hbWUsIGphZGVfZGVidWdbMF0ubGluZW5vLCBcImJ1dHRvbi5nb1RvSG9tZSDov5Tlm57pppbpobVcXG5cXG4uYWRkTG9nXFxuICAgIGlucHV0LmxvZ0lucHV0KHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCLor7fovpPlhaXlt6XkvZzlhoXlrrlcXFwiIGF1dG9mb2N1cylcXG4gICAgYnV0dG9uLmFkZCBBZGRcXG4gICAgXFxuLmxvZ0RldGFpbFxcbiAgICAubG9nVGl0bGVXcmFwcGVyXFxuICAgICAgICAubG9nVGl0bGUgI3sgbG9nTW9udGggfeaAu+e7k1xcbiAgICAgICAgLm9wdGlvbnNCdG5cXG4gICAgICAgICAgICBhLm91dHB1dChocmVmPW91dFB1dFVybCwgdGFyZ2V0PSdfYmxhbmsnKSBPdXRwdXRcXG4gICAgdGFibGUubG9nVGFibGVcXG4gICAgICAgIHRyXFxuICAgICAgICAgICAgdGgg5bqP5Y+3XFxuICAgICAgICAgICAgdGgg5YaF5a65XFxuICAgICAgICAgICAgdGgg54q25oCBXFxuICAgICAgICAgICAgICAgICAgICBcXG5cXG4gICAgICAgIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgXFxuICAgIFxcblwiKTtcbn1cbn07IiwidmFyICQgICAgICAgICAgID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG52YXIgXyAgICAgICAgICAgPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgQmFja2JvbmUgICAgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIG1haW5UcGwgICAgID0gcmVxdWlyZShcIi4vbW9udGhMb2cuamFkZVwiKTtcbnZhciBMb2dJdGVtVmlldyA9IHJlcXVpcmUoXCIuL2xvZ0l0ZW1WaWV3XCIpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gQmFja2JvbmUuVmlldy5leHRlbmQoe1xuICAgIGNsYXNzTmFtZSA6ICdtb250aExvZycsXG5cbiAgICBldmVudHM6IHtcbiAgICAgICAgJ2NsaWNrIC5nb1RvSG9tZSc6ICdnb1RvSG9tZScsXG4gICAgICAgICdjbGljayAuYWRkJyAgICAgOiAnY3JlYXRlTG9nSXRlbScsXG4gICAgICAgICdjbGljayAub3V0cHV0JyAgOiAnb3V0cHV0TG9nJ1xuICAgIH0sXG5cbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiAoaW5pdERhdGEpIHtcbiAgICAgICAgdGhpcy5sb2dNb250aCAgPSBpbml0RGF0YS5sb2dNb250aDtcbiAgICAgICAgdGhpcy51c2VyTmFtZSAgPSBpbml0RGF0YS51c2VyTmFtZTtcbiAgICAgICAgdGhpcy5tb250aExvZyA9IGluaXREYXRhLmNvbGxlY3Rpb247XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgdGhpcy4kbG9nTGlzdCA9IHRoaXMuJGVsLmZpbmQoJy5sb2dUYWJsZSB0Ym9keScpO1xuXG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb250aExvZywgJ2FkZCcsIHRoaXMuYWRkTG9nSXRlbVZpZXcpO1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9udGhMb2csICdyZXNldCcsIHRoaXMubGlzdE1vbnRoTG9nKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vbnRoTG9nLCAnZGVzdHJveScsIHRoaXMuZGVsZXRlTG9nKTtcblxuICAgICAgICB0aGlzLm1vbnRoTG9nLmZldGNoKHtcbiAgICAgICAgICAgIHJlc2V0OiB0cnVlLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHVzZXJOYW1lIDogdGhpcy51c2VyTmFtZSxcbiAgICAgICAgICAgICAgICBsb2dNb250aCA6IHRoaXMubG9nTW9udGgsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHVzZXJOYW1lUGFyYW0gPSAndXNlck5hbWU9JyArIHRoaXMudXNlck5hbWU7XG4gICAgICAgIHZhciBsb2dNb250aFBhcmFtID0gJ2xvZ01vbnRoPScgKyB0aGlzLmxvZ01vbnRoO1xuXG4gICAgICAgIG91dFB1dFVybEFyciA9IG5ldyBBcnJheSh1c2VyTmFtZVBhcmFtLCBsb2dNb250aFBhcmFtKTtcblxuICAgICAgICB0aGlzLiRlbC5odG1sKG1haW5UcGwoe1xuICAgICAgICAgICAgbG9nTW9udGggOiB0aGlzLmxvZ01vbnRoLFxuICAgICAgICAgICAgb3V0UHV0VXJsOiAnL291dHB1dC10YXNrbG9nPycgKyBvdXRQdXRVcmxBcnIuam9pbignJicpLFxuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBnb1RvSG9tZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGhvbWVSb3V0ZSA9IHRoaXMudXNlck5hbWU7XG4gICAgICAgIEJhY2tib25lLmhpc3RvcnkubmF2aWdhdGUoaG9tZVJvdXRlLCB7IHRyaWdnZXIgOiB0cnVlIH0pO1xuICAgIH0sXG5cbiAgICBjcmVhdGVMb2dJdGVtOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgbG9nRGF0YSA9IHtcbiAgICAgICAgICAgIGxvZ0lkICAgIDogdGhpcy5tb250aExvZy5uZXh0TG9nSWQoKSxcbiAgICAgICAgICAgIHVzZXJOYW1lIDogdGhpcy51c2VyTmFtZSxcbiAgICAgICAgICAgIGxvZ01vbnRoIDogdGhpcy5sb2dNb250aCxcbiAgICAgICAgICAgIGNvbnRlbnQgIDogdGhpcy4kZWwuZmluZCgnLmxvZ0lucHV0JykudmFsKClcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLiRlbC5maW5kKCcubG9nSW5wdXQnKS52YWwoJycpLmZvY3VzKCk7XG4gICAgICAgIHRoaXMubW9udGhMb2cuY3JlYXRlKGxvZ0RhdGEpO1xuICAgIH0sXG5cbiAgICBhZGRMb2dJdGVtVmlldzogZnVuY3Rpb24gKGxvZ01vZGVsKSB7XG4gICAgICAgIHZhciBsb2dJdGVtVmlldyA9IG5ldyBMb2dJdGVtVmlldyh7IG1vZGVsOiBsb2dNb2RlbCB9KTtcbiAgICAgICAgdGhpcy4kbG9nTGlzdC5hcHBlbmQobG9nSXRlbVZpZXcucmVuZGVyKCkuZWwpO1xuICAgIH0sXG5cbiAgICBsaXN0TW9udGhMb2c6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5tb250aExvZy5lYWNoKHRoaXMuYWRkTG9nSXRlbVZpZXcsIHRoaXMpO1xuICAgIH0sXG5cbiAgICBkZWxldGVMb2c6IGZ1bmN0aW9uIChsb2dNb2RlbCkge1xuICAgICAgICBjb25zb2xlLmRpcignYXNhc2FzJyk7XG4gICAgICAgIGNvbnNvbGUuZGlyKGxvZ01vZGVsKTtcbiAgICB9XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG52YXIgQmFja2JvbmUgPSByZXF1aXJlKCdiYWNrYm9uZScpO1xudmFyIHRhc2tMb2cgPSB7fTtcblxuXG50YXNrTG9nLm1vZGVsID0gQmFja2JvbmUuTW9kZWwuZXh0ZW5kKHtcbiAgICBkZWZhdWx0czoge1xuICAgICAgICBsb2dJZCAgICA6IDAsXG4gICAgICAgIHVzZXJOYW1lIDogXCJcIixcbiAgICAgICAgbG9nTW9udGggOiBcIlwiLFxuICAgICAgICBjb250ZW50ICA6IFwiXCIsXG4gICAgICAgIHN0YXR1cyAgIDogXCLlrozmiJBcIlxuICAgIH0sXG4gICAgdmFsaWRhdGU6IGZ1bmN0aW9uIChhdHRyLCBvcHRzKSB7XG4gICAgICAgIC8vIGJvZHkuLi5cbiAgICB9XG59KTtcblxudGFza0xvZy5jb2xsZWN0aW9uID0gQmFja2JvbmUuQ29sbGVjdGlvbi5leHRlbmQoe1xuICAgIG1vZGVsOiB0YXNrTG9nLm1vZGVsLFxuXG4gICAgdXJsIDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJy90YXNrLWxvZyc7XG4gICAgfSxcblxuICAgIG5leHRMb2dJZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGggPyB0aGlzLmxhc3QoKS5nZXQoJ2xvZ0lkJykgKyAxIDogMTtcbiAgICB9LFxuXG4gICAgY29tcGFyYXRvcjogJ2xvZ0lkJ1xuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB0YXNrTG9nO1xuIiwidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbnZhciBCYWNrYm9uZSA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG52YXIgdXNlciA9IHt9O1xuXG5cbnVzZXIubW9kZWwgPSBCYWNrYm9uZS5Nb2RlbC5leHRlbmQoe1xuICAgIHZhbGlkYXRlOiBmdW5jdGlvbiAoYXR0cnMsIG9wdHMpIHtcbiAgICAgICAgaWYoYXR0cnMudXNlck5hbWUgJiYgdHlwZW9mIGF0dHJzLnVzZXJOYW1lICE9PSAnc3RyaW5nJyl7XG4gICAgICAgICAgICByZXR1cm4gJ3ZhbHVlIG9mIHVzZXJOYW1lIHNob3VsZCBiZSBhIFN0cmluZyc7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxudXNlci5jb2xsZWN0aW9uID0gQmFja2JvbmUuQ29sbGVjdGlvbi5leHRlbmQoe1xuICAgIG1vZGVsOiB1c2VyLm1vZGVsLFxuICAgIHVybCAgOiAnL3VzZXInXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB1c2VyO1xuIiwidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbnZhciBCYWNrYm9uZSA9IHJlcXVpcmUoJ2JhY2tib25lJyk7XG52YXIgdXNlckxvZ0xpc3QgPSB7fTtcblxudXNlckxvZ0xpc3QubW9kZWwgPSBCYWNrYm9uZS5Nb2RlbC5leHRlbmQoe1xuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGxvZ01vbnRoOiBcIlwiXG4gICAgfSxcbiAgICB2YWxpZGF0ZTogZnVuY3Rpb24gKGF0dHIsIG9wdHMpIHtcbiAgICAgICAgLy8gYm9keS4uLlxuICAgIH1cbn0pO1xuXG51c2VyTG9nTGlzdC5jb2xsZWN0aW9uID0gQmFja2JvbmUuQ29sbGVjdGlvbi5leHRlbmQoe1xuICAgIG1vZGVsOiB1c2VyTG9nTGlzdC5tb2RlbCxcbiAgICB1cmwgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJy91c2VyLWxvZ2xpc3QnO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVzZXJMb2dMaXN0O1xuIixudWxsLCIoZnVuY3Rpb24oZil7aWYodHlwZW9mIGV4cG9ydHM9PT1cIm9iamVjdFwiJiZ0eXBlb2YgbW9kdWxlIT09XCJ1bmRlZmluZWRcIil7bW9kdWxlLmV4cG9ydHM9ZigpfWVsc2UgaWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtdLGYpfWVsc2V7dmFyIGc7aWYodHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCIpe2c9d2luZG93fWVsc2UgaWYodHlwZW9mIGdsb2JhbCE9PVwidW5kZWZpbmVkXCIpe2c9Z2xvYmFsfWVsc2UgaWYodHlwZW9mIHNlbGYhPT1cInVuZGVmaW5lZFwiKXtnPXNlbGZ9ZWxzZXtnPXRoaXN9Zy5qYWRlID0gZigpfX0pKGZ1bmN0aW9uKCl7dmFyIGRlZmluZSxtb2R1bGUsZXhwb3J0cztyZXR1cm4gKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1lcmdlIHR3byBhdHRyaWJ1dGUgb2JqZWN0cyBnaXZpbmcgcHJlY2VkZW5jZVxuICogdG8gdmFsdWVzIGluIG9iamVjdCBgYmAuIENsYXNzZXMgYXJlIHNwZWNpYWwtY2FzZWRcbiAqIGFsbG93aW5nIGZvciBhcnJheXMgYW5kIG1lcmdpbmcvam9pbmluZyBhcHByb3ByaWF0ZWx5XG4gKiByZXN1bHRpbmcgaW4gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBiXG4gKiBAcmV0dXJuIHtPYmplY3R9IGFcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMubWVyZ2UgPSBmdW5jdGlvbiBtZXJnZShhLCBiKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgdmFyIGF0dHJzID0gYVswXTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGF0dHJzID0gbWVyZ2UoYXR0cnMsIGFbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gYXR0cnM7XG4gIH1cbiAgdmFyIGFjID0gYVsnY2xhc3MnXTtcbiAgdmFyIGJjID0gYlsnY2xhc3MnXTtcblxuICBpZiAoYWMgfHwgYmMpIHtcbiAgICBhYyA9IGFjIHx8IFtdO1xuICAgIGJjID0gYmMgfHwgW107XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFjKSkgYWMgPSBbYWNdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShiYykpIGJjID0gW2JjXTtcbiAgICBhWydjbGFzcyddID0gYWMuY29uY2F0KGJjKS5maWx0ZXIobnVsbHMpO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICBpZiAoa2V5ICE9ICdjbGFzcycpIHtcbiAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYTtcbn07XG5cbi8qKlxuICogRmlsdGVyIG51bGwgYHZhbGBzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbnVsbHModmFsKSB7XG4gIHJldHVybiB2YWwgIT0gbnVsbCAmJiB2YWwgIT09ICcnO1xufVxuXG4vKipcbiAqIGpvaW4gYXJyYXkgYXMgY2xhc3Nlcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmpvaW5DbGFzc2VzID0gam9pbkNsYXNzZXM7XG5mdW5jdGlvbiBqb2luQ2xhc3Nlcyh2YWwpIHtcbiAgcmV0dXJuIChBcnJheS5pc0FycmF5KHZhbCkgPyB2YWwubWFwKGpvaW5DbGFzc2VzKSA6XG4gICAgKHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JykgPyBPYmplY3Qua2V5cyh2YWwpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7IHJldHVybiB2YWxba2V5XTsgfSkgOlxuICAgIFt2YWxdKS5maWx0ZXIobnVsbHMpLmpvaW4oJyAnKTtcbn1cblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGNsYXNzZXMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gY2xhc3Nlc1xuICogQHBhcmFtIHtBcnJheS48Qm9vbGVhbj59IGVzY2FwZWRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5jbHMgPSBmdW5jdGlvbiBjbHMoY2xhc3NlcywgZXNjYXBlZCkge1xuICB2YXIgYnVmID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlc2NhcGVkICYmIGVzY2FwZWRbaV0pIHtcbiAgICAgIGJ1Zi5wdXNoKGV4cG9ydHMuZXNjYXBlKGpvaW5DbGFzc2VzKFtjbGFzc2VzW2ldXSkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnVmLnB1c2goam9pbkNsYXNzZXMoY2xhc3Nlc1tpXSkpO1xuICAgIH1cbiAgfVxuICB2YXIgdGV4dCA9IGpvaW5DbGFzc2VzKGJ1Zik7XG4gIGlmICh0ZXh0Lmxlbmd0aCkge1xuICAgIHJldHVybiAnIGNsYXNzPVwiJyArIHRleHQgKyAnXCInO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJztcbiAgfVxufTtcblxuXG5leHBvcnRzLnN0eWxlID0gZnVuY3Rpb24gKHZhbCkge1xuICBpZiAodmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbCkubWFwKGZ1bmN0aW9uIChzdHlsZSkge1xuICAgICAgcmV0dXJuIHN0eWxlICsgJzonICsgdmFsW3N0eWxlXTtcbiAgICB9KS5qb2luKCc7Jyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxufTtcbi8qKlxuICogUmVuZGVyIHRoZSBnaXZlbiBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbFxuICogQHBhcmFtIHtCb29sZWFufSBlc2NhcGVkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHRlcnNlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuYXR0ciA9IGZ1bmN0aW9uIGF0dHIoa2V5LCB2YWwsIGVzY2FwZWQsIHRlcnNlKSB7XG4gIGlmIChrZXkgPT09ICdzdHlsZScpIHtcbiAgICB2YWwgPSBleHBvcnRzLnN0eWxlKHZhbCk7XG4gIH1cbiAgaWYgKCdib29sZWFuJyA9PSB0eXBlb2YgdmFsIHx8IG51bGwgPT0gdmFsKSB7XG4gICAgaWYgKHZhbCkge1xuICAgICAgcmV0dXJuICcgJyArICh0ZXJzZSA/IGtleSA6IGtleSArICc9XCInICsga2V5ICsgJ1wiJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH0gZWxzZSBpZiAoMCA9PSBrZXkuaW5kZXhPZignZGF0YScpICYmICdzdHJpbmcnICE9IHR5cGVvZiB2YWwpIHtcbiAgICBpZiAoSlNPTi5zdHJpbmdpZnkodmFsKS5pbmRleE9mKCcmJykgIT09IC0xKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1NpbmNlIEphZGUgMi4wLjAsIGFtcGVyc2FuZHMgKGAmYCkgaW4gZGF0YSBhdHRyaWJ1dGVzICcgK1xuICAgICAgICAgICAgICAgICAgICd3aWxsIGJlIGVzY2FwZWQgdG8gYCZhbXA7YCcpO1xuICAgIH07XG4gICAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsLnRvSVNPU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0phZGUgd2lsbCBlbGltaW5hdGUgdGhlIGRvdWJsZSBxdW90ZXMgYXJvdW5kIGRhdGVzIGluICcgK1xuICAgICAgICAgICAgICAgICAgICdJU08gZm9ybSBhZnRlciAyLjAuMCcpO1xuICAgIH1cbiAgICByZXR1cm4gJyAnICsga2V5ICsgXCI9J1wiICsgSlNPTi5zdHJpbmdpZnkodmFsKS5yZXBsYWNlKC8nL2csICcmYXBvczsnKSArIFwiJ1wiO1xuICB9IGVsc2UgaWYgKGVzY2FwZWQpIHtcbiAgICBpZiAodmFsICYmIHR5cGVvZiB2YWwudG9JU09TdHJpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignSmFkZSB3aWxsIHN0cmluZ2lmeSBkYXRlcyBpbiBJU08gZm9ybSBhZnRlciAyLjAuMCcpO1xuICAgIH1cbiAgICByZXR1cm4gJyAnICsga2V5ICsgJz1cIicgKyBleHBvcnRzLmVzY2FwZSh2YWwpICsgJ1wiJztcbiAgfSBlbHNlIHtcbiAgICBpZiAodmFsICYmIHR5cGVvZiB2YWwudG9JU09TdHJpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignSmFkZSB3aWxsIHN0cmluZ2lmeSBkYXRlcyBpbiBJU08gZm9ybSBhZnRlciAyLjAuMCcpO1xuICAgIH1cbiAgICByZXR1cm4gJyAnICsga2V5ICsgJz1cIicgKyB2YWwgKyAnXCInO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gYXR0cmlidXRlcyBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtPYmplY3R9IGVzY2FwZWRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRycyA9IGZ1bmN0aW9uIGF0dHJzKG9iaiwgdGVyc2Upe1xuICB2YXIgYnVmID0gW107XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXG4gIGlmIChrZXlzLmxlbmd0aCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV1cbiAgICAgICAgLCB2YWwgPSBvYmpba2V5XTtcblxuICAgICAgaWYgKCdjbGFzcycgPT0ga2V5KSB7XG4gICAgICAgIGlmICh2YWwgPSBqb2luQ2xhc3Nlcyh2YWwpKSB7XG4gICAgICAgICAgYnVmLnB1c2goJyAnICsga2V5ICsgJz1cIicgKyB2YWwgKyAnXCInKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnVmLnB1c2goZXhwb3J0cy5hdHRyKGtleSwgdmFsLCBmYWxzZSwgdGVyc2UpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmLmpvaW4oJycpO1xufTtcblxuLyoqXG4gKiBFc2NhcGUgdGhlIGdpdmVuIHN0cmluZyBvZiBgaHRtbGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciBqYWRlX2VuY29kZV9odG1sX3J1bGVzID0ge1xuICAnJic6ICcmYW1wOycsXG4gICc8JzogJyZsdDsnLFxuICAnPic6ICcmZ3Q7JyxcbiAgJ1wiJzogJyZxdW90Oydcbn07XG52YXIgamFkZV9tYXRjaF9odG1sID0gL1smPD5cIl0vZztcblxuZnVuY3Rpb24gamFkZV9lbmNvZGVfY2hhcihjKSB7XG4gIHJldHVybiBqYWRlX2VuY29kZV9odG1sX3J1bGVzW2NdIHx8IGM7XG59XG5cbmV4cG9ydHMuZXNjYXBlID0gamFkZV9lc2NhcGU7XG5mdW5jdGlvbiBqYWRlX2VzY2FwZShodG1sKXtcbiAgdmFyIHJlc3VsdCA9IFN0cmluZyhodG1sKS5yZXBsYWNlKGphZGVfbWF0Y2hfaHRtbCwgamFkZV9lbmNvZGVfY2hhcik7XG4gIGlmIChyZXN1bHQgPT09ICcnICsgaHRtbCkgcmV0dXJuIGh0bWw7XG4gIGVsc2UgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogUmUtdGhyb3cgdGhlIGdpdmVuIGBlcnJgIGluIGNvbnRleHQgdG8gdGhlXG4gKiB0aGUgamFkZSBpbiBgZmlsZW5hbWVgIGF0IHRoZSBnaXZlbiBgbGluZW5vYC5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGxpbmVub1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5yZXRocm93ID0gZnVuY3Rpb24gcmV0aHJvdyhlcnIsIGZpbGVuYW1lLCBsaW5lbm8sIHN0cil7XG4gIGlmICghKGVyciBpbnN0YW5jZW9mIEVycm9yKSkgdGhyb3cgZXJyO1xuICBpZiAoKHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgfHwgIWZpbGVuYW1lKSAmJiAhc3RyKSB7XG4gICAgZXJyLm1lc3NhZ2UgKz0gJyBvbiBsaW5lICcgKyBsaW5lbm87XG4gICAgdGhyb3cgZXJyO1xuICB9XG4gIHRyeSB7XG4gICAgc3RyID0gc3RyIHx8IHJlcXVpcmUoJ2ZzJykucmVhZEZpbGVTeW5jKGZpbGVuYW1lLCAndXRmOCcpXG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgcmV0aHJvdyhlcnIsIG51bGwsIGxpbmVubylcbiAgfVxuICB2YXIgY29udGV4dCA9IDNcbiAgICAsIGxpbmVzID0gc3RyLnNwbGl0KCdcXG4nKVxuICAgICwgc3RhcnQgPSBNYXRoLm1heChsaW5lbm8gLSBjb250ZXh0LCAwKVxuICAgICwgZW5kID0gTWF0aC5taW4obGluZXMubGVuZ3RoLCBsaW5lbm8gKyBjb250ZXh0KTtcblxuICAvLyBFcnJvciBjb250ZXh0XG4gIHZhciBjb250ZXh0ID0gbGluZXMuc2xpY2Uoc3RhcnQsIGVuZCkubWFwKGZ1bmN0aW9uKGxpbmUsIGkpe1xuICAgIHZhciBjdXJyID0gaSArIHN0YXJ0ICsgMTtcbiAgICByZXR1cm4gKGN1cnIgPT0gbGluZW5vID8gJyAgPiAnIDogJyAgICAnKVxuICAgICAgKyBjdXJyXG4gICAgICArICd8ICdcbiAgICAgICsgbGluZTtcbiAgfSkuam9pbignXFxuJyk7XG5cbiAgLy8gQWx0ZXIgZXhjZXB0aW9uIG1lc3NhZ2VcbiAgZXJyLnBhdGggPSBmaWxlbmFtZTtcbiAgZXJyLm1lc3NhZ2UgPSAoZmlsZW5hbWUgfHwgJ0phZGUnKSArICc6JyArIGxpbmVub1xuICAgICsgJ1xcbicgKyBjb250ZXh0ICsgJ1xcblxcbicgKyBlcnIubWVzc2FnZTtcbiAgdGhyb3cgZXJyO1xufTtcblxuZXhwb3J0cy5EZWJ1Z0l0ZW0gPSBmdW5jdGlvbiBEZWJ1Z0l0ZW0obGluZW5vLCBmaWxlbmFtZSkge1xuICB0aGlzLmxpbmVubyA9IGxpbmVubztcbiAgdGhpcy5maWxlbmFtZSA9IGZpbGVuYW1lO1xufVxuXG59LHtcImZzXCI6Mn1dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXG59LHt9XX0se30sWzFdKSgxKVxufSk7Il19
