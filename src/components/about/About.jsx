import React from 'react';
import './about.css';

const About = () => {
  return (
    <section className='about'>
      <div className="container">
        <div className="row row_col">
          <div>

            <div className="intro_exp_block_main_left border_anim exp_mob_section" style={{ padding: "4.375rem 0.125rem 3.125rem 4.6875rem", borderRight: "none !important" }}><span className="intro_exp_block_num">4+</span>
              <h5 className="intro_exp_block_title_left">Years<br></br>Experience<br></br>Working</h5>
            </div>
          </div>

          <div className='text-center'> <p className='inner_text'>I'm a Frontend developer based in Kerala India that builds responsive websites and applications designs that solve your problems and meet your business requirements.</p></div>

          <div>
            <div className="intro_exp_block_main_right border_anim exp_mob_section" style={{
              borderLeft: "none !important", borderRight: "1px solid rgba(255,255,255,.4)",
              padding: "4.375rem 4.6875rem 3.125rem 0.125rem"
            }}>
              <span className="intro_exp_block_num">20</span>
              <h5 className="intro_exp_block_title_right">International<br></br>Companies<br></br>Projects</h5>
            </div>
          </div>

        </div>
        <div className="row">

          <div className='text-center'> <p className='inner_text_2'>I'm a Frontend developer based in Kerala India that builds responsive websites and applications designs that solve your problems and meet your business requirements.</p></div>
        </div>
      </div>
    </section>
  )
}

export default About