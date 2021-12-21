import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id="navbar-container">
      <div id="navbar">
        <Link to={'/'}>
          <h1>MØDE</h1>
        </Link>
        <div id="navbar-menu">
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
        </div>
        <div id="navbar-auth">
          <Link to={'/login'}>
            <button>Login</button>
          </Link>
          <Link to={'/signup'}>
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
