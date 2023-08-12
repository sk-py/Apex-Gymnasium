import React, { useRef } from 'react';
import '../../Components/Footer/footer.css'; 
import emailjs from '@emailjs/browser';

import  {FaPhone,FaInstagram,FaFacebook,FaMapMarkedAlt,FaWhatsapp, FaCopy, FaRegCopyright} from 'react-icons/fa'
import  Logoimg  from '../../assets/Screenshot__11__edited.png-01-removebg-preview (1).png';

const Footer = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4a7t9k8', 'template_gjcts3l', form.current, 'efUeFRVmoZ2ItVBlm')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    
    <div className="footer-cont">
      <div className="wrapper" >
      <div className="logo-div">
        <img src={Logoimg} alt="Logo-img" id='foot' />
        <p>- At Apex Gym, we are dedicated to helping you achieve your fitness goals and lead a healthy lifestyle.<br/><br/> -We provide facility 
          equipped with the latest fitness equipment and a team of highly qualified trainers who are passionate about guiding and supporting you on your fitness journey</p>
      </div>
      <div className="main-foot">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_email" required placeholder='Any Queries..?'/>
          <button>Submit</button>
        </form>
        <div className="no">
          <p>If you have any query , you can email us or contact directly through contacts given below </p>
          <a href="tel:+917208618752"><FaPhone/>  +917208618752</a>
          </div>
          <div className='socials'>
          <a href="#"><FaInstagram/></a>
          <a href="#"><FaFacebook/></a>
          <a href="#"><FaWhatsapp/></a>
          </div>
      </div>
      <div className="loc">
        <h3><FaMapMarkedAlt/> Address</h3>
      
        <div className="gframe">
       <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kausa+(Apex%20Gymnasium)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a></iframe>
        </div>
      </div>
    </div>
<hr/>
<center>
  <h4 style={{color:"white"}}><FaRegCopyright/> 2023 Apex. All rights reserved</h4>
</center>
  </div>
  );
};

export default Footer;