import React from 'react'

const RightCardImg = ({imgUrl}) => {
  return (
    <>
      <img className="rounded-xl h-full w-full object-cover" src={imgUrl} loading='lazy' alt="professionalImage" />
    </>
  )
}

export default RightCardImg