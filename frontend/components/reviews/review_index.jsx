import React from "react";
import { Link } from "react-router-dom";

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteReview = this.handleDeleteReview.bind(this);
    this.handleUpdateReview = this.handleUpdateReview.bind(this);
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.productId);
  };

  handleDeleteReview() {
    return () => this.props.destroyReview(reviewId)
      .then(() => window.location.reload());
  };

  handleUpdateReview() {
    return () => this.props.history.push(`/products/${this.props.productId}/reviews/new`)
  }


  render() {

  }
}

export default ReviewIndex;