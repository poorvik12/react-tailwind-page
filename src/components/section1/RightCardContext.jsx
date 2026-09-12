import React from 'react'


const RightCardContext = (props) => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full p-5 flex flex-col justify-between w-full'>
            <h2 className='bg-white rounded-full text-2xl h-10 w-10 flex items-center justify-center'>{props.id+1}</h2>
            <div>
                <p  className=' text-shadow-2xl text-white mb-10 text-xl'>{props.intro}</p>
                <div className='flex justify-between'>
                    <button className='bg-[#2457E6] text-white px-6 py-2 rounded-full '>{props.tag} </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCardContext
