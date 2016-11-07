var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');

var TemplateContainer = require('./template.jsx').TemplateContainer;
var itemModels = require('../models/cart.js');

// var CartItems = React.createClass({
//     render: function(){
//     var selectedItems = JSON.parse(localStorage.getItem('order'));
//
//     var orderListing = selectedItems.map(function(itemSelected){
//       console.log(itemSelected);
//     var username = localStorage.getItem('username');
//       return(
//           <tr key={itemSelected.cid}>
//           <td>filler</td>
//           <td>filler</td>
//           <td>filler</td>
//           <td>filler</td>
//           <td><button type="button" className="btn btn-primary">Remove</button></td>
//         </tr>
//       );
//     });
//     return(
//       <div>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Shirt</th>
//               <th>Size</th>
//               <th>Quantity</th>
//               <th>Deal Expires</th>
//               <th>Remove Item</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orderListing}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// });
//
// var CartContainer = React.createClass({
// // getInitialState: function(){
// //   var orderCollection = new itemModels.ItemCollection();
// //   var orderData = JSON.parse(localStorage.getItem('order'));
// //   orderCollection.add(orderData);
// //   return{
// //     orderCollection: orderCollection
// //   }
// // },
//   render: function(){
//     return(
//       <TemplateContainer>
//         <CartItems />
//       </TemplateContainer>
//     );
//   }
//
// });
//
// module.exports = {
//   CartItems: CartItems,
//   CartContainer: CartContainer
// }
