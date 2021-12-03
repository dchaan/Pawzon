import React from "react";
import { Link } from "react-router-dom";
import ReviewIndexContainer from "../reviews/review_index_container";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      rating: 5,
      reviews: this.props.reviews
    };
    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId)
  }

  handleQuantity(e) {
    e.preventDefault();
    this.setState({ quantity: e.currentTarget.value });
  }

  handleAddToCart(e) {
    e.preventDefault;
    if (!this.props.user) {
      this.props.history.push("/login");
    } else {
      const productId = this.props.product.id;
      const cart_item = {
        product_id: productId,
        user_id: this.props.user,
        quantity: this.state.quantity
      };
      this.props.createCartItem(cart_item)
      this.props.history.push("/cart");
    }
  }
  
  render() {
    const { product } = this.props;
    if (!product) return null;
    return (
      <div className="product-container">
        <div className="prod-container">
          <img className="product-img" src={product.image_url} />
          <div className="product-about">
            <div className="product-name">{product.product_name}</div>
            <div className="product-rating">Rating: {product.rating}</div>
            <div className="product-price-container">
              <div className="product-price">Price: ${product.price} <img className="prime" src="images/prime.png" /></div>
              <div className="product-free-returns">& FREE Returns</div>
            </div>
            <div className="product-desc-title">About this item</div>
            <div className="product-description">{product.description}</div>
            
          </div>

          <div className="product-checkout">
            <div className="product-checkout-price">${product.price}</div>
            <div className="product-checkout-prime">
              <img className="prime-checkout" src="images/prime.png"/> <div className="product-checkout-free-returns"> & FREE Returns</div>
            </div>
            <div className="product-checkout-free-delivery">FREE Delivery</div>
            <div className="product-checkout-delivery"><img className="product-checkout-location-img" src="images/product-location.png"/> Deliver to {this.props.currentUser ? this.props.currentUser.first_name : null} - Pacifica 94044</div>
            <div className="product-stock">In Stock.</div>
            <form className="product-checkout-form">
              <label className="product-quantity" htmlFor="qty">
                <select id="qty" onChange={this.handleQuantity} value={this.state.quantity}>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </label>
              <br/>
              <div className="atc"><button className="product-add-to-cart" onClick={this.handleAddToCart}>Add to Cart</button></div>
            </form>
            <div className="buy-now"><button className="product-buy-now">Buy Now</button></div>
            <div className="product-ship-and-sold-by">Ships & sold from Pawzon.com</div>
          </div>
        </div>

        <div className="write-review-container">
          <div className="review-this-product">Review this product</div>
          <div className="share-your-thoughts">Share your thoughts with other customers</div>
          <button className="product-new-review-btn"><Link className="write-review-link" to={`/products/${product.id}/reviews/new`}><div className="review-btn-txt">Write a customer review</div></Link></button>
        </div>

        <br />
        <br />

        <ReviewIndexContainer product={this.props.product} />
      </div>  
    )
  };
}

export default ProductShow;