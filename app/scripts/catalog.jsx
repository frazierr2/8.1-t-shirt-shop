var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');


var TemplateContainer = require('./template.jsx').TemplateContainer;

var CatalogItems = React.createClass({
  render: function() {
    return (
    lll
    )
  }
});

var CatalogContainer = React.createClass({
  getInitialState: function(){
    var catalogItems = [
      {title:'Saved By The Bell',image:'https://80stees.imgix.net/s/files/1/0384/0921/products/tiger-face-saved-by-the-bell-t-shirt.col.jpeg?v=1416415283&auto=format&dpr=1.5&fit=max&h=300&w=196&'},
      {title:'Whooooo',image:'https://80stees.imgix.net/s/files/1/0384/0921/products/jet-flyin-ric-flair-t-shirt.main.jpeg?v=1453741500&auto=format&fit=max&h=1500&w=1500&'},
      {title:'Whooooo',image:'http://mypartyshirt.com/media/catalog/product/cache/1/image/1000x1231/9df78eab33525d08d6e5fb8d27136e95/c/i/cimg5599_edited.jpg'}
    ];
    return {
      catalogItems: catalogItems
    }
  },

  render: function(){
    return(
      <TemplateContainer>
        <CatalogItems />
      </TemplateContainer>
    )
  }
});


module.exports = {
  CatalogItems: CatalogItems,
  CatalogContainer: CatalogContainer
}
