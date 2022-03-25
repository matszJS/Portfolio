import React from 'react'
import Header from '../Header/Header'
import About from '../About/About'
import Perfil from '../Perfil/Perfil'
import Work from '../Work/Work'
import Skills from '../Skills/Skills'
import Footer from '../Footer/Footer'
import { NavBar } from '../../components'


const Home = () => {
  return (
    <>
    <NavBar/>
    <Header />
    <About />
    <Perfil/>
    <Work />
    <Skills />
    <Footer />
    </>
  )
}

export default Home