var $        = require('jquery');
var _        = require('underscore');
var Backbone = require('backbone');
var logItemTpl  = require("./logItem.jade");

var logNum = 0;

function getHumanDate(currentDate){
    var humanDate, dateArr, timeArr, year, month, date, hour, min, sec;

    year  = currentDate.getFullYear();
    month = currentDate.getMonth();
    date  = currentDate.getDate();
    dateArr = new Array(year, month, date);

    hour  = currentDate.getHours();
    min   = currentDate.getMinutes();
    sec   = currentDate.getSeconds();
    timeArr = new Array(hour, min, sec);

    _.each(dateArr, function (item, index) {
        if(item < 10){
            item = '0' + item;
        }
        dateArr[index] = item;
    });

    _.each(timeArr, function (item, index) {
        if(item < 10){
            item = '0' + item;
        }
        timeArr[index] = item;
    });

    humanDate = dateArr.join('-') + ' ' + timeArr.join(':');

    return humanDate;
}

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
