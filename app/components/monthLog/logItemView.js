var $        = require('jquery');
var _        = require('underscore');
var Backbone = require('backbone');
var logItemTpl  = require("./logItem.jade");


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
        this.model.destroy({success: function(model, response) {
          console.dir(model);
          console.dir(response);
        }});
    }
});
