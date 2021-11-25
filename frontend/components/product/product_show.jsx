import React from "react";

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
        {product.description}
        <br/>
        {product.price}
        <br/>
        {product.rating}
      </div>
    )
  };
}

export default ProductShow;