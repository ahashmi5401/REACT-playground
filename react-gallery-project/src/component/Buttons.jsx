import React from 'react'
import PrevBtn from './prevBtn.jsx';
import NextBtn from './NextBtn';

const Buttons = ({ handlePrev, handleNext }) => {
  return (
    <div className="flex justify-center gap-4 pb-6">
        <PrevBtn handlePrev={handlePrev} />
        <NextBtn handleNext={handleNext} />
    </div>
  )
}


export default Buttons