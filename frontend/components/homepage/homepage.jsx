import React from "react";
import { Link } from "react-router-dom";
import ProductIndexContainer from "../product/product_index_container";

class Homepage extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-img-container">
          <img src="/images/puppy_background.png" className="home-img"/>
        </div>
        <div className="home-box-container">
          <div className="home-box">
            <div className="home-box-head">Deal of the Day</div>
            <div className="home-box-deal-img-container">
              <Link to="/products/13">
                <img src="https://m.media-amazon.com/images/I/7182W-HNhDL._AC_SL1500_.jpg" className="home-box-deal-img"/>
              </Link>
            </div>
              <Link to="/products/13" className="home-prod-link">
                <div className="home-box-prod-name">Reversible Plaid Dog Vest</div>
              </Link>
            <div className="home-box-price"><b>$18.99</b></div>
          </div>
          <div className="home-box">
            <div className="home-box-head">Explore More Items</div>
            <div className="home-box-sub-box-container">
              <div className="home-box-sub-img-container">
                <Link to="/products/16">
                  <img src="https://m.media-amazon.com/images/I/81lnHom3JPL._AC_SL1500_.jpg" className="home-box-sub-img"/>
                </Link>
              </div>
              <div className="home-box-sub-img-container">
                <Link to="/products/8">
                  <img src="https://m.media-amazon.com/images/I/81nCeEP+oeL._AC_SL1500_.jpg" className="home-box-sub-img"/>
                </Link>
              </div>
              <div className="home-box-sub-img-container">
                <Link to="/products/3">
                  <img src="https://m.media-amazon.com/images/I/7186klacOtL._AC_SL1500_.jpg" className="home-box-sub-img"/>
                </Link>
              </div>
              <div className="home-box-sub-img-container">
                <Link to="/products/12">
                  <img src="https://m.media-amazon.com/images/I/81YSdPdKGHL._AC_SL1500_.jpg" className="home-box-sub-img"/>
                </Link>
              </div>
            </div>
          </div>
          <div className="home-box">
            <div className="home-box-head">Keep Your Pup Busy</div>
            <div className="home-box-img-container">
              <Link to="/products/9">
                <img src="https://m.media-amazon.com/images/I/61YeX9yhUhL._AC_SL1500_.jpg" className="home-box-img"/>
              </Link>
            </div>
          </div>
          <div className="home-box-returns-container">
            <div className="home-box-sub-box">
              <div className="home-box-head">Easy Returns</div>
              <div className="home-box-details">Pawzon has flexible return shipping on orders & gifts</div>
            </div>
          </div>
          <div className="home-box">
            <div className="home-box-head">New Year New Me</div>
            <div className="home-box-img-container">
              <Link to="/products/6">
                <img src="https://m.media-amazon.com/images/I/818miVEklmL._AC_SL1500_.jpg" className="home-box-img"/>
              </Link>
            </div>
          </div>
          <div className="home-box">
            <div className="home-box-head">Make Walks Less Smelly</div>
            <div className="home-box-img-container">
              <Link to="/products/18">
                <img src="https://m.media-amazon.com/images/I/71Ks+Gy4XvL._AC_SL1500_.jpg" className="home-box-img"/>
              </Link>
            </div>
          </div>
          <div className="home-box">
            <div className="home-box-head">Thirsty?</div>
            <div className="home-box-img-container">
              <Link to="/products/7">
                <img src="https://m.media-amazon.com/images/I/7191kVHN7sS._AC_SL1440_.jpg" className="home-box-img"/>
              </Link>
            </div>
          </div>
          <div className="home-box">
            <div className="home-box-head">New Cuddle Spot</div>
            <div className="home-box-img-container">
              <Link to="/products/1">
                <img src="https://m.media-amazon.com/images/I/71eNn7rDAPL._AC_SL1500_.jpg" className="home-box-img"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )


    // return (
    //   <div>
    //     <ProductIndexContainer />
    //   </div>
    // )
  }
}

export default Homepage;