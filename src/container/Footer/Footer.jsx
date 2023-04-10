import { AppWrap, MotionWrap } from "../../wrapper";
import {  client } from "../../client";
import images from "../../constants/images";
// import React, { useState, useEffect } from 'react';
import "./Footer.scss";
import { useState } from "react";

const Footer = () => {


  const [formData, setFormData] = useState({name:"",email:"",message:"",})
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [loading, setLoading] = useState(false)

  const {name,email,message} = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit=()=>{
    setLoading(true);

    const contact = {
      _type: 'contact',
       name: formData.name,
       email: formData.email,
       message: formData.message,
    };

    client.create(contact).then(()=>{
      setLoading(false);
      setIsFormSubmited(true)
    }).catch((err)=>{console.log(err)})
  }


  return (
    <>
      <h2 className="head-text">Chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:robinroy.9@gmail.com" className="p-text">
            Robinroy.9@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile " />
          <a href="tel:+91397927357" className="p-text">
            +919891244212
          </a>
        </div>
      </div>

{!isFormSubmited? 
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input
            className="p-text"
            type="text"
            placeholder="Your Name"
            value={name}
            name="name"
            onChange={handleChangeInput}
          /></div>
          <div>
          <input
            className="p-text"
            type="email"
            placeholder="Your Email"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
        </div>
          <div>
             <textarea
             className="p-text"
             placeholder="your message"
             value={message}
             name="message"
             onChange={handleChangeInput }

             />

          </div>
           
           <button
           type="button"
           className="p-text"
           onClick={handleSubmit}
           >
             {!loading?"Send Message":"Sending..."}
           </button>

      </div>
      : <div>
        <h3 className="head-text">Thank you for getting in touch</h3>
      </div>

}
    </>
  );
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact", "app__primarybg");
