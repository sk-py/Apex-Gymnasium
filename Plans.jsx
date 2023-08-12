import React from 'react'
import '../../Components/Plans/Plans.css'
// import {motion} from "framer-motion"
const Plans = () => {
  return (
    <div className="plans__sec" id='plans'>
      <h1>Our Membership Plans</h1>
      <div className="pwrapper">
      <div   
      className="plans">
        <h1>Monthly Subscription</h1>
        <ul>
            <li>Crossfit</li>
            <li style={{ "::after":{content:"Not On Sunday"}}}>24/6 Access</li>
        </ul>
        <p>Price:<span> &#8377;1200</span>Only</p>
        <button>Join Now</button>  
         </div>
      <div className="plans">
        <h1>Yearly Subscription</h1>
        <ul>
            <li>Crossfit</li>
            <li>Cardio</li>
            <li>Steam</li>
            <li>Gym Bag</li>
            <li>Massage(machine)</li>
            <li>24/7 Access</li>
        </ul>
        <p>Price:<span> &#8377;10000</span>Only</p>
          <button>Join Now</button>  
      </div>
      <div className="plans">
        <h1>Quarterly Subscription</h1>
        <ul>
            <li>Crossfit</li>
            <li>Cardio</li>
            <li>Massage(machine)</li>
            <li>24/7 Access</li>
        </ul>
        <p>Price:<span> &#8377;6000</span>Only</p>
        <button id='lastbtn'>Join Now</button>  
      </div>
    </div>
    </div>
  );
};

export default Plans;