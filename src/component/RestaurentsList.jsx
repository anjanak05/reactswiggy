import React from 'react'
import OfferBanner from './OfferBanner'

const RestaurentsList = ({restaurents}) => {
  return (
    <div>
        <div  className="card">
       <img width="254" height="160px" src={restaurents.image} />
       <div className="restaurant-details">
           <div className="restaurant-title">{restaurents.name}</div>
           <div className="restaurant-subtitle">{restaurents.category.join(", ")} </div>
       </div>
       <div className="restaurant-info">
           <div className="restaurant-ratings">
           <i className="material-icons star-icon">star</i> {restaurents.rating}
           </div>
            .<div className="restaurant-delivery-timings"> {restaurents.delivery_timimg}</div> .
           <div className="restaurant-cost-for-two">{restaurents.cost_two}</div>
       </div>
       <div className="offer-banner">
           <OfferBanner restaurents={restaurents}/>
       </div>
   </div>
    </div>
  )
}

export default RestaurentsList