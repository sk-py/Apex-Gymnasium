import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import { motion } from 'framer-motion'

import Hero_image from "../../assets/pngegg.png";
import Hero_image_back from "../../assets/Hbacktri.png";
import Heart from "../../assets/heart.png";
import NumberCounter from 'number-counter';



const Hero = () => {

  const mobile = window.innerWidth <=767 ? true : false ;

  return (
    

    <div className="hero">
      <div className="left-h">
        <Header />

        {/*---------------------------Hero AD Animation div------------------*/}
        <div className="hero-ad">
          <motion.div
             initial={{x:260,opacity:0}}
             animate={{
               x:0,
               opacity:1
              }}
              transition={{duration:1}}
          ></motion.div>
          <span>The Best Gymnasium In The Town</span>
        </div>

        {/*-------------------------- Hero-Heading--------------------------*/}
          {/* <div className="blurimg"><img src={blurimg} alt="" /></div> */}
        <div className="hero-h1">
          <div>
            <span>Be the </span>
            <span className="stroke-text">Apex</span>
    
            <span>Predator</span>
          </div>
          <div>
            <span className="Montserrat__f">
              Unleash Your Inner Strength at Apex Gym -<br/> Where Champions are Forged
            </span>
          </div>
        </div>

        {/*------------------------------- numbers---------------------------*/}

        <div className="numbers">
          <div>
            <span><NumberCounter end={50} start={10} preFix="+" delay="3"/></span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span><NumberCounter end={1000} start={600} delay="2" preFix="+"/></span>
            <span>Members Joined</span>
          </div>
          <div>
            <span><NumberCounter end={30} start={5} delay="3" preFix="+"/></span>
            <span>Fitness Programs</span>
          </div>
        </div>

        {/*---------------------------- buttons-------------------------- */}
        <div className="hero-btns">
          <a href="#plans"><button className="btn">Get Started</button></a>
         <a href="#foot"> <button className=" knm" >Know More</button></a>
        </div>
      </div>

      {/* ------------------------End Of Left Side---------------------- */}
     <div></div>
      {/* -----------------------Right Section------------------------- */}

      <div className="right-h">
        <a href="#plans"><button className="rbtn">join now</button></a>
        <motion.div
          
          drag
          dragPropagation
          dragConstraints={{
            right:4,
            left:50,
            top:4,
            bottom:5
          }}

          className="hbeats">
          <img className="HeartBts" src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>110 Bpm</span>
        </motion.div>
        {mobile===false?(            
        <>
            <motion.img
              src={Hero_image_back}
              alt="Hero-Image-Background"
              className="himgback"
              animate={{
                x:"-5rem",
                opacity:1,
                scale:0.9
              }}
              initial={{
                opacity:0.6,
                scale:0.8,
                x:0
              }}
              transition={{
                type : "spring",
                stiffness:60,
                damping:9
              }}
            />
            
            <img src={Hero_image} alt="Hero-Image" className="himg" />
            </>
            ) : (

        <img src={Hero_image} alt="Hero-Image" className="himg" />
        )}
      </div>
      <motion.div
      animate={
        {
          x:0
        }
      }
      initial={
        {
          x:1000,
        }
      }
      transition={{
        duration:0.3
      }}
      
      className="calchart">
        {/* <img src={Calories} alt="" /> */}
        <iframe src="https://giphy.com/embed/JoV6rEAzVhWwjx2yCL" width="480" height="480" frameBorder="0" class="giphy-embed"></iframe>
        <div className="caldiv">
          <span>Calories Burned</span>
          <span id="programs"><NumberCounter end={800} start={10} delay="800" /> Kcal</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
