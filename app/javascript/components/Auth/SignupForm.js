import React from 'react';

const SignupForm = ({ handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Password
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Email
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        ></input>
      </label>
      <label>
        First Name
        <input
          type="text"
          placeholder="First Name"
          name="first_name"
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Last Name
        <input
          type="text"
          placeholder="Last Name"
          name="last_name"
          onChange={handleChange}
        ></input>
      </label>
      <button type="submit">SIGN UP</button>
    </form>
  );
};

export default SignupForm;
