import React, { useState } from 'react';
// import '../Style/Sidebar.css';
import LandingPage from './LandingPage';
import { Link } from "react-router-dom";
import '../Style/LandingPage.css'
import '../Style/Sidebar.css'
function Dot({ active }) {
  const dotStyle = {
    width: '11px',
    height: '11px',
    borderRadius: '50%',
    margin: '4px 20px',
    backgroundColor: active ? 'black' : '#fff',
    border: "1px solid #000"
  };

  return <div style={dotStyle}></div>;
}
function Sidebar({contentItems,setCurrentImageIndex}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleNav() {
    setIsSidebarOpen(!isSidebarOpen);
  }
  function navigateToSection(id) {
    // Use the id to find the matching section in the texts array
    const sectionIndex = contentItems.findIndex((text) => text.id === id);

    // Update the currentImageIndex state in StayingHealth component
    setCurrentImageIndex(sectionIndex);
  }
  
  return (
    <div className="container-fluid">
      <div id="mySidebar" className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <Link to="#" onClick={() => navigateToSection('HOME')}>HOME</Link>
        <Link to="#" onClick={() => navigateToSection('BOOKING')}>BOOKING</Link>
        <Link to="#" onClick={() => navigateToSection('OURDOCTOR')}>OUR DOCTORS</Link>
        <Link to="#" onClick={() => navigateToSection('FORDOCTOR')}>FOR DOCTORS</Link>
        <Link to="#" onClick={() => navigateToSection('SPECIALTIES')}>SPECIALTIES</Link>
        <Link to="#" onClick={() => navigateToSection('DOWNLOAD')}>DOWNLOAD</Link>
        <Link to="#" onClick={() => navigateToSection('CONTACT')}>CONTACT</Link>
        <Link to={'/privacypolicy'}> PRIVACY POLICY</Link>
        <Link to={'/termsandconditions'}>TERMS AND CONDITIONS</Link>

        <a href="#">LOGIN</a>
      </div>
      <div className="row">
        <div className="col-lg-1">
          <div id="main">
            <i
              className={`fa-solid fa-bars fa-xl toggle_menu ${isSidebarOpen ? 'active' : ''}`}
              style={{ color: "#048897" }}
              onClick={toggleNav}
            ></i>
          </div>
        </div>
        <div className="col-lg-11  ">
          <div >
            <img src={require("../Images/logo.png")} className='logo logo_privacy' />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
