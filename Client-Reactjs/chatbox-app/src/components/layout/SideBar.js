import React from 'react';
import { Link } from 'react-router-dom';
import Svg from '../../svg/svg';

const SideBar = () => {
  return (
    <section className='left'>
      <div className='nested'>
        <Link style={{ color: '#fff' }} className='navbar-brand chatbox' to='/'>
          <span className='chatbox'>ChatBox </span>
        </Link>
      </div>
      <br className='break' />
      <br className='break' />
      <br />
      <div className='nested'>
        <Link style={{ color: '#fff' }} to='/'>
          <Svg name='grouplist' />
          <p>Home</p>
        </Link>
      </div>
      <div className='nested'>
        <Link style={{ color: '#fff' }} to='/contacts'>
          <Svg name='contact' />
          <p>Contacts</p>
        </Link>
      </div>

      <div className='nested'>
        <Link style={{ color: '#fff' }} to='/chat'>
          <Svg name='chat' />
          <p>Chat</p>
        </Link>
      </div>
      <div className='nested'>
        <Link style={{ color: '#fff' }} to='/group'>
          <Svg name='group' />
          <p>Group</p>
        </Link>
      </div>
      <div className='nested'>
        <Link style={{ color: '#fff' }} to='/settings'>
          <Svg name='settings' />
          <p>Settings</p>
        </Link>
      </div>
      <div className='nested'>
        <Link style={{ color: '#fff' }} to='/login'>
          <Svg name='logout' />
          <p>Logout</p>
        </Link>
      </div>
    </section>
  );
};

export default SideBar;
