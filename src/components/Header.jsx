import React from 'react';
import '../styles/Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="d-md-flex justify-content-md-between align-item-center">
          <h1 className="header__logo">Company logo</h1>
          <ul className="header__menu ">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Gallery</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;