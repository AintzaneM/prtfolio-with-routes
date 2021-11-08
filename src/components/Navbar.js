// components/Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li>
            <NavLink to='/' exact activeClassName="current">
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to='/about' activeClassName="current">
                About
            </NavLink>
        </li>

        <li><NavLink to='/projects' activeClassName="current">
            Projects
            </NavLink>
        </li>

        <li>
            <NavLink to='/login' activeClassName="current">
                Login
            </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
