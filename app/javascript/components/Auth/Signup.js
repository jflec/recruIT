import axios from 'axios';
import React, { useState } from 'react';
import HomeBackButton from '../HomeBackButton';
import SignupForm from './SignupForm';

const Signup = () => {
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser(Object.assign({}, user, { [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    console.log(user);
    e.preventDefault();

    const csrfToken = document.querySelector('[name=csrf-token]').content;
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

    axios
      .post('/api/v1/users', {
        user: {
          ...user,
        },
      })
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <HomeBackButton />
      <SignupForm handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Signup;
