import React from 'react'
import '../Style/Staying.css'
function ForDoctors() {
    return (
        <div className="container main_container fadeInUp-animation " id='FORDOCTOR'>
          
            <div className="row cont d-flex align-items-center justify-content-center ms-5" >

                <div className=" container_text ">
                    <div className="stayingHealth ">
                        <p className='font_title '>For <b>Doctors</b></p>
                        <p className="mt-3 paragraph_title">Be part of the next generation of healthcare Provide consults at your convenience</p>
                        <p className="mt-3 paragraph_title" style={{ fontWeight: "800", color: "#000" }}>Why should you join Istishartak?</p>
                    </div>
                    <div className="why_istishratk d-flex mt-4">
                        <ul className="mr-10" style={{ listStyle: 'none' }}>

                            <li><a class="tooltip" href="#">Maximized  Productivity
                                <span class="tooltip-content"><span class="tooltip-text"><span class="tooltip-inner">Fast, convenient, at the time that is good for you</span></span></span></a> </li>

                            <li><a class="tooltip" href="#"> Increased Accessibility
                                <span class="tooltip-content"><span class="tooltip-text"><span class="tooltip-inner">Patients throughout the MENA region are a click away</span></span></span></a> </li>

                            <li><a class="tooltip" href="#"> No Commissions
                                <span class="tooltip-content"><span class="tooltip-text"><span class="tooltip-inner">Your fees are yours alone Period</span></span></span></a> </li>
                        </ul>
                        <ul style={{ listStyle: 'none' }}>
                            <li><a class="tooltip" href="#">Easy Access
                                <span class="tooltip-content"><span class="tooltip-text"><span class="tooltip-inner">Follow-up with your patients wherever they may reside</span></span></span></a> </li>


                            <li><a class="tooltip" href="#">Adjustable Availability <span class="tooltip-content"><span class="tooltip-text"><span class="tooltip-inner">Adjust your availablity for whenever is convenient for you</span></span></span></a> </li>

                            <li><a class="tooltip" href="#"> Web Portal
                                <span class="tooltip-content"><span class="tooltip-text"><span class="tooltip-inner">Manage your digital practice from your secure dashboard

                                </span></span></span></a> </li>
                        </ul>
                    </div>

                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 ">
                    {/* <img src={require('../Images/4.jpg')} className="change" /> */}
                </div>


            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default ForDoctors
