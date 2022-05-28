import React from "react";
import RestaurentsList from "./RestaurentsList";

const Restaurants = (props) => {
  return (
    <div className="container divider">
      <div className="cards">

     {props.restaurent.map((restaurents) => (
       <RestaurentsList key={restaurents.id} restaurents={restaurents}/>
     ))}   
     

      </div>
    </div>
  );
};

export default Restaurants;

