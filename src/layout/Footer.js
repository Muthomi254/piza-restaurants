import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <div className="container text-center">
        <p>&copy; FOR ENQUIRIES PLEASE CONTACT US</p>
        <div className="social-icons">
          <FontAwesomeIcon icon={faFacebook} className="icon me-3" />
          <FontAwesomeIcon icon={faInstagram} className="icon me-3" />
          <FontAwesomeIcon icon={faTwitter} className="icon me-3" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
