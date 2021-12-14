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
          <div className="listing-item-header">
            <h1>
              {`${listing.attributes.experience_level}-level`}{' '}
              {listing.attributes.title} {listing.attributes.position_type}{' '}
              {listing.attributes.location}
            </h1>
          </div>
          {listing.attributes.skills.map((skill) => {
            return <p>{skill}</p>;
          })}
          <p>{listing.attributes.work_experience}</p>
          <p>{listing.attributes.description}</p>
        </div>
        <div className="listing-item-company">{listing.attributes.company}</div>
      </div>
    );
  });

  return listings.length > 1 ? (
    <div id="listings">{list}</div>
  ) : (
    <div>Fetching Jobs</div>
  );
};

export default Listings;
