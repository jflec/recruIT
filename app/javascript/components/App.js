import React from 'react';
import { useRoutes } from 'react-router-dom';

import Listing from './Listing/Listing';
import Listings from './Listings/Listings';

const App = () => {
  let routes = useRoutes([
    { path: '/', element: <Listings /> },
    { path: '/listings/:id', element: <Listing /> },
  ]);
  return routes;
};

export default App;
