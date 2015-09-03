var $        = require('jquery')
var Backbone = require('backbone');
var template = require("./dashboard.jade");

var user        = null;
var currentYear = null;
var renderData  = {};

module.exports = Backbone.View.extend({
    className : 'dashboard',

    events: {
        'click .add' : 'addLog',
        'click .view': 'viewLog'
    },

    initialize: function (requestedUser) {
        user = requestedUser;
        this.render();
    },

    render: function () {
        renderData.userName    = user.name;
        renderData.currentYear = currentYear = new Date().getFullYear();

        this.$el.html(template(renderData));

        return this;
    },

    addLog: function (e) {
        var inputMonth  = parseInt(this.$el.find('input').val(), 10);
        var logRouteArr = [user.name, currentYear];

        if(inputMonth < 10){
            inputMonth = '0' + inputMonth;
        }else{
            inputMonth.toString();
        }

        logRouteArr.push(inputMonth);

        Backbone.history.navigate(logRouteArr.join('/'), { trigger: true});
    }


});
