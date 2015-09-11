var $ = require('jquery');
var Backbone = require('backbone');
var taskLog = {};


taskLog.model = Backbone.Model.extend({
    defaults: {
         "logNum"   : null,
         "userName" : "",
         "logMonth" : "",
         "addTime"  : "",
         "content"  : "",
         "status"   : "完成"
    },
    validate: function (attr, opts) {
        // body...
    }
});

taskLog.collection = Backbone.Collection.extend({
    model: taskLog.model,

    url : function () {
        return '/task-log' + location.pathname;
    },

    nextLogNum: function () {
        return this.length ? this.last().get('logMun') + 1 : 1;
    },

    comparator: 'logNum'

});

module.exports = taskLog;
