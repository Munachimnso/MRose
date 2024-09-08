// Code is for home page, section of the main page

import React from 'react'
import Mynav from './Mynav'
// Import rose images , for home background  style and for promotaion ceneter rose wrapped image.
import { FiArrowRight } from "react-icons/fi";
import rose from  '../Asset/roseImage.webp'


const Home = () => {
  return (
    <div className='homContainer'>
      <Mynav />
     <div className  = "home-banner-container"> 
       <div className="home-backgroundImage-section">
         {/* <img src = {transHeart} alt = "backrightheart"></img> */}
       </div>
       <div className="home-text-section">
         <h1 className = "primary-heading"> 
          Some Rose Promotation advert quote
         </h1>
         <p className='primary-text'> 
          something about  what we do in relation, to making roses?
         </p>
        <button className = "button"> Order Now <FiArrowRight/> </button>
       </div>

        <div className="home-image-container">
           <img src = {rose}  className = "heart"alt = "brand rose "></img>
        </div>

     </div>

    </div>
  )
}

export default Home