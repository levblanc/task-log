var $        = require('jquery')
var Backbone = require('backbone');
var mainTpl  = require("./monthLog.jade");
var itemTpl  = require("./logItem.jade");

var logNo = 0;
var logId = 0;

module.exports = Backbone.View.extend({
    className : 'monthLog',

    events: {
        'click .add'   : 'addLogItem',
        'click .delete': 'deleteLogItem'
    },

    initialize: function (logInfo) {
        this.render(logInfo);
    },

    render: function (logInfo) {
        this.$el.html(mainTpl(logInfo));
        return this;
    },

    addLogItem: function (e) {
        var logData = {};

        logData.logId      = ++logId;
        logData.logNo      = ++logNo;
        logData.logContent = this.$el.find('input').val();

        $('.logTable tbody').append(itemTpl(logData));
    },

    deleteLogItem: function (e) {
        console.dir('will delete item')
    }

});
