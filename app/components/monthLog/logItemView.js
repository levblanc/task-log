var $          = require('jquery');
var _          = require('underscore');
var Backbone   = require('backbone');
var logItemTpl = require("./logItem.jade");


module.exports = Backbone.View.extend({
    tagName   : 'tr',

    className : 'logItem',

    events: {
        'click .delete' : 'deleteItem'
    },

    initialize: function (initData) {
        this.logIndex = initData.logIndex;
        this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
        var renderData = _.extend(this.model.toJSON(), { logIndex : this.logIndex });
        this.$el.html(logItemTpl(renderData));
        return this;
    },

    deleteItem: function (e) {
        // collection可以监听到model的destory，
        // 在monthLogView里面重新把整个log render一次，
        // 所以在这里不需要监听自己的destory事件来remove当前view
        this.model.destroy({ wait: true });
    }
});
