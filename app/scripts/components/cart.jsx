var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');

var TemplateContainer = require('./template.jsx').TemplateContainer;

var CartItems = React.createClass({
    render: function(){
    var selectedItems = JSON.parse(localStorage.getItem('order'));
    var newArray = [];
    newArray.push(selectedItems);

    var orderListing = newArray.map(function(order){
    var username = localStorage.getItem('username');
      return(
        <tr key={order.cid}>
    <td>{order.title}</td>
    <td>Otto</td>
    <td>@mdo</td>
        </tr>
      );
    });
    return(
      <div>

        <table className="table">
          <thead>
            <tr>
        <th>Shirt</th>
        <th>Size</th>
        <th>Quantity</th>
        <th>Deal Expires</th>
            </tr>
          </thead>
          <tbody>
            {orderListing}
          </tbody>
        </table>
      </div>
    );
  }
});

var CartContainer = React.createClass({
  render: function(){
    return(
      <TemplateContainer>
        <CartItems />
      </TemplateContainer>
    );
  }
});

module.exports = {
  CartItems: CartItems,
  CartContainer: CartContainer
}
