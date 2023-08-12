import React from "react";
import './Programs.css';
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";
// import {}
const Programs = () => {
  return (
    <div className="programs" >
      <div className="pheader">
        <span>CHOOSE THE</span>
        <span className="stroke-text">BEST PROGRAMS</span>
        <span>FOR YOUSELF</span>
      </div>
      <div className="pcards">
         {programsData.map((Programs)=>(
          <a href="#plans"><div className="list">
            {Programs.image}
            <span>{Programs.heading}</span>
            <span className="Montserrat__f">{Programs.details}</span>
            <div className="jbtn">
              <span>Join Now</span>
              <img src={RightArrow} alt="Right Arrow" />
            </div>
          </div></a>
         ))

         }

         </div>
      </div>
  );
};

export default Programs;
