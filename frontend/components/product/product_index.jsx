import React from "react";
import ProductIndexItem from "./product_index_item"

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  

render() {
  const numResults = this.props.products.length;
    return (
      <div className="prod-index-container">
        <div className="num-results-container">
              <div className="num-results"><b>Showing {numResults} results</b></div>
            </div>
        <div className="prod-grid-container">
          {this.props.products.map(product => <ProductIndexItem key={product.id} product={product} /> )}
        </div>
      </div>
    )
  }
}

export default ProductIndex;