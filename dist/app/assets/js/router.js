var $=require("jquery"),Backbone=require("backbone");Backbone.$=$;var HomeView=require("../../components/home/homeView"),DashboardView=require("../../components/dashboard/dashboardView"),MonthLogView=require("../../components/monthLog/monthLogView"),UserCollection=require("../../shared/collections/user").collection,TaskLogCollection=require("../../shared/collections/taskLog").collection,UserLogListCollection=require("../../shared/collections/userLogList").collection,userCollection=new UserCollection,taskLogCollection=new TaskLogCollection,userLogListCollection=new UserLogListCollection;module.exports=Backbone.Router.extend({routes:{"":"home",":userName":"userDashboard",":userName/:logMonth":"userMonthLog"},home:function(){console.dir("in home view");var e=new HomeView({collection:userCollection});$("#main").empty().append(e.el)},userDashboard:function(e){console.dir("in "+e+"'s dashboard");var o={collection:userLogListCollection,userName:e},n=new DashboardView(o);$("#main").empty().append(n.el)},userMonthLog:function(e,o){console.dir("in "+e+"'s "+o+" log");var n={collection:taskLogCollection,userName:e,logMonth:o},i=new MonthLogView(n);$("#main").empty().append(i.el)}});