import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef, useState } from "react"; 
import LandingPage from './Components/LandingPage';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsAndConditions from './Components/TermsAndConditions';
import BookNow from './Components/BookNow';
import Box from './Components/Scroll';
import StayingHealth from './Components/StayingHealth';
import StayNew from './Components/StayNew';
import ScrollBar from './Components/ScrollBar';
const RevealOnScroll = ({ children }) => { 
  const [isVisible, setIsVisible] = useState(false); 
  const ref = useRef(null); 

  useEffect(() => { 
      const scrollObserver = new IntersectionObserver(([entry]) => { 
          if (entry.isIntersecting) { 
              setIsVisible(true); 
              scrollObserver.unobserve(entry.target); 
          } 
      }); 

      scrollObserver.observe(ref.current); 

      return () => { 
          if (ref.current) { 
              scrollObserver.unobserve(ref.current); 
          } 
      }; 
  }, []); 

  const classes = `transition-opacity duration-1000  
      ${isVisible ? "opacity-100" : "opacity-0"
      }`; 

  return ( 
      <div ref={ref} className={classes}> 
          {children} 
      </div> 
  ); 
}; 
function App() {

  return (
    <div>
{/* <Box num={1} />
      <Box num={2} />
      <Box num={3} /> */}
      {/* <StayingHealth/> */}
<Router>
    <Routes>
        <Route path="/" element={<LandingPage/>}/>  
        <Route path='/privacypolicy' element={<PrivacyPolicy/>}/> 
        <Route path='/termsandconditions' element={<TermsAndConditions/>}/> 
        <Route path='/stay' element={<ScrollBar/>}/> 

         </Routes>
</Router>

{/* <LandingPage/> */}
</div>

  );
}

export default App;
