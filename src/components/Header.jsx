import React from 'react';
import '../styles/Header.scss';

const Header = () => {
  return (
    <div className="header sticky-top">
      <div className="container">
        <div className="d-md-flex justify-content-md-between align-item-center">
          <h1 className="header__logo" data-aos="zoom-in" data-aos-delay="0">
            CompanyX
          </h1>
          <ul className="header__menu ">
            <li data-aos="fade-down" data-aos-delay="0">
              <a href="/">Home</a>
            </li>
            <li data-aos="fade-down" data-aos-delay="100">
              <a href="/">About</a>
            </li>
            <li data-aos="fade-down" data-aos-delay="200">
              <a href="/">Projects</a>
            </li>
            <li data-aos="fade-down" data-aos-delay="300">
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
