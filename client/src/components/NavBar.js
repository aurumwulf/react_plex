import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div class="ui grid">
    <div class="four wide column">
      <div class="ui fluid vertical tabular menu">
        <NavLink exact class="active item" to="/">
          Home
        </NavLink>
      </div>
    </div>
  </div>
);

export default NavBar;
