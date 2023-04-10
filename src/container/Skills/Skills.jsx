import React, { useState, useEffect } from "react";
import "./Skills.scss";
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";
import { client, urlFor } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'experiences']";
    const querySkills = "*[_type == 'skills']";

    client.fetch(query).then((expdata) => setExperience(expdata));
    client.fetch(querySkills).then((skillsdata) => setSkills(skillsdata));
  }, []);


  return (
    <>
      <h1 className="head-text">Skills</h1>
      <div className="app__skills-container">
        <motion.div className="app__skills-list ">
          {skills?.map((skill, index) => (
            <motion.div
              key={skill.name}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {experience?.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience?.works?.map((work) => (
                  <React.Fragment key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      data-tooltip-id={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    
                    </motion.div>
                    <Tooltip 
                    id={work.name} 
                    className="skills-tooltip"
                    place="right"
                    >
                      {work.desc}
                    </Tooltip>
                  
                  </React.Fragment>
                ))}
              </motion.div>

              
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
   "skills",
   "app__whitebg"
   );
 

// ({ id, anchorId, anchorSelect, content, html, render, className, classNameArrow, variant, place, offset, wrapper, children, events, openOnClick, positionStrategy, middlewares, delayShow, delayHide, float, noArrow, clickable, closeOnEsc, style, position, isOpen, setIsOpen, afterShow, afterHide, }: ITooltipController) => JSX.Element export Tooltip
