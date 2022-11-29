import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="media_links">
        <a href="https://in.linkedin.com/in/stalin-george-55492022" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
        <a href="https://github.com/stalingeorg" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
      <div className="copyright_text">
        <small>&copy; 2022. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer