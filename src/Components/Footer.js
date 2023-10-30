import React from 'react'
import '../Style/LandingPage.css'
import LanguageSelector from '../Components/LanguageSelector';

function Footer() {
  return (
<>
<div className='container'>
<div className='row'>
  <div className='footer_full'>
  <div className='col-10 footer_istishartak'>
  <div className='border_footer'>
        <i class="fa-brands fa-facebook-f icon icon_color" style={{paddingLeft:"10%"}}></i>
        </div>
        <div className='border_footer'>
        <i class="fa-brands fa-twitter icon icon_color"></i>
        </div>
        <div className='border_footer'>
        <i class="fa-brands fa-facebook-f icon icon_color"style={{paddingLeft:"10%"}} ></i>
        </div>
        <div className='border_footer'>
        <i class="fa-brands fa-twitter icon icon_color" ></i>
        </div>
        {/* <LanguageSelector /> */}

        </div>
<div className='col-2 footer_payment'>
  <div className=''>
        {/* <i class="fa-brands fa-cc-visa icon" style={{color: "#048897",display:"flex",alignItems:"center",justifyContent:"center"}}></i> */}
        <img src={require('../Images/visa.png')} style={{display:"flex",alignItems:"center",justifyContent:"center"}}/>
        </div>
   
        <div className=''>
        <img src={require('../Images/MasterCard_Logo.svg.png')} width={"10%"}  style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"20%"}}/>
        </div>

        </div>
</div>
</div>

{/* </div> */}
  {/* <div className='footer_istishartak'>
        <div className='border_footer'>
        <i class="fa-brands fa-facebook-f icon" style={{color: "#048897",display:"flex",alignItems:"center",justifyContent:"center"}}></i>
        </div>
        <div className='border_footer'>
        <i class="fa-brands fa-twitter icon" style={{color: "#048897",display:"flex",alignItems:"center",justifyContent:"center"}}></i>
        </div>
        <div className='border_footer'>
        <i class="fa-brands fa-facebook-f icon" style={{color: "#048897",display:"flex",alignItems:"center",justifyContent:"center"}}></i>
        </div>
        <div className='border_footer'>
        <i class="fa-brands fa-twitter icon" style={{color: "#048897",display:"flex",alignItems:"center",justifyContent:"center"}}></i>
        </div>
    </div>
    <div className='footer_payment'>
        <div className='border_footer'>
        <i class="fa-brands fa-facebook-f icon" style={{color: "#048897",display:"flex",alignItems:"center",justifyContent:"center"}}></i>
        </div>
        <div className='border_footer'>
        <i class="fa-brands fa-twitter icon" style={{color: "#048897",display:"flex",alignItems:"center",justifyContent:"center"}}></i>
        </div>
       
    </div> */}
    </div>
    </>


  
  )
}

export default Footer
