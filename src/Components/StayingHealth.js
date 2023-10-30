// import React from 'react'
// import { DeviceFrameset } from 'react-device-frameset'
// import 'react-device-frameset/styles/marvel-devices.min.css'
// import { useTranslation } from 'react-i18next';

// function StayingHealth() {
//   return (
//     <div className="container main_container" id='HOME'>

//     <div className="row cont d-flex align-items-center justify-content-center mt-5" >

//         <div className="col-lg-6 col-md-12 col-sm-12 container_text">
//             <div className="stayingHealth">
//                 <p  className='font_title'>Staying healthy is just a <b>tap</b> away</p>
//                 <p className="mt-3 paragraph_title">Our incredible team of doctors want you to have the quality of in-person care but from the comfort of home</p>
//             </div>

//         </div>
//         <div className="col-lg-6 col-md-12 col-sm-12  mockup_phone style_img">
//                     <img src={require('../Images/1.jpg')} className="change fade-bottom" />
//                 </div>
// {/* <DeviceFrameset device="iPhone 8" color="gold" className="mockup_phone">
//         </DeviceFrameset> */}

//     </div>
//     <br />
//     <br />
//     <br />
//     {/* <br />
//     <br />
//     <br />
// <br/>
// <br/>
// <br/>
// <br/> */}

// </div>
//   )
// }

// export default StayingHealth
// import React from 'react';
// import { useSpring, animated } from 'react-spring';

// function StayingHealth() {
//   const [imageIndex, setImageIndex] = React.useState(0);

//   const imageStyles = useSpring({
//     opacity: 1,
//     transform: 'scale(1)',
//     from: { opacity: 0, transform: 'scale(0.9)' },
//   });

//   const images = [
//     require('../Images/1.jpg'), // Default image
//     require('../Images/2.jpg'), // Replace with the new image path
//     require('../Images/3.jpg'), // Default image
//     require('../Images/4.jpg'), // Default image
//     require('../Images/5.jpg'), // Default image

//   ];

//   const handleChangeImage = () => {
//     // Change the image index to the next image in the array
//     setImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="container main_container" id="HOME">
//       <div className="row cont d-flex align-items-center justify-content-center mt-5">
//         <div className="col-lg-6 col-md-12 col-sm-12 container_text">
//           <div className="stayingHealth">
//             <p className="font_title">Staying healthy is just a <b>tap</b> away</p>
//             <p className="mt-3 paragraph_title">
//               Our incredible team of doctors wants you to have the quality of in-person care but from the comfort of home
//             </p>
//           </div>
//         </div>
//         <div className="col-lg-6 col-md-12 col-sm-12 mockup_phone style_img">
//           <animated.img
//             style={imageStyles}
//             src={images[imageIndex]}
//             className="change"
//             onClick={handleChangeImage}
//           />
//         </div>
//       </div>
//       <br />
//       <br />
//       <br />
//     </div>
//   );
// }

// export default StayingHealth;
// true solution
import React, { useEffect, useState, useRef } from 'react';
import '../Style/Staying.css';
import Tabs from './Tabs';
import BookNow from './ForDoctors';
import ForDoctors from './ForDoctors';
import OurSpecialties from './OurSpecialties';
import DownloadApp from './DownloadApp';
import GetInTouch from './GetInTouch';
import StayNew from './StayNew';
import Sidebar from './Sidebar';
import MeetDoctor from './MeetDoctor';
import ScrollBar from './ScrollBar';
import '../Style/Scrollbar.css'
function Dot({ active, onClick }) {
  const dotStyle = {
    width: '11px',
    height: '11px',
    borderRadius: '50%',
    margin: '4px 20px',
    backgroundColor: active ? 'black' : '#fff',
    border: "1px solid #000",
    cursor: 'pointer',
  };

  return <div style={dotStyle} onClick={onClick}></div>;
}
function StayingHealth({ sections }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isReverseScroll, setIsReverseScroll] = useState(true);
  const ref = useRef(null);

  const contentItems = [

    {
      id: "HOME",
      content: <StayNew />,
      image: require('../Images/1.jpg'),
    },
    {
      id: "BOOKING",
      content: <Tabs />,
      image: require('../Images/2.jpg'),
    },
 
    {
      id: "OURDOCTOR",
      content: <MeetDoctor />,
      image: require('../Images/3.jpg'),
    },
    {
      id: "FORDOCTOR",
      content: <ForDoctors />,
      image: require('../Images/4.jpg'),
    },
    {
      id: "SPECIALTIES",
      content: <OurSpecialties />,
      image: require('../Images/5.jpg'),
    },
    {
      id: "DOWNLOAD",
      content: <DownloadApp />,
      image: require('../Images/6.jpg'),
    },

    {
      id: "CONTACT",
      content: <GetInTouch />,
      image: require('../Images/7.jpg'),
    },
  
    // Add more content items with associated images
  ];
  

  useEffect(() => {
    function handleScroll(event) {
      if (event.deltaY > 0 && currentImageIndex < contentItems.length - 1) {
        setCurrentImageIndex((prevIndex) => prevIndex + 1);
        setIsReverseScroll(false);
      } else if (event.deltaY < 0 && currentImageIndex > 0) {
        setCurrentImageIndex((prevIndex) => prevIndex - 1);
        setIsReverseScroll(true);
      }
    }

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentImageIndex]);

  const animationClassName = isReverseScroll ? 'change-content-reverse' : 'change-content';
  const animationImageClassName = isReverseScroll ? 'change-image-reverse ' : 'change-image';

  return (
    <>
      <Sidebar contentItems={contentItems} setCurrentImageIndex={setCurrentImageIndex} />
      <div className='dots'>
        {sections.map((sectionId, index) => (
          <Dot
            key={sectionId}
            active={index === currentImageIndex}
            onClick={() => {
              const sectionIndex = contentItems.findIndex(item => item.id === sectionId);
              if (sectionIndex !== -1) {
                setCurrentImageIndex(sectionIndex);
              }
            }}
          />
        ))}
      </div>
      <div className="container main_container">
        <div className="row cont d-flex align-items-center justify-content-center ">

          <div className="col-lg-8 col-md-12 col-sm-12 ">
            <div className={`container_text `} id="animatedText">
              <div className={`text-content fadeInUp-animation ${animationClassName}`}>
                {contentItems[currentImageIndex].content}
              </div>
            </div>
          </div>
          <div className={`col-lg-4 col-md-12 col-sm-12 style_img  ${isReverseScroll ? 'reverse-scroll' : ''}`}>
            <div className="mockup_phone">
              {/* Frame mockup phone */}
            </div>
            {contentItems.map((item, index) => (
  <img
    key={index}
    src={item.image}
    className={
      index === currentImageIndex
        ? `current-image visible ${animationImageClassName}  img-fluid`
        : index === currentImageIndex + 1
          ? `next-image ${animationImageClassName}`
          : 'next-image hidden' // Add a condition for hiding the next-image
    }
    id="image_change"
   
  />
))}
{/* <ul ref={ref} className="vertical-scroll list_img">
<img src={require('../Images/1.jpg')}     />
<img src={require('../Images/2.jpg')}     />
<img src={require('../Images/3.jpg')}     />
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul> */}

          </div>
        </div>

      </div>

    </>
  );
}

export default StayingHealth;

