import React from "react";
import { Link } from "react-router-dom";

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      title: this.props.title,
      body: this.props.body,
      rating: this.props.rating,
      user_id: this.props.userId,
      product_id: this.props.productId
    };
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.product.id)
  }

  update(field) {
    return e => { this.setState({ [field]: e.target.value }) }
  }

  render() {
    return(
      <div className="review-container" key={this.state.id}>
        <div className="review-user">{this.state.user_id}</div>
        <div className="review-rating">{this.state.rating}</div>
        <div className="review-title">{this.state.title}</div>
        <div className="review-body">{this.state.body}</div>
        <div className="review-helpful"><button className="review-helpful-btn">Helpful</button></div>
      </div>
    )
  }
}

export default ReviewIndex;