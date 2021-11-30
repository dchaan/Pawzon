import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="footer">
    <div className="footer-links">
      <Link to="/"><img src="images/pawzon.png"/></Link>
      <a href="https://github.com/dchaan"><i className="fab fa-github-square"></i></a>
      <a href="https://www.linkedin.com/in/david-chan-4b1929185/"><i className="fab fa-linkedin"></i></a>
    </div>
    <div className="footer-description">
      Pawzon is a clone of Amazon.
      <br/>
      This app was created using Javascript, React, Redux, Ruby, and Rails.
    </div>
  </div>
);

export default Footer;