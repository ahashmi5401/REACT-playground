import React from 'react'

import LeftTextOnly  from './leftTextOnly.jsx'
import Arrow from './arrowLeft.jsx'

const leftText = () => {
  return (
    <div className='h-full w-1/3  justify-between flex flex-col'>
        <LeftTextOnly />
        <Arrow />
    </div>
  )
}

export default leftText