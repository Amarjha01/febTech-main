import React from 'react'
import { IoIosPerson } from "react-icons/io";
import { SlGraph } from "react-icons/sl";
import { FaAward } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import Scrolling from './Scrolling';

const Achivement = () => {

    const s4data = [ 
        {
        numbers:3000,
        text: 'Happy Client',
        icon: <IoIosPerson className='text-5xl ' />,
        },
        {
        numbers:15,
        text: 'Years In Business',
        icon: <FaAward className='text-5xl ' />,
        },
        {
        numbers:178,
        text: 'High Score',
        icon: <SlGraph className='text-5xl ' />,
        },
        {
        numbers:352,
        text: 'Cups of Coffee',
        icon: <FiCoffee className='text-5xl ' />,
        }
      ]
    
  return (
    <>
      <div className='lg:h-64 w-full lg:flex justify-evenly items-center bg-black py-5'>
        {s4data.map((item,index)=>{
            return <div key={index} className='flex justify-center items-center bg-[#1136FF] text-white gap-4 px-6 py-4 yellow-shadow-sm lg:w-1/5 w-[95%] mx-auto my-5'>
              <div >
                {item.icon}
              {/* <IoIosPerson className='text-5xl' /> */}
             </div>
            <div>
            
              <Scrolling  progress={false} end={item.numbers} duration={2000} title={""}/>
             
              <p className='font-semibold'>{item.text}</p>
            </div>
          </div>
        })}
      </div>
    </>
  )
}

export default Achivement