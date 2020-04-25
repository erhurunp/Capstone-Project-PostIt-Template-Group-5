import React from 'react';

const ChatBody = () => {
  return (
    <div>
      <div className='row no-gutters'>
        <div className='container darker'>
          <img
            src='https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/filip.jpg'
            alt='Avatar'
            className='profile-image'
          />
          <p>Hello. How are you today?</p>
          <span className='time-right'>11:00</span>
        </div>
      </div>
      <div className='row no-gutters'>
        <div className='container'>
          <img
            src='https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg'
            alt='Avatar'
            className='profile-image right'
          />
          <p>Hello, am good and you?</p>
          <span className='time-left'>11:05</span>
        </div>
      </div>
      <div className='row no-gutters'>
        <div className='container darker'>
          <img
            src='https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/filip.jpg'
            alt='Avatar'
            className='profile-image'
          />
          <p>Not bad, just had a long day</p>
          <span className='time-right'>11:10</span>
        </div>
      </div>
      <div className='row no-gutters'>
        <div className='container'>
          <img
            src='https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg'
            alt='Avatar'
            className='profile-image right'
          />
          <p>Sorry bro, just have a cold bath and you will feel better</p>
          <span className='time-left'>11:11</span>
        </div>
      </div>

      <div className='row'>
        <div className='col-12'>
          <div className='chat-box-tray'>
            <i className='material-icons'>sentiment_very_satisfied</i>
            <input type='text' placeholder='Type your message here...' />
            <i className='material-icons'>mic</i>
            <i className='material-icons'>send</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBody;
