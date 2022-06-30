import React from 'react'
import './Header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id='home'>
     <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Akalugo Daniel</h1>
      <h5 className='.text-light'> Fullstack Developer</h5>
      <CTA />
      <HeaderSocials />
      <div>
         <h3>I'm specialized in building and occasionally designing exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products and responsive web pages</h3>
      </div>
      <a href="#contact" className='scroll__down'>Scroll Down</a>
     </div>
     
    </header>
  )
}

export default Header