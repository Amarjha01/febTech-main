import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";


const CbelowHero = () => {


    return (
        <>
            <div className='bg-[#ffffff] flex flex-col gap-10 lg:flex-row w-[85%] mx-auto my-8'>

                {/* section-2 left part */}
                <div className='lg:w-1/2  w-[98%]  lg:h-screen flex lg:flex-row flex-col justify-center items-center  relative '>
                    <div className='lg:w-[80%] w-[90%] z-10'>
                        <img src="contact-img1.png" alt="contact img-1" />
                        
                    </div>
                    <div className='hidden md:block pulse animate-custom-pulse2 rounded-full absolute w-[500px] h-[500px]'></div>
                    
                </div>

                {/* section-2 right part */}

                <div className='lg:w-1/2 w-full lg:h-screen flex  flex-col justify-center items-center px-10 gap-5'>

                    <div className='flex flex-col justify-around gap-4 h-5/6'>
                        <div >
                            <span className='text-xl capitalize text-white font-bold bg-[#1136FF] text-center px-2 py-2 a-shadow-sm rounded '>contact us</span>
                        </div>
                        <div>
                            <p className='text-xl md:text-2xl font-semibold'>
                            Feel Free to Contact With Us. We’re Ready to Help you</p>
                        </div>

                        <div className='flex flex-col gap-5'>
                            <div className='flex gap-4'>
                                <div >
                                   <MdOutlineMail className='border rounded-full p-2 text-4xl text-white bg-[#1136FF]'/>
                                </div>
                                <div>
                                    <p>Email Address</p>
                                    <a className='text-xl sm:text-2xl' href="support@febtech.in">support@febtech.in </a>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div >
                                   <FaPhoneAlt  className='border rounded-full p-2 text-4xl text-white bg-[#1136FF]'/>
                                </div>
                                <div>
                                    <p>Phone</p>
                                    <a className='text-xl sm:text-2xl' href="support@febtech.in">+91 8868864441</a>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div >
                                   <IoLocationOutline className='border rounded-full p-2 text-4xl text-white bg-[#1136FF]'/>
                                </div>
                                <div>
                                    <p>Address</p>
                                    <a className='text-md sm:text-xl' href="https://g.co/kgs/Eg5aXuk" target='blank'>
                                    Second Floor, Dehradun Road, near Hotel Raj Mahal, Rampur, Roorkee, Uttarakhand 247667
                                    </a>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        </>
    )
}

export default CbelowHero
