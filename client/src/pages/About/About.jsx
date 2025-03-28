import React from 'react'
// import Ahero from './Ahero'
import Acompany from './Acompany'
import Aprogress from './Aprogress'
import Achivement from './Achivement'
import TestimonialParent from './TestimonialParent'
import Ateam from './Ateam'
import './About.css'
import Hero from '../../components/Hero/Hero'
import AboutCEO from './AboutCEO'

const About = () => {
  return (
    <>
      <Hero title={"About Us"} subtitle={"About Us"} path={"about-us.png"}/>
      <Acompany/>
      <Aprogress/>
      <Achivement />
      <div className='bg-white'>
      <Ateam />
      <AboutCEO />
      </div>
      <TestimonialParent/>
    </>
  )
}

export default About