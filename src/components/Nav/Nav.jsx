import React, {useState} from 'react'
import './Nav.css'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai';
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri'
import {MdOutlineLocalOffer} from 'react-icons/md'

 const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')
  return (
    <nav>
      <a href="#home" className={activeNav === '#home' ? 'active' : '' }  onClick={() => setActiveNav('#home')}>
       <AiOutlineHome />
      </a>
      <a href="#about" className={activeNav === '#about' ? 'active' : '' } onClick={() => setActiveNav('#about')}>
       <AiOutlineUser />
      </a>
      <a href="#experience" className={activeNav === '#experience' ? 'active' : '' } onClick={() => setActiveNav('#experience')}>
       <BiBook />
      </a>
      <a href="#portifolio" className={activeNav === '#portifolio' ? 'active' : '' } onClick={() => setActiveNav('#portifolio')}> <MdOutlineLocalOffer /></a>
      <a href="#testimonials" className={activeNav === '#testimonials' ? 'active' : '' } onClick={() => setActiveNav('#testimonials')}>
       <RiServiceLine />
      </a>
      
      <a href="#contact" className={activeNav === '#contact' ? 'active' : '' } onClick={() => setActiveNav('#contact')}>
       <BiMessageSquareDetail />
      </a>
      
    </nav>
  )
}

export default Nav