import React, { Fragment } from 'react';
import NavBar from '../layout/NavBar';
import SignupForm from '../layout/SignupForm';

const Signup = () => {
  return (
    <Fragment>
      <section className='landing'>
        <NavBar />
        <SignupForm />
      </section>
    </Fragment>
  );
};

export default Signup;
