import React from 'react';
import Navbar from '../Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Splash = () => {
  return (
    <div>
      <Navbar />
      <div id="splash">
        <h1>Real connections real fast</h1>
        <p>designed by software engineers, for software engineers</p>
        <Link to={'/signup'}>
          <button>
            Register{' '}
            <FontAwesomeIcon className="nav-right-arrow" icon={faArrowRight} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Splash;
