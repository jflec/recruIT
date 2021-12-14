import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Listings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios
      .get('/api/v1/listings.json')
      .then((resp) => setListings(resp.data.data))
      .catch((resp) => console.log(resp));
  }, [listings.length]);

  const list = listings.map((listing) => {
    return <li key={listing.attributes.title}>{listing.attributes.title}</li>;
  });

  return listings.length > 1 ? (
    <div id="listings">
      <h1>listings</h1>
      {list}
    </div>
  ) : (
    <div>waiting</div>
  );
};

export default Listings;
