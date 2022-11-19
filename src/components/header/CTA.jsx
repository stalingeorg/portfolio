import React from 'react';
import CV from '../../assets/resume.pdf';

const CTA = () => {
  return (
    <div style={{'display':'flex'}}>
    <div className="cta">
      <a href={CV} download className="btn">

        Download CV
      </a>
    </div>
     <div className="cta">
      <a href={CV}   className="btn" target='_blank'>

       View CV
     </a>
   </div>
   </div>
  );
};

export default CTA;
