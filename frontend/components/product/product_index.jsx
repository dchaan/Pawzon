import React from "react";
import ProductIndexItem from "./product_index_item"

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCartItems();
    this.props.fetchProducts();
  }

  render() {
    return (
      <div>
        {this.props.products.map(product => <ProductIndexItem key={product.id} product={product} /> )}
      </div>
    )
  }
}

export default ProductIndex;