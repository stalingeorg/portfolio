import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a className='a_social' href="https://www.linkedin.com/stalingeorg" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a className='a_social' href="https://github.com/stalingeorg" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials