import React from "react";
import Navbar from "./navbar/navbar";
import NavbarContainer from "./navbar/navbar_container";
import ProductIndexContainer from "./product/product_index_container";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <NavbarContainer />
        <ProductIndexContainer />
      </div>
    )
  }
}

export default Homepage;