import React from "react";
import { Link } from "react-router-dom";
import ReviewShow from "./review_show"

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.product_id)
  }

  update(field) {
    return e => { this.setState({ [field]: e.target.value }) }
  }

  render() {
    if (!this.props.reviews) return null;

    const reviews = this.props.reviews.reverse().map((review, i) =>
      <ReviewShow
        key={i}
        users={this.props.users}
        currentUser={this.props.currentUser}
        review={review}
        fetchReviews={this.props.fetchReviews}
        productId={this.props.product.id}
      />
    )

    return(
      <div>
        {reviews}
      </div>
    )
  }
}

export default ReviewIndex;