import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const HomeBackButton = () => {
  return (
    <Link to={'/'}>
      <FontAwesomeIcon className="home-icon" icon={faHome} />
    </Link>
  );
};

export default HomeBackButton;
