import React, { useState, useEffect, useRef } from 'react';
import '../Style/LandingPage.css';

function GetInTouch() {
  const [isInputClicked, setInputClicked] = useState(false);
  const [isInputClicked2, setInputClicked2] = useState(false);
  const [isInputClicked3, setInputClicked3] = useState(false);
  const [isInputClicked4, setInputClicked4] = useState(false);
  const [isInputClicked5, setInputClicked5] = useState(false);

  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        inputRef2.current &&
        !inputRef2.current.contains(event.target) &&
        inputRef3.current &&
        !inputRef3.current.contains(event.target) &&
        inputRef4.current &&
        !inputRef4.current.contains(event.target) &&
        inputRef5.current &&
        !inputRef5.current.contains(event.target)
      ) {
        setInputClicked(false);
        setInputClicked2(false);
        setInputClicked3(false);
        setInputClicked4(false);
        setInputClicked5(false);

      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function handleInputClick() {
    setInputClicked(true);
  }

  function handleLeave() {
    setInputClicked(false);
  }

  function handleInputClick2() {
    setInputClicked2(true);
  }

  function handleLeave2() {
    setInputClicked2(false);
  }

  function handleInputClick3() {
    setInputClicked3(true);
  }

  function handleLeave3() {
    setInputClicked3(false);
  }

  function handleInputClick4() {
    setInputClicked4(true);
  }

  function handleLeave4() {
    setInputClicked4(false);
  }
  function handleInputClick5() {
    setInputClicked5(true);
  }

  function handleLeave5() {
    setInputClicked5(false);
  }
  const inputStyle = {
    backgroundColor: isInputClicked ? '#048897' : '#fff',
    color: isInputClicked ? '#fff' : '#048897',
    border: isInputClicked ? 'none' : 'none',
  };

  const inputStyle2 = {
    backgroundColor: isInputClicked2 ? '#048897' : '#fff',
    color: isInputClicked2 ? '#fff' : '#048897',
    border: isInputClicked2 ? 'none' : 'none',
  };
  const inputStyle3 = {
    backgroundColor: isInputClicked3 ? '#048897' : '#fff',
    color: isInputClicked3 ? '#fff' : '#048897',
    border: isInputClicked3 ? 'none' : 'none',
  };
  const inputStyle4 = {
    backgroundColor: isInputClicked4 ? '#048897' : '#fff',
    color: isInputClicked4 ? '#fff' : '#048897',
    border: isInputClicked4 ? 'none' : 'none',
  };
  const inputStyle5 = {
    backgroundColor: isInputClicked5 ? '#048897' : '#fff',
    color: isInputClicked5 ? '#fff' : '#048897',
    border: isInputClicked5 ? 'none' : 'none',
  };

  return (
    <div className="container main_container fadeInUp-animation" id='CONTACT'>
  
      <div className="row cont d-flex align-items-center justify-content-center ms-5">
        <div className="cont_contact">
          <div className="stayingHealth ">
            <p className='font_title getintouch'>
              <b>Get</b> in touch
            </p>
            <div className="d-flex mb-4 ms-3">

              <ul class="features" style={{ listStyle: 'none' }}>
                <li><a class="tooltip" href="#"><i className="fa-solid fa-phone fa-sm" style={{ color: '#048897' }}></i> Call Us now<span class="tooltip-content"><span class="tooltip-text"><span class="tooltip-inner"><span class="icon flaticon-telephone1"></span>+00 962 7 0000000 </span></span></span></a> </li>
              </ul>
              <ul class="features" style={{ listStyle: 'none' }}>
                <li><a class="tooltip" href="#">  <i className="fa-regular fa-envelope fa-sm mr-2" style={{ color: '#048897' }}></i>Send Email<span class="tooltip-content"><span class="tooltip-text"><span class="tooltip-inner"><span class="icon flaticon-mail9"></span>info@istishartak.com</span></span></span></a> </li>

              </ul>
            </div>
            <div className="container">
              <div class="row">
                <div class="col-6">
                  <div className="input-group-lg mb-3" ref={inputRef}>
                    <input
                      type="text"
                      className={`form-control input_contact`}
                      placeholder="Name"
                      aria-label="name"
                      aria-describedby="basic-addon1"
                      onMouseDown={handleInputClick}
                      onMouseEnter={handleLeave}
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div className="input-group-lg mb-3" ref={inputRef2}>
                    <input
                      type="text"
                      className={`form-control input_contact`}
                      placeholder="Email"
                      aria-label="email"
                      aria-describedby="basic-addon2"
                      onMouseDown={handleInputClick2}
                      onMouseEnter={handleLeave2}
                      style={inputStyle2}
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <div className="input-group-lg mb-3" ref={inputRef3}>
                    <input
                      type="text"
                      className={`form-control input_contact`}
                      placeholder="Phone"
                      aria-label="phone"
                      aria-describedby="basic-addon3"
                      onMouseDown={handleInputClick3}
                      onMouseEnter={handleLeave3}
                      style={inputStyle3}
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div className="input-group-lg mb-3" ref={inputRef4}>
                    <input
                      type="text"
                      className={`form-control input_contact`}
                      placeholder="Subject"
                      aria-label="subject"
                      aria-describedby="basic-addon4"
                      onMouseDown={handleInputClick4}
                      onMouseEnter={handleLeave4}
                      style={inputStyle4}
                    />
                  </div>
                </div>
              </div>
              <div class="row ">
                <div class="col-6  w-100 " >
                  <div className="input-group-lg mb-3 " ref={inputRef5}>

                    <textarea
                      type="text"
                      className={`form-control input_contact h-100`}
                      placeholder=" Message"
                      aria-label="message"
                      aria-describedby="basic-addon5"
                      onMouseDown={handleInputClick5}
                      onMouseEnter={handleLeave5}
                      style={inputStyle5}
                    />
                  </div>
                </div>
              </div>
              <button type="button" class="btn btn-lg btn_book_now mt-2">Send</button>

            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12  ">
                    {/* <img src={require('../Images/7.jpg')} className="change" /> */}
                </div>

      </div>
      <br />
    <br />
    {/* <br />
    <br />
    <br />
    <br />
    <br />
    <br /> */}

    </div>
  );
}

export default GetInTouch;
