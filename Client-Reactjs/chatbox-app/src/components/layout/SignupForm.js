import React from 'react';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  return (
    <form className='form'>
      <div>
        <h2>Become a member</h2>
        <h5>
          Already a member? <Link to='/login'>Signin</Link>
        </h5>
      </div>
      <div className='form-group'>
        <input type='text' className='form-control' placeholder='Full Name' />
      </div>
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
      <div className='form-group'>
        <input
          type='password'
          className='form-control'
          placeholder='Confirm Password'
        />
      </div>

      <button type='submit' className='btn btn-lg btn-block buttonColor'>
        Signup
      </button>
    </form>
  );
};

export default SignupForm;
