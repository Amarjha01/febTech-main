import React, { useEffect } from 'react'
import Hero from '../../components/Hero/Hero'
import NewsLetter from '../Project/NewsLetter'
import Achivement from '../About/Achivement'
import BelowSHero from './BelowSHero'
import PopularService from './PopularService'
import Pricing from './Pricing'

const Services = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  return (
    <>
      <Hero title={"Our Services"} subtitle={"Our Services"} path={"service.png"}/>
      <BelowSHero />
      <PopularService />
       <div className='my-20'>
         <Achivement />
         {/* <Pricing /> */}
       </div>
      <NewsLetter />
    </>
  )
}

export default Services
