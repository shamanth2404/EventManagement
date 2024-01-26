import React from 'react'

const VenueCard = () => {
  return (
    <div>
      <img src="" alt="" />
      <div className="details">
        <div className="head">
            <h1 className="name"></h1>
            <span className='reviews'></span>
        </div>
        <div className="subhead">
            <span className="loc"></span>
            <span className="type"></span>
        </div>
        <div className="cost">
            <span>Rental Cost</span>
            <span className="price"></span>
        </div>
        <div className="tags">
            <span></span>
            <span></span>
            <span></span>
        </div>
      </div>
    </div>
  )
}

export default VenueCard
