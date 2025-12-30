import React from 'react'

const Card = ({ user  } , key) => {
    const { download_url, author } = user;
  return (
    <div key={key} className="main cursor-pointer ">
              <div className="border p-2">
                <img
                  src={download_url}
                  alt={author}
                  loading="lazy"
                  className="w-full h-48 object-cover rounded hover:scale-105 transition-all duration-300   "
                />
              </div>
              <h2 className="text-lg font-bold mt-2 text-center text-black">
                {author}
              </h2>
    </div>
  )
}

export default Card