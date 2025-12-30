import React from 'react'

const NextBtn = ({handleNext}) => {
  return (
    <button className="px-4 py-2 bg-gray-700 text-white rounded cursor-pointer"
        onClick={handleNext}
        >
          Next
        </button>
  )
}

export default NextBtn