import React from 'react'
import Testimonial from './Testimonial'

const TestimonialParent = () => {
  return (
    <>
    <div className='bg-white w-full md:h-screen mb-10'>
        <div className='h-[90%] w-[90%] m-auto bg-[#1136FF] a-shadow md:flex'>
          <div className='md:w-1/3 md:h-full flex flex-col justify-center items-center gap-10 py-10'>
          <div >
              <span className='text-xl capitalize text-black font-bold bg-white text-center px-2 py-2 a-shadow-sm rounded '>testimonials</span>

            </div>
            <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center">What Our Clients Say About Us</p>

          </div>

          <div className='md:w-2/3 w-full pl-2 md:flex justify-center items-center relative'>
           <Testimonial/>

           <div className='flex absolute right-20 bottom-20 '>
          <img src="star.png" alt="star-img" className='rotate-infinite'/>
        </div>
        </div>

        

        </div>

       
      </div>
    </>
  )
}

export default TestimonialParent