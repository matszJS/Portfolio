import './Skills.scss'
import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import ReactTooltip from 'react-tooltip'
import { ThemeContext } from '../../context'

const Skills = () => {

  const [experiences, setExperiences] = useState([])
  const [skills, setSkills] = useState([])
  const theme = useContext(ThemeContext)
  const darkmode = theme.state.darkmode

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);



  return (
    <div className='app__skillsC' id='skills'style={{ background: darkmode ? '#ffffff':'#242424', color:  darkmode ? '#242424': '#ffffff'}}>
    <motion.h2 className="head-text" whileInView={{ y: [100 , 50, 0], opacity: [0,0,1] }} transition={{duration:0.5,type:'tween'}}>Skills <span style={{color:'#7764ff'}}>&</span> Experiences</motion.h2>
      <motion.small  whileInView={{ y: [100 , 50, 0], opacity: [0,0,1] }} transition={{duration:0.5,type:'tween'}}>( Place the cursor over the company to see the description )</motion.small>
    <div className="app__skills-container">
      <motion.div className="app__skills-list">
        {skills.map((skill) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            key={skill.name}
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
      <div className="app__skills-exp">
        {experiences.map((experience) => (
          <motion.div
            className="app__skills-exp-item"
            key={experience}
          >
            <div className="app__skills-exp-year">
              <p className="bold-text">{experience.year}</p>
            </div>
            <motion.div className="app__skills-exp-works">
              {experience.works.map((work) => (
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    data-for={work.name}
                    key={work}
                  >
                    <h4 className="bold-text">{work.name}</h4>
                    <p className="p-text">{work.company}</p>
                    <p className='desc' style={{ color:  darkmode ? '#242424': '#ffffff' }}>{work.desc}</p>
                  </motion.div>
                  <ReactTooltip
                    id={work.name}
                    effect="solid"
                    arrowColor="#fff"
                    className="skills-tooltip"
                  >
                    {work.desc}
                  </ReactTooltip>
                </>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Skills
