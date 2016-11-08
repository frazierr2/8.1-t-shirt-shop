var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');

var TemplateContainer = require('./template.jsx').TemplateContainer;
var ItemCollection = require('../models/cart.js').ItemCollection;

var CartItems = React.createClass({
  getInitialState: function(){
   return{
     cart: this.props.cartItems
   }
 },
 removeItem: function(indexOfItem){
   var cartArray = this.state.cart;
   var newCart = cartArray.filter(function(items, index){return index != indexOfItem});
   this.setState({cart: newCart});
   this.props.cartState(newCart);
 },
 render: function(){
   var self = this;
   var tableItems = this.state.cart.map(function(item, index){
     var currentTime = new Date().getTime();
     var time;
     var timeTillExpire = item.time_expires - currentTime;

     if(currentTime > item.time_expires){
       time='expired';
       self.removeItem(index);
     }else{
       var minutes = ((timeTillExpire/60000)%60).toFixed(0);
       minutes = (minutes < 10) ? '0' + minutes : minutes;

       var seconds = ((timeTillExpire/1000)%60).toFixed(0);
       seconds = (seconds < 10) ? '0' + seconds : seconds;

       time=minutes + ':' + seconds;
     }

     return(
       <tr key={index}>
         <td>{item.name}</td>
         <td>{item.size}</td>
         <td>{item.quantity}</td>
         <td>{time}</td>
         <td><button onClick={function(){self.removeItem(index)}} className="btn btn-danger">Remove Item</button></td>
       </tr>
     );
   });
   return(
     <div>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Shirt Size</th>
              <th>Quantity</th>
              <th>Deal Expires</th>
              <th>Remove Item</th>
            </tr>
          </thead>
          <tbody>
            {tableItems}
          </tbody>
        </table>
      </div>
   );
 }
});
var CartContainer = React.createClass({
  getInitialState: function(){
      var cartItems = new ItemCollection();

      return{
        cartItems: cartItems
      };
    },
    store: function(cart){
      localStorage.setItem('cart', JSON.stringify(cart));
    },
    cartState: function(newCart){
      this.setState({cartItems: newCart});
      this.store(newCart);
    },
    componentWillMount: function(){
      var cartContents = localStorage.getItem('cart');
      var cartItems = JSON.parse(cartContents);
      this.setState({cartItems: cartItems});

      var self = this;
      setInterval(function(){
        self.forceUpdate();
      },1000);
    },
  render: function(){
    return(
      <TemplateContainer>
        <CartItems cartItems={this.state.cartItems} cartState={this.cartState}/>
      </TemplateContainer>
    );
  },


});

module.exports = {
  CartItems: CartItems,
  CartContainer: CartContainer
}
