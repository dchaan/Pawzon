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
      console.log(this.props.product.image_url);
      return(
        <div className="list-items">
          <div className="home-grid">
            <Link className="home-prod-link" to={`/products/${this.props.product.id}`}>
              {this.props.product.product_name}
            </Link>
            <Link to={`/products/${this.props.product.id}`}>
              <img className="prod-img-home" src={this.props.product.image_url} />
            </Link>
          </div>
        </div>
      )
    }
  }

  export default ProductIndexItem;
  