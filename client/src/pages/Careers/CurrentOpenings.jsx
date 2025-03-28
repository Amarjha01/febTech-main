import React from 'react'
import Caccordion from './Caccordion';
import CaccordionPerks from './CaccordionPerks';

const CurrentOpenings = () => {
  return (
     <>
       <div className='flex md:flex-row flex-col'>
       <div className='md:w-[70%] w-[100%]'>
       <Caccordion/>
       </div>
       <div className='md:w-[30%] w-[100%]'>
       <CaccordionPerks/>
       </div>
       </div>
       
    
     </>
  )
}

export default CurrentOpenings
