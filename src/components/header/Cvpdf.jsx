import React from 'react';
import Resume from '../../assets/resume.pdf';

const CVPDF = () => {
  return (
    <div style={{'display':'flex'}}>
    <div className="cta">
      <a href={Resume} download className="btn">

        Download CV
      </a>
    </div>
 
     <div className="cta">
      <a href={Resume}   className="btn" target='_blank' rel="noreferrer">

       View CV
     </a>
   </div>
   </div>
  );
};

export default CVPDF;

