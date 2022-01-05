import React from "react";
import { Link } from "react-router-dom";

class ReviewShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteReview = this.handleDeleteReview.bind(this);
  }

  handleDeleteReview(e) {
    e.preventDefault();
    this.props.deleteReview(this.props.review.id, this.props.productId)
  }

  render() {
    const { review, productId, currentUser, users } = this.props;
    const date = new Date(this.props.review.created_at).toString().split(" ").slice(0,3).join(" ");
    const randomNum = Math.floor(Math.random() * 100) + 1;
    // let name; 
    // users.forEach(user => {
    //   if (user.id === review.user_id) { name = user.first_name }
    // })

    // const deleteBtn = currentUser.id === review.user_id ? (
    //   <div>
    //     <button className="delete-review-btn" onClick={this.handleDeleteReview}>Delete</button>    
    //   </div>
    // ) : null
    
    return (
      <div className="review-item">
        {/* <div className="review-name">{name}</div> */}
        <div className="review-title">{review.title}</div>
        <div className="review-rating">{review.rating}</div>
        <div className="review-date">Reviewed in the United States on {date}</div>
        <div className="verified-purchase">Verified Purchase</div>
        <div className="review-body">{review.body}</div>
        <div className="review-randomnum">{randomNum} people found this helpful</div>
        <button className="helpful-btn">Helpful</button>
        <div className="report">Report</div>
        {/* {deleteBtn} */}
        </div>
    )
  }
}

export default ReviewShow;