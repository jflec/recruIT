import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Listing from './Listing';
import ListingForm from '../ListingForm/ListingForm';

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [listing, setListing] = useState({});

  useEffect(() => {
    axios
      .get('/api/v1/listings.json')
      .then((resp) => setListings(resp.data.data))
      .catch((resp) => console.log(resp));
  }, [listings.length]);

  const handleChange = (e) => {
    setListing(Object.assign({}, listing, { [e.target.name]: e.target.value }));
    console.log('title:', listing);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const csrfToken = document.querySelector('[name=csrf-token]').content;
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

    axios
      .post('/api/v1/listings', listing)
      .then((resp) => {
        const included = [...listings.include, resp.data.data];
        setListings({ ...listings, included });
        setListing({ title: '', description: '' });
      })
      .catch((resp) => {});
  };

  const list = listings.map((listing) => {
    return (
      <Listing key={listing.attributes.name} attributes={listing.attributes} />
    );
  });

  return listings.length > 1 ? (
    <Fragment>
      <ListingForm handleChange={handleChange} handleSubmit={handleSubmit} />
      <div id="listings">{list}</div>
    </Fragment>
  ) : (
    <div>Fetching Jobs</div>
  );
};

export default Listings;
