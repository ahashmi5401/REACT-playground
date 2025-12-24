import React from 'react'
import RightCardBottom from "./rightCardBottom"
import RightCardAbsoluteHeading from './rightCardAbsoluteHeading'

const RightCardAbsolute = ({card}) => {
  const { no, text, buttonText, bgColor } = card;
  return (
    <div className="p-4 absolute top-0 left-0 right-0 h-full flex flex-col justify-between text-white">
        <RightCardAbsoluteHeading no={no} />
        <RightCardBottom text={text} buttonText={buttonText}  bgColor={ bgColor}/>
    </div>
  )
}

export default RightCardAbsolute
