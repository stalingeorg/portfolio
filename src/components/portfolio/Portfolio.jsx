import React from 'react';
import IMG1 from '../../assets/pr1.jpg';
import IMG2 from '../../assets/pr2.jpg';
import IMG3 from '../../assets/pr3.jpg';
import IMG4 from '../../assets/fake.png';
import IMG5 from '../../assets/news.png';
import IMG6 from '../../assets/math.png';

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
      title: 'Shelter',
      img: IMG3,
      description:
        'Fully responsive interactive website built based on Figma design',
      technologies: 'JavaScript | CSS',
      link: 'https://meri-mg.github.io/shelter/pages/main/index.html',
      github: 'https://github.com/Meri-MG/shelter',
    },
    {
      id: 5,
      title: 'World News',
      img: IMG5,
      description:
        'Fully responsive interactive website built based on Adobe XD design',
      technologies: 'JavaScript | CSS',
      link: 'https://meri-mg.github.io/Unilab-world-news/',
      github: 'https://github.com/Meri-MG/Unilab-world-news',
    },
    {
      id: 6,
      title: 'Math Resource',
      img: IMG6,
      description:
        'Real-world group project which is still in progress and will provide educational platform for future young developers',
      technologies: 'JavaScript | Scss | Python',
      link: 'https://lukinoo.github.io/math-resource/',
      github: 'https://github.com/lukinoo/math-resource',
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
