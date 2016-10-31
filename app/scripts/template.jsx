var React = require('react');

var TemplateContainer = React.createClass({
  render: function(){
    return (
      <div className="container-fluid">
      
        <nav className="navbar navbar-default ">
          <ul className="nav nav-pills banner">
            <a className="navbar-brand" href="#">90's Throwbacks</a>
            <a className="navbar-brand logo" href="#">
              <img alt="Brand" src="http://4.bp.blogspot.com/-EGaXF8LlZ_s/TZ3736JBGzI/AAAAAAAAADY/roDdnwix4SU/s1600/I%2Blove%2Bthe%2B90s.png" />
            </a>
            <li role="presentation" className="active"><a href="#">T-shirts</a></li>
            <li role="presentation"><a href="#">Cart</a></li>
          </ul>
        </nav>

      <div className="container">
        <div className="row">

          <div className="well homepage-banner text-center">
            <h2><strong>90's Throwbacks T-Shirt Deals</strong></h2>
            <h4><strong>You have 10 minutes to purchase once you cart an item.</strong></h4>
          </div>
        </div>

        <div className="row">

        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src="https://80stees.imgix.net/s/files/1/0384/0921/products/tiger-face-saved-by-the-bell-t-shirt.col.jpeg?v=1416415283&auto=format&dpr=1.5&fit=max&h=300&w=196&" alt="..." />
            <div className="caption">
              <h3>Thumbnail label</h3>
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




      </div>
      </div>

      </div>
    )
  }
});

module.exports = {
  TemplateContainer: TemplateContainer
}
