import React from 'react'
import ProjectData from './ProjectData'

const LatestProject = () => {
  return (
    <>
      <div>
        <div className='flex flex-col justify-center items-center gap-8'>
          <div><span className='text-xl capitalize text-white font-bold bg-[#1136FF] text-center px-2 py-2 a-shadow-sm rounded '>Projects</span></div>
          <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold">
          <div className="text-center px-4 sm:px-6 lg:px-8">
            We’ve Done 2560+ Global Projects <br /> Take a Look at Our Work Gallery
          </div>
          </p>
          <div className="capitalize text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-medium text-center">
            Our passionate professionals are committed to delivering exceptional services to our clients.
          </div>

          <ProjectData />

        </div>
      </div>
    </>
  )
}

export default LatestProject
