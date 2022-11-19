import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
import ME from '../../assets/me.jpg';
import '../intro/intro.css';


const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
      <div className="row">
      <div style={{width: "60%"}}> 
       <h5 className='text_anim'>Hello I'm</h5>
        <h1>Stalin George</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
       </div>
       <div style={{width: "35%"}}> 
       <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <HeaderSocials />
        

      </div>
      </div>
      </div>
    </header>
  );
};

export default Header;
