import React from 'react'
import { AiFillStar } from "react-icons/ai";
import profil from '../Asset/profile.png'



const Testimonial = () => {
  return (
    <div className="work-container">
    <div className="work-section-wrapper">
      <p className ="primary-subheading">
       Testimonial
      </p>
      <h1 className="primary-heading"> 
         What they are saying 
      </h1>
      <p className="primary-text"> 
      paragraph on roses, paragraph on roses paragraph on roses, paragraph on rosesparagraph on roses, paragraph on roses
      paragraph on roses, paragraph on rosesparagraph on roses, paragraph on roses
      paragraph on roses, paragraph on roses
      </p>
    </div>

    <div className="review">

       <img src= {profil} alt="" />

       <p> 
       Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
       elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
      </p>

     <div className="testimonials-stars-container">
      <AiFillStar /> 
      <AiFillStar /> 
      <AiFillStar /> 
      <AiFillStar /> 
      <AiFillStar /> 

      </div>

      <h2>  No One </h2>


    </div>





</div>
  );
};

export default Testimonial