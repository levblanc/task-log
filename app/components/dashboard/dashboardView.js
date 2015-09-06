var $        = require('jquery')
var Backbone = require('backbone');
var template = require("./dashboard.jade");

var userName        = null;
var currentYear = null;
var renderData  = {};

module.exports = Backbone.View.extend({
    className : 'dashboard',

    events: {
        'click .create' : 'createLog',
        'click .view': 'viewLog'
    },

    initialize: function (initData) {
        userName   = initData.userName;
        this.model = initData.model;

        this.render();
    },

    render: function () {
        renderData.userName    = userName;
        renderData.currentYear = currentYear = new Date().getFullYear();

        this.$el.html(template(renderData));

        return this;
    },

    createLog: function (e) {
        var inputMonth  = parseInt(this.$el.find('input').val(), 10);
        var logRouteArr = [userName, currentYear];
        var logRouteStr = '';
        var logData = {};

        if(inputMonth < 10){
            inputMonth = '0' + inputMonth;
        }else{
            inputMonth.toString();
        }

        logRouteArr.push(inputMonth);
        logRouteStr = logRouteArr.join('/');
        logData[logRouteStr] = null;
        // this.model.save(logData);

        Backbone.history.navigate(logRouteStr, { trigger: true});
    }


});
