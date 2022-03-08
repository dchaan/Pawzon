import React from "react";
import ReviewShow from "./review_show"

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  update(field) {
    return e => { this.setState({ [field]: e.target.value }) }
  }

  render() {
    const { reviews, product, users, currentUser, fetchReviews, deleteReview } = this.props;
    if (!reviews) return null;

    const reviewsList = reviews.reverse().map((review, i) => {
      if (review.product_id === product.id) {
        return <ReviewShow
          key={i}
          users={users}
          currentUser={currentUser}
          review={review}
          productId={product.id}
          fetchReviews={fetchReviews}
          deleteReview={deleteReview}
        />
      }
    })

    return(
      <div>
        {reviewsList}
      </div>
    )
  }
}

export default ReviewIndex;