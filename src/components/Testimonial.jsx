import React from 'react';

import '../styles/Testimonials.scss';

// importing images
import julian from '../assets/images/julian.jpg';
import albert from '../assets/images/albert.jpg';

const Testimonial = () => {
  const testimonials = [
    {
      image: julian,
      text: 'Awesome team to work with. Lorem ipsum Consectetur adipisicing elit. Adipisci sunt harum, nesciunt a velit non maiores qui esse assumenda accusamus!',
      name: 'Julian Doe',
      company: 'Microsoft',
    },
    {
      image: albert,
      text: 'Great working with them. Lorem ipsum Adipisci sunt harum, nesciunt a velit non maiores qui esse assumenda accusamus!',
      name: 'Albert Wan',
      company: 'Meta',
    },
  ];
  return (
    <>
      <div className="testimonials section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <h2 className="testimonials__heading section__heading">
                <span>Testimonials</span>
              </h2>
            </div>
            {testimonials.map((testimonial) => (
              <div className="testimonials__box col-md-5 m-2">
                <p>{testimonial.text}</p>
                <img src={testimonial.image} alt="dp" />
                <h4>{testimonial.name}</h4>
                <p>{testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
