import React from "react";
import { Link } from "react-router-dom";
import ProductIndex from "./product_index";

class ProductIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      const productId = this.props.product.id;
      this.props.history.push(`/products/${productId}`);
    }

    render() {
      return(
        <div className="list-items">
          <ul>
            <li><Link to={`/products/${this.props.product.id}`}>{this.props.product.product_name}</Link></li>
          </ul>
        </div>
      )
    }
  }

  export default ProductIndexItem;
  