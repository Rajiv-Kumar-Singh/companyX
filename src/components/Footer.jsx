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
            <div className="col-md-4">
              <div className="footer__widget">
                <h4>About Us</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Natus tenetur, nobis rerum quas.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quaerat et iusto facere a eligendi perferendis.
                </p>
              </div>
            </div>
            {/* second column   */}
            <div className="col-md-4">
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
            <div className="col-md-4">
              <div className="footer__widget">
                <h4>Address</h4>
                <address>
                  <b>CompanyX</b>
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
