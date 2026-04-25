import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RestaurantList from './components/RestaurantList';
import Footer from './components/Footer';

function App() {
  // State for the search text
  const [searchQuery, setSearchQuery] = useState("");
  
  // State for filters
  const [isVegOnly, setIsVegOnly] = useState(false);
  const [isSpicyOnly, setIsSpicyOnly] = useState(false);
  const [isTopRated, setIsTopRated] = useState(false); // 4+ rating

  return (
    <div className="mainAppDiv">
      {/* Hero section now includes the Navbar, search, and visually attractive background */}
      <div className="heroWrapper">
        <Navbar />
        <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      
      {/* Filters Section */}
      <div className="filtersDiv">
        <button 
          className={isVegOnly ? "filterBtn active" : "filterBtn"} 
          onClick={() => setIsVegOnly(!isVegOnly)}
        >
          🥬 Pure Veg
        </button>
        <button 
          className={isSpicyOnly ? "filterBtn active" : "filterBtn"} 
          onClick={() => setIsSpicyOnly(!isSpicyOnly)}
        >
          🌶️ Spicy
        </button>
        <button 
          className={isTopRated ? "filterBtn active" : "filterBtn"} 
          onClick={() => setIsTopRated(!isTopRated)}
        >
          ⭐ 4.0+ Rating
        </button>
      </div>

      {/* Main list of restaurants that handles fetching and filtering */}
      <RestaurantList 
        searchQuery={searchQuery} 
        isVegOnly={isVegOnly} 
        isSpicyOnly={isSpicyOnly} 
        isTopRated={isTopRated} 
      />
      
      <Footer />
    </div>
  );
}

export default App;
