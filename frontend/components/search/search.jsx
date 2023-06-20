import React from "react";
import { withRouter } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { fetchProducts, history } = this.props;
    fetchProducts(this.state.word).then(history.push("/products"));
    this.setState({ word: "" });
  }

  render() {
    return (
      <div className="search-container">
        <form onSubmit={this.handleSubmit} className="searchbar-form">
          <input type="text" value={this.state.word} onChange={this.update("word")} className="searchbar-input"/>
          <button className="search-btn" type="submit">
            <img src="/images/search-icon.png" className="search-img"/>
          </button>
        </form>
      </div>
    )
  }
}

export default withRouter(Search);