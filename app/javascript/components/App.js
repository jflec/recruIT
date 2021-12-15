import React from 'react';
import { useRoutes } from 'react-router-dom';
import Listing from './Listing/Listing';
import Listings from './Listings/Listings';
import Navbar from './Navbar';

const App = () => {
  let routes = useRoutes([
    { path: '/', element: <Listings /> },
    { path: '/listings/:id', element: <Listing /> },
  ]);
  return (
    <div id="App">
      {/* <Navbar /> */}
      {routes}
    </div>
  );
};

export default App;
