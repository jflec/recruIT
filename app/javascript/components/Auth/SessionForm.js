import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SessionForm = ({ handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div id="login-form">
        <label>
          Username
          <input type="text" name="username" onChange={handleChange}></input>
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            onChange={handleChange}
          ></input>
        </label>

        <button className="login-button" type="submit">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </form>
  );
};

export default SessionForm;
