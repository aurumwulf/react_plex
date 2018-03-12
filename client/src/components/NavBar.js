import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div className="ui fluid vertical tabular menu">
    <NavLink exact className="item" to="/">
      Home
    </NavLink>
    <NavLink exact className="item" to="/movies">
      Movies
    </NavLink>
  </div>
);

export default NavBar;
