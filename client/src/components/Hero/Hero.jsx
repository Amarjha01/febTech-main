import React from 'react'
import './Hero.css'
// import { ReactComponent as MySvg } from './about.svg';

const Hero = ({title,subtitle,path}) => {
  return (
    <>
      <div className='w-full md:h-screen h-[80%] flex md:flex-row flex-col justify-center box-border mb-10' style={{ backgroundImage: "url('about-banner.jpg')" }}>

        {/* section-1 left part */}
        <div className='lg:w-[50%] w-[99%] mx-auto md:flex justify-center items-center md:h-full lg:my-1 my-10 lg:px-1 px-5'>
          <div className='bg-[#1136FF] p-10 hero_shadow'>
            <div>
              <p className='md:text-6xl text-xl text-white font-bold border-b-4'>{title}</p>
            </div>

            <div className='text-white flex gap-4 text-lg font-semibold md:py-5 '>
              <a href="#">
                Home
              </a>
              <p>&gt;</p>
              <a href="#">
                {subtitle}
              </a>
            </div>
          </div>
        </div>

        {/* section-1 right part */}

        <div className='lg:w-1/2 w-full md:h-full h-[25%] flex justify-center items-center lg:my-1 my-10'>
          <div className='lg:w-[80%] w-[85%] flex items-center justify-center '>
            <img src={path} className='hero_sliding' alt={path} />
          </div>
        </div>

      </div>
    </>
  )
}

export default Hero;