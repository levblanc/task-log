var $ = require('jquery');
var Backbone = require('backbone');

Backbone.$ = $;

var homeView = require('../../components/home/homeView')

module.exports = Backbone.Router.extend({
    routes: {
        '' : 'home',
        '/:name/:year/:month': 'taskLogController'
    },

    home: function () {
        alert('in home func');
    }
});
