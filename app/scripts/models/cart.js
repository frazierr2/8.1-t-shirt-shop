var Backbone = require('backbone');

var Item = Backbone.Model.extend({
  idAttribute: '_id'
});

var ItemCollection = Backbone.Collection.extend({
  model: Item,

});


module.exports = {
  Item: Item,
  ItemCollection: ItemCollection
};
