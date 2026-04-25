import React from 'react';

// This component shows a single restaurant. It receives data through the 'resto' prop.
function RestaurantCard(props) {
  // We extract the 'resto' object from props to make it easier to read
  const resto = props.resto;

  return (
    <div className="restoCard">
      {/* Image container */}
      <div className="imgDiv">
        <img src={resto.image} alt={resto.name} className="restoImg" />
        
        {/* Hover Details overlay (Hidden by default, shown on hover via CSS) */}
        <div className="hoverDetails">
          {/* Show rating */}
          <div className="hoverRating">⭐ {resto.rating}</div>
          {/* Show top dish */}
          <div className="hoverTopDish">🍽 Top dish: {resto.topDish}</div>
        </div>
      </div>
      
      {/* Information text below the image */}
      <div className="infoDiv">
        <h3 className="restoName">{resto.name}</h3>
        <p className="restoCuisine">{resto.cuisine}</p>
      </div>
    </div>
  );
}

export default RestaurantCard;
