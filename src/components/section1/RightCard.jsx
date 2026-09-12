import React from 'react'
import RightCardContext from './RightCardContext'
const RightCard = (props) => {
  return (
    <div className='h-full w-1/3 shrink-0 overflow-hidden relative rounded-4xl'>
      <img className='h-full w-full object-cover' src={props.img} alt="img" />
        <RightCardContext id={props.id} tag={props.tag} intro={props.intro}/>
    </div>
  )
}

export default RightCard
