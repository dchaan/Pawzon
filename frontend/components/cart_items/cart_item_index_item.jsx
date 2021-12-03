import React from "react";
import { Link } from "react-router-dom";

class CartItemIndexItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = this.props.cartItem;
    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  componentDidMount() {
    this.props.fetchCartItems();
  }

  handleQuantity(e) {
    e.preventDefault();
    let nextCartItemState = Object.assign({}, this.state, {
      product_id: this.state.productId,
      quantity: e.currentTarget.value
    });
    this.setState({ quantity: e.currentTarget.value });
    this.props.updateCartItem(nextCartItemState);
  }

  handleDeleteItem(e) {
    e.preventDefault();
    this.props.deleteCartItem(this.props.cartItem);
  }

  render() {
    const { product_name, product_id, quantity, price } = this.props.cartItem;
    const total = this.state.quantity * price;

    return (
      <div className="cart-item-container">
        <Link className="cart-item-title" to={`/products/${product_id}`}>{product_name}</Link>
        <div className="cart-item-subtotal"><b>${total}</b></div>
        <div className="cart-item-stock">In stock</div>

        <div className="cart-item-prime">
            <img className="cart-prime-img" src="images/prime.png" /> <div className="cart-free-returns"> & FREE Returns</div>
        </div>

        <div className="cart-gift">
          <input className="check" type="checkbox"></input> 
          <div className="cart-gift-text">This is a gift</div>
        </div>

        <div className="cart-item-quantity">
          <select className="cart-qty" type="submit" value={quantity} name="Qty" onChange={e => this.handleQuantity(e)}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button className="cart-item-delete" type="submit" onClick={this.handleDeleteItem}>Delete</button>
          <button className="cart-item-save-for-later">Save for Later</button>
        </div>

        
        
      </div>
    )
  }
} 

export default CartItemIndexItem;