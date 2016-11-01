var Backbone = require('backbone');

var Tshirt = Backbone.Model.extend({
  idAttribute: '_id'
});

var TshirtCollection = Backbone.Collection.extend({
  model: Tshirt,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/rytshirt'
});


module.exports = {
  Tshirt: Tshirt,
  TshirtCollection: TshirtCollection
};
