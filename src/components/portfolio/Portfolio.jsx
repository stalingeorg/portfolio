import React from 'react';
import IMG1 from '../../assets/pr1.jpg';
import IMG2 from '../../assets/pr2.jpg';
import IMG3 from '../../assets/pr3.jpg';
import IMG4 from '../../assets/aptv.png';
import IMG5 from '../../assets/family.webp';
import IMG6 from '../../assets/copier.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Garage Studio',
      img: IMG1,
      description:
        'Studio bookings, events registration, Models & Photographer list',
      technologies: 'PHP | HTML | CSS',
      link: 'https://garagestudio.ae/',
    },
    {
      id: 2,
      title: 'Chinmaya College',
      img: IMG2,
      description:
        'College website for info and admission',
        technologies: 'PHP | HTML | CSS',
      link: 'https://chinmayacollege.ac.in/',
    },
    {
      id: 3,
      title: 'Numix',
      img: IMG3,
      description: 'Car painting App',
      technologies: 'PHP | HTML | CSS',
      link: 'https://apps.apple.com/us/app/numix/id1508139096?platform=iphone',
    },
    {
      id: 4,
      title: 'Aptiv',
      img: IMG4,
      description:
        'Dashboard for company process : Machine process cycle,Employee Schedule',
      technologies: 'HTML | CSS',
      link: ' ',
      github: ' ',
    },
    {
      id: 5,
      title: 'Family App',
      img: IMG5,
      description:
        'Build a family app for a UAE based family',
      technologies: 'HTML | CSS | Javascript',
      link: '',
      github: '',
    },
    {
      id: 6,
      title: 'Copier Printers',
      img: IMG6,
      description:
        'Canon dealer website with software',
      technologies: 'JavaScript | HTML | CSS',
      link: 'https://copiersprinters.in/',
      github: '',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
