import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
import ME from '../../assets/me.jpg';
import '../intro/intro.css';
import { motion } from "framer-motion";

const Emoji = props => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
)
const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
      <div className="row">
      <div style={{width: "60%"}}> 
       <h5 className='text_anim'>Hello I'm</h5>
        <h1>Stalin George   </h1>
        <h5 className="text-light">Frontend Developer <Emoji  symbol="👋" label="sheep" /></h5>
        <CTA />
       </div>
       <div style={{width: "35%"}}> 
       <div className="about__me">
          <div className="about__me-image">
             
        
        
        <motion.img
          src={ME} alt="me"  
      className="box"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: 0,
        repeatDelay: 1
      }}
    /> 
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
