import React from 'react';
import './skills.css';
import IMG1 from '../../assets/html.svg';
import IMG2 from '../../assets/css3.svg';
import IMG3 from '../../assets/react.svg';
import IMG4 from '../../assets/js.svg';
import IMG5 from '../../assets/php.svg';
import IMG6 from '../../assets/sql.svg';
import IMG7 from '../../assets/github.svg';

const Experience = () => {
  return (
    <section className="skills">
      <div className="container">
        <h3 className="main_sb"><span className="simple_title">TECHNOLOGIES</span><span className="bg_title">SKILLS</span></h3>
        <div className='technologies'>
          <div className='technologies_item'>
            <div>
              <img src={IMG1} alt="" />
              <p>HTML</p>
            </div>
          </div>
          <div className='technologies_item'>
            <div>
              <img src={IMG2} alt="" />
              <p>CSS</p>
            </div>
          </div>

          <div className='technologies_item'>
            <div>
              <img src={IMG3} alt="" />
              <p>React</p>
            </div>
          </div>

          <div className='technologies_item'>
            <div>
              <img src={IMG4} alt="" />
              <p>Javascript</p>
            </div>
          </div>

          <div className='technologies_item'>
            <div>
              <img src={IMG5} alt="" />
              <p>PHP</p>
            </div>
          </div>
          <div className='technologies_item'>
            <div>
              <img src={IMG6} alt="" />
              <p>SQL</p>
            </div>
          </div>
          <div className='technologies_item'>
            <div>
              <img src={IMG7} alt="" />
              <p>Github</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience