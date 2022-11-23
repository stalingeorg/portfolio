import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience.css';
import IMG1 from '../../assets/html.svg';
import IMG2 from '../../assets/css3.svg';
import IMG3 from '../../assets/react.svg';
import IMG4 from '../../assets/js.svg';
import IMG5 from '../../assets/php.svg';
import IMG6 from '../../assets/sql.svg';
import IMG7 from '../../assets/github.svg';


const Experience = () => {
  return (
    <section className="experience">
      {/* <h5>The Skills I Have</h5> */}
     
      <div className="container">
      {/* <h2 className='main_title'>SKILLS</h2> */}
      <h3 class="main_sb"><span class="simple_title">TECHNOLOGIES</span><span class="bg_title">SKILLS</span></h3>
      {/* <div class="animated-bar"></div> */}
        <div className='technologies'>
          <div className='technologies_item'>
            <div>
            <img src={IMG1} alt=""/>
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
      {/* <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>



          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>React</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Back-end Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>PHP</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>SQL</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Git/GitHub</h4>
            </article>
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default Experience