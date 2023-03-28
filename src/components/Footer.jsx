import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

import '../styles/Footer.scss';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            {/* first column   */}
            <div className="col-md-4 col-sm-6">
              <div className="footer__widget">
                <h4>About Us</h4>
                <p>
                  From concept to launch, we pride ourselves on delivering
                  high-quality, reliable, and user-friendly solutions that
                  exceed expectations.
                </p>
                <p>
                  Contact us today to learn more about how we can help take your
                  business to the next level.
                </p>
              </div>
            </div>
            {/* second column   */}
            <div className="col-md-4 col-sm-6">
              <div className="footer__widget">
                <h4>Services</h4>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faAnglesRight} size="1x" />{' '}
                    <a href="#services">Web development</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faAnglesRight} size="1x" />{' '}
                    <a href="#services">App development</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faAnglesRight} size="1x" />{' '}
                    <a href="#services">UI/UX Design</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Third Column  */}
            <div className="col-md-4 col-sm-6">
              <div className="footer__widget">
                <h4>Address</h4>
                <address>
                  <b>Meta solutions</b>
                  <br />
                  249 Wrong Turn, Unknown <br />
                  Wakanda, 271580 <br />
                  Phone : (999) 48648945
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
