import React from 'react';
import './Footer.css';
import logoIcon from '../../assets/logo_icon.svg'; // Replace with the path to your logo image
import instagramIcon from '../../assets/instagram.svg'; // Replace with the path to your Instagram icon
import facebookIcon from '../../assets/facebook.svg'; // Replace with the path to your Facebook icon
import twitterIcon from '../../assets/twitter.svg'; // Replace with the path to your Twitter icon

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-column">
          <h3>Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/discover-us">Discover Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Links</h3>
          <ul>
            <li><a href="/habitats">Habitats</a></li>
            <li><a href="/get-involved">Get Involved</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-column">
        <img src={logoIcon} alt="WildLife Logo" className="footer-logo" />
      </div>

      <div className="footer-contact">
        <address>
          WildLife Wonders Conservation Center<br />
          123 Wildlife Avenue<br />
          Greenfield, State, ZIP Code<br />
          011-234 567 9<br />
          <a href="mailto:wildlife@gmail.com">wildlife@gmail.com</a>
        </address>

        <div className="footer-social">
          <a href="https://www.instagram.com"><img src={instagramIcon} alt="Instagram" /></a>
          <a href="https://www.facebook.com"><img src={facebookIcon} alt="Facebook" /></a>
          <a href="https://www.twitter.com"><img src={twitterIcon} alt="Twitter" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
