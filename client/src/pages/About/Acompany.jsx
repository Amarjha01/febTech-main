import React from 'react'

const Acompany = () => {
  return (
    <>
          <div className='bg-[#ffffff] lg:flex'>

              {/* section-2 left part */}
              <div className='lg:w-1/2 w-[98%] flex justify-center items-center'>
                  <div className='lg:w-[95%] w-[90%] mx-auto py-4 lg:py-0'>
                      <img src="gallery1.jpg" alt="about image-2" />
                  </div>
              </div>

              {/* section-2 right part */}

              <div className='lg:w-1/2 w-full flex flex-col justify-center items-center px-10 gap-4'>

                  <div className='flex flex-col justify-around gap-4 h-5/6 lg:h-auto '>
                      <div >
                          <span className='text-xl capitalize text-white font-bold bg-[#1136FF] text-center px-2 py-2 a-shadow-sm rounded '>about company</span>
                      </div>
                        <div>
                            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                                 Feb Tech leading In Technology Innovative and Develop Solutions
                            </p>
                        </div>


                      <div className='md:flex gap-6'>

                          <div className='flex gap-4 px-6 py-4 items-center  shadow-md '>
                              <div>
                                  <img src="icon-about-1.png" alt="about-icon" className='hover:rotate-45 hover:ease-in-out hover:delay-100' />
                              </div>
                              <div>
                                  <span className='font-semibold hover:text-[#1136FF]'>Research & Strategy</span>
                              </div>
                          </div>


                          <div className='flex gap-4 px-6 py-4 items-center'>
                              <div>
                                  <img src="icon-about-2.png" alt="about-icon" className='hover:rotate-45 hover:ease-in-out hover:delay-100' />
                              </div>
                              <div>
                                  <span className='font-semibold hover:text-[#1136FF]'>Development & scale</span>
                              </div>
                          </div>

                      </div>


                      <div className='md:flex gap-4 w-full'>
                      </div>
                      <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Who We Are</p>
                      <p className='text-justify lg:text-sm xl:text-base'>
                          <span className='text-[#1136FF]'>Feb Tech </span>
                          is a leading technology and digital marketing agency with a focus on providing innovative solutions to businesses across the globe. Established in 2020, our mission is to help businesses succeed in the digital era by leveraging cutting-edge technologies and the latest digital marketing trends.</p>
                      <p className='text-justify lg:text-sm xl:text-base'>
                          At Feb Tech, we pride ourselves on delivering exceptional results that exceed our clients’ expectations. Our approach is centered on understanding our clients’ unique needs and developing customized solutions to help them achieve their business goals. We strive to build long-lasting relationships with our clients by providing personalized services and exceptional customer support.
                      </p>

                  </div>
              </div>
          </div>
    </>
  )
}

export default Acompany