import React from "react";
import Rating from 'react-rating';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  
  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  };

  updateReview(property) {
    return e => this.setState ({ [property]: e })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state)
      .then(() => this.props.history.push(`/products/${this.props.review.product_id}`))
  };

  render() {
    const fullPaw = <img src="/images/paw_full.png" className="review-form-paw-img" />
    const emptyPaw = <img src="/images/paw_empty.png" className="review-form-paw-img" /> 

    return (
      <div className="review-form">
        <form onSubmit={this.handleSubmit}>
          <div className="review-form-title">
            <div className="review-form-create-review">Create Review</div>
          </div>
          <div className="review-form-overall-rating-container">
            <div className="review-form-overall-rating">Overall Rating</div>
            <Rating className="review-form-rating-paws"
              initialRating={this.state.rating}
              fullSymbol={fullPaw}
              emptySymbol={emptyPaw}
              onChange={this.updateReview("rating")}
            />
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
