!function e(t,n,s){function o(i,r){if(!n[i]){if(!t[i]){var u="function"==typeof require&&require;if(!r&&u)return u(i,!0);if(a)return a(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var h=n[i]={exports:{}};t[i][0].call(h.exports,function(e){var n=t[i][1][e];return o(n?n:e)},h,h.exports,e,t,n,s)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<s.length;i++)o(s[i]);return o}({1:[function(e,t,n){var s=e("backbone"),o=e("./router");new o;s.history.start({pushState:!0})},{"./router":2,backbone:"backbone"}],2:[function(e,t,n){var s=e("jquery"),o=e("backbone");o.$=s;var a=e("../../components/home/homeView"),i=e("../../components/dashboard/dashboardView"),r=e("../../components/monthLog/monthLogView"),u=e("../../shared/collections/user").collection,l=e("../../shared/collections/taskLog").collection,h=e("../../shared/collections/userLogList").collection,c=new u,f=new l,p=new h;t.exports=o.Router.extend({routes:{"":"home",":userName":"userDashboard",":userName/:logMonth":"userMonthLog"},home:function(){console.dir("in home view");var e=new a({collection:c});s("#main").empty().append(e.el)},userDashboard:function(e){console.dir("in "+e+"'s dashboard");var t={collection:p,userName:e},n=new i(t);s("#main").empty().append(n.el)},userMonthLog:function(e,t){console.dir("in "+e+"'s "+t+" log");var n={collection:f,userName:e,logMonth:t},o=new r(n);s("#main").empty().append(o.el)}})},{"../../components/dashboard/dashboardView":4,"../../components/home/homeView":9,"../../components/monthLog/monthLogView":15,"../../shared/collections/taskLog":16,"../../shared/collections/user":17,"../../shared/collections/userLogList":18,backbone:"backbone",jquery:"jquery"}],3:[function(e,t,n){var s=e("jade/runtime");t.exports=function(e){var t=[new s.DebugItem(1,"/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade")];try{var n,o=[],a=e||{};return function(e,a){t.unshift(new s.DebugItem(0,"/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade")),t.unshift(new s.DebugItem(1,"/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade")),o.push('\n<div class="header">'),t.unshift(new s.DebugItem(void 0,t[0].filename)),t.unshift(new s.DebugItem(1,t[0].filename)),o.push(""+s.escape(null==(n=a)?"":n)+"'s Dashboard"),t.shift(),t.shift(),o.push("</div>"),t.shift(),t.unshift(new s.DebugItem(3,"/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade")),o.push('\n<div class="dashboardContent">'),t.unshift(new s.DebugItem(void 0,t[0].filename)),t.unshift(new s.DebugItem(4,"/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade")),o.push('\n  <div class="createMonthLog">'),t.unshift(new s.DebugItem(void 0,t[0].filename)),t.unshift(new s.DebugItem(4,t[0].filename)),o.push(" "),t.shift(),t.unshift(new s.DebugItem(5,"/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade")),o.push('<a class="createNewLog">'),t.unshift(new s.DebugItem(void 0,t[0].filename)),t.unshift(new s.DebugItem(5,t[0].filename)),o.push("新增Log"),t.shift(),t.shift(),o.push("</a>"),t.shift(),t.unshift(new s.DebugItem(6,"/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade")),o.push('\n    <div class="monthInput hidden">'),t.unshift(new s.DebugItem(void 0,t[0].filename)),t.unshift(new s.DebugItem(7,"/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade")),o.push('\n      <div class="inputBox">'),t.unshift(new s.DebugItem(void 0,t[0].filename)),t.unshift(new s.DebugItem(8,"/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade")),o.push('\n        <div class="currentYear">'),t.unshift(new s.DebugItem(void 0,t[0].filename)),t.unshift(new s.DebugItem(8,t[0].filename)),o.push(""+s.escape(null==(n=e)?"":n)+"年"),t.shift(),t.shift(),o.push("</div>"),t.shift(),t.unshift(new s.DebugItem(9,"/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade")),o.push('\n        <input type="text" placeholder="请输入月份"/>'),t.shift(),t.shift(),o.push("\n      </div>"),t.shift(),t.unshift(new s.DebugItem(10,"/Users/levblanc/projects/task-log/app/components/dashboard/createLog.jade")),o.push('<a class="cancelBtn">'),t.unshift(new s.DebugItem(void 0,t[0].filename)),t.unshift(new s.DebugItem(10,t[0].filename)),o.push("Cancel"),t.shift(),t.shift(),o.push("</a>"),t.shift(),t.shift(),o.push("\n    </div>"),t.shift(),t.shift(),o.push("\n  </div>"),t.shift(),t.shift(),o.push("\n</div>"),t.shift(),t.shift()}.call(this,"currentYear"in a?a.currentYear:"undefined"!=typeof currentYear?currentYear:void 0,"userName"in a?a.userName:"undefined"!=typeof userName?userName:void 0),o.join("")}catch(i){s.rethrow(i,t[0].filename,t[0].lineno,'.header #{ userName }\'s Dashboard\n\n.dashboardContent\n    .createMonthLog \n        a.createNewLog 新增Log\n        .monthInput.hidden\n            .inputBox\n                .currentYear #{ currentYear }年\n                input(type="text" placeholder="请输入月份")\n            a.cancelBtn Cancel\n')}}},{"jade/runtime":20}],4:[function(e,t,n){var s=(e("jquery"),e("underscore")),o=e("backbone"),a=e("./createLog.jade"),i=e("./userLogListView"),r=null,u=null,l={};t.exports=o.View.extend({className:"dashboard",events:{"click .createNewLog":"showMonthInput","click .cancelBtn":"hideMonthInput",keypress:"createLog"},initialize:function(e){r=e.userName,this.userLogList=e.collection,this.userLogList.fetch({data:{userName:r},reset:!0}),this.listenTo(this.userLogList,"add",this.goToMonthLog),this.listenTo(this.userLogList,"reset",this.listLogs),this.render()},render:function(){return l.userName=r,l.currentYear=u=(new Date).getFullYear().toString(),this.$el.html(a(l)),this},showMonthInput:function(e){this.$el.find(".createNewLog").toggleClass("showMonthInput"),this.$el.find(".monthInput").slideDown("fast")},hideMonthInput:function(e){this.$el.find(".monthInput").slideUp("fast"),this.$el.find(".createNewLog").toggleClass("showMonthInput")},createLog:function(e){if(13===e.which){var t=parseInt(this.$el.find("input").val(),10),n=[u],s={userName:r};!isNaN(t)&&t>0&&13>t?(t=10>t?"0"+t:t.toString(),n.push(t),s.logMonth=n.join("-"),this.userLogList.create(s)):(alert("请输入1到12以内的数字"),this.$el.find("input").val("").focus())}},listLogs:function(e){var t=new i({collection:e,userName:r});this.$el.find(".dashboardContent").append(t.render().el)},goToMonthLog:function(e){var t=s.values(e.toJSON());o.history.navigate(t.join("/"),{trigger:!0})}})},{"./createLog.jade":3,"./userLogListView":6,backbone:"backbone",jquery:"jquery",underscore:"underscore"}],5:[function(e,t,n){var s=e("jade/runtime");t.exports=function(e){var t=[new s.DebugItem(1,"/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade")];try{var n,o=[],a=e||{};return function(e,a){t.unshift(new s.DebugItem(0,"/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade")),t.unshift(new s.DebugItem(1,"/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade")),o.push('\n<div class="title">'),t.unshift(new s.DebugItem(e,t[0].filename)),t.unshift(new s.DebugItem(1,t[0].filename)),o.push("查看过往的Log"),t.shift(),t.shift(),o.push("</div>"),t.shift(),t.unshift(new s.DebugItem(2,"/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade")),a.length?(t.unshift(new s.DebugItem(3,"/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade")),t.unshift(new s.DebugItem(3,"/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade")),o.push('\n<ul class="logList">'),t.unshift(new s.DebugItem(e,t[0].filename)),t.unshift(new s.DebugItem(4,"/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade")),function(){var i=a;if("number"==typeof i.length)for(var r=0,u=i.length;u>r;r++){var l=i[r];t.unshift(new s.DebugItem(4,"/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade")),t.unshift(new s.DebugItem(5,"/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade")),o.push('\n  <li class="listItem">'),t.unshift(new s.DebugItem(e,t[0].filename)),t.unshift(new s.DebugItem(5,t[0].filename)),o.push(" "),t.shift(),t.unshift(new s.DebugItem(6,"/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade")),o.push('<span class="logMonth">'),t.unshift(new s.DebugItem(e,t[0].filename)),t.unshift(new s.DebugItem(6,t[0].filename)),o.push(""+s.escape(null==(n=l)?"":n)),t.shift(),t.shift(),o.push("</span>"),t.shift(),t.unshift(new s.DebugItem(7,"/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade")),o.push("<span>"),t.unshift(new s.DebugItem(e,t[0].filename)),t.unshift(new s.DebugItem(7,t[0].filename)),o.push("总结"),t.shift(),t.shift(),o.push("</span>"),t.shift(),t.shift(),o.push("</li>"),t.shift(),t.shift()}else{var u=0;for(var r in i){u++;var l=i[r];t.unshift(new s.DebugItem(4,"/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade")),t.unshift(new s.DebugItem(5,"/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade")),o.push('\n  <li class="listItem">'),t.unshift(new s.DebugItem(e,t[0].filename)),t.unshift(new s.DebugItem(5,t[0].filename)),o.push(" "),t.shift(),t.unshift(new s.DebugItem(6,"/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade")),o.push('<span class="logMonth">'),t.unshift(new s.DebugItem(e,t[0].filename)),t.unshift(new s.DebugItem(6,t[0].filename)),o.push(""+s.escape(null==(n=l)?"":n)),t.shift(),t.shift(),o.push("</span>"),t.shift(),t.unshift(new s.DebugItem(7,"/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade")),o.push("<span>"),t.unshift(new s.DebugItem(e,t[0].filename)),t.unshift(new s.DebugItem(7,t[0].filename)),o.push("总结"),t.shift(),t.shift(),o.push("</span>"),t.shift(),t.shift(),o.push("</li>"),t.shift(),t.shift()}}}.call(this),t.shift(),t.shift(),o.push("\n</ul>"),t.shift(),t.shift()):(t.unshift(new s.DebugItem(9,"/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade")),t.unshift(new s.DebugItem(9,"/Users/levblanc/projects/task-log/app/components/dashboard/userLogList.jade")),o.push('\n<div class="noLog">'),t.unshift(new s.DebugItem(e,t[0].filename)),t.unshift(new s.DebugItem(9,t[0].filename)),o.push("还没有log哦，现在开始添加吧"),t.shift(),t.shift(),o.push("</div>"),t.shift(),t.shift()),t.shift(),t.shift()}.call(this,"undefined"in a?a.undefined:void 0,"userLogList"in a?a.userLogList:"undefined"!=typeof userLogList?userLogList:void 0),o.join("")}catch(i){s.rethrow(i,t[0].filename,t[0].lineno,".title 查看过往的Log\nif userLogList.length\n    ul.logList\n     each log in userLogList \n        li.listItem \n            span.logMonth #{ log }\n            span 总结\nelse\n    .noLog 还没有log哦，现在开始添加吧\n")}}},{"jade/runtime":20}],6:[function(e,t,n){var s=e("jquery"),o=e("underscore"),a=e("backbone"),i=e("./userLogList.jade");t.exports=a.View.extend({className:"userLogList",events:{"click .listItem":"goToMonthLog"},initialize:function(e){this.userName=e.userName},render:function(){var e=o.map(this.collection.models,function(e,t){return e.toJSON().logMonth});return this.$el.html(i({userLogList:e})),this},goToMonthLog:function(e){var t=s(e.currentTarget).find(".logMonth").text(),n=[this.userName,t];a.history.navigate(n.join("/"),{trigger:!0})}})},{"./userLogList.jade":5,backbone:"backbone",jquery:"jquery",underscore:"underscore"}],7:[function(e,t,n){var s=e("jade/runtime");t.exports=function(e){var t=[new s.DebugItem(1,"/Users/levblanc/projects/task-log/app/components/home/createUser.jade")];try{var n=[];return t.unshift(new s.DebugItem(0,"/Users/levblanc/projects/task-log/app/components/home/createUser.jade")),t.unshift(new s.DebugItem(1,"/Users/levblanc/projects/task-log/app/components/home/createUser.jade")),n.push('\n<h2 class="salutation">'),t.unshift(new s.DebugItem(void 0,t[0].filename)),t.unshift(new s.DebugItem(1,t[0].filename)),n.push("Welcome Dear Master!"),t.shift(),t.shift(),n.push("</h2>"),t.shift(),t.unshift(new s.DebugItem(2,"/Users/levblanc/projects/task-log/app/components/home/createUser.jade")),n.push('\n<div class="nameInput">'),t.unshift(new s.DebugItem(void 0,t[0].filename)),t.unshift(new s.DebugItem(3,"/Users/levblanc/projects/task-log/app/components/home/createUser.jade")),n.push('\n  <input type="text" placeholder="您的英文名或名字拼音"/>'),t.shift(),t.shift(),n.push("\n</div>"),t.shift(),t.shift(),n.join("")}catch(o){s.rethrow(o,t[0].filename,t[0].lineno,'h2.salutation Welcome Dear Master!\n.nameInput\n    input(type="text" placeholder="您的英文名或名字拼音") \n')}}},{"jade/runtime":20}],8:[function(e,t,n){var s=e("backbone"),o=e("./createUser.jade");t.exports=s.View.extend({className:"createUser",render:function(){return this.$el.html(o()),this}})},{"./createUser.jade":7,backbone:"backbone"}],9:[function(e,t,n){var s=(e("jquery"),e("backbone")),o=e("./createUserView"),a=e("./multiUserView");t.exports=s.View.extend({className:"welcomePanel",events:{keypress:"confirmName"},initialize:function(){this.users=this.collection,this.users.fetch({reset:!0}),this.listenTo(this.users,"add",this.goToUserDashboard),this.listenTo(this.users,"reset",this.showWelcomePanel)},confirmName:function(e){var t=this.$el.find("input").val();if(13===e.which)if(t){var n={userName:t};this.collection.create(n)}else alert("请先输入姓名")},goToUserDashboard:function(e){var t=e.toJSON().userName;s.history.navigate(t,{trigger:!0})},showWelcomePanel:function(e){var t=e.models;if(t.length){if(1===t.length){var n=t[0].toJSON().userName;s.history.navigate(n,{trigger:!0})}if(t.length>1){var i=new a({collection:t});this.$el.html(i.render().el)}}else{var r=new o;this.$el.html(r.render().el)}}})},{"./createUserView":8,"./multiUserView":11,backbone:"backbone",jquery:"jquery"}],10:[function(e,t,n){var s=e("jade/runtime");t.exports=function(e){var t=[new s.DebugItem(1,"/Users/levblanc/projects/task-log/app/components/home/multiUser.jade")];try{var n,o=[],a=e||{};return function(e,a){t.unshift(new s.DebugItem(0,"/Users/levblanc/projects/task-log/app/components/home/multiUser.jade")),t.unshift(new s.DebugItem(1,"/Users/levblanc/projects/task-log/app/components/home/multiUser.jade")),o.push('\n<h3 class="note">'),t.unshift(new s.DebugItem(e,t[0].filename)),t.unshift(new s.DebugItem(1,t[0].filename)),o.push("请选择需要创建task log的用户："),t.shift(),t.shift(),o.push("</h3>"),t.shift(),t.unshift(new s.DebugItem(2,"/Users/levblanc/projects/task-log/app/components/home/multiUser.jade")),o.push('\n<div class="availableUsers">'),t.unshift(new s.DebugItem(e,t[0].filename)),t.unshift(new s.DebugItem(3,"/Users/levblanc/projects/task-log/app/components/home/multiUser.jade")),function(){var i=a;if("number"==typeof i.length)for(var r=0,u=i.length;u>r;r++){var l=i[r];t.unshift(new s.DebugItem(3,"/Users/levblanc/projects/task-log/app/components/home/multiUser.jade")),t.unshift(new s.DebugItem(4,"/Users/levblanc/projects/task-log/app/components/home/multiUser.jade")),o.push("<a"+s.attr("data-user-id",""+l.userId,!0,!1)+' class="userBtn">'),t.unshift(new s.DebugItem(e,t[0].filename)),t.unshift(new s.DebugItem(4,t[0].filename)),o.push(""+s.escape(null==(n=l.userName)?"":n)),t.shift(),t.shift(),o.push("</a>"),t.shift(),t.shift()}else{var u=0;for(var r in i){u++;var l=i[r];t.unshift(new s.DebugItem(3,"/Users/levblanc/projects/task-log/app/components/home/multiUser.jade")),t.unshift(new s.DebugItem(4,"/Users/levblanc/projects/task-log/app/components/home/multiUser.jade")),o.push("<a"+s.attr("data-user-id",""+l.userId,!0,!1)+' class="userBtn">'),t.unshift(new s.DebugItem(e,t[0].filename)),t.unshift(new s.DebugItem(4,t[0].filename)),o.push(""+s.escape(null==(n=l.userName)?"":n)),t.shift(),t.shift(),o.push("</a>"),t.shift(),t.shift()}}}.call(this),t.shift(),t.shift(),o.push("\n</div>"),t.shift(),t.shift()}.call(this,"undefined"in a?a.undefined:void 0,"users"in a?a.users:"undefined"!=typeof users?users:void 0),o.join("")}catch(i){s.rethrow(i,t[0].filename,t[0].lineno,'h3.note 请选择需要创建task log的用户：\n.availableUsers\n    each user in users\n        a.userBtn(data-user-id="#{ user.userId }") #{ user.userName }\n')}}},{"jade/runtime":20}],11:[function(e,t,n){var s=e("jquery"),o=e("underscore"),a=e("backbone"),i=e("./multiUser.jade");t.exports=a.View.extend({className:"chooseUser",events:{"click .userBtn":"goToUserDashboard"},render:function(){var e=o.map(this.collection,function(e,t){return e.toJSON()});return this.$el.html(i({users:e})),this},goToUserDashboard:function(e){var t=s(e.currentTarget).text();a.history.navigate(t,{trigger:!0})}})},{"./multiUser.jade":10,backbone:"backbone",jquery:"jquery",underscore:"underscore"}],12:[function(e,t,n){var s=e("jade/runtime");t.exports=function(e){var t=[new s.DebugItem(1,"/Users/levblanc/projects/task-log/app/components/monthLog/logItem.jade")];try{var n,o=[],a=e||{};return function(e,a){t.unshift(new s.DebugItem(0,"/Users/levblanc/projects/task-log/app/components/monthLog/logItem.jade")),t.unshift(new s.DebugItem(1,"/Users/levblanc/projects/task-log/app/components/monthLog/logItem.jade")),o.push('\n<td class="logIndex">'),t.unshift(new s.DebugItem(void 0,t[0].filename)),t.unshift(new s.DebugItem(1,t[0].filename)),o.push(""+s.escape(null==(n=a)?"":n)),t.shift(),t.shift(),o.push("</td>"),t.shift(),t.unshift(new s.DebugItem(2,"/Users/levblanc/projects/task-log/app/components/monthLog/logItem.jade")),o.push('\n<td class="logContent">'),t.unshift(new s.DebugItem(void 0,t[0].filename)),t.unshift(new s.DebugItem(2,t[0].filename)),o.push(""+s.escape(null==(n=e)?"":n)),t.shift(),t.shift(),o.push("</td>"),t.shift(),t.unshift(new s.DebugItem(3,"/Users/levblanc/projects/task-log/app/components/monthLog/logItem.jade")),o.push('\n<td class="logStatus">'),t.unshift(new s.DebugItem(void 0,t[0].filename)),t.unshift(new s.DebugItem(3,t[0].filename)),o.push("完成"),t.shift(),t.shift(),o.push("</td>"),t.shift(),t.unshift(new s.DebugItem(4,"/Users/levblanc/projects/task-log/app/components/monthLog/logItem.jade")),o.push('\n<td class="delete">'),t.unshift(new s.DebugItem(void 0,t[0].filename)),t.unshift(new s.DebugItem(4,t[0].filename)),o.push(" "),t.shift(),t.unshift(new s.DebugItem(5,"/Users/levblanc/projects/task-log/app/components/monthLog/logItem.jade")),o.push("<a>"),t.unshift(new s.DebugItem(void 0,t[0].filename)),t.unshift(new s.DebugItem(5,t[0].filename)),o.push("Delete"),t.shift(),t.shift(),o.push("</a>"),t.shift(),t.shift(),o.push("</td>"),t.shift(),t.shift()}.call(this,"content"in a?a.content:"undefined"!=typeof content?content:void 0,"logIndex"in a?a.logIndex:"undefined"!=typeof logIndex?logIndex:void 0),o.join("")}catch(i){s.rethrow(i,t[0].filename,t[0].lineno,"td.logIndex #{ logIndex }\ntd.logContent #{ content }\ntd.logStatus 完成\ntd.delete \n    a Delete\n")}}},{"jade/runtime":20}],13:[function(e,t,n){var s=(e("jquery"),e("underscore")),o=e("backbone"),a=e("./logItem.jade");t.exports=o.View.extend({tagName:"tr",className:"logItem",events:{"click .delete":"deleteItem"},initialize:function(e){this.logIndex=e.logIndex,this.listenTo(this.model,"change",this.render)},render:function(){var e=s.extend(this.model.toJSON(),{logIndex:this.logIndex});return this.$el.html(a(e)),this},deleteItem:function(e){this.model.destroy({wait:!0})}})},{"./logItem.jade":12,backbone:"backbone",jquery:"jquery",underscore:"underscore"}],14:[function(e,t,n){var s=e("jade/runtime");t.exports=function(e){var t=[new s.DebugItem(1,"/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade")];try{var n,o=[],a=e||{};return function(e,a){t.unshift(new s.DebugItem(0,"/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade")),t.unshift(new s.DebugItem(1,"/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade")),o.push('\n<div class="header">'),t.unshift(new s.DebugItem(void 0,t[0].filename)),t.unshift(new s.DebugItem(1,t[0].filename)),o.push(""+s.escape(null==(n=a)?"":n)+"总结详情"),t.shift(),t.unshift(new s.DebugItem(2,"/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade")),o.push('<a class="goToDashboard options">'),t.unshift(new s.DebugItem(void 0,t[0].filename)),t.unshift(new s.DebugItem(2,t[0].filename)),o.push("Dashboard"),t.shift(),t.shift(),o.push("</a>"),t.shift(),t.unshift(new s.DebugItem(3,"/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade")),o.push("<a"+s.attr("href",e,!0,!1)+' target="_blank" class="downloadBtn options">'),t.unshift(new s.DebugItem(void 0,t[0].filename)),t.unshift(new s.DebugItem(3,t[0].filename)),o.push("Download"),t.shift(),t.shift(),o.push("</a>"),t.shift(),t.shift(),o.push("</div>"),t.shift(),t.unshift(new s.DebugItem(4,"/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade")),o.push('\n<div class="addLog">'),t.unshift(new s.DebugItem(void 0,t[0].filename)),t.unshift(new s.DebugItem(5,"/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade")),o.push('\n  <div class="note">'),t.unshift(new s.DebugItem(void 0,t[0].filename)),t.unshift(new s.DebugItem(5,t[0].filename)),o.push("添加新条目"),t.shift(),t.shift(),o.push("</div>"),t.shift(),t.unshift(new s.DebugItem(6,"/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade")),o.push('\n  <textarea placeholder="请输入工作内容" rows="3" autofocus="autofocus" class="logInput">'),t.unshift(new s.DebugItem(void 0,t[0].filename)),t.shift(),o.push("</textarea>"),t.shift(),t.shift(),o.push("\n</div>"),t.shift(),t.unshift(new s.DebugItem(7,"/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade")),o.push('\n<div class="logDetail hidden">'),t.unshift(new s.DebugItem(void 0,t[0].filename)),t.unshift(new s.DebugItem(8,"/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade")),o.push('\n  <table class="logTable">'),t.unshift(new s.DebugItem(void 0,t[0].filename)),t.unshift(new s.DebugItem(9,"/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade")),o.push("\n    <thead>"),t.unshift(new s.DebugItem(void 0,t[0].filename)),t.unshift(new s.DebugItem(10,"/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade")),o.push("\n      <th>"),t.unshift(new s.DebugItem(void 0,t[0].filename)),t.unshift(new s.DebugItem(10,t[0].filename)),o.push("序号"),t.shift(),t.shift(),o.push("</th>"),t.shift(),t.unshift(new s.DebugItem(11,"/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade")),o.push("\n      <th>"),t.unshift(new s.DebugItem(void 0,t[0].filename)),t.unshift(new s.DebugItem(11,t[0].filename)),o.push("内容"),t.shift(),t.shift(),o.push("</th>"),t.shift(),t.unshift(new s.DebugItem(12,"/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade")),o.push("\n      <th>"),t.unshift(new s.DebugItem(void 0,t[0].filename)),t.unshift(new s.DebugItem(12,t[0].filename)),o.push("状态"),t.shift(),t.shift(),o.push("</th>"),t.shift(),t.unshift(new s.DebugItem(13,"/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade")),o.push("\n      <th>"),t.unshift(new s.DebugItem(void 0,t[0].filename)),t.unshift(new s.DebugItem(13,t[0].filename)),o.push("   "),t.shift(),t.shift(),o.push("</th>"),t.shift(),t.shift(),o.push("\n    </thead>"),t.shift(),t.unshift(new s.DebugItem(14,"/Users/levblanc/projects/task-log/app/components/monthLog/monthLog.jade")),o.push("\n    <tbody>"),t.unshift(new s.DebugItem(void 0,t[0].filename)),t.shift(),o.push("</tbody>"),t.shift(),t.shift(),o.push("\n  </table>"),t.shift(),t.shift(),o.push("\n</div>"),t.shift(),t.shift()}.call(this,"downloadUrl"in a?a.downloadUrl:"undefined"!=typeof downloadUrl?downloadUrl:void 0,"logMonth"in a?a.logMonth:"undefined"!=typeof logMonth?logMonth:void 0),o.join("")}catch(i){s.rethrow(i,t[0].filename,t[0].lineno,'.header #{ logMonth }总结详情\n    a.goToDashboard.options Dashboard\n    a.downloadBtn.options(href=downloadUrl, target=\'_blank\') Download\n.addLog\n    .note 添加新条目\n    textarea.logInput(placeholder="请输入工作内容" rows="3" autofocus)\n.logDetail.hidden\n    table.logTable\n        thead\n            th 序号\n            th 内容\n            th 状态\n            th    \n        tbody\n            \n')}}},{"jade/runtime":20}],15:[function(e,t,n){var s=(e("jquery"),e("underscore")),o=e("backbone"),a=e("./monthLog.jade"),i=e("./logItemView");t.exports=o.View.extend({className:"monthLog",events:{"click .goToDashboard":"goToDashboard","click .downloadBtn":"downloadLog",keypress:"createLogItem"},initialize:function(e){this.logMonth=e.logMonth,this.userName=e.userName,this.monthLog=e.collection,this.render(),this.$logList=this.$el.find(".logTable tbody"),this.listenTo(this.monthLog,"add",this.addLogItem),this.listenTo(this.monthLog,"reset",this.listMonthLog),this.listenTo(this.monthLog,"destroy",this.refreshLogList),this.monthLog.fetch({reset:!0,data:{userName:this.userName,logMonth:this.logMonth}})},render:function(){var e="userName="+this.userName,t="logMonth="+this.logMonth;return downloadUrlArr=new Array(e,t),this.$el.html(a({logMonth:this.logMonth,downloadUrl:"/download-tasklog?"+downloadUrlArr.join("&")})),this},goToDashboard:function(e){var t=this.userName;o.history.navigate(t,{trigger:!0})},createLogItem:function(e){var t=this,n={userName:this.userName,logMonth:this.logMonth,content:""};if(13===e.which){var o=t.$el.find(".logInput").val(),a=o.trim().split("\n");s.each(a,function(e,o){var a=s.clone(n);a.content=e,t.monthLog.create(a,{wait:!0})}),t.$el.find(".logInput").val("").focus()}},addLogItem:function(e,t){var n=null,s=this.$el.find(".logDetail");"object"==typeof t?n=t.length:"number"==typeof t&&(n=t+1);var o=new i({model:e,logIndex:n});s.hasClass("hidden")&&s.removeClass("hidden"),this.$logList.append(o.render().el)},listMonthLog:function(){var e=this.$el.find(".logDetail");this.$el.find(".noLog");this.monthLog.length?(e.removeClass("hidden"),this.$logList.html(""),this.monthLog.each(this.addLogItem,this)):!e.hasClass("hidden")&&e.addClass("hidden")},refreshLogList:function(){this.listMonthLog()}})},{"./logItemView":13,"./monthLog.jade":14,backbone:"backbone",jquery:"jquery",underscore:"underscore"}],16:[function(e,t,n){var s=(e("jquery"),e("backbone")),o={};o.model=s.Model.extend({defaults:{userName:"",logMonth:"",content:"",status:"完成"},validate:function(e,t){}}),o.collection=s.Collection.extend({model:o.model,url:function(){return"/task-log"},comparator:"id"}),t.exports=o},{backbone:"backbone",jquery:"jquery"}],17:[function(e,t,n){var s=(e("jquery"),e("backbone")),o={};o.model=s.Model.extend({validate:function(e,t){return e.userName&&"string"!=typeof e.userName?"value of userName should be a String":void 0}}),o.collection=s.Collection.extend({model:o.model,url:"/user"}),t.exports=o},{backbone:"backbone",jquery:"jquery"}],18:[function(e,t,n){var s=(e("jquery"),e("backbone")),o={};o.model=s.Model.extend({defaults:{logMonth:""}}),o.collection=s.Collection.extend({model:o.model,url:function(){return"/user-loglist"}}),t.exports=o},{backbone:"backbone",jquery:"jquery"}],19:[function(e,t,n){},{}],20:[function(e,t,n){(function(s){!function(e){if("object"==typeof n&&"undefined"!=typeof t)t.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o;o="undefined"!=typeof window?window:"undefined"!=typeof s?s:"undefined"!=typeof self?self:this,o.jade=e()}}(function(){return function t(n,s,o){function a(r,u){if(!s[r]){if(!n[r]){var l="function"==typeof e&&e;if(!u&&l)return l(r,!0);if(i)return i(r,!0);var h=new Error("Cannot find module '"+r+"'");throw h.code="MODULE_NOT_FOUND",h}var c=s[r]={exports:{}};n[r][0].call(c.exports,function(e){var t=n[r][1][e];return a(t?t:e)},c,c.exports,t,n,s,o)}return s[r].exports}for(var i="function"==typeof e&&e,r=0;r<o.length;r++)a(o[r]);return a}({1:[function(e,t,n){"use strict";function s(e){return null!=e&&""!==e}function o(e){return(Array.isArray(e)?e.map(o):e&&"object"==typeof e?Object.keys(e).filter(function(t){return e[t]}):[e]).filter(s).join(" ")}function a(e){return r[e]||e}function i(e){var t=String(e).replace(u,a);return t===""+e?e:t}n.merge=function l(e,t){if(1===arguments.length){for(var n=e[0],o=1;o<e.length;o++)n=l(n,e[o]);return n}var a=e["class"],i=t["class"];(a||i)&&(a=a||[],i=i||[],Array.isArray(a)||(a=[a]),Array.isArray(i)||(i=[i]),e["class"]=a.concat(i).filter(s));for(var r in t)"class"!=r&&(e[r]=t[r]);return e},n.joinClasses=o,n.cls=function(e,t){for(var s=[],a=0;a<e.length;a++)t&&t[a]?s.push(n.escape(o([e[a]]))):s.push(o(e[a]));var i=o(s);return i.length?' class="'+i+'"':""},n.style=function(e){return e&&"object"==typeof e?Object.keys(e).map(function(t){return t+":"+e[t]}).join(";"):e},n.attr=function(e,t,s,o){return"style"===e&&(t=n.style(t)),"boolean"==typeof t||null==t?t?" "+(o?e:e+'="'+e+'"'):"":0==e.indexOf("data")&&"string"!=typeof t?(-1!==JSON.stringify(t).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),t&&"function"==typeof t.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+e+"='"+JSON.stringify(t).replace(/'/g,"&apos;")+"'"):s?(t&&"function"==typeof t.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+n.escape(t)+'"'):(t&&"function"==typeof t.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+t+'"')},n.attrs=function(e,t){var s=[],a=Object.keys(e);if(a.length)for(var i=0;i<a.length;++i){var r=a[i],u=e[r];"class"==r?(u=o(u))&&s.push(" "+r+'="'+u+'"'):s.push(n.attr(r,u,!1,t))}return s.join("")};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},u=/[&<>"]/g;n.escape=i,n.rethrow=function h(t,n,s,o){if(!(t instanceof Error))throw t;if(!("undefined"==typeof window&&n||o))throw t.message+=" on line "+s,t;try{o=o||e("fs").readFileSync(n,"utf8")}catch(a){h(t,null,s)}var i=3,r=o.split("\n"),u=Math.max(s-i,0),l=Math.min(r.length,s+i),i=r.slice(u,l).map(function(e,t){var n=t+u+1;return(n==s?"  > ":"    ")+n+"| "+e}).join("\n");throw t.path=n,t.message=(n||"Jade")+":"+s+"\n"+i+"\n\n"+t.message,t},n.DebugItem=function(e,t){this.lineno=e,this.filename=t}},{fs:2}],2:[function(e,t,n){},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{fs:19}]},{},[1]);