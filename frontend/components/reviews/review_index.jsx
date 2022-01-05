import React from "react";
import { Link } from "react-router-dom";
import ReviewShow from "./review_show"

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  update(field) {
    return e => { this.setState({ [field]: e.target.value }) }
  }

  render() {
    if (!this.props.reviews) return null;

    const reviews = this.props.reviews.reverse().map((review, i) => {
      if (review.product_id === this.props.product.id) {
        return <ReviewShow
          key={i}
          users={this.props.users}
          currentUser={this.props.currentUser}
          review={review}
          productId={this.props.product.id}
          fetchReviews={this.props.fetchReviews}
          deleteReview={this.props.deleteReview}
        />
      }
    })

    return(
      <div>
        {reviews}
      </div>
    )
  }
}

export default ReviewIndex;