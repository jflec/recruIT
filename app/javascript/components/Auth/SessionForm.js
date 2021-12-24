import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SessionForm = ({ handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div id="login-form">
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        ></input>
        <h3>Forgot your password?</h3>
        <button className="login-button" type="submit">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </form>
  );
};

export default SessionForm;
