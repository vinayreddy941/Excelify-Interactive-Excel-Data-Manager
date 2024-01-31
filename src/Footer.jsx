// Footer.js
import React from "react";
import "./style.css"; // Make sure to create a separate CSS file for styling

const Footer = () => {
  return (
    <footer className="bg-footer">
      <div className="footer__social">
        <a
          href="https://github.com/vinayreddy941"
          target="_blank"
          className="footer__social-link"
        >
          <i className="ri-github-fill"></i>
        </a>

        <a
          href="https://www.facebook.com/vinay.as.50596"
          target="_blank"
          className="footer__social-link"
        >
          <i className="ri-facebook-circle-fill"></i>
        </a>

        <a
          href="https://twitter.com/VinayReddy_941"
          target="_blank"
          className="footer__social-link"
        >
          <i className="ri-twitter-x-fill"></i>
        </a>

        <a
          href="https://www.instagram.com/vinay.tyr/"
          target="_blank"
          className="footer__social-link"
        >
          <i className="ri-instagram-fill"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/vinayeee2001/"
          target="_blank"
          className="footer__social-link"
        >
          <i className="ri-linkedin-fill"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
