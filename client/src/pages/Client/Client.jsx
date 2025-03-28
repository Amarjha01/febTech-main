import React, { useEffect } from 'react'
import Hero from '../../components/Hero/Hero'
import OurClients from './OurClients'
import Aprogress from '../About/Aprogress'
import NewsLetter from '../Project/NewsLetter'

export const Client = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
     <Hero title={"Our Client"} subtitle={"Client"} path={"client.png"}/>
     <OurClients/>
     <div className='lg:max-w-[90vw] mx-auto'>
     <Aprogress/>
     </div>
     <NewsLetter/>
    </>
  )
}
