import React, { useEffect, useState } from "react";
import "./About.scss";
import {motion} from "framer-motion"
// import images from "../../constants/images"
import { urlFor, client } from "../../client";

import { MotionWrap, AppWrap } from "../../wrapper";



const About = () => {

  const [abouts, setAbouts] = useState([])

  useEffect(()=>{
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data)=>setAbouts(data))
  },[])

  return (
    <div id="about">
      <h1 className="head-text">I Know Good <span>Development</span><br />means <span>Good Business </span></h1>
      <div className="app__profile">
        {
          abouts.map((about,index)=>(
            <motion.div 
            whileInView={{opacity:1}}
            whileHover={{scale:1.1}}
            transition={{duration:0.5, type:"tween"}}
            className="app__profile-item"
            key={about.title+index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className="bold-text" style={{marginTop:20}}>{about.title}</h2>
              <p className="p-text" style={{marginTop:10}}>{about.description}</p>

            </motion.div>
          ))
        }
      </div>
    </div>
  );
};

export default AppWrap(
 MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
  );
