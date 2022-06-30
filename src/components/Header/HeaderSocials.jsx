import React from 'react'
import {BsTwitter, BsLinkedin, BsGithub} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
       <a href="https://github.com/unfazedEgnimadevspace" target={'_blank'} rel='noreferrer'><BsGithub /></a>
       <a href="https://www.linkedin.com/in/daniel-akalugo-b88081225/" target={'_blank'} rel="noreferrer"><BsLinkedin /></a>
       <a href="https://twitter.com/dani_afc1" target={'_blank'} rel="noreferrer"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials