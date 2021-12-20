import React, { Fragment } from 'react';
import { useRoutes } from 'react-router-dom';
import Listing from './Listing/Listing';
import Listings from './Listings/Listings';
import Signup from './Auth/Signup';
import Navbar from './Navbar';

const App = () => {
  let routes = useRoutes([
    { path: '/', element: <Listings /> },
    { path: '/listings/:id', element: <Listing /> },
    { path: '/signup', element: <Signup /> },
  ]);
  return (
    <Fragment>
      <Navbar />
      {routes}
    </Fragment>
  );
};

export default App;
