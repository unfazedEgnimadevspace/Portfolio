import React from 'react'
import './Services.css';
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

     <div className="container services__container">
      
      {/* Begining of web development */}
      <article className="service">
        <div className="service__head">
          <h3>
            Web development
          </h3>
        </div>
        <ul className="service__list">
          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </li>
        
        </ul>
      </article>
      {/* End of web development */}


      {/* Begining of content creation */}
      <article className="service">
        <div className="service__head">
          <h3>
            Content creation
          </h3>
        </div>
        <ul className="service__list">
          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </li>
        
        
        </ul>
      </article>
     </div>

    </section>
  )
}

export default Services