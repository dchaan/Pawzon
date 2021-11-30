import React from "react";
import { Link } from "react-router-dom";
import ReviewFormContainer from "../reviews/review_form_container";

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
        <ReviewFormContainer product={product}/>
        <br/>
        <button><Link to="/products">All Products</Link></button>
      </div>  
    )
  };
}

export default ProductShow;