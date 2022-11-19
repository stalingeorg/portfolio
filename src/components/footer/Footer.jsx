import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">SG</a>
      <div className="footer__socials">
      <a href="https://in.linkedin.com/in/stalin-george-55492022" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/stalingeorg" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; 2022. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer