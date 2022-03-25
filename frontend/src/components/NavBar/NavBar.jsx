import { images } from "../../constants"
import './NavBar.scss'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ThemeContext } from '../../context'
import { useContext } from "react"

const NavBar = () => {

  const [toggle, setToggle] = useState(false)
  const theme = useContext(ThemeContext)
  const darkmode = theme.state.darkmode

  return (
    <motion.nav 
      className="app__navbar" 
      style={{ background: darkmode ? '#a7a7a7':'#000000'}} 
      initial={{y:-100}}
      animate={{y: 0}}
      transition={{type:'normal', duration:1, delay:0.8}}>
      <ul className="app__navbar-links">
        {['home','about','work','skills','contact'].map(el=>(
          <li key={`link=${el}`} className="app__flex p-text">
            <div/>
            <a href={`#${el}`}style={{color: '#ffffff'}} >{el}</a>
          </li>
        ))}
      </ul>
      <div className="app_navbar-menu">
          <HiMenuAlt4 onClick={()=> setToggle(true)} />
          {
            toggle && (
              <motion.div initial={{ x:300 }} animate={{x:0}} transition={{duration:0.85, ease:'easeOut'}}>
                <HiX onClick={()=> setToggle(false)}/>
                <ul>
                  {['home','about','work','skills','contact'].map(el=>(
                    <li key={el} className="app__flex p-text">
                      <a href={`#${el}`}  onClick={()=> setToggle(false)} >{el}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ) 
          }
      </div>
    </motion.nav>
  )
}

export default NavBar