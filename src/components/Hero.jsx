import React from 'react';

// The Hero component is the big banner at the top with the search bar
function Hero(props) {
  // We use the props to update the search state in App.jsx
  const handleSearchChange = (event) => {
    props.setSearchQuery(event.target.value);
  };

  return (
    <div className="heroDiv">
      {/* Main catchy heading */}
      <h1 className="heroHeading">Discover the best food & drinks in your city</h1>
      
      {/* Search bar now updates the state on every keystroke */}
      <div className="searchContainer">
        <span className="searchIcon">🔍</span>
        <input 
          type="text" 
          placeholder="Search for restaurant, cuisine or a dish..." 
          className="heroSearch" 
          value={props.searchQuery}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
}

export default Hero;
