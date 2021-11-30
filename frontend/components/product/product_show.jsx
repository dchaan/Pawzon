import React from "react";
import { Link } from "react-router-dom";
import ReviewForm from "../reviews/review_form";
import ReviewFormContainer from "../reviews/review_form_container";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { product } = this.props;
    
    return (
      <div>
        {/* <img src={product.image_url} /> */}
        <h4>{product.product_name}</h4>
        <br/>
        Description: {product.description}
        <br/>
        Price: ${product.price}
        <br/>
        Rating: {product.rating}
        <br/>
        <button><Link to="/products">All Products</Link></button>
        {/* <ReviewForm /> */}
        <ReviewFormContainer product={product}/>
      </div>  
    )
  };
}

export default ProductShow;