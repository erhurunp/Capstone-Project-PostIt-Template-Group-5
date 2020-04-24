import React, { Fragment } from 'react';
import NavBar from '../layout/NavBar';
import LoginForm from '../layout/LoginForm';

const Login = () => {
  return (
    <Fragment>
      <section className='landing2'>
        <NavBar />
        <LoginForm />
      </section>
    </Fragment>
  );
};

export default Login;
