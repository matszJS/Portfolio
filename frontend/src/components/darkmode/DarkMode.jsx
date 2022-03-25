import { useContext } from 'react' 
import './DarkMode.scss'
import { iconsAssets } from '../../assets/icons'
import { ThemeContext } from '../../context'
import { motion } from 'framer-motion'

const DarkMode = () => {
  const theme = useContext(ThemeContext)
  const darkmode = theme.state.darkmode;


  const handleDarkmode = ()=>{
    theme.dispatch({type: 'TOOGLE'})    
  }

  return (
    <motion.div className='app__darkmode'   
      initial={{x:100}}
      animate={{x: 0}}
      transition={{type:'spring', duration:1, delay:0.8}}>
        <label>
          <input type="checkbox"/>
          <span className='btn' ></span>
          <iconsAssets.AiOutlinePoweroff onClick={handleDarkmode} className='icon'/>
        </label>

    </motion.div>
  )
}

export default DarkMode