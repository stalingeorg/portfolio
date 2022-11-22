import React from 'react';
import Cvpdf from './Cvpdf';
import Socialconnet from './Socialconnect';
import './header.css';
import ME from '../../assets/bg.png';
import '../about/about.css';
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
    <header id="home" className='section_left'>
      <div className="container header__container">
      <div className="row row_column">
      <div className='container_left'> 
       <h5 className='text_anim'>Hello I'm</h5>
        <h1>Stalin George   </h1>
        <h5 className="text-light">Frontend Developer <Emoji  symbol="👋" label="sheep" /></h5>
        <Cvpdf />
       </div>
       <div className='position-relative container_right'> 
       {/* <div className="about__me">
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
    </div> */}
 
    <div className="image"> 
<motion.div
          className="avatar" style={{backgroundImage: `url(${ME})`}}
      animate={{
        scale: [1, 1.2, 1, 1, 1],
        rotate: [0, 40, 40, 0, 0],
        borderRadius: ["50%", "50%", "50%", "50%", "50%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: 0,
        repeatDelay: 1
      }}
    /> 
<div className="shape"><Socialconnet /></div>
</div>
        
        

      </div>
      </div>
      </div>
    </header>
  );
};

export default Header;
