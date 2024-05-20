import React from 'react';
import icon from '../../assets/dish.png';

function Header() {
  return (
    <header className="header">
      <h1>Recipes</h1>
      <img src={icon} alt="icon-recipes" />
    </header>
  );
}

export default Header;
