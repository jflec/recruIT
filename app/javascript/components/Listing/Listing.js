import React, { useEffect, useState } from 'react';

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
    <div id="listing">
      {loaded ? <h1>{listing.data.attributes.title}</h1> : <div>loading</div>}
    </div>
  );
};

export default Listing;
