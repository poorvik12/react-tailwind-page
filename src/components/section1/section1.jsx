import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'

const Section1 = (props) => {
  
  return (
    <div className='h-auto w-full '>
      <Navbar />
      <Page1Content user={props.user} />
    </div>
  )
}

export default Section1
