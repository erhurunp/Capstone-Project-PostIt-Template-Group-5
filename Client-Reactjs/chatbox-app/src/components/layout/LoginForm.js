import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <form className='form-2'>
      <div className='form-group'>
        <input type='email' className='form-control' placeholder='Email ' />
      </div>
      <div className='form-group'>
        <input
          type='password'
          className='form-control'
          placeholder='Password'
        />
      </div>

      <div>
        <h6>
          <Link style={{ color: '#013243' }} to='#'>
            Can't remember your password?
          </Link>
        </h6>
        <h6>
          <strong>Don't have an account?</strong> &nbsp;
          <Link style={{ color: '#013243' }} to='/signup'>
            Sign up
          </Link>
        </h6>
      </div>
      <br />
      <br />
      <button type='submit' className='btn btn-lg btn-block buttonColor'>
        Login
      </button>
      <div>
        <h6 className='my-3'>
          <Link to='#' style={{ color: '#fff' }}>
            Terms & Conditions | Privacy
          </Link>
        </h6>
      </div>
    </form>
  );
};

export default LoginForm;
