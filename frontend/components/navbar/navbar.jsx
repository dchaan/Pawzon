import React from "react";
import { Link } from "react-router-dom";
import SearchContainer from "../search/search_container"
import { withRouter } from "react-router-dom"

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleAny = this.handleAny.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser) this.props.fetchCartItems(); 
    this.props.fetchProducts("");
  };

  handleAny(productCategory) {
    this.props.fetchProducts(productCategory)
      .then(this.props.history.push("/products"));
  }

  handleLogout() {
    this.props.logout()
      .then(this.props.history.push("/"));
  }

  render() {
    const { currentUser, cartItems } = this.props;
    let cartQuantity = 0;
    cartItems.forEach(cartItem => cartQuantity += cartItem.quantity);

    let profile = currentUser ? 
    (
      <div>
        <div className="nav-hello">Hello, <b>{currentUser.first_name}</b></div>
        <div className="nav-logout">
          <button className="nav-logout-btn" onClick={this.handleLogout}>Logout</button>
        </div>
      </div>
    ) : (
      <div>
        <div className="nav-hello">Hello</div>
        <div className="nav-greeting-links">
          <div className="nav-greeting"><Link className="greeting-link" to="/login"> Login </Link></div>
          {" or "}
          <div className="nav-greeting"><Link className="greeting-link" to="/signup">Sign Up</Link></div>
        </div>
      </div>
    )

    return (
      <div className="nav-container">
        <div className="navbar-top">
          <Link className="nav-logo-container" to="/">
            <img src="images/pawzon.png" className="nav-logo" />
          </Link>
          <div className="nav-location-container">
            <img src="images/location.png" className="nav-location-img"/>
            <div className="nav-deliver-to">
              <div className="nav-deliver-to-user">Deliver to {this.props.currentUser ? this.props.currentUser.first_name : ""}</div>
              <div className="nav-deliver-to-city">Pacifica 94044</div>
            </div>
          </div>
          <div className="nav-search-container">
            <SearchContainer />
          </div>
          <div className="nav-flag-container">
            <img src="images/flag.png" className="nav-flag-img" />
          </div>
          <div className="nav-greeting-container">
            {profile}
          </div>
          <div className="nav-returns-orders-container">
            <div className="nav-returns">Returns</div>
            <div className="nav-orders">& Orders</div>
          </div>
          <div className="nav-cart-container">
            { currentUser ? 
              <Link className="nav-cart-link" to="/cart">
                <img src="images/cart.png" className="nav-cart-img"/>
              </Link> 
              :
              <Link className="nav-cart-link" to="/login">
                <img src="images/cart.png" className="nav-cart-img"/>
              </Link>
            }
            { (currentUser && cartQuantity) ? <div className="nav-cart-counter">{cartQuantity}</div> : null }
            <div className="nav-cart-word">Cart</div>
          </div>
        </div>

        <div className="nav-categories-container">
          <button onClick={() => this.handleAny("")} className="nav-category">All</button>
          <button onClick={() => this.handleAny("Beds")} className="nav-category">Beds</button>
          <button onClick={() => this.handleAny("Food")} className="nav-category">Food</button>
          <button onClick={() => this.handleAny("Toys")} className="nav-category">Toys</button>
          <button onClick={() => this.handleAny("Treats")} className="nav-category">Treats</button>
          <button onClick={() => this.handleAny("Clothes")} className="nav-category">Clothes</button>
          <button onClick={() => this.handleAny("Walking")} className="nav-category">Walking</button>
        </div>
      </div>
    )
  }
}

export default withRouter(Navbar);