import './App.css';
import { useState } from 'react';
import Hero from './Components/Hero/Hero';
import Plans from './Components/Plans/Plans';
import Programs from './Components/Programs/Programs';
import Footer from './Components/Footer/footer';
import Whyus from './Components/WhyUs/Whyus';
// import { TweenMax,Power3 } from 'gsap/gsap-core';


function App() {
     
  const mobile = window.innerWidth <= 860 ? true : false;

  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="App" onClick={()=>setMenuOpened(false)}>
      <Hero/>
      <Programs/>
      <Whyus/>
      <Plans/>
      <Footer/>
    </div>
  );
};

export default App;
