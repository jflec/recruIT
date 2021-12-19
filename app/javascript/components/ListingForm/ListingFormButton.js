import React from 'react';
import { Link } from 'react-router-dom';

const ListingFormButton = () => {
  return (
    <Link to={`/listings/create`}>
      <div id="listing-form-button-container">
        <div></div>
      </div>
    </Link>
  );
};

export default ListingFormButton;
