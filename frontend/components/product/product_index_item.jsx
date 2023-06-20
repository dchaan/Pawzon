import React from "react";
import { Link } from "react-router-dom";
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
      const { product } = this.props;
      const shipDateArr = new Date(new Date().setDate(new Date().getDate() + 2)).toString().split(" ");
      const shipDate = `${shipDateArr[0]}, ${shipDateArr[1]} ${shipDateArr[2]}`;
      
      return(
        <div className="prod-box-container">
          <div className="prod-box-img-container">
            <Link to={`/products/${product.id}`}>
              <img className="prod-box-img" src={product.image_url}/>
            </Link>
          </div>
          <Link className="prod-title-link" to={`/products/${product.id}`}>
            {product.product_name}
          </Link>
          <div className="prod-rating">{}</div>
          <div className="prod-price"><b>${product.price}</b></div>
            <div className="prod-prime">
              <img src="images/prime.png" className="prod-prime-img"/>
              <div className="prod-free-ship">Free Delivery</div>
              </div>
            <div className="prod-get-soon">Get is as soon as <b>{shipDate}</b></div>
        </div>
      )
    }
  }

export default ProductIndexItem;
