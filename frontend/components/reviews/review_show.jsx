import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";

class ReviewShow extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDelete(e) {
    e.preventDefault();
    const { deleteReview, review, productId } = this.props;
    deleteReview(review.id, productId);
  }

  render() {
    const { review, productId, currentUser } = this.props;
    const date = new Date(this.props.review.created_at).toString().split(" ").slice(1,4).join(" ");
    const randomNum = Math.floor(Math.random() * 100) + 1;
    const randomSize = Math.floor(Math.random() * 3) + 1;
    const fullPaw = <img src="/images/paw_full.png" className="paw-img"/>
    const emptyPaw = <img src="/images/paw_empty.png" className="paw-img"/>
    const deleteEditReview = currentUser ? currentUser.id === review.user_id ?
      <div>
        <div className="edit-delete">
          <button className="edit-delete-btn" onClick={e => this.handleDelete(e)}>Delete</button>
        </div>
        <div className="edit-delete">
          <Link to={`/products/${productId}/reviews/${review.id}`}><button className="edit-delete-btn">Edit</button></Link>
        </div>
      </div> : null : null

    
    return (
      <div className="review-item">
        <div className="review-row-one">
          <div className="review-user-img-container">
            <img src="/images/user.png" className="user-img"/>
          </div>
          <div className="review-name">{review.first_name}</div>
        </div>
        <div className="review-row-two">
          <div className="review-rating-container">
            <Rating className="review-rating-paws"
              initialRating={review.rating}
              fullSymbol={fullPaw}
              emptySymbol={emptyPaw}
              readonly={true}
            />
          </div>
          <div className="review-title">{review.title}</div>
        </div>
        <div className="review-date">Reviewed in the United States on {date}</div>
        <div className="review-row-three">
          <div className="review-size">Size: Pack of {randomSize}</div>
          <div className="verified-purchase">Verified Purchase</div>
        </div>
        <div className="review-body">{review.body}</div>
        <div className="review-randomnum">{randomNum} people found this helpful</div>
        <div className="review-row-four">
          <div className="helpful"><button className="helpful-btn">Helpful</button></div>
          <div className="report">Report abuse</div>
          <div className="edit-delete-container">{deleteEditReview}</div>
        </div>
      </div>
    )
  }
}

export default ReviewShow;