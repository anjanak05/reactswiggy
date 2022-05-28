import React from 'react'


const Offers = (props) => {
  return (
    <div>
        <section className="offers">
        <div className="container">
        {  props.offer.map((offer, index)=>(
          <img key={index} className="offer" src={offer} />

        ))}
            
        </div>
    </section>
    </div>
  )
}

export default Offers