/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png';

const Navbar = () => {
  return (
    <>
      <nav className="navbar container">
        <div className="navbar-brand">
          <NavLink href="index.html" to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <label className="navbar_toggle" htmlFor="toggle" id="nav-icon">
          &#9776;
        </label>
        <input type="checkbox" id="toggle" />
        <ul className="navbar-menu">
          <li>
            <NavLink to="/" href="index.html" className="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" href="signup.html">
              SignUp
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" href="login.html">
              LogIn
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
