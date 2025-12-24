import React from 'react'

const RightCardBottomBtn = ({bgColor ,buttonText}) => {

  return (
     <div className="flex justify-between font-medium mt-4 items-center ">
            <button className={`${bgColor} rounded-full px-2 py-2 `}>{buttonText}</button>
            <button className={`font-medium ${bgColor} px-3 py-2 rounded-full`}><i className="ri-arrow-right-line"></i></button>
    </div>
  )
}

export default RightCardBottomBtn