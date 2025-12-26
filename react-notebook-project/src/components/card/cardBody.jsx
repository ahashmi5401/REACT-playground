import React from 'react'

const CardBody = ({title, details}) => {
  return (
    <div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="mt-2 text-sm text-gray-700">{details}</p>
    </div>
  )
}

export default CardBody