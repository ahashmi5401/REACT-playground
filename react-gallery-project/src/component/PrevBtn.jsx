import React from 'react'

const PrevBtn = ({handlePrev}) => {
  return (
    <button className="px-4 py-2 bg-gray-700 text-white rounded cursor-pointer"
        onClick={handlePrev}
        >
          Prev
        </button>
  )
}

export default PrevBtn