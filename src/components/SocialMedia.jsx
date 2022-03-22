import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { SiLinkedin } from 'react-icons/si'

const SocialMedia = () => {
  return (
    <div className='app__social'>
    <div>
    <a href="https://twitter.com/BrilliantDevel1" target="_blank" rel="noopener noreferrer"><BsTwitter/></a>
    </div>
    <div>
       <a href="https://www.facebook.com/brilliantobaidul/" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
    </div>
    <div>
       <a href="https://www.linkedin.com/in/md-obaidullah-brilliant-developer/" target="_blank" rel="noopener noreferrer"><SiLinkedin/></a>
    </div>
    </div>
  )
}

export default SocialMedia