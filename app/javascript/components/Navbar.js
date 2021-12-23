import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id="navbar-container">
      <div id="navbar">
        <Link to={'/'}>
          <h1>møde</h1>
        </Link>
        <div id="navbar-auth">
          <Link to={'/login'}>
            <button id="nav-login">Login</button>
          </Link>
          <Link to={'/signup'}>
            <button id="nav-register">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
