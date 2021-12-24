import React, { useState } from 'react';
import SessionForm from './SessionForm';
import axios from 'axios';
import HomeBackButton from '../HomeBackButton';

const Login = () => {
  const [session, setSession] = useState({});

  const handleChange = (e) => {
    setSession(Object.assign({}, session, { [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const csrfToken = document.querySelector('[name=csrf-token]').content;
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

    axios
      .post('/api/v1/sessions', session)
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error));
  };
  return (
    <div id="auth-background">
      <HomeBackButton />
      <div id="auth-modal">
        <SessionForm handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
      <div className="custom-shape-divider-bottom-1640302277">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Login;
