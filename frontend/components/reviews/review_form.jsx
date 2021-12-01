import React from "react";
import Rating from 'react-rating';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  
  update(field) {
    return e => this.setState({ [field]: e.target.value })
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state)
      .then(() => this.props.history.push(`/products/${this.props.review.product_id}`))
  };

  render() {
    return (
      <div className="review-form">
        <form onSubmit={this.handleSubmit}>

          <div className="review-form-title">
            <div className="review-form-create-review">Create Review</div>
            {/* <div className="review-form-productname">{this.state.product_id.product_name}</div> */}
          </div>

          <div className="review-form-overall-rating">
            <div className="review-form-overall-rating">Overall Rating</div>
            {/* rating */}
          </div>

          <div className="review-form-headline">
            <div className="review-form-add-headline">Add a headline</div>
            <input className="review-form-headline-input" type="text" value={this.state.title} onChange={this.update("title")} placeholder="What's most important to know?" />
          </div>

          <div className="review-form-body">
            <div className="review-form-add-body">Add a written review</div>
            <textarea className="review-form-body-input" value={this.state.body} onChange={this.update("body")} placeholder="What did you like or dislike? What did you use this product for?" />
          </div>

          <br/>
          <button className="review-form-submit-btn">Submit</button>

        </form>
      </div>
    )
  }
}

export default ReviewForm;
