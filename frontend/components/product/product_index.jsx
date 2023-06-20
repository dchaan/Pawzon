import React from "react";
import ProductIndexItem from "./product_index_item"

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props;
    const numResults = products.length;
    const productList = products.map(product => <ProductIndexItem key={product.id} product={product}/>)

    return (
      <div className="prod-index-container">
        <div className="num-results-container">
          <div className="num-results"><b>Showing {numResults} results</b></div>
        </div>
        <div className="prod-grid-container">{ productList }</div>
      </div>
    )
  }
}

export default ProductIndex;