var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');

var catModels = require('../models/catalog');

var TemplateContainer = require('./template.jsx').TemplateContainer;

var CatalogListing = React.createClass({
  render: function() {
// console.log(this.props.catalogItems);
    var catalogList = this.props.catalogItems.map(function(item){
      return(
        <div key={item.cid} className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src={item.get('image')} alt="..." />
            <div className="caption">
              <h3>{item.get('title')}</h3>
              <p>This shirt is so amazing that it will make you amazing when you wear it.</p>
              <form className="form-inline">
                <div className="form-group qty-input">
                  <input type="text" className="form-control" id="quantity" placeholder="Qty" />
                </div>
                <select className="form-control">
                  <option>SM</option>
                  <option>MD</option>
                  <option>LG</option>
                  <option>XL</option>
                  <option>XXL</option>
                </select>
                <a href="#" className="btn btn-primary" role="button">Add to Cart</a>
              </form>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        {catalogList}
      </div>
  );
  }
});

var CatalogContainer = React.createClass({
  getInitialState: function(){
    var catalogItems = new catModels.TshirtCollection();
    // console.log(catalogItems);
    catalogItems.add([
      {title:'Saved By The Bell',image:'https://80stees.imgix.net/s/files/1/0384/0921/products/tiger-face-saved-by-the-bell-t-shirt.col.jpeg?v=1416415283&auto=format&dpr=1.5&fit=max&h=300&w=196&'},
      {title:'Whooooo',image:'https://80stees.imgix.net/s/files/1/0384/0921/products/jet-flyin-ric-flair-t-shirt.main.jpeg?v=1453741500&auto=format&fit=max&h=1500&w=1500&'},
      {title:'Laces Out',image:'http://mypartyshirt.com/media/catalog/product/cache/1/image/1000x1231/9df78eab33525d08d6e5fb8d27136e95/c/i/cimg5599_edited.jpg'}
    ]);
    // console.log(catalogItems);
    return {
      catalogItems: catalogItems
    }
  },
  navBarCart: function(){
    var router = this.props.router;
    router.navigate('shoppingcart/',{trigger: true});
  },
  addToCart: function(items){
    localStorage.setItem('order', JSON.stringify(items));
  },

  render: function(){
    return(
      <TemplateContainer>
        <CatalogListing catalogItems={this.state.catalogItems} addToCart={this.addToCart}/>
      </TemplateContainer>
    );
  }
});


module.exports = {
  CatalogContainer: CatalogContainer
}
