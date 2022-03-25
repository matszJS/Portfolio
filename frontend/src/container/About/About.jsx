import './About.scss';
import { motion } from 'framer-motion'
import { useState, useEffect, useContext } from 'react'
import { images } from '../../constants'; 
import { urlFor, client } from '../../client'
import { ThemeContext } from '../../context'


const About = () => {

  const theme = useContext(ThemeContext)
  const darkmode = theme.state.darkmode

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';  
    client.fetch(query).then(data => {setAbouts(data)})
  }, []);

  return (
    <div className='app__aboutC' id='about' style={{ background: darkmode ? '#a7a7a7':'#000000', color:  '#ffffff'}}>
      <motion.h2 className='head-text'  whileInView={{ y: [100 , 50, 0], opacity: [0,0,1] }} transition={{duration:0.5,type:'tween'}}>I know that <span>Good Dev</span><br />means <span>Good Business</span></motion.h2>  

      <div className="app__profiles">
        { abouts.map((el,index) =>(
          <motion.div 
          whileInView={{ y: [100 , 50, 0], opacity: [0,0,1] }}
          whileHover={{scale:1.1}}
          transition={{duration:0.5,type:'tween'}}
          className='app__profiles-item'
          key={el.title + index}
          >
            <img src={urlFor(el.imgUrl)} alt={el.title} />
            <h2 className='bold-text' style={{marginTop:20}}>{el.title}</h2>
            <p className='p-text' style={{marginTop:10}}>{el.description}</p>
          </motion.div>
        )) }  
      </div>
    </div>
  )
}

export default About
