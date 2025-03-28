import React from 'react'
import Slider from './Slider'

const Ateam = () => {
  return (
    <>
     <div className='flex flex-col gap-2  pb-5 pt-10 my-5 '>
        <div>
        <div className='flex justify-center pb-8'>
              <span className='text-xl capitalize text-white font-bold bg-[#1136FF] text-center px-2 py-2 a-shadow-sm rounded '>Team Member</span>
            </div>
            <div className='text-center pb-10'>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl leading-loose font-light lg:w-[60%] mx-auto">
              Our passionate professionals are committed to delivering exceptional services to our clients.
            </p>
            </div>

            <div className='flex justify-center flex-wrap gap-4'>
                 <Slider className='flex'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Ateam