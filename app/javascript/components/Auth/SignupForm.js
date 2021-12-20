import React, { Fragment } from 'react';

const SignupForm = () => {
  return (
    <Fragment>
      <form>
        <input type="text" placeHolder="Username" name="username"></input>
        <input type="text" placeHolder="Password" name="password"></input>
      </form>
    </Fragment>
  );
};

export default SignupForm;
