import React from 'react'

function DownloadApp() {
  return (
    <div className="container main_container fadeInUp-animation"id='DOWNLOAD'>
  
    <div className="row cont d-flex align-items-center justify-content-center ms-5" >

        <div className=" container_text " >
            <div className="stayingHealth">
                <p className='font_title'><b>Download</b>  the app
                </p>
                <p className="mt-3 paragraph_title">Now available on the App Store and Play Store!



                </p>
            </div>
            <button type="button" className="btn btn-lg btn_book_now mt-5 mr-5"><i className="fa-brands fa-apple fa-lg mr-3" style={{color: "#ffffff"}}></i>App Store</button>
            <button type="button" className="btn btn-lg btn_book_now mt-5"><i class="fa-brands fa-android fa-lg mr-2" style={{color: "#ffffff"}}></i>Play Store</button>

        </div>
        <div className="col-lg-6 col-md-12 col-sm-12  ">
                    {/* <img src={require('../Images/6.jpg')} className="change" /> */}
                </div>


    </div>
    <br />
    <br />
    <br />
    <br /> 
    
</div>
  )
}

export default DownloadApp
