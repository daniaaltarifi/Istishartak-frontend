import React from 'react'

function Tabs() {
    return (
        <div className="container main_container fadeInUp-animation" id='BOOKING' >

            <div className="row cont d-flex align-items-center justify-content-center ms-5" >

                <div className=" container_text">
                    <div className="stayingHealth">
                        <p className='font_title'>
                            <b>Book</b> A virtual visit with your <b>doctor</b>  today</p>
                        <p className="mt-3 paragraph_title">Schedule and meet with your favourite doctors conveniently, on your smartphone, tablet or computer</p>
                    </div>
                    <ul className="nav nav-tabs mb-3 mt-4" id="ex1" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a
                                className="nav-link active "
                                id="ex1-tab-1"
                                data-mdb-toggle="tab"
                                href="#ex1-tabs-1"
                                role="tab"
                                aria-controls="ex1-tabs-1"
                                aria-selected="true"
                            >Find a Doctor</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a
                                className="nav-link"
                                id="ex1-tab-2"
                                data-mdb-toggle="tab"
                                href="#ex1-tabs-2"
                                role="tab"
                                aria-controls="ex1-tabs-2"
                                aria-selected="false"
                            >Appointment</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a
                                className="nav-link"
                                id="ex1-tab-3"
                                data-mdb-toggle="tab"
                                href="#ex1-tabs-3"
                                role="tab"
                                aria-controls="ex1-tabs-3"
                                aria-selected="false"
                            >Meet the Doctor</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a
                                className="nav-link"
                                id="ex1-tab-4"
                                data-mdb-toggle="tab"
                                href="#ex1-tabs-4"
                                role="tab"
                                aria-controls="ex1-tabs-4"
                                aria-selected="false"
                            >Follow up</a>
                        </li>
                    </ul>

                    <div className="tab-content" id="ex1-content">
                        <div
                            className="tab-pane fade show active"
                            id="ex1-tabs-1"
                            role="tabpanel"
                            aria-labelledby="ex1-tab-1"
                        >
                            <p className='mt-4 tabs_content '>Find a Doctor
                            </p>
                            <p className='mt-4 w-75  desc_tabs'>We have a curated list of qualified doctors. You can easily find a doctor by name or specialty and view their profile before making an appointment</p>                            </div>
                        <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                            <p className='mt-4 tabs_content'>Book Appointment

                            </p>
                            <p className='mt-4 w-75 desc_tabs'>With only a couple clicks you can choose the day and time that works best for you</p>
                        </div>
                        <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                            <p className='mt-4 tabs_content'>Meet the Doctor
                            </p>
                            <p className='mt-4 w-75 desc_tabs'>With pristine video and audio quality you and your doctor can discuss your health needs and receive quality care advice</p>                              </div>
                        <div className="tab-pane fade" id="ex1-tabs-4" role="tabpanel" aria-labelledby="ex1-tab-4">
                            <p className='mt-4 tabs_content'>Follow up Care

                            </p>
                            <p className='mt-4 w-75 desc_tabs'>Stay up to date on your health needs. Easily connect and follow up with your doctor about any health directives or new issues</p>                              </div>

                    </div>

                    {/* <!-- Tabs content --> */}

                </div>
                {/* <div className="col-lg-6 col-md-12 col-sm-12 mockup_phone">
                <img src={require('../Images/4.jpg')} alt="Content Image" />
            </div> */}
                <div className="col-lg-6 col-md-12 col-sm-12 ">
                    {/* <img src={require('../Images/2.jpg')} className="change" /> */}
                </div>

            </div>
            
        </div>
    )
}

export default Tabs
