import React from 'react'
import {BsInstagram,BsLinkedin } from "react-icons/bs"
import {FaFacebook } from "react-icons/fa"

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a 
          href="https://www.linkedin.com/in/robin-roy-849b73263" target="_blank"
           rel="noreferrer">
            <BsLinkedin/>
          </a>
        </div>
        <div>
          <a 
          href="https://www.instagram.com/robart.codes/"
          target="_blank"
           rel="noreferrer"
          >

            <BsInstagram/>
          </a>
        </div>
        <div>
            <FaFacebook/>
        </div>


    </div>
  )
}

export default SocialMedia