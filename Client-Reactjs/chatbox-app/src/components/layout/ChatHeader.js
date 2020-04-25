import React from 'react';

const ChatHeader = () => {
  return (
    <div className='settings-tray friend'>
      <div className='friend-drawer no-gutters friend-drawer--grey'>
        <img
          className='profile-image'
          src='https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg'
          alt=''
        />
        <div className='text'>
          <h6>Robo Cop</h6>
          <p className='text-muted'>
            Layin' down the law since like before Christ...
          </p>
        </div>
        <span className='settings-tray--right'>
          <i className='material-icons'>cached</i>
          <i className='material-icons'>message</i>
          <i className='material-icons'>menu</i>
        </span>
      </div>
    </div>
  );
};

export default ChatHeader;
