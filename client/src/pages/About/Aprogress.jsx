import React from 'react'
import ProgressBar from './ProgressBar'

const Aprogress = () => {
  return (
    <>
          <div className='bg-[#ffffff] lg:flex my-10 lg:my-0 '>

              {/* section-3 left part */}
              <div className='lg:w-1/2 flex  justify-center items-center px-10 gap-6 my-10 xl:my-0'>

                  <div className='flex flex-col justify-around gap-4'>
                      <div >
                          <span className='text-xl capitalize text-white font-bold bg-[#1136FF] text-center  a-shadow-sm rounded px-2 py-2'>Our Best Skills</span>
                      </div>
                      <div>
                          <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold">
                              We’re So Much Experience In Digital Solutions</p>
                      </div>

                      {/* progress-bar */}

                      <div>

                          <ProgressBar />
                      </div>


                  </div>
              </div>




              {/* section-3 right part */}

              <div className='lg:w-1/2 md:h-screen flex justify-center items-center'>
                  <div className='w-5/6 border'>
                      <img src="about-img2.png" alt="about image-2" />
                  </div>
              </div>


          </div>
    </>
  )
}

export default Aprogress