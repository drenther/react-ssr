import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header className="navbar">
    <section className="navbar-section">
      <NavButton to="/" text="Home" />
      <NavButton to="/posts/1" text="Post One" />
      <NavButton to="/posts/2" text="Post Two" />
    </section>
  </header>
);

const NavButton = ({ to, text }) => (
  <NavLink to={to} className="btn btn-link" activeClassName="btn btn-primary">
    {text}
  </NavLink>
);

export default Navbar;
