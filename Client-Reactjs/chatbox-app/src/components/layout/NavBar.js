import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar navbar-dark'>
      <Link className='navbar-brand' to='#'>
        Chatbox
      </Link>
      <ul className='login'>
        <li>
          <Link to='/signup' className='mx-1'>
            Signup
          </Link>
        </li>
        <li>
          <Link to='#' className='mx-1 move'>
            About Us
          </Link>
        </li>
        <li>
          <Link to='#' className='mx-1'>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
