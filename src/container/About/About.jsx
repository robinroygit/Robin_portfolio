import React, { useEffect, useState } from "react";
import "./About.scss";
import {motion} from "framer-motion"
// import images from "../../constants/images"
import { urlFor, client } from "../../client";
import AppWrap from "../../wrapper/AppWrap";


// const about = [
//   {
//     title: "Web Development",
//     description: "I am a Good Developer",
//     imgUrl: images.about01,
//   },
//   {
//     title: "Front-end Development  ",
//     description: "I am a Good Developer",
//     imgUrl: images.about02,
//   },
//   {
//     title: "Web Design",
//     description: "I am a Good Developer",
//     imgUrl:images.about03,
//   },
//   {
//     title: "UI/UX",
//     description: "I am a Good Developer",
//     imgUrl: images.about04,
//   },
// ];

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

export default AppWrap(About,"about");
