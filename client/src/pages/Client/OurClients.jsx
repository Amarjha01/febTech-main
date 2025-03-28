import React from 'react'
import SlickSlider from '../../components/Sliders/SlickSlider';

const OurClients = () => {
  const clientsData =[
    {
      id:1,
      name:"Kross Konnection",
      logo:"./febClient1.jpg"
    },
    {
      id:2,
      name:"Stitchnest",
      logo:"./febClient2.jpg"
    },
    {
      id:3,
      name:"Nav Chetna College",
      logo:"./febClient3.jpg"
    },
    {
      id:4,
      name:"EndorphinGlobal",
      logo:"./febClient4.jpg"
    },
    {
      id:5,
      name:"Be U Salons",
      logo:"./febClient5.jpg"
    },
    {
      id:6,
      name:"Highbix",
      logo:"./febClient6.jpg"
    }
  ]
  return (
    <div className="w-[90vw] mx-auto py-3  my-8 flex flex-col items-center gap-5">
      <p className="lg:w-1/5 text-center  rounded-xl font-semibold py-2 px-3  text-white bg-[#1136ff] text-xl">
       Our Clients
      </p>
        <p className="w-full sm:w-3/4 md:w-2/3 lg:w-2/4 text-center font-semibold py-2 px-3 text-[#000] text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed capitalize">
        At Feb Tech, our clients are the heart of our business.
      </p>
       <div className='flex flex-col lg:flex-row gap-5'>  
         <SlickSlider client={true} clientsData={clientsData}/>
       </div>
    </div>
  )  
}

export default OurClients