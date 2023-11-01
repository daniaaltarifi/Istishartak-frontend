import React, { useEffect, useState } from 'react'
import axios from 'axios';
function StayNew() {
  const [add, setAdd] = useState([]);
  const [selectedLang,setSelectedLang]=useState("english")
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/stayinghealth"
        );
        setAdd(response.data);
        console.log("add", add)
      } catch (error) {
        console.log(`Error getting Blog from frontend: ${error}`);
      }
    };
  
    fetchData();

  },[])
  return (
    <div className="container main_container" id='HOME'>
      {/* <br />
    <br />
    <br /> */}
      <div className="row cont d-flex align-items-center justify-content-center ms-5 " >

        <div className={`container_text ${selectedLang === "english" ? "" : "hidden"}`}>
          {add.map((cont) => (
            <div className="stayingHealth ">
              <p className='font_title'>{cont.title}</p>
              <p className="mt-3 paragraph_title">
                {cont.description}  </p>
            </div>
          ))}

          {/* <button type="button" class="btn btn-lg btn_book_now mt-5">Book Now</button> */}
        </div>

        <div className={`container_text  ${selectedLang === "arabic" ? "" : "hidden"}`} >
          {add.map((cont) => (
            <div className="stayingHealth ">
              <p className='font_title'>{cont.title_ar}</p>
              <p className="mt-3 paragraph_title">
                {cont.description_ar}  </p>
            </div>
          ))}

          {/* <button type="button" class="btn btn-lg btn_book_now mt-5">Book Now</button> */}
        </div>


        <div className="col-lg-6 col-md-12 col-sm-12  ">
          {/* <img src={require('../Images/5.jpg')} className="change" /> */}
        </div>
     


      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="language-selector">
          <select onChange={(e)=>{setSelectedLang(e.target.value)}}>
            <option value="english">english</option>
            <option value="arabic">arabic</option>
          </select>
        </div>
    </div>
  )
}

export default StayNew;
