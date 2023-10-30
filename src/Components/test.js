import React, { useEffect, useRef, useState } from "react";
import '../Style/LandingPage.css';
import '../Style/Sidebar.css'
import Sidebar from "./Sidebar";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import designTemplates from "./Data";
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import Footer from "./Footer";
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        <img src={`/${id}.jpg`} alt="A London skyscraper" />
      </div>
      {/* <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2> */}
    </section>
  //   <div className="image-container" ref={ref}>
  // <img src={`/${id}.jpg`} alt="A London skyscraper"  className="overlay-image"/>

  //   </div>
  );
}

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

function LandingPage({ isSidebarOpen }) {

  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });

  const { scrollYProgress } = useScroll();
  const numDots = 7; // Change this to the desired number of dots.
  // const activeDotIndex = Math.floor(scrollYProgress * (numDots - 1));
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newIndex = Math.floor(scrollYProgress.get() * (numDots - 1));
      setActiveDotIndex(newIndex);
    };

    scrollYProgress.onChange(handleScroll);

    return () => {
      scrollYProgress.onChange(null);
    };
  }, [scrollYProgress, numDots]);
  return (
    <>
      <div>

        <Sidebar />


        {[1, 2, 3, 4, 5, 6, 7].map((index) => (

          <div className="container " key={index} >
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="row cont d-flex align-items-center justify-content-center mt-5" >
              <div className=" col-lg-6 col-md-12 col-sm-12 container_text">
                <p >{designTemplates[index % designTemplates.length].additionalComponent}</p>
                {/* <p class="btn btn-lg btn_book_now mt-5">{designTemplates[index % designTemplates.length].btn}</p> */}

              </div>
              {/* <div className="col-lg-6 col-md-12 col-sm-12 mockup_phone">
                <Image id={index} />
              </div> */}
               <DeviceFrameset device="iPhone X" color="gold" >
               <Image id={index} />
        </DeviceFrameset>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />


          </div>

        ))}
       <div className="dots"
 
>
  {Array.from({ length: numDots }, (_, index) => (
    <Dot key={index} active={index === activeDotIndex} />
  ))}
</div>

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


{[1, 2, 3, 4, 5, 6, 7].map((index) => (

  <div className="container main_cont" key={index} style={{marginLeft:"15%"}}>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="row cont d-flex align-items-center justify-content-center " >
      <div className=" col-lg-6 col-md-12 col-sm-12 container_text ">
        <p >{designTemplates[index % designTemplates.length].additionalComponent}</p>

      </div>
      
      <div className="col-lg-6 col-md-12 col-sm-12 changing_img ">
        <Image id={index} className="chnage" />
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
<br/>
<br/>
<br/>
<br/>

  </div>

))}



<Router>
    <Routes>
        <Route path="/" element={<LandingPage/>}/>  
        <Route path='/privacypolicy' element={<PrivacyPolicy/>}/> 
        <Route path='/termsandconditions' element={<TermsAndConditions/>}/> 
        {/* <Route path='/html' element={<Box/>}/>  */}

         </Routes>
</Router>