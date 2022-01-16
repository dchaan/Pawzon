import React from "react";
import { Link } from "react-router-dom";
import ReviewIndexContainer from "../reviews/review_index_container";
import Rating from "react-rating";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      rating: 3,
      reviews: this.props.reviews
    };
    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.checkCartItem = this.checkCartItem.bind(this);
    this.handleBuyNow = this.handleBuyNow.bind(this);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.productId);
    this.props.fetchReviews(this.props.productId);
  }

  handleQuantity(e) {
    e.preventDefault();
    this.setState({ quantity: e.currentTarget.value });
  }

  checkCartItem() {
    let variable = false;
    this.props.cartItems.forEach(cartItem => {
      if (cartItem.product_id === this.props.product.id) { 
        variable = true;
      } else {
        false;
      }
    });
    return variable;
  }

  handleAddToCart(e) {
    e.preventDefault;
    let currentCartItemId;
    let currentQuantity;
    
    this.props.cartItems.forEach(cartItem => {
      if (cartItem.product_id === this.props.product.id) {
        currentCartItemId = cartItem.id;
        currentQuantity = cartItem.quantity;
      };
    });

    const cartItem = {
      product_id: this.props.productId,
      user_id: this.props.user,
      quantity: this.state.quantity
    };
    
    const updatedCartItem = {
      id: currentCartItemId,
      product_id: this.props.productId,
      user_id: this.props.user,
      quantity: parseFloat(this.state.quantity) + parseFloat(currentQuantity)
    };

    if (!this.props.currentUser) { 
      this.props.history.push("/login"); 
    } else if (this.checkCartItem()) {
      this.props.updateCartItem(updatedCartItem)
        .then(this.props.history.push("/cart"));
    } else {
      this.props.createCartItem(cartItem)
        .then(this.props.history.push("/cart"));
    }
  }

  handleBuyNow(e) {
    if (!this.props.currentUser) { this.props.history.push("/login"); } 
    if (this.props.cartItems) {
      this.props.cartItems.forEach(cartItem =>
        this.props.deleteCartItem(cartItem));
    }
    this.props.history.push("/checkout")
  }
  
  render() {
    console.log(this.props)
    const { product, productId, reviews } = this.props;
    const shipDateArr = new Date(new Date().setDate(new Date().getDate() + 2)).toString().split(" ");
    const shipDate = `${shipDateArr[0]}, ${shipDateArr[1]} ${shipDateArr[2]}`;
    const returnDateArr = new Date(new Date().setDate(new Date().getDate() + 30)).toString().split(" ");
    const returnDate = `${returnDateArr[1]} ${returnDateArr[2]}, ${returnDateArr[3]}`;
    const fullPaw = <img src="/images/paw_full.png" className="product-review-paw-img"/>
    const emptyPaw = <img src="/images/paw_empty.png" className="product-review-paw-img"/> 
    let ratingCount = 0;
    let ratings = 0;

    reviews.map(review => {
      if (review.product_id === parseInt(productId)) {
        ratings += review.rating;
        ratingCount++;
      }
    });
    const avgRatings = (ratings / ratingCount);

    if (!product) return null;

    return (
      <div className="product-container">
        <div className="prod-details">
          <div className="prod-img-container">
            <img className="product-img" src={product.photoUrl} />
          </div>
          <div className="product-about">
            <div className="product-name">{product.product_name}</div>
            <div className="product-rating-container">
              <Rating
                initialRating={avgRatings}
                fullSymbol={fullPaw}
                emptySymbol={emptyPaw}
                readonly={true}
              />
              <div className="product-rating-count">{ratingCount} Ratings</div>
            </div>
            <div className="product-price-container">
              <div className="product-price">Price: ${product.price} <img className="prime" src="images/prime.png" /></div>
              <div className="product-free-returns">& FREE Returns</div>
            </div>
            <div className="product-desc-title">About this item</div>
            <div className="product-description">
              {product.description.split(",").map((bullet, i) => {
                return (
                  <li key={i}>{bullet}</li>
                ) 
              })}
            </div>    
          </div>

          <div className="product-checkout">
            <div className="product-checkout-price">${product.price}</div>
            <div className="product-checkout-prime">
              <img className="prime-checkout" src="images/prime.png"/> 
              <div className="product-checkout-free-returns"> & FREE Returns</div>
            </div>
            <div className="product-date">
              <div className="product-free-delivery">FREE Delivery:</div>
              <div className="product-ship-date">{shipDate}</div>
            </div>
            <div className="product-delivery">
              <img className="product-checkout-location-img" src="images/product-location.png"/> 
              <div className="prod-deliver-loc">Deliver to {this.props.currentUser ? this.props.currentUser.first_name : null} - Pacifica 94044</div>
            </div>
            <div className="product-stock">In Stock.</div>
            <form className="product-checkout-form">
              <label className="product-quantity" htmlFor="qty">
                <select id="qty" onChange={this.handleQuantity} value={this.state.quantity}>
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
              </label>
              <br/>
              <div className="atc"><button className="product-add-to-cart" onClick={this.handleAddToCart}>Add to Cart</button></div>
            </form>
            <div className="buy-now"><button className="product-buy-now" onClick={this.handleBuyNow}>Buy Now</button></div>
            <div className="secure-container">
              <img className="lock-img" src="images/lock.png"/>
              <div className="secure-trans">Secure Transaction</div>
            </div>
            <div className="product-ship-sold-container">
              <div className="product-ship-and-sold-by">Ships from Pawzon.com</div>
              <div className="product-ship-and-sold-by">Sold from Pawzon.com</div>
            </div>
            <div className="product-return-container">
              <div className="return-policy">Return Policy: </div>
              <div className="return-date">Returnable until {returnDate}</div>
            </div>
          </div>
        </div>
        <div className="review-container">
          <div className="write-review-container">
            <div className="review-this-product">Review this product</div>
            <div className="share-your-thoughts">Share your thoughts with other customers</div>
            {
              this.props.user ? 
                <button className="product-new-review-btn">
                  <Link className="write-review-link" to={`/products/${product.id}/reviews/new`}>
                    <div className="review-btn-txt">Write a customer review</div>
                  </Link>
                </button> 
            :
                <button className="product-new-review-btn">
                  <Link className="write-review-link" to={`/login`}>
                    <div className="review-btn-txt">Write a customer review</div>
                  </Link>
                </button>
            }
          </div>
          <div className="review-index-container">
            <div className="reviews-headline">Top Reviews from the United States</div>
            <ReviewIndexContainer product={product}/>
          </div>
        </div>
      </div>  
    )
  };
}

export default ProductShow;