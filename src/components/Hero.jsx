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
                <h1 className="hero__title">Some Heading Goes Here</h1>
                <p className="lead">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Error accusamus amet reprehenderit architecto neque iste
                  libero recusandae dicta labore placeat.
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
