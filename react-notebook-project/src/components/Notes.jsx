import React from 'react'
import Card from './card/Card.jsx'

const Notes = ({ task, deleteNote }) => {
  return (
    <div className="lg:w-1/2 lg:border-l-2 p-10">
      <h1 className="text-4xl font-bold mb-6">Recent Notes</h1>
      <div className="flex flex-wrap items-start gap-5 overflow-auto h-[90%] pr-2">
        <Card task={task} deleteNote={deleteNote} />
      </div>
    </div>
  )
}

export default Notes
