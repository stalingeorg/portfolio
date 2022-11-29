import React from 'react';

import './portfolio.css';
import { soloProjects } from './Projects';

const Portfolio = () => {

  return (
    <section className='portfolio'>

      <div className="container">
        <h3 className="main_sb"><span className="simple_title">PORTFOLIO</span><span className="bg_title">WORKS</span></h3>

        <div className="p_container">
          {soloProjects.map((pro) => (
            <article className="p_works" key={pro.id}>
              <div className="p_works_img">
                <img src={pro.img} alt={pro.title} />
              </div>
              <div className="p_works_content">
                <h3>{pro.title}</h3>
                <p>{pro.description}</p>
                <p>{pro.technologies}</p>
              </div>
            </article>
          ))}

          {/* {soloProjects.map((pro) => {
            return (
              <>

                {pro.img.map((pic, index) => {
                  return (


                    <article className="p_works" key={pro.id}>
                      <div className="p_works_img">
                        <img src={pic} alt={pro.title} />
                      </div>
                      <div className="p_works_content">
                        <h3>{pro.title}</h3>
                        <p>{pro.description}</p>
                        <p>{pro.technologies}</p>
                      </div>
                    </article>

                  );
                })}

              </>
            );
          })} */}

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
