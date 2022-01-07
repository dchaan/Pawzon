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

  handleCheckout(e) {
    e.preventDefault();
    this.props.cartItems.forEach(cartItem => {
      this.props.deleteCartItem(cartItem)
    });
    this.setState({ checkout: <div className="checkout-msg">Thank you for your order.</div>})
  }

  

  render() {
    const { fetchCartItems, updateCartItem, deleteCartItem } = this.props;

    let subtotal = 0;
    this.props.cartItems.forEach(cartItem => {
      subtotal += cartItem.price * cartItem.quantity
    });

    let totalItems = 0;
    this.props.cartItems.forEach(cartItem => {
      totalItems += cartItem.quantity
    });

    return (
      <div className="cart-container">
        <div className="cart-left">
          <div className="cart-header">
            <div className="cart-heading">Shopping Cart</div>
            <div className="cart-price">Price</div>
          </div>

          <div className="checkout-product-item">
            {(this.props.cartItems.length === 0) ?
              <div className="cart-empty">Your Pawzon cart is empty.</div> :
                this.props.cartItems.map(cartItem => (
                  <CartItemIndexItem
                    key={cartItem.id}
                    cartItem={cartItem}
                    fetchCartItems={fetchCartItems}
                    updateCartItem={updateCartItem}
                    deleteCartItem={deleteCartItem}
                  />
                  )
                )
            }
            <div className="cart-subtotal-container">
              <div className="cart-subtotal">Subtotal ({totalItems} item(s)): <b>${subtotal.toFixed(2)}</b></div>
            </div>
          </div>
        </div>
        <div className="cart-right">
          <div className="cart-checkout-container">
            <div className="cart-checkout-subtotal">Subtotal ({totalItems} item(s)): <b>${subtotal.toFixed(2)}</b></div>
            <div className="cart-right-gift">
              <input className="cart-right-check" type="checkbox"></input>
              <div className="cart-right-gift-text">This is a gift</div>
            </div>
            <button className="cart-checkout-btn" onClick={e => this.handleCheckout(e)}>Proceed to checkout</button>
          </div>
        </div>
      </div>
    )
  }
}

export default CartItemIndex;