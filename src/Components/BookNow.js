import React from 'react'

function BookNow() {
  return (
    <div className="container main_container fadeInUp-animation" id="OURDOCTOR">

                 <div className="row cont d-flex align-items-center justify-content-center ms-5 " >

                     <div className="container_text  ">
                         <div className="stayingHealth ">
                             <p className='font_title'><b>Meet</b> Our Qualified <b>Doctors</b></p>
                           <p className="mt-3 paragraph_title">Access a network of the best and highly recommended doctors of more than 50 specialties, anywhere you are</p>
                         </div>
                         <button type="button" class="btn btn-lg btn_book_now mt-5">Book Now</button>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12  ">
                    {/* <img src={require('../Images/3.jpg')} className="change" /> */}
                </div>



                 </div>
                 <br />
    <br />
    <br />
    <br />
  
             </div>
  )
}

export default BookNow
