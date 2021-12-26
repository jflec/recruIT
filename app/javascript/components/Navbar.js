import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const mouseOver = (e) => {
    e.innerHTML = '🏠';
  };

  const mouseOut = (e) => {
    e.innerHTML = 'mode';
  };

  return (
    <div id="navbar-container">
      <div id="navbar">
        <Link to={'/'}>
          <h1 onMouseOver={mouseOver} onMouseOut={mouseOut}>
            møde
          </h1>
        </Link>
        <div id="navbar-auth">
          <Link to={'/login'}>
            <button id="nav-login">
              Login{' '}
              <FontAwesomeIcon
                className="nav-right-arrow"
                icon={faArrowRight}
              />
            </button>
          </Link>
          <Link to={'/signup'}>
            <button id="nav-register">
              Sign Up{' '}
              <FontAwesomeIcon
                className="nav-right-arrow"
                icon={faArrowRight}
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
