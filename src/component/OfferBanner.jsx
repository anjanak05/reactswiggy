import React from 'react'

const OfferBanner = ({restaurents}) => {
  return (
    <div>
        <span className="material-icons"> local_offer </span>
           <span className="offer-text">{restaurents.offer.join(", ")}</span>
    </div>
  )
}

export default OfferBanner