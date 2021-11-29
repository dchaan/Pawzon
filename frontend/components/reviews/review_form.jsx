import React from "react";
import Rating from 'react-rating';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.reviews;
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  
  update(field) {
    return e => this.setState({ [field]: e.target.value })
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state, this.productId)
      .then(() => this.props.history.push(`/products/${this.props.productId}`))
  };

  render() {
    return (
      <div className="reviewForm">
        <form onSubmit={this.handleSubmit}>
          <h2>Create Review</h2>
          <br />

          <h3>{this.props.product.name}</h3>
          <br />

          <h4>Overall Rating</h4>
          {/* rating */}

          <h4>Add a headline</h4>
          <input className="review-form-headline-input" type="text" value={this.state.title} onChange={this.update("title")} placeholder="What's most important to know?" />
          <h4>Add a written review</h4>
          <textarea className="review-form-body-input" value={this.update("body")} placeholder="What did you like or dislike? What did you use this product for?" />

          <button className="review-form-submit-btn">Submit</button>

        </form>
      </div>
    )
  }
}

export default ReviewForm;
