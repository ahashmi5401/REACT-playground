import React from 'react'
import Card from './Card'

const Cards = ({ userData }) => {

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
        {Array.isArray(userData) &&
          userData.map((user, idx) => (
            <Card key={idx} user={user} />
          ))}
      </div>
  )
}

export default Cards