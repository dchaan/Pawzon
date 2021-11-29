import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchProducts(this.state.query)
      .then(() => this.props.history.push("/products"))
  }
}