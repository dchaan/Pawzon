import React from "react";
import { Link } from "react-router-dom";
import ReviewIndexContainer from "../reviews/review_index_container";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    console.log(this.props);
    const { product } = this.props;
    
    return (
      <div>
        {/* <img src={product.image_url} /> */}
        <h2>{product.product_name}</h2>
        <br/>
        Description: {product.description}
        <br/>
        Price: ${product.price}
        <br/>
        Rating: {product.rating}
        <br/>
        <br/>

        <div className="write-review-container">
          <div className="review-this-product">Review this product</div>
          <div className="share-your-thoughts">Share your thoughts with other customers</div>
          <button className="product-new-review-btn"><Link to={`/products/${product.id}/reviews/new`}>Write a customer review</Link></button>
        </div>

        <br />
        <br />

        <ReviewIndexContainer product={this.props.product} />
        <br/>
        <button><Link to="/products">All Products</Link></button>
      </div>  
    )
  };
}

export default ProductShow;