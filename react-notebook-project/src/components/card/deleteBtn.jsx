import React from 'react'

const DeleteBtn = ({ idx, deleteNote }) => {
  return (
    <button
            onClick={() => deleteNote(idx)}
            className="mt-3 w-full bg-black hover:bg-gray-800 text-white py-1 rounded font-semibold text-sm active:scale-95 transition-transform duration-150"
          >
            Delete
    </button>
  )
}

export default DeleteBtn