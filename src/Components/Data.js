
import StayingHealth from "./StayingHealth";
import Tabs from "./Tabs";
import BookNow from "./BookNow";
import ForDoctors from "./ForDoctors";
import OurSpecialties from "./OurSpecialties";
import DownloadApp from "./DownloadApp";
import GetInTouch from "./GetInTouch";
import Footer from "./Footer";
const designTemplates = [
  {
    imageComponent: <div>Image 2</div>,
    additionalComponent: <GetInTouch />, // Replace with your Tabs component
  },
 
  {
    imageComponent:  <div>Image 2</div>,
    additionalComponent: <StayingHealth/>,
    imageSize: "10px",

  },


  {
    imageComponent: <div>Image 2</div>,
    additionalComponent: <Tabs />, // Replace with your Tabs component
  },
  
  {
    // btn:<button>Book Now</button>,
    imageComponent: <img src="../Images/4.jpg" alt="Image 3" />,
    additionalComponent:<BookNow/>

  },
  
  {
    imageComponent: <div>Image 2</div>,
    additionalComponent: <ForDoctors />, // Replace with your Tabs component
  },
  
  {
    imageComponent: <div>Image 2</div>,
    additionalComponent: <OurSpecialties />, // Replace with your Tabs component
  },
 
  {
    imageComponent: <div>Image 2</div>,
    additionalComponent: <DownloadApp />, // Replace with your Tabs component
  },



 
  // Add more design templates for each image
];
export default designTemplates