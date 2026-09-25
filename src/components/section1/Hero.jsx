import React from 'react'

const Hero = () => {
  return (
    <div className='h-auto lg:h-full w-full lg:w-1/3 flex flex-col justify-between'>
        <div className='p-6'>
            <h3 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] lg:-ml-4 mb-7'>Prospective <br /> <span className=' text-[#596579]' >Customer</span> <br /> Segmentation</h3>
            <p className='text-lg sm:text-xl lg:text-2xl flex text-[#596579] w-full lg:w-50'>Depending on customer satisfaction and access to banking products, potential target audience can be divided into groups</p>
        </div>
    </div>
  )
}

export default Hero
