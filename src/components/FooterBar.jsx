import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import '../styles/FooterBar.scss';

const FooterBar = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="footer-bar">
      <div className="container">
        <div className="row">
          <div className="col-12 footer-bar__container">
            <small>&#169; copyright@{year}</small>
            <div className="footer-bar__social">
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBar;
