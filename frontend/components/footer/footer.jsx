import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="footer-container">
    <div className="footer-back-to-top">
      Back to top
    </div>
    <div className="footer-links-container">
      <Link to="/">
        <img src="images/pawzon-footer.png" className="footer-logo"/>
      </Link>
      <a href="https://github.com/dchaan" target="_blank">
        <img src="/images/github.png" className="footer-img"/>
      </a>
      <a href="https://www.linkedin.com/in/david-chan-4b1929185/" target="_blank">
        <img src="/images/linkedin.png" className="footer-img"/>
      </a>
      <a href="https://dchaan.github.io/Portfolio/" target="_blank">
        <img src="/images/portfolio.png" className="footer-img"/>
      </a>
    </div>
    <div className="footer-bottom">
      <div className="footer-description">
        Pawzon is a clone of Amazon. Real transacations cannot be made.<br/>
        This app was created using Javascript, React, Redux, Ruby on Rails, PostgreSQL, JBuilder, Git, AWS S3.
      </div>
    </div>
  </div>
);

export default Footer;