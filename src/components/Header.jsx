import React from 'react';
import '../styles/Header.scss';

const Header = () => {
  function showHideNavbar() {
    const navLinksDisplay = document.getElementById('header__nav-links');
    const iconMiddleLine = document.getElementById(
      'header__hamburger-middle-line',
    );
    const iconTopLine = document.getElementById('header__hamburger-top-line');
    const iconBottomLine = document.getElementById(
      'header__hamburger-bottom-line',
    );
    if (navLinksDisplay.style.display === 'flex') {
      navLinksDisplay.style.display = 'none';
      iconMiddleLine.style.display = 'inline-block';
      iconTopLine.classList.remove('header__icon-line-animate');
      iconBottomLine.classList.remove('header__icon-bottom-line-animate');
    } else {
      navLinksDisplay.style.display = 'flex';
      iconMiddleLine.style.display = 'none';
      iconTopLine.classList.add('header__icon-line-animate');
      iconBottomLine.classList.add('header__icon-bottom-line-animate');
    }
  }

  return (
    <div className="header sticky-top">
      <div className="container">
        <div className="d-md-flex justify-content-md-between align-item-center">
          <h1
            className="header__logo"
            data-aos="zoom-in"
            data-aos-delay="0"
            data-aos-once="true"
          >
            Meta solutions
          </h1>
          {/* Haamburger Icon */}
          <div className="header__hamburger-icon" onClick={showHideNavbar}>
            <span id="header__hamburger-top-line"></span>
            <span id="header__hamburger-middle-line"></span>
            <span id="header__hamburger-bottom-line"></span>
          </div>

          {/* Menu Items  */}
          <ul className="header__menu" id="header__nav-links">
            <li data-aos="fade-down" data-aos-delay="0" data-aos-once="true">
              <a href="/">Home</a>
            </li>
            <li data-aos="fade-down" data-aos-delay="100" data-aos-once="true">
              <a href="/">About</a>
            </li>
            <li data-aos="fade-down" data-aos-delay="200" data-aos-once="true">
              <a href="/">Projects</a>
            </li>
            <li data-aos="fade-down" data-aos-delay="300" data-aos-once="true">
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
