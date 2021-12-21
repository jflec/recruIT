import React, { useState } from 'react';
import SessionForm from './SessionForm';
import axios from 'axios';

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
    <div>
      <SessionForm handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
