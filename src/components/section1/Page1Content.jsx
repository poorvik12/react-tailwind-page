import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='px-4 sm:px-10 lg:px-18 pb-10 pt-2 h-auto lg:h-[calc(82vh-90px)] flex flex-col lg:flex-row items-center gap-8'>
      <LeftContent />
      <RightContent user={props.user}/>
    </div>
  )
}

export default Page1Content
