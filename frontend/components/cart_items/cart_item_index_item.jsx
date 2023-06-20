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
    const { deleteCartItem, cartItem } = this.props;
    e.preventDefault();
    deleteCartItem(cartItem);
  }

  render() {
    const { product_name, image_url, product_id, quantity, price } = this.props.cartItem;
    const total = this.state.quantity * price;

    return (
      <div className="cart-item-container">
        <div className="cart-item-left">
          <div className="cart-item-img-container">
            <Link className="cart-item-img-link" to={`/products/${product_id}`}>
              <img className="cart-item-img" src={image_url}/>
            </Link>
          </div>
          <div className="cart-item-details">
            <Link className="cart-item-title" to={`/products/${product_id}`}>
              {product_name}
            </Link>
            <div className="cart-item-prod-price">${price}</div>
            <div className="cart-item-stock">In stock</div>
            <div className="cart-item-prime">
              <img className="cart-prime-img" src="images/prime.png"/> 
              <div className="cart-free-returns"> & FREE Returns</div>
            </div>
            <div className="cart-gift">
              <input className="check" type="checkbox"></input> 
              <div className="cart-gift-text">This is a gift</div>
            </div>
            <div className="cart-item-quantity">
              <select className="cart-qty" type="submit" value={quantity} name="Qty" onChange={this.handleQuantity}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
              </select>
              <button className="cart-item-delete" type="submit" onClick={this.handleDeleteItem}>Delete</button>
              <button className="cart-item-save-for-later">Save for Later</button>
            </div>
          </div>
        </div>
        <div className="cart-item-right">
          <div className="cart-item-subtotal"><b>${total.toFixed(2)}</b></div>
        </div>
      </div>
    )
  }
} 

export default CartItemIndexItem;