import React from 'react'
// Import background image and rose image 
import { BsFillPlayCircleFill } from "react-icons/bs";
import  rose  from '../Asset/roseImage.webp';
/* Updates: 
            

*/
const About = () => {
  return (
    <div className = "about-section-container">
            <div className="about-background-image-container">
                
            </div>
            <div className="about-section-image-container">


            </div>

            <div className="about-section-text-container">

        <div className="about-bannerImage-container">
           <img src = {rose}  className = "heart"alt = "brand rose "></img>
        </div>
                <h3 className  = "primary-subheading"> 
                    About
                </h3>
                 
                <h1 className = "primary-heading">
                    Core purpose for rose, some product statment
                </h1>
                <p className="primary-text">
                    paragraph on roses, paragraph on roses paragraph on roses, paragraph on rosesparagraph on roses, paragraph on roses
                    paragraph on roses, paragraph on rosesparagraph on roses, paragraph on roses
                    paragraph on roses, paragraph on roses
                </p>

                <div className = "about-buttons-container">
                    <button  className = "button">  
                        Learn More
                    </button>
                    
                    <button  className = "watch-video-button"  > <BsFillPlayCircleFill/> 
                         Watch Video
                    </button>


                </div>

            </div>

    </div>
  )
}

export default About
