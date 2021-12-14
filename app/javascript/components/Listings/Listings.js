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
    return (
      <div className="listing-item" key={listing.attributes.id}>
        <div className="listing-item-recruiter">
          <div className="listing-item-recruiter-picture"></div>
          <p>John Doe</p>
        </div>
        <div className="listing-item-description">
          <p>{`${listing.attributes.experience_level}-level`}</p>
          <p>{listing.attributes.title}</p>
          <p>{listing.attributes.location}</p>
          <p>{listing.attributes.position_type}</p>
          <p>{listing.attributes.skills}</p>
          <p>{listing.attributes.work_experience}</p>
          <p>{listing.attributes.description}</p>
        </div>
        <div className="listing-item-company">{listing.attributes.company}</div>
      </div>
    );
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
