import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';

// This component fetches data and shows the filtered list
function RestaurantList(props) {
  const [restaurants, setRestaurants] = useState([]);

  // Fetch the data exactly as before
  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  // Here we filter the data based on the state passed from App.jsx
  const filteredRestaurants = restaurants.filter((resto) => {
    // 1. Search Logic: convert both names to lowercase to make search easy
    const nameMatches = resto.name.toLowerCase().includes(props.searchQuery.toLowerCase());
    const cuisineMatches = resto.cuisine.toLowerCase().includes(props.searchQuery.toLowerCase());
    const dishMatches = resto.topDish.toLowerCase().includes(props.searchQuery.toLowerCase());
    
    // If the search text is not in name, cuisine, or dish, we hide it
    if (!nameMatches && !cuisineMatches && !dishMatches) {
      return false;
    }

    // 2. Filter Logic
    if (props.isVegOnly && !resto.isVeg) return false;
    if (props.isSpicyOnly && !resto.isSpicy) return false;
    if (props.isTopRated && parseFloat(resto.rating) < 4.0) return false;

    // If it passes all rules, keep it in the list!
    return true;
  });

  return (
    <div className="listDiv">
      <h2 className="listHeading">Top restaurant chains in your city</h2>
      
      {/* Container for all the cards (Styled as a CSS Grid) */}
      <div className="cardsContainer">
        {/* If no restaurants match, show a message */}
        {filteredRestaurants.length === 0 ? (
          <p className="noResults">No restaurants found. Try changing your filters!</p>
        ) : (
          filteredRestaurants.map((resto) => (
            <RestaurantCard key={resto.id} resto={resto} />
          ))
        )}
      </div>
    </div>
  );
}

export default RestaurantList;
