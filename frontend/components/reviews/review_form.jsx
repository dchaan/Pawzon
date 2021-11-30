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
      <div className="reviewForm">
        <form onSubmit={this.handleSubmit}>

          <div className="review-form-create-review">
            <h3>Create Review</h3>
            <h4>{this.props.product.product_name}</h4>
          </div>

          <div className="review-form-overall-rating">
            <h4>Overall Rating</h4>
            {/* rating */}
          </div>

          <div className="review-form-headline">
            <h4>Add a headline</h4>
            <input className="review-form-headline-input" type="text" value={this.state.title} onChange={this.update("title")} placeholder="What's most important to know?" />
          </div>

          <div className="review-form-body">
            <h4>Add a written review</h4>
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
