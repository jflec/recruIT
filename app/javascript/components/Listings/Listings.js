import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Listing from './Listing';
import ListingForm from '../ListingForm/ListingForm';
// import ListingFormButton from '../ListingForm/ListingFormButton';

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [listing, setListing] = useState({});
  const [skills, setSkills] = useState(Array(0));

  useEffect(() => {
    axios
      .get('/api/v1/listings.json')
      .then((resp) => setListings(resp.data.data))
      .catch((resp) => console.log(resp));
  }, [listings.length]);

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSkills([...skills, e.target.value]);
    } else {
      const index = skills.indexOf(e.target.value);
      skills.splice(index, 1);
      setSkills(skills);
    }
    setListing(Object.assign({}, listing, { [e.target.name]: skills }));
  };

  const handleChange = (e) => {
    setListing(Object.assign({}, listing, { [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const csrfToken = document.querySelector('[name=csrf-token]').content;
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

    axios
      .post('/api/v1/listings', listing)
      .then((resp) => {
        const included = [...listings, resp.data.data];
        setListings(included);
        setListing({
          title: null,
          description: null,
          company: null,
          location: null,
          experience_level: null,
          position_type: null,
          skills: [],
        });
      })
      .catch((resp) => {
        console.log(resp);
      });
  };

  const list = listings.map((listing) => {
    return (
      <Listing key={listing.attributes.name} attributes={listing.attributes} />
    );
  });

  return listings.length > 1 ? (
    <Fragment>
      <ListingForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCheckboxChange={handleCheckboxChange}
      />
      {/* <ListingFormButton /> */}
      <div id="listings">{list}</div>
    </Fragment>
  ) : (
    <div>Fetching Jobs</div>
  );
};

export default Listings;
