import React, { useEffect, useRef, useState } from "react";
import '../Style/LandingPage.css';
import '../Style/Sidebar.css';
import { Link } from "react-router-dom";
import Tabs from "./Tabs";
// import Sidebar from "./Sidebar";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import designTemplates from "./Data";

import Footer from "./Footer";
import StayingHealth from "./StayingHealth";
import BookNow from "./BookNow";
import ForDoctors from "./ForDoctors";
import OurSpecialties from "./OurSpecialties";
import DownloadApp from "./DownloadApp";
import GetInTouch from "./GetInTouch";
function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }
  }, [isSidebarOpen]);

  function toggleNav() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className="container-fluid">
      <div id="mySidebar" className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <a href="#HOME">HOME</a>
        <a href="#BOOKING">BOOKING</a>
        <a href="#OURDOCTOR">OUR DOCTORS</a>
        <a href="#FORDOCTOR">FOR DOCTORS</a>
        <a href="#SPECIALTIES">SPECIALTIES</a>
        <a href="#DOWNLOAD">DOWNLOAD</a>
        <a href="#CONTACT">CONTACT</a>
        <Link to={'/privacypolicy'}> PRIVACY POLICY</Link>
        <Link to={'/termsandconditions'}>TERMS AND CONDITIONS</Link>

        <a href="#">LOGIN</a>
      </div>
      <div className="row">
        <div className="col-lg-1 ">
          <div id="main">
            <i
              className={`fa-solid fa-bars fa-xl toggle_menu ${isSidebarOpen ? 'active' : ''}`}
              style={{ color: "#048897" }}
              onClick={toggleNav}
            ></i>
          </div>
        </div>
        <div className="col-lg-11 ">
          <div >
            <img src={require("../Images/logo.png")} className='logo ' />
          </div>
        </div>
      </div>
    </div>
  );
}

// function Dot({ active }) {
//   const dotStyle = {
//     width: '11px',
//     height: '11px',
//     borderRadius: '50%',
//     margin: '4px 20px',
//     backgroundColor: active ? 'black' : '#fff',
//     border: "1px solid #000"
//   };

//   return <div style={dotStyle}></div>;
// }

function LandingPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });

  // // const { scrollYProgress } = useScroll();
  // const numDots = 7;
  // const sectionHeight = 1 / numDots - 0.01;
  // const [activeDotIndex, setActiveDotIndex] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sectionHeight = 1 / numDots; // Calculate the height of each section
  //     const scrollPosition = scrollYProgress.get();
  //     const newIndex = Math.floor(scrollPosition / sectionHeight);
  //     setActiveDotIndex(newIndex);
  //   };

  //   scrollYProgress.onChange(handleScroll);

  //   return () => {
  //     scrollYProgress.onChange(null);
  //   };
  // }, [scrollYProgress, numDots]);
  const sections = ["HOME", "BOOKING", "OURDOCTOR", "FORDOCTOR", "SPECIALTIES", "DOWNLOAD", "CONTACT"];

  return (
    <>
      <div>

        {/* <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} /> */}

        <StayingHealth sections={sections}/>
        {/* <Tabs />
        <BookNow />
        <ForDoctors />
        <OurSpecialties />
        <DownloadApp />
        <GetInTouch /> */}
        {/* <div className={`dots ${isSidebarOpen ? 'hide-dots' : ''}`}>
          {Array.from({ length: numDots }, (_, index) => (
            <a href={`#${sections[index]}`} key={index}>
              <Dot
                key={index}
                active={index === activeDotIndex || (index === numDots - 1 && activeDotIndex === numDots)}
              />
            </a>
          ))}
        </div> */}
        <Footer />

        {/* <motion.div className="progress" style={{ scaleX }} /> */}
      </div>

    </>
    //         <div>
    //             <Sidebar />

    // <div className="container">

    //     <div className="row cont d-flex align-items-center justify-content-center mt-5" >

    //         <div className=" col-lg-6 col-md-12 col-sm-12 container_text">
    //             <div className="stayingHealth">
    //                 <p style={{ fontSize: "50px", color: "#048897" }}>Staying healthy is just a <b>tap</b> away</p>
    //                 <p className="mt-3">Our incredible team of doctors want you to have the quality of in-person care but from the comfort of home</p>
    //             </div>

    //         </div>
    //         <div className="col-lg-6 col-md-12 col-sm-12 mockup_phone">
    //             <img src={require('../Images/1.jpg')} alt="Content Image" />
    //         </div>


    //     </div>

    // </div>
    //           <div className="container">

    //               <div className="row cont d-flex align-items-center justify-content-center mt-5" >

    //                   <div className=" col-lg-6 col-md-12 col-sm-12 container_text">
    //                       <div className="stayingHealth">
    //                           <p style={{ fontSize: "50px", color: "#048897" }}>
    //                               <b>Book</b> A virtual visit with your <b>doctor</b>  today</p>
    //                           <p className="mt-3">Schedule and meet with your favourite doctors conveniently, on your smartphone, tablet or computer</p>
    //                       </div>
    //                       <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
    //                           <li className="nav-item" role="presentation">
    //                               <a
    //                                   className="nav-link active "
    //                                   id="ex1-tab-1"
    //                                   data-mdb-toggle="tab"
    //                                   href="#ex1-tabs-1"
    //                                   role="tab"
    //                                   aria-controls="ex1-tabs-1"
    //                                   aria-selected="true"
    //                               >Tab 1</a>
    //                           </li>
    //                           <li className="nav-item" role="presentation">
    //                               <a
    //                                   className="nav-link"
    //                                   id="ex1-tab-2"
    //                                   data-mdb-toggle="tab"
    //                                   href="#ex1-tabs-2"
    //                                   role="tab"
    //                                   aria-controls="ex1-tabs-2"
    //                                   aria-selected="false"
    //                               >Tab 2</a>
    //                           </li>
    //                           <li className="nav-item" role="presentation">
    //                               <a
    //                                   className="nav-link"
    //                                   id="ex1-tab-3"
    //                                   data-mdb-toggle="tab"
    //                                   href="#ex1-tabs-3"
    //                                   role="tab"
    //                                   aria-controls="ex1-tabs-3"
    //                                   aria-selected="false"
    //                               >Tab 3</a>
    //                           </li>
    //                       </ul>

    //                       <div className="tab-content" id="ex1-content">
    //                           <div
    //                               className="tab-pane fade show active"
    //                               id="ex1-tabs-1"
    //                               role="tabpanel"
    //                               aria-labelledby="ex1-tab-1"
    //                           >
    // <p>Follow up Care</p>
    //                       <p>Stay up to date on your health needs. Easily connect and follow up with your doctor about any health directives or new issues</p>                            </div>
    //                           <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
    //                               Tab 2 content
    //                           </div>
    //                           <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
    //                               Tab 3 content
    //                           </div>
    //                       </div>
    //                       {/* <!-- Tabs content --> */}

    //                   </div>
    //                   <div className="col-lg-6 col-md-12 col-sm-12 mockup_phone">
    //                       <img src={require('../Images/2.jpg')} alt="Content Image" />
    //                   </div>


    //               </div>

    //           </div>
    //             <div className="container">

    //                 <div className="row cont d-flex align-items-center justify-content-center " >

    //                     <div className=" col-lg-6 col-md-12 col-sm-12 container_text ">
    //                         <div className="stayingHealth ">
    //                             <p style={{ fontSize: "50px", color: "#048897" }}><b>Meet</b> Our Qualified <b>Doctors</b></p>
    //                             <p className="mt-3">Access a network of the best and highly recommended doctors of more than 50 specialties, anywhere you are</p>
    //                         </div>
    //                         <button type="button" class="btn btn-lg btn_book_now mt-5">Book Now</button>
    //                     </div>
    //                     <div className="col-lg-6 col-md-12 col-sm-12 mockup_phone">
    //                         <img src={require('../Images/3.jpg')} alt="Content Image" />
    //                     </div>


    //                 </div>

    //             </div>
    // <div className="container">

    //     <div className="row cont d-flex align-items-center justify-content-center " >

    //         <div className=" col-lg-6 col-md-12 col-sm-12 container_text ">
    //             <div className="stayingHealth ">
    //                 <p style={{ fontSize: "50px", color: "#048897" }}>For <b>Doctors</b></p>
    //                 <p className="mt-3">Be part of the next generation of healthcare Provide consults at your convenience</p>
    //                 <p className="mt-3" style={{ fontWeight: "800", color: "#000" }}>Why should you join Istishartak?</p>
    //             </div>
    //             <div className="why_istishratk d-flex mt-4">
    //                 <ul className="mr-10">
    //                     <li>
    //                         Maximized Productivity</li>
    //                     <li>Increased Accessibility</li>
    //                     <li>No Commissions
    //                     </li>
    //                 </ul>
    //                 <ul>
    //                     <li>
    //                         Maximized Productivity</li>
    //                     <li>Increased Accessibility</li>
    //                     <li>No Commissions
    //                     </li>
    //                 </ul>
    //             </div>

    //         </div>
    //         <div className="col-lg-6 col-md-12 col-sm-12 mockup_phone">
    //             <img src={require('../Images/4.jpg')} alt="Content Image" />
    //         </div>


    //     </div>

    // </div>
    // <div className="container">

    //     <div className="row cont d-flex align-items-center justify-content-center " >

    //         <div className=" col-lg-6 col-md-12 col-sm-12 container_text ">
    //             <div className="stayingHealth ">
    //                 <p style={{ fontSize: "50px", color: "#048897" }}><b>Our Specialties</b> </p>
    //                 <p className="mt-3">Access a network of the best and highly recommended doctors of more than 50 specialties, anywhere you are

    //                 </p>
    //             </div>
    //             <button type="button" class="btn btn-lg btn_book_now mt-5">Book Now</button>
    //         </div>
    //         <div className="col-lg-6 col-md-12 col-sm-12 mockup_phone">
    //             <img src={require('../Images/5.jpg')} alt="Content Image" />
    //         </div>


    //     </div>

    // </div>
    // <div className="container">

    //     <div className="row cont d-flex align-items-center justify-content-center " >

    //         <div className=" col-lg-6 col-md-12 col-sm-12 container_text ">
    //             <div className="stayingHealth ">
    //                 <p style={{ fontSize: "50px", color: "#048897" }}><b>Download</b>  the app
    //                 </p>
    //                 <p className="mt-3">Now available on the App Store and Play Store!



    //                 </p>
    //             </div>
    //             <button type="button" className="btn btn-lg btn_book_now mt-5 mr-5"><i className="fa-brands fa-apple fa-lg mr-3" style={{color: "#ffffff"}}></i>App Store</button>
    //             <button type="button" className="btn btn-lg btn_book_now mt-5"><i class="fa-brands fa-android fa-lg mr-2" style={{color: "#ffffff"}}></i>Play Store</button>

    //         </div>
    //         <div className="col-lg-6 col-md-12 col-sm-12 mockup_phone">
    //             <img src={require('../Images/6.jpg')} alt="Content Image" />
    //         </div>


    //     </div>

    // </div>
    //             <div className="container">

    // <div className="row cont d-flex align-items-center justify-content-center " >

    //     <div className=" col-lg-6 col-md-12 col-sm-12 container_text ">
    //         <div className="stayingHealth ">
    //             <p style={{ fontSize: "50px", color: "#048897" }}><b>Get</b>  in touch

    //             </p>
    //             <div className="d-flex ">
    //             <p className="mt-3 mr-10"><i className="fa-solid fa-phone fa-sm" style={{color: "#048897"}}></i> Call Us now     </p>
    //             <p className="mt-3"> <i className="fa-regular fa-envelope fa-sm mr-2" style={{color: "#048897"}}></i>Send Email      </p>


    //             </div>



    //         </div>

    //     </div>
    //     <div className="col-lg-6 col-md-12 col-sm-12 mockup_phone">
    //         <img src={require('../Images/8.jpg')} alt="Content Image" />
    //     </div>


    // </div>

    // </div>
    //         </div>

  )
}

export default LandingPage
