import React from 'react'
import './Experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3,IoLogoJavascript} from 'react-icons/io'
import {SiTailwindcss, SiRedux, SiRubyonrails, SiSqlite} from 'react-icons/si';
import {FaReact, FaNode} from 'react-icons/fa';
import {DiRubyRough} from 'react-icons/di';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>
        My Skills
      </h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
             <article className='experience-details'>
              <AiFillHtml5 />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
             </article>
             <article className='experience-details'>
              <IoLogoCss3 />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
             </article>
             <article className='experience-details'>
              <IoLogoJavascript />
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Experienced</small>
              </div>
             </article>
             <article className='experience-details'>
              <SiTailwindcss />
              <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Experienced</small>
              </div>
             </article>
             <article className='experience-details'>
              <FaReact />
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
             </article>
             <article className='experience-details'>
              <SiRedux />
              <div>
              <h4>Redux</h4>
              <small className='text-light'>Experienced</small>
              </div>
             </article>
          </div>
        </div>
        <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
            <article className='experience-details'>
              <DiRubyRough />
              <div>
              <h4>Ruby</h4>
              <small className='text-light'>Intermediate</small>
              </div>
             </article>
             <article className='experience-details'>
              <SiRubyonrails />
              <div>
              <h4>Ruby on Rails</h4>
              <small className='text-light'>Basic</small>
              </div>
             </article>
           
             <article className='experience-details'>
              <SiSqlite />
              <div>
              <h4>SQLITE</h4>
              <small className='text-light'>Basic</small>
              </div>
             </article>
             <article className='experience-details'>
              <FaNode />
              <div>
              <h4>Node JS</h4>
              <small className='text-light'>Basic</small>
              </div>
             </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience