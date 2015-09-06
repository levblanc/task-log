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
