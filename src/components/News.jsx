import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDays,
  faAnglesRight,
} from '@fortawesome/free-solid-svg-icons';

import '../styles/News.scss';

import meeting from '../assets/images/meeting.jpg';
import office from '../assets/images/office.jpg';
import coderGuy from '../assets/images/coder-guy.jpg';

const News = () => {
  const news = [
    {
      image: meeting,
      title: 'New report shows growth analytics of meta solutions',
      date: 'Jan 28, 2020',
      details:
        ' Report shows dummy text here read more,Lorem, ipsum dolor sit amet consectet  adipisicing elit. ',
      animationDelay: '0',
    },
    {
      image: office,
      title: 'Highly profitable year reported',
      date: 'Jun 5, 2020',
      details:
        'Analysis of report published by media. Lorem, ipsum dolor sit amet consectet  adipisicing elit.',
      animationDelay: '100',
    },
    {
      image: coderGuy,
      title: 'Geeting more out of meta solutions app',
      date: 'May 10, 2021',
      details:
        ' Lorem, ipsum dolor sit amet consectet  adipisicing elit. Amet laboriosam, fugiat quibusdam laborum possimus neque?',
      animationDelay: '200',
    },
    {
      image: office,
      title: 'New Analysis shows growing market trend',
      date: 'Nov 8, 2022',
      details:
        'Read report of year 2022. lorem adipisicing elit. Amet laboriosam, fugiat quibusdam laborum possimus neque?',
      animationDelay: '300',
    },
  ];
  return (
    <>
      <div className="news section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="news__heading section__heading">
                Recent <span>News</span>
              </h2>
            </div>

            {news.map((newsItem) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6 news__card"
                key={newsItem.title}
                data-aos="fade-up"
                data-aos-delay={newsItem.animationDelay}
                data-aos-offset="200"
              >
                <img src={newsItem.image} alt="thumbnail" loading="lazy" />
                <h3>
                  <a className="news__title" href="/">
                    {newsItem.title}
                  </a>
                </h3>
                <p className="news__date">
                  <span>
                    <FontAwesomeIcon icon={faCalendarDays} size="1x" />
                  </span>

                  {newsItem.date}
                </p>
                <p className="news__text">{newsItem.details}</p>
                <a href="/" className="news__read-more">
                  <span> Read More</span>
                  <FontAwesomeIcon icon={faAnglesRight} size="1x" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
