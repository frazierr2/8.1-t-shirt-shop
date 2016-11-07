var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var CartContainer = require('./components/cart.jsx').CartContainer;
var CatalogContainer = require('./components/catalog.jsx').CatalogContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'cart/': 'cart'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(CatalogContainer, {router: this}),
      document.getElementById('app')
    );
  },
  cart: function(){
    ReactDOM.render(
      React.createElement(CartContainer, {router: this}),
      document.getElementById('app')
    );
  }

});

var router = new AppRouter();

module.exports = router;
