import './Perfil.scss';
import { motion } from 'framer-motion'
import { useState, useEffect, useContext } from 'react'
import { images } from '../../constants'; 
import { urlFor, client } from '../../client'
import { IoLogoJavascript } from 'react-icons/io'
import { BsFillPeopleFill } from 'react-icons/bs'
import { GiSandsOfTime } from 'react-icons/gi'
import { ThemeContext } from '../../context'


const container = {
    hidden: {opacity:0},
    show:{
      opacity: 1,
      transition:{
        staggerChildren:0.5,
        duration:1.5,
        delay:1
      }
    }
}

const Perfil = () => {

  const [abouts, setAbouts] = useState([]);
  const theme = useContext(ThemeContext)
  const darkmode = theme.state.darkmode

  useEffect(() => {
    const query = '*[_type == "abouts"]';  
    client.fetch(query).then(data => {setAbouts(data)})
  }, []);


  return (
    <div className='app__perfilC' id='perfil' style={{ background: darkmode ? '#ffffff':'#242424', color:  darkmode ? '#242424': '#ffffff'}}>
      <motion.h2 className='head-text'   whileInView={{ y: [100 , 50, 0], opacity: [0,0,1] }} transition={{duration:0.5,type:'tween'}} >Get Know<br /><span>About Me</span></motion.h2>  
      <div className="app__profiles">
        <motion.div className="app__about-image"   whileInView={{ y: [100 , 50, 0], opacity: [0,0,1] }}
      transition={{ duration: 0.5,type:'tween' }}> 
            <div className="card">
                <motion.div 
                    className="content"
                    >
                    <h2 >In my <span>free time..</span></h2>
                    <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro excepturi vero cupiditate possimus natus, quisquam rem illo nihil iure eius.</p>
                </motion.div>
                <motion.img src={images.profile} alt="aboutImage" />
            </div>
            <motion.div variants={container} initial='hidden' animate='show' className="exp">
                <div className='circle'>
                    <IoLogoJavascript color='yellow'/>
                    <h4>Projects</h4>
                    <p>80+ Completed</p>
                </div>
                <div className='circle'>
                    <BsFillPeopleFill color='#ee9d33'/>
                    <h4>Clients</h4>
                    <p>30+ Worldwide</p>
                </div>
                <div className='circle'>
                    <GiSandsOfTime color='#0090d3'/>
                    <h4>Projects</h4>
                    <p>80+ Completed</p>
                </div>
            </motion.div>
        </motion.div>
        <motion.div className="app__about-intereses"  whileInView={{ opacity: [0  ,1] }}
      transition={{ duration: 0.5,type:'tween' }}>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates illum laudantium aliquid rerum inventore eius dolorem aspernatur harum, soluta dolore vitae, error, incidunt neque odit eveniet repellat quod asperiores!</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Perfil

