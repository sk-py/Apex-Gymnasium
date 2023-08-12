import React from 'react';
import './Whyus.css';
import { motion } from "framer-motion";
import images from '../../assets/images';
import texts from '../texts';

const Whyus = () => {
  return (


    <div className="scroll__sec" id='whyus'>
      
         

      <center><h1>Why Us?</h1></center>
      <div className="scroller">
          <div 
          
       

          className="inner-slider">
               {
                images.map((image,index)=>{
                  const textl = texts[index % texts.length];
                  return(
                    <div
                     
                     className='items'>
                      <img
                      
                      initial={{y:-1000}}
                      animate={{y:0}}
                      transition={{duration:2.5}}

                      src={image} alt="img"
                     />                 
                      <p
                        initial={{opacity:0,y:-1000}}
                        animate={{y:0,opacity:1}}
                        transition={{duration:2.1}}
                      >{textl}</p>
                      </div>
                  )
                })
               }
               
          </div>
        </div>   
        <center><h2>Slide<i className="fa-solid fa-angles-right"/></h2></center>
    </div>
  );
};

export default Whyus;