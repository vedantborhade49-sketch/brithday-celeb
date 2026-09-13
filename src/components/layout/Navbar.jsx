import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="site-navbar">
      <div className="navbar-container">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          HOME
        </NavLink>
        <NavLink 
          to="/14-days" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          14 DAYS
        </NavLink>
        <NavLink 
          to="/arrows" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          ARROWS
        </NavLink>
        <NavLink 
          to="/you" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          YOU
        </NavLink>
        <NavLink 
          to="/letters" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          LETTERS
        </NavLink>
      </div>
    </nav>
  );
}
