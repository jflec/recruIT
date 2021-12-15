import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListingShow from './ListingShow';
import axios from 'axios';

const Listing = () => {
  const [listing, setListing] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const url = `/api/v1/listings/${window.location.href.substring(
      window.location.href.lastIndexOf('/') + 1
    )}`;

    axios
      .get(url)
      .then((resp) => {
        setListing(resp.data);
        setLoaded(true);
      })
      .catch((resp) => console.log(resp));
  }, []);

  return (
    <div id="listing-container">
      <Link to="/">
        <div id="back-button"></div>
      </Link>
      <div id="listing">
        {loaded ? (
          <ListingShow attributes={listing.data.attributes} />
        ) : (
          <div>loading</div>
        )}
      </div>
    </div>
  );
};

export default Listing;
