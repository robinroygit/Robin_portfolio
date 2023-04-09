import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import images from "../../constants/images"
import {AppWrap} from "../../wrapper";

const scaleVariants = {
  whileInView:{
      scale:[0,1],
      opacity:[0,1],
        transition:{
          duration:1,
          ease:'easeInOut'
        }

  }
}



const Header = ({children}) => {
  return (
    <div className="app__header app__flex" >
    

    <motion.div
     whileInView={{opacity: [0, 1] }}
     transition={{ duration: 0.5, delayChildren:0.5 }}
     className="app__header-img"
    >
      <img src={images.profile1} alt="profile_bg" />

      <motion.img
      whileInView={{scale: [0, 1] }}
      transition={{ duration: 1, ease:'easeInOut' }}
      src={images.circle}
      alt="profile_circle"
      className="overlay_circle"
      >

      </motion.img>
      {children}
    </motion.div>

    <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ margin: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">ROBIN</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Frontend Developer </p>
            <p className="p-text">UI/UX designer</p>
          </div>

          <div className="about-me app__flex">
            <p className="">❝I am a Front-end developer with a passion for creating beautiful and intuitive web experiences❞</p>
            {/* <p className="p-text">UI/UX designer</p> */}
          </div>
        </div>
      </motion.div>

    <motion.div
    variants={scaleVariants}
    whileInView={scaleVariants.whileInView}
    className="app__header-circle"
    >
        {[images.figma, images.react, images.redux,images.html5,images.javascript,images.css].map((circle,index)=>(
          <div key={`circle-${index}`} className="circle-cmp app__flex">
            <img src={circle} alt="circle" />

          </div>
        ))}
       
    </motion.div>



    </div>
  );
};

export default AppWrap(Header, "home");
