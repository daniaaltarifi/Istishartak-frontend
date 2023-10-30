// import React, { useEffect } from 'react'
// import '../Style/Html.css'
// import $ from 'jquery';

// function Html() {
//     useEffect(()=>{
//         ;( function( window ) {
        
//             'use strict';
        
//             function extend( a, b ) {
//                 for( var key in b ) { 
//                     if( b.hasOwnProperty( key ) ) {
//                         a[key] = b[key];
//                     }
//                 }
//                 return a;
//             }
        
//             function CBPFWTabs( el, options ) {
//                 this.el = el;
//                 this.options = extend( {}, this.options );
//                   extend( this.options, options );
//                   this._init();
//             }
        
//             CBPFWTabs.prototype.options = {
//                 start : 0
//             };
        
//             CBPFWTabs.prototype._init = function() {
//                 // tabs elems
//                 this.tabs = [].slice.call( this.el.querySelectorAll( 'nav > ul > li' ) );
//                 // content items
//                 this.items = [].slice.call( this.el.querySelectorAll( '.content-wrap > section' ) );
//                 // current index
//                 this.current = -1;
//                 // show current content item
//                 this._show();
//                 // init events
//                 this._initEvents();
//             };
        
//             CBPFWTabs.prototype._initEvents = function() {
//                 var self = this;
//                 this.tabs.forEach( function( tab, idx ) {
//                     tab.addEventListener( 'click', function( ev ) {
//                         ev.preventDefault();
//                         self._show( idx );
//                     } );
//                 } );
//             };
        
//             CBPFWTabs.prototype._show = function( idx ) {
//                 if( this.current >= 0 ) {
//                     this.tabs[ this.current ].className = this.items[ this.current ].className = '';
//                 }
//                 // change current
//                 this.current = idx != undefined ? idx : this.options.start >= 0 && this.options.start < this.items.length ? this.options.start : 0;
//                 this.tabs[ this.current ].className = 'tab-current';
//                 this.items[ this.current ].className = 'content-current';
//             };
        
//             // add to global namespace
//             window.CBPFWTabs = CBPFWTabs;
        
//         })( window );
 
//     },[])
    
  

//   return (
//     <div>
//             {/* <!-- PRELOADER -->
//   <!--  <div id="preloader"><img src="images/logo.png" alt=""></div> --> */}

//     {/* <!-- MAIN NAV --> */}
//     <a id="main-nav" href="#sidr"><span class="flaticon-menu9"></span></a>
//     <div id="sidr" class="sidr">
        
//   {/* <!--      <!-- MAIN NAV LOGO  */}
//         <a href="#" id="menu-logo"><img src="images/menu-logo.png" alt=""/></a>
        
//         {/* <!-- MAIN NAV LINKS --> */}
//         <ul>
//             <li><a href="#Home" ><span class="icons flaticon-house3"></span>Home</a>
//             </li>
//             <li><a href="#booking" ><span class="icons flaticon-drawer1"></span>Booking</a>
//             </li>
//             <li><a href="#Doctors" ><span class="icons flaticon-cursor7"></span>Our Doctors</a>
//             </li>
//             <li><a href="#Join" ><span class="icons flaticon-key9"></span>For Doctors</a>
//             </li>
//             <li><a href="#Specialties" ><span class="icons flaticon-comment2"></span>Specialties</a>
//             </li>
//             <li><a href="#Download" ><span class="icons flaticon-download11"></span>Download</a>
//             </li>
//             <li><a href="#Contact" ><span class="icons flaticon-small72"></span>Contact</a>
//             </li>
//              <li><a href="https://isystem.qtechnetworks.co/doctor" ><span class="icons flaticon-small72"></span>Login</a>
//             </li>
//         </ul>
//         {/* <!-- END MAIN NAV LINKS --> */}
//     </div>
//     {/* <!-- END MAIN NAV --> */}
    
//     {/* <!-- PAGE LOGO --> */}
//       <div class="wrap">
//         <div id="logo">
//             <a href="#"><img src="images/logo.png" class="logomain" alt="" style={{maxWidth:"250px", height:"auto"}}/> </a>

      
      
//       </div>
//     </div>
//     {/* <!-- END PAGE LOGO --> */}

//     {/* <!-- LANDING PAGE CONTENT --> */}
//     <div id="fullpage">
        
//         {/* <!-- RIGHT HAND & PHONE MOCK-UP IMAGES --> */}
//         <div class="wrap">
//             <div class="section-image"> 
//          <img src="images/1.jpg" alt=""/>
//       <img src="images/2.jpg" alt=""/>
//            <img src="images/3.jpg" alt=""/>
//           <img src="images/4.jpg" alt=""/>
//            <img src="images/5.jpg" alt=""/>
//           <img src="images/6.jpg" alt=""/>
//            <img src="images/8.jpg" alt=""/>
//          <img src="images/6.jpg" alt=""/>
//           <img src="images/1.jpg" alt=""/>
//             </div>
//             <div id="hand"></div>
//         </div>
//         {/* <!-- END RIGHT HAND & PHONE MOCK-UP --> */}
        
//    {/* <!-- Staying tab Section --> */}
//         <div class="section " id="section0">
//             <div class="wrap">
//                 <div class="box">
//                     {/* <!-- SECTION HOME CONTENT --> */}
//                     <h1>Staying healthy is just a <strong>tap </strong>away</h1>
//                     <p>Our incredible team of doctors want you to have the quality of in-person care but from the comfort of home</p>
                   
              
//               </div>
//                     {/* <!-- END SECTION Staying tab CONTENT --> */}
//             </div>
//         </div>
//         <div class="section" id="section1">
//     <div class="wrap">
//         <div class="box">
//             {/* <h3>
//                 <strong><br><br>Book </strong>A virtual visit with your <strong>doctor </strong>today
//             </h3> */}
//             <p>Schedule and meet with your favourite doctors conveniently, on your smartphone, tablet, or computer</p>
//             <div class="tabs tabs-style-linemove">
//                 <nav>
//                     <ul>
//                         <li><a href="#section-linemove-1"><span class="icon flaticon-lightbulb"></span><span> Find a Doctor</span></a></li>
//                         <li><a href="#section-linemove-2"><span class="icon flaticon-adjust3"></span><span> Appointment</span></a></li>
//                         <li><a href="#section-linemove-3"><span class="icon flaticon-drawer1"></span><span> Meet the Doctor</span></a></li>
//                         <li><a href="#section-linemove-4"><span class="icon flaticon-laptop3"></span><span> Follow up</span></a></li>
//                     </ul>
//                 </nav>
//                 <div class="content-wrap">
//                     <section id="section-linemove-1">
//                         <h4>Find a Doctor</h4>
//                         <p>We have a curated list of qualified doctors. You can easily find a doctor by name or specialty and view their profile before making an appointment</p>
//                     </section>
//                     <section id="section-linemove-2">
//                         <h4>Book Appointment</h4>
//                         <h4>With only a couple clicks you can choose the day and time that works best for you</h4>
//                     </section>
//                     <section id="section-linemove-3">
//                         <h4>Meet the Doctor</h4>
//                         <p>With pristine video and audio quality you and your doctor can discuss your health needs and receive quality care advice</p>
//                     </section>
//                     <section id="section-linemove-4">
//                         <h4>Follow up Care</h4>
//                         <p>Stay up to date on your health needs. Easily connect and follow up with your doctor about any health directives or new issues</p>
//                     </section>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>



    
//     </div>
//     </div>
//   )
// }

// export default Html