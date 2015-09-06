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
