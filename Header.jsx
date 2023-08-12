import React, { useState } from 'react';
import  './Header.css';
import Logo from '../../assets/Screenshot__11__edited.png-01-removebg-preview (1).png';

const Header = () => {



  const mobile = window.innerWidth <= 860 ? true : false;

  const [menuOpened, setMenuOpened] = useState(false);
  

  return (
    <div className="header" id='Home'>
      <img className="logo" src={Logo} alt="" />

      {menuOpened === false && mobile === true ? (
        <div onClick={()=>setMenuOpened(true)} >
  
          <i className="fa-solid fa-bars" style={{color:'white'}}/>
        
        </div>
      ) : (
        <ul className="header-menu" onClick={()=>setMenuOpened(false)}>

         <li><a href='#programs'>Programs</a></li>
         <li><a href='#whyus'> Why us</a></li>
         <li><a href='#plans'> Plans</a></li>
         <li><a href='#foot'> About Us</a></li>
          
        </ul>
      )}
    </div>
  );
};

export default Header;