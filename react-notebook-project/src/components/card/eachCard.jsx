import React from 'react'
import DeleteBtn from "./deleteBtn.jsx";
import CardBody from "./cardBody.jsx";

const EachCard = ({title, details, idx, deleteNote}) => {
  return (
    <div
          key={idx}
          className="relative flex flex-col justify-between h-52 w-44 p-4 rounded-xl bg-white text-black shadow-lg hover:shadow-2xl transition-shadow duration-200"
        >
          <CardBody title={title} details={details} />
          <DeleteBtn idx={idx} deleteNote={deleteNote} />
        </div>
  )
}

export default EachCard