import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Header.scss';
import { AppWrap } from '../../wrapper';
import Typewritter from 'typewriter-effect'
import { iconsAssets } from '../../assets/icons'
import { ThemeContext } from '../../context'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {

  const theme = useContext(ThemeContext)
  const darkmode = theme.state.darkmode

  return (
  <div className="app__header app__flex" style={{ background: darkmode ? '#ffffff':'#242424', color:  darkmode ? '#242424': '#ffffff'}}>
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 2 }}
      className="app__header-info"
    >
      
      <div className="app__header-wrapper-details">
        <motion.div initial={{opacity:0, x:-400}} animate={{opacity:1,x:0}}  transition={{type:'spring',duration:2}}  className="colz">
            <iconsAssets.SiJavascript/>
            <iconsAssets.GrReactjs/>
            <iconsAssets.FaVuejs/>
            <iconsAssets.ImHtmlFive/>
        </motion.div>
        <motion.div initial={{opacity:0, x:-400}} animate={{opacity:1,x:0}}  transition={{type:'spring',duration:2}}  className="app__header-wrapper-details-name">
          <span className='primary-text'><span>Hi</span>, I´M Matias✋</span>
        </motion.div>
        <motion.div initial={{opacity:0}} animate={{opacity:1}}  transition={{type:'spring',duration:2}}  className="app__header-wrapper-details-role">
          <span className='primary-text'>
            {" "}
            <h1>
             <Typewritter className='typewriter' onInit={(typewriter)=>{

              typewriter
              .typeString('Ethusiastic dev😁')
              // .callFunction(()=>{
              //   alert('sexo')
              // })
              .pauseFor(1000)
              .deleteAll()
              .typeString('Full Stack Developer😎')
              .pauseFor(1000)
              .deleteAll()
              .typeString('Mern Stack Developer💻')
              .pauseFor(1000)
              .deleteAll()
              .typeString('React/React Native Dev🟢')
              .pauseFor(1000)
              .typeString('')
              .start()
            }}
            options={{
              loop: true,
              }}
              />
            </h1>
            <span className='secondary-text'>
              Knack of Building applications with front and back end operations.
            </span>
          </span>
        </motion.div>
      </div>
      <motion.div initial={{opacity:0, x:400}} animate={{opacity:1,x:0}}  transition={{type:'spring',duration:2}}  className="app__header-wrapper-options">
         <div className='link' to="/contact">
              <a><span>Hire me</span></a>
        </div>
        <div className='link' to="/reveal">
              <a><span>CV</span></a>
        </div>
    </motion.div>


    </motion.div>

   
  </div>
  )};

export default AppWrap(Header,'home');