import React from 'react'
import {Bookmark} from 'lucide-react'
const card = ({data:{logo,company,days,role,type1,type2,salary,location}}) => {
  return (
    <div className='parent'>
        <div className='card'>
            <div className="top">
                <img src={logo} alt={`${company}-logo`} />
                <button>Save <Bookmark/></button>
            </div>
            <div className="center">
              <h2>{company} <span>{days}</span></h2>
              <p>{role}</p>
              <div className="centerBtn">
                <button>{type1}</button>
                <button>{type2}</button>
              </div>
            </div>
            <div className="bottom">
              <div className="bottomLeft">
                <h2>{salary} <span>{location}</span></h2>
              </div>
              <div className="bottomRight">
                <button>Apply Now</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default card
