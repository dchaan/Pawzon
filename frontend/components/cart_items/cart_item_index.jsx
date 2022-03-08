import React from "react";
import CartItemIndexItem from "./cart_item_index_item";
import { Link } from "react-router-dom";

class CartItemIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleCheckout = this.handleCheckout.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser) this.props.fetchCartItems();
  }

  handleCheckout(e) {
    e.preventDefault();
    const { cartItems, deleteCartItem, history } = this.props;

    cartItems.forEach(cartItem => {
      deleteCartItem(cartItem)
    });
    history.push("/checkout");
  }

  render() {
    const { fetchCartItems, updateCartItem, deleteCartItem, cartItems } = this.props;
    let subtotal = 0;
    let totalItems = 0;

    cartItems.forEach(cartItem => {
      subtotal += cartItem.price * cartItem.quantity
      totalItems += cartItem.quantity
    });

    const anyCartItems = cartItems.length === 0 ? 
      <div className="cart-empty">Your Pawzon cart is empty.</div> : 
      cartItems.map(cartItem => (
        <CartItemIndexItem
          key={cartItem.id}
          cartItem={cartItem}
          fetchCartItems={fetchCartItems}
          updateCartItem={updateCartItem}
          deleteCartItem={deleteCartItem}
        />
      ))

    return (
      <div className="cart-container">
        <div className="cart-left">
          <div className="cart-header">
            <div className="cart-heading">Shopping Cart</div>
            <div className="cart-price">Price</div>
          </div>
          <div className="checkout-product-item">
            { anyCartItems }
            <div className="cart-subtotal-container">
              <div className="cart-subtotal">Subtotal ({totalItems} items): <b>${subtotal.toFixed(2)}</b></div>
            </div>
          </div>
        </div>
        <div className="cart-right">
          <div className="cart-checkout-container">
            <div className="cart-checkout-subtotal">Subtotal ({totalItems} items): <b>${subtotal.toFixed(2)}</b></div>
            <div className="cart-right-gift">
              <input className="cart-right-check" type="checkbox"></input>
              <div className="cart-right-gift-text">This is a gift</div>
            </div>
            <button className="cart-checkout-btn" onClick={this.handleCheckout}>Proceed to checkout</button>
          </div>
        </div>
      </div>
    )
  }
}

export default CartItemIndex;