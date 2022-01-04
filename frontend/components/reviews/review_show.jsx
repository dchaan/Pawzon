import React from "react";
import { Link } from "react-router-dom";

class ReviewShow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { review } = this.props;
    
    return (
      <div>
        {review.title}
        {review.body}
      </div>
    )
  }
}

export default ReviewShow;