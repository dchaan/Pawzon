import React from "react";
import { Link } from "react-router-dom";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { product } = this.props;

    return (
      <div>
        <h4>{product.product_name}</h4>
        <br/>
        Description: {product.description}
        <br/>
        Price: ${product.price}
        <br/>
        Rating: {product.rating}
        <br/>
        <button><Link to="/products">All Products</Link></button>
      </div>
    )
  };
}

export default ProductShow;