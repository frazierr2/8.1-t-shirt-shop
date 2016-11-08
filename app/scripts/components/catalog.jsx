var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');
var Modal = require('react-modal');


var catModels = require('../models/catalog');
var Item = require('../models/cart').Item;
var ItemCollection = require('../models/cart').ItemCollection;

var TemplateContainer = require('./template.jsx').TemplateContainer;

var CatalogListing = React.createClass({
getInitialState: function(){
  var newOrder = new Item();
  return {
    newOrder: newOrder
  }
},

handleQty: function(e){
  e.preventDefault();
  this.state.newOrder.set({quantity: e.target.value});
},

handleShirtSize: function(e){
  e.preventDefault();
  this.state.newOrder.set({size: e.target.value});
},

handleSubmit: function(item){
  this.state.newOrder.set({title: item.get('title'), 'time_submitted': new Date().getTime(), 'time_expires': new Date().getTime() + 600000});
  this.setState({newOrder: this.state.newOrder});
  this.props.addToCart(this.state.newOrder);
},
  render: function() {
    var self = this;

    var catalogList = this.props.catalogItems.map(function(item){
      return(
        <div key={item.cid} className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src={item.get('image')} alt="..." />
            <div className="caption">
              <h3>{item.get('title')}</h3>
              <p>This shirt is so amazing that it will make you amazing when you wear it.</p>
              <form onSubmit={function(e){e.preventDefault();self.handleSubmit(item);}} className="form-inline">
                <div className="form-group qty-input">
                  <input onChange={self.handleQty} type="text" className="form-control" id="quantity" placeholder="Qty" />
                </div>
                <select onChange={self.handleShirtSize} className="form-control">
                  <option>SM</option>
                  <option>MD</option>
                  <option>LG</option>
                  <option>XL</option>
                  <option>XXL</option>
                </select>
                <button className="btn btn-primary" role="button">Add to Cart</button>
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
    var orderCart = new ItemCollection();

    return {
      user: '',
      catalogItems: catalogItems,
      orderCart: orderCart
    }
  },

  toStorage: function(toCollection){
    var cart = JSON.stringify(toCollection.toJSON());
    localStorage.setItem('cart', cart);
  },

  setUser: function(e){
    e.preventDefault();
    this.setState({user: localStorage.getItem('user')});
  },


  fromStorage: function(){
    var collection = JSON.parse(localStorage.getItem('cart'));
    this.state.orderCart.reset(collection);
    this.setState({orderCart: this.state.orderCart});
  },

  addToCart: function(itemToAdd){
    var orderCart = this.state.orderCart;
    this.fromStorage();
    orderCart.add(itemToAdd);
    this.setState({orderCart: orderCart});
    this.toStorage(orderCart);
  },

  componentWillMount: function(){
    var self = this;
    this.state.catalogItems.fetch().then(function(inventory){
      self.setState({catalogItems: self.state.catalogItems});
    });
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
