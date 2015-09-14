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
        this.listenTo(this.model, 'destroy', this.remove);
    },

    render: function () {
        var renderData = _.extend(this.model.toJSON(), { logIndex : this.logIndex });
        this.$el.html(logItemTpl(renderData));
        return this;
    },

    deleteItem: function (e) {
        this.model.destroy({ wait: true });
    }
});
