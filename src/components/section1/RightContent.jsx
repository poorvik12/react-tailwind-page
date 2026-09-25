import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {

  const handleWheel = (e) =>{
    e.preventDefault()

    const container=e.currentTarget
    const scrollAmount = e.deltaY*0.7

    container.scrollBy({
      left:scrollAmount,
      behavior:'smooth'
    })
  }

  return (
    <div id='right' onWheel={handleWheel} className='h-[55vh] lg:h-full w-full lg:min-w-0 mt-0 lg:-mt-14 flex flex-nowrap gap-5 lg:gap-10 overflow-x-auto rounded-4xl p-3 lg:p-5'>
      {props.user.map(function(elem,idx){
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} intro={elem.intro}/>
      })}
    </div>
  )
}

export default RightContent
