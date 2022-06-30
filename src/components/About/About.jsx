import React from 'react'
import './About.css'
import ME from '../../assets/Snapchat-1252270864~2.jpg';
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>


      <div className="container about__container">
        <div className="about__me">
               <div className="about__me-image">
                <img src={ME} alt="about" />
               </div>
        </div>
        <div className="about__content">
           <div className="about__cards">
           <article className='about__card'>
              <FaAward  className='about__icon'/>
              <h5>
                Experience
              </h5>
              <small>
                1 year + 
              </small>
            </article>
            <article className='about__card'>
              <FiUser  className='about__icon'/>
              <h5>
                Clients
              </h5>
              <small>
                35+ Worldwide 
              </small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary  className='about__icon'/>
              <h5>
                Projects
              </h5>
              <small>
                20+ Completed
              </small>
            </article>
           </div>
           <p>
            Hello I am Akalugo Daniel, I am a qualified and professional front-end developer with over 1 year of
            experience in implementation of user interfaces and website design.
            Strong creative and analytical skills. Team player with an eye for detail.
           </p>
           <a href="#contact" className='btn btn-primary'>Let's Talk </a>
        </div>
      </div>
    </section>
  )
}

export default About