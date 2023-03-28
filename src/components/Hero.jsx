import React from 'react';
import '../styles/Hero.scss';

const Hero = () => {
  return (
    <>
      <div className="hero pt-5">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-md-8 col-lg-6">
              <div className="hero__text-content">
                <h1 className="hero__title">Transform Your Digital World</h1>
                <p className="lead">
                  Our team of experts is dedicated to staying ahead of the curve
                  and bringing you the latest in modern technology to help your
                  business thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
