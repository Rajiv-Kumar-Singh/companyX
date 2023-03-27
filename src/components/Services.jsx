import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBolt,
  faRocket,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons';

import '../styles/Services.scss';

const Services = () => {
  const serviceCards = [
    {
      icon: faBolt,
      title: 'Web Development',
      description:
        'Build your next dream website with us. We design and develop websites and web apps that can make sure you’re seen and heard in the right circles.',
    },
    {
      icon: faRocket,
      title: 'App Development',
      description:
        'Build your next dream website with us. We design and develop websites and web apps that can make sure you’re seen and heard in the right circles.',
    },
    {
      icon: faWandMagicSparkles,
      title: 'UI/UX Design',
      description:
        'Build your next dream website with us. We design and develop websites and web apps that can make sure you’re seen and heard in the right circles.',
    },
  ];
  return (
    <>
      <div className="services section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="services__heading section__heading">
                Our <span>Services</span>
              </h2>
            </div>
            {serviceCards.map((card) => (
              <div className="col-md-4">
                <div className="services__box" key={card.title}>
                  <FontAwesomeIcon icon={card.icon} size="4x" />
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <a href="https://www.flaticon.com/free-icons/code" title="code icons">
        Code icons created by Freepik - Flaticon
      </a> */}
    </>
  );
};

export default Services;
