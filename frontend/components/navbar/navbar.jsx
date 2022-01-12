import React from "react";
import { Link } from "react-router-dom";
import SearchContainer from "../search/search_container"
import { withRouter } from "react-router-dom"

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleAll = this.handleAll.bind(this)
    this.handleBeds = this.handleBeds.bind(this);
    this.handleFood = this.handleFood.bind(this);
    this.handleToys = this.handleToys.bind(this);
    this.handleTreats = this.handleTreats.bind(this);
    this.handleClothes = this.handleClothes.bind(this);
    this.handleWalking = this.handleWalking.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser.id === this.props.user) { this.props.fetchCartItems(); }
    this.props.fetchProducts("");
  };

  handleAll() {
    this.props.fetchProducts("")
      .then(this.props.history.push("/products"))
  }

  handleBeds() {
    this.props.fetchProducts("beds")
      .then(this.props.history.push("/products"));
  }

  handleFood() {
    this.props.fetchProducts("food")
      .then(this.props.history.push("/products"));
  }

  handleToys() {
    this.props.fetchProducts("toys")
      .then(this.props.history.push("/products"));
  }

  handleTreats() {
    this.props.fetchProducts("treats")
      .then(this.props.history.push("/products"));
  }

  handleClothes() {
    this.props.fetchProducts("clothes")
      .then(this.props.history.push("/products"));
  }

  handleWalking() {
    this.props.fetchProducts("walking")
      .then(this.props.history.push("/products"));
  }

  handleLogout() {
    this.props.logout()
      .then(this.props.history.push("/"));
  }

  render() {
    
    const { currentUser, cartItems } = this.props;
    let profile = currentUser ? (
      <div>
        <div className="nav-hello">Hello, <b>{currentUser.first_name}</b></div>
        <div className="nav-logout"><button className="nav-logout-btn" onClick={this.handleLogout}>Logout</button></div>
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

    let cartQuantity = 0;
    cartItems.forEach(cartItem => cartQuantity += cartItem.quantity );

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
            { 
              (this.props.currentUser && cartQuantity) ? 
              <div className="nav-cart-counter">{cartQuantity}</div> 
              : 
              null 
            }
            <div className="nav-cart-word">Cart</div>
          </div>
        </div>

        <div className="nav-categories-container">
          <button onClick={this.handleAll} className="nav-category">All</button>
          <button onClick={this.handleBeds} className="nav-category">Beds</button>
          <button onClick={this.handleFood} className="nav-category">Food</button>
          <button onClick={this.handleToys} className="nav-category">Toys</button>
          <button onClick={this.handleTreats} className="nav-category">Treats</button>
          <button onClick={this.handleClothes} className="nav-category">Clothes</button>
          <button onClick={this.handleWalking} className="nav-category">Walking</button>
        </div>
      </div>
    )
  }
}

export default withRouter(Navbar);