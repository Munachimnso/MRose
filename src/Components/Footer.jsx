import React from 'react'
import logo from '../Asset/logo.png'
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";




const Footer = () => {
  return (
    <div className="footer-container">
       <div className="footer-logos-media">
          <img className='footer-logo-image' src={logo} alt=""></img>
          <div className="media-logos">
            <BsTwitter/>
            < SiLinkedin/>
            <BsYoutube />
            <FaFacebookF/>
        
            



          </div>
          
       </div> 
     <div className="footer-second-righter-container">

       <div className="footer-page-links">
           <span> 
             Help
           </span>
           <span> 
            Share
           </span>
           <span> 
            Work
           </span>
           <span> 
            Testimonial
           </span>

       </div>

       <div className="footer-contact">
            <span> 
              225-585-5889
           </span>
           <span> 
             help@gmail.com
           </span>
           <span> 
             contact.@gmail
           </span>
          

       </div>

       <div className="foot-legalInfo">
       <span>Terms & Conditions</span>
          <span>Privacy Policy</span>

       </div>
    </div>
        

    </div>
  )
}

export default Footer