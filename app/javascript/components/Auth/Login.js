import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SessionForm from './SessionForm';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

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
      <Link to={'/'}>
        <FontAwesomeIcon className="home-icon" icon={faHome} />
      </Link>
      <div id="auth-modal">
        <SessionForm handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Login;
