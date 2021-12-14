import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Listing from './Listing';

const Listings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios
      .get('/api/v1/listings.json')
      .then((resp) => setListings(resp.data.data))
      .catch((resp) => console.log(resp));
  }, [listings.length]);

  const list = listings.map((listing) => {
    return (
      <Listing key={listing.attributes.name} attributes={listing.attributes} />
    );
  });

  return listings.length > 1 ? (
    <div id="listings">{list}</div>
  ) : (
    <div>Fetching Jobs</div>
  );
};

export default Listings;
