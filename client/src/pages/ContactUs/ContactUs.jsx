import React, { useEffect } from 'react'
import CbelowHero from './CbelowHero'
import NewsLetter from '../Project/NewsLetter'
import Hero from '../../components/Hero/Hero';
import MapComponent from './MapComponent';
import GetInTouch from './GetInTouch';
import './ContactUs.css'

const ContactUs = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <Hero title={"Contact Us"} subtitle={"Contact Us"} path={"contact.png"}/>
      <CbelowHero />
      <MapComponent />
      <GetInTouch />
      <NewsLetter />
    </>
  )
}

export default ContactUs
