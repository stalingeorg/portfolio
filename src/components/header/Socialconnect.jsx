import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header_media">
      <a className='a_social' href="https://in.linkedin.com/in/stalin-george-55492022" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a className='a_social' href="https://github.com/stalingeorg" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials