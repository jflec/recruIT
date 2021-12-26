import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SignupForm = ({ handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div id="signup-form-one">
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

        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        ></input>

        <input
          type="text"
          placeholder="First Name"
          name="first_name"
          onChange={handleChange}
        ></input>

        <input
          type="text"
          placeholder="Last Name"
          name="last_name"
          onChange={handleChange}
        ></input>

        <button className="continue-button" type="submit">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
