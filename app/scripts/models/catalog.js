var Backbone = require('backbone');

var Tshirt = Backbone.Model.extend({
  idAttribute: '_id'
});

var TshirtCollection = Backbone.Collection.extend({
  model: Tshirt,
});


module.exports = {
  Tshirt: Tshirt,
  TshirtCollection: TshirtCollection
};
