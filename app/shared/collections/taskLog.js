var $ = require('jquery');
var Backbone = require('backbone');
var taskLog = {};

var modelSchema = {
     "logNum"   : null,
     "userName" : "",
     "logMonth" : "",
     "addTime"  : "",
     "content"  : "",
     "status"   : "完成"
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
