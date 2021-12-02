import React from "react";
import CartItemIndexItem from "./cart_item_index_item";
import { Link } from "react-router-dom";

class CartItemIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checkout: "" };
    this.handleCheckout = this.handleCheckout.bind(this);
  }

  componentDidMount() {
    this.props.fetchCartItems();
  }

  handleCheckout() {
    e.preventDefault();
    this.props.cartItems.forEach(cartItem => {
      this.props.deleteCartItem(cartItem.id)
    });
    this.setState({ checkout: <div className="checkout-msg">Thank you for your order.</div>})
  }

  

  render() {
    const { fetchCartItems, updateCartItem, deleteCartItem } = this.props;
    // if (!this.props.cartItems) return (
    //   <div className="cart-empty">Your Pawzon cart is empty.</div>
    // )

    const subtotal = 0;
    this.props.cartItems.forEach(cartItem => {
      subtotal += cartItem.quantity * cartItem.price;
    });

    const totalItems = 0
    this.props.cartItems.forEach(cartItem => {
      totalItems += cartItem.quantity;
    })

    return (
      <div className="cart-container">
        <div className="cart-heading">Shopping Cart</div>

        <div className="cart-items">
          <div className="cart-price">Price</div>
          { (this.props.cartItems.length === 0) ? 
            this.props.cartItems.map(cartItem => (
              <CartItemIndexItem
                key={cartItem.id}
                cartItem={cartItem}
                fetchCartItems={fetchCartItems}
                updateCartItem={updateCartItem}
                deleteCartItem={deleteCartItem}
              />
              )   
            ) : 
            <div className="cart-empty">Your Pawzon cart is empty.</div>
          }
        </div>

        <div className="cart-subtotal-container">
          <div clasName="cart-subtotal-title">Subtotal ({totalItems} item(s)): </div>
          <div className="cart-subtotal">${subtotal}</div>
        </div>

        <div className="cart-checkout-container">
          <div className="cart-checkout-subtotal-title">Subtotal ({totalItems} item(s)): </div>
          <div className="cart-checkout-subtotal">${subtotal}</div>
          <label for="cart-checkout-gift">
            <input type="checkbox" id="accept">This order contains a gift</input>
          </label>
          <button className="cart-checkout-btn" onClick={this.handleCheckout}>Proceed to checkout</button>
        </div>
      </div>
    )
  }
}

export default CartItemIndex;