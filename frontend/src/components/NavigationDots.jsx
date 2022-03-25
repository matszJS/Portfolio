import { useContext } from 'react';
import { ThemeContext } from '../context'
import { motion } from 'framer-motion'

const NavigationDots = ({ active }) => {
    
  const theme = useContext(ThemeContext)
  const darkmode = theme.state.darkmode

return(
  <motion.div 
    className="app__navigation" 
    style={{background:'transparent'}} 
    initial={{x:100}}
    animate={{x: 0}}
    transition={{type:'spring', duration:1, delay:0.8}}
    >
    {['home', 'about','perfil', 'work', 'skills', 'contact'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={{backgroundColor: darkmode ? '#111':'#fff'}}
        // style={active === item ? { backgroundColor: '#7764ff' } : {}}
      />
    ))}
  </motion.div>
)};

export default NavigationDots;