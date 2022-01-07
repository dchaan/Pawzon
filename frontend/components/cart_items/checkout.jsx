import React from "react";

class Checkout extends React.Component {
  render() {
    return(
      <div className="checkout-container">
        <div className="checkout-box">
          <div className="checkout-header">
            Thank you, your order has been placed.
          </div>
          <div className="checkout-sub">Thank you for using Pawzon.com</div>
        </div>
      </div>
    )
  }
}

export default Checkout;