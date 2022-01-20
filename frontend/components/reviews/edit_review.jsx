import React from "react";
import Rating from "react-rating";;

class EditReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: "",
      body: "",
      rating: 3,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchReview(this.props.reviewId, this.props.productId)
      .then(res => this.setState(() => {
        return {
          id: res.review.id,
          title: res.review.title,
          body: res.review.body,
          rating: res.review.rating
        };
      }))
  };

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  };

  updateReview(property) {
    return e => this.setState ({ [property]: e });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateReview(this.state, this.props.productId)
      .then(this.props.history.push(`/products/${this.props.productId}`));
  };

  render() {
    const fullPaw = <img src="/images/paw_full.png" className="review-form-paw-img" />
    const emptyPaw = <img src="/images/paw_empty.png" className="review-form-paw-img" /> 

    return (
      <div className="review-form">
        <form onSubmit={this.handleSubmit}>
          <div className="review-form-title">
            <div className="review-form-create-review">Edit Review</div>
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
            <div className="review-form-add-headline">Edit headline</div>
            <input className="review-form-headline-input" type="text" value={this.state.title} onChange={this.update("title")} />
          </div>
          <div className="review-form-body">
            <div className="review-form-add-body">Edit written review</div>
            <textarea className="review-form-body-input" value={this.state.body} onChange={this.update("body")} />
          </div>
          <br/>
          <button className="review-form-submit-btn">Submit</button>
        </form>
      </div>
    )
  }
}

export default EditReview;