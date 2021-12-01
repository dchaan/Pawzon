import React from "react";
import { Link } from "react-router-dom";
import ReviewFormContainer from "../reviews/review_form_container";
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
        <br />
        <button className="product-new-review-btn"><Link to={`/products/${product.id}/reviews/new`}>Write a customer review</Link></button>
        <ReviewIndexContainer product={this.props.product} />
        {/* <ReviewFormContainer product={product}/> */}
        <br/>
        <button><Link to="/products">All Products</Link></button>
      </div>  
    )
  };
}

export default ProductShow;