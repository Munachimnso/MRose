import React from 'react'
import pickrose from '../Asset/pickRose.png'

const Process = () => {
  const workInfoData =  [
    {
  image: pickrose,
  title: "Pick Flower",
  text: "paragraph on picking roses, paragraph on picking roses, paragraph on picking roses,paragraph on picking roses.",
},
{
  image: pickrose,
  title: "Customize flower",
  text: "Paragraph on customize flower, Paragraph on customize flower, Paragraph on customize flower, Paragraph on customize flower.   ",
},
{
  image: pickrose,
  title: "Wrapping flowers ",
  text: " Paragraph on Wrapping flowers Paragraph on Wrapping flowers Paragraph on Wrapping flowers Paragraph on Wrapping flowers  .",
},

];

  return (
    
   <div className="work-container">
        <div className="work-section-wrapper">
          <p className ="primary-subheading">
           Work
          </p>
          <h1 className="primary-heading"> 
             How it Works
          </h1>
          <p className="primary-text"> 
          paragraph on roses, paragraph on roses paragraph on roses, paragraph on rosesparagraph on roses, paragraph on roses
          paragraph on roses, paragraph on rosesparagraph on roses, paragraph on roses
          paragraph on roses, paragraph on roses
          </p>
        </div>

       <div className="work-section-bottom">
       {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
          
       </div>



   </div>
  )
}

export default Process