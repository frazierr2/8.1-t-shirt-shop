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




      </div>
      </div>

      </div>
    )
  }
});

module.exports = {
  TemplateContainer: TemplateContainer
}
