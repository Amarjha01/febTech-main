import React from 'react'

const ClientCard = ({name,logo}) => {
  return (
    <div className='lg:w-3/4 flex flex-col gap-3 justify-center items-center'>
      <div className="h-[80%] rounded-3xl flex justify-center items-center">
        <img src={logo} className="w-full h-full" alt="client" />
      </div>
      <p className="text-center text-lg font-semibold">{name}</p>
    </div>
  )
}

export default ClientCard