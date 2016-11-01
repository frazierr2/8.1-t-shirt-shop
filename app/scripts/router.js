var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var CatalogContainer = require('./components/catalog.jsx').CatalogContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
  },
  index: function(){
    ReactDOM.render(
      React.createElement(CatalogContainer),
      document.getElementById('app')
    )
  }

});

var router = new AppRouter();

module.exports = router;
