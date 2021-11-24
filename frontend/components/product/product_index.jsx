import React from "react";
import ProductIndexItem from "./product_index_item"

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    
  }
}

export default ProductIndex;