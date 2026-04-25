import React from 'react';

// This is the Navbar component, it shows the logo and login/signup links
function Navbar() {
  return (
    <div className="navBarDiv">
      {/* Visual Logo */}
      <div className="logoText">
        <span className="logoIcon">🍴</span> 
        <i>zomato</i>
      </div>
      
      {/* Login and Signup near the search/hero section */}
      <div className="navLinks">
        <a href="#" className="navLink">Log in</a>
        <a href="#" className="navBtn">Sign up</a>
      </div>
    </div>
  );
}

export default Navbar;
