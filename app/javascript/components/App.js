import React, { Fragment } from 'react';
import { useRoutes } from 'react-router-dom';
import Listing from './Listing/Listing';
import Listings from './Listings/Listings';
import Signup from './Auth/Signup';
import Login from './Auth/Login';
import Navbar from './Navbar';
import Splash from './Splash/Splash';

const App = () => {
  let routes = useRoutes([
    { path: '/', element: <Splash /> },
    { path: '/listings', element: <Listings /> },
    { path: '/listings/:id', element: <Listing /> },
    { path: '/signup', element: <Signup /> },
    { path: '/login', element: <Login /> },
  ]);
  return (
    <Fragment>
      <Navbar />
      {routes}
    </Fragment>
  );
};

export default App;
