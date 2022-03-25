import { motion } from 'framer-motion'
import { useContext } from 'react' 
import styled from 'styled-components'
//import { BsInstagram } from 'react-icons/bs';
//import { FaFacebookF } from 'react-icons/fa';
import { ThemeContext } from '../context'
import { GoMarkGithub } from 'react-icons/go';
import { AiTwotoneMail } from 'react-icons/ai'

const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;

z-index:3;


&>*:not(:last-child){
    margin: 0.5rem 0;
}

@media (max-width:650px){
        /* position: relative;
        width: 100vw;
        right: 0;
        justify-content: space-around;
        align-items: center;
        display: flex;
        flex-direction:row ; */
        display: none;
    }

`

const Line = styled(motion.span)`
    width: 2px;
    height: 8rem;

    @media (max-width:650px){
        display: none !important;
    }

`

const SocialIcons = (props) => {

    const theme = useContext(ThemeContext)
    const darkmode = theme.state.darkmode;

    return (
        <Icons>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.2}}
            >
                <a href="https://github.com/matszJS?tab=repositories" target="_blank">
                    <GoMarkGithub style={{height:'1.5em', width:'1.5em'}} fill={darkmode ? '#111':'#fff'} />
                </a>
            </motion.div>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.4}}
            >
                <a href="mailto:msalazarj712@gmail.com" target="_blank">
                    <AiTwotoneMail style={{height:'1.5em', width:'1.5em'}} fill={darkmode ? '#111':'#fff'} />
                </a>
            </motion.div>
            <Line
                initial={{height:0}}
                animate={{height: '8rem'}}
                transition={{type:'spring', duration:1, delay:0.8}}
                style={{ backgroundColor: darkmode ? '#111':'#fff', cursor: 'pointer'}}

            />
        </Icons>
    )
}

export default SocialIcons
