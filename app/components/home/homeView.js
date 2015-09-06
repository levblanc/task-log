var $        = require('jquery')
var Backbone = require('backbone');
var template = require("./home.jade");


module.exports = Backbone.View.extend({
    className : 'welcomePanel',

    events: {
        'click button': 'nameConfirm'
    },

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(template());
        return this;
    },

    nameConfirm: function (e) {
        var userData  = {};
        var userName  = this.$el.find('input').val();
        var userRoute = '';

        userData.userName = userName;
        userRoute += userName;

        this.model.save(userData);

        Backbone.history.navigate(userRoute, { trigger: true });
    }


});
