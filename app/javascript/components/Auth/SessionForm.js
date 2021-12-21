import React from 'react';

const SessionForm = ({ handleChange, handleSubmit }) => {
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
      <button type="submit">log in</button>
    </form>
  );
};

export default SessionForm;
