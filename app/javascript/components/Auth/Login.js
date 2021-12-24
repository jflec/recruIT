import React, { useState } from 'react';
import SessionForm from './SessionForm';
import axios from 'axios';
import HomeBackButton from '../HomeBackButton';
import { Link } from 'react-router-dom';

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
    <div id="auth-container">
      <HomeBackButton />
      <div id="auth-modal">
        <h1 id="logo">møde</h1>
        <p>Login</p>
        <SessionForm handleChange={handleChange} handleSubmit={handleSubmit} />
        <div id="or-divide">
          <div className="divider"></div>
          <h2>or</h2>
          <div className="divider"></div>
        </div>
        <div id="auth-icons">
          <i id="google-auth" className="devicon-google-plain"></i>
          <i id="github-auth" className="devicon-github-original"></i>
          <i id="linkedin-auth" className="devicon-linkedin-plain"></i>
        </div>
        <div id="auth-links">
          <Link to={`/signup`}>
            <h3>Have an account?</h3>
          </Link>
          <h3>Forgot your password?</h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
