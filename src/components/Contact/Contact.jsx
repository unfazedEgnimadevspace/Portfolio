import React from 'react'
import './Contact.css';
import emailjs from 'emailjs-com'
import {HiOutlineMail} from 'react-icons/hi'
import {TbBrandMessenger} from 'react-icons/tb';
import {SiWhatsapp} from 'react-icons/si'
import { useRef } from 'react';






const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_qbj502f","template_rcxrtq1", form.current, 'KnN3t6oOfSnwSq9Dk').then((response) => console.log(response)).catch((error) => console.log(error.text))
    e.target.reset()
  }
  return (
    <section id='contact'>
      <h5>Get In touch</h5>
      <h2>
        Contact Me
      </h2>

      <div className="container contact_container">
         <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>akalugidaniel@gmail.com</h5>
            <a href="mailto:akalugidaniel@gmail.com">Send me a message</a>
          </article>
          <article className="contact__option">
            <TbBrandMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Daniel Akalugo</h5>
            <a href="https://m.me/daniel.akalugo" target={'_blank'} rel='noreferrer'>Send me a message</a>
          </article>
          <article className="contact__option">
            <SiWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+2349030118221</h5>
            <a href="https://wa.me/+2349030118221?text=I'm%20interested%20in%20hiring%20car%20you%20daniel" rel='noreferrer' target={'_blank'}>Send me a message</a>
          </article>
         </div>
         <form  ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message"  rows="7" placeholder='Your message' required></textarea>

        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
      </div>
      
    </section>
  )
}

export default Contact