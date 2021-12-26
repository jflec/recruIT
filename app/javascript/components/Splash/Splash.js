import React from 'react';
import Navbar from '../Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Splash = () => {
  return (
    <div>
      <Navbar />
      <div id="splash">
        <h1>Real connections real fast</h1>
        <p>designed by software engineers, for software engineers</p>
        <button>
          Register{' '}
          <FontAwesomeIcon className="nav-right-arrow" icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Splash;
