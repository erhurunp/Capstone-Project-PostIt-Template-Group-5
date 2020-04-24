import React from 'react';

const MainBody = () => {
  return (
    <section className='right'>
      <div>
        <div className='row no-gutters'>
          <div className='col-md-4 border-right'>
            <div className='settings-tray'>
              <img
                className='profile-image'
                src='https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/filip.jpg'
                alt='Profile img'
              />{' '}
              <span>
                <strong>Filip Kovac</strong>
              </span>
              <span className='settings-tray--right'>
                <i className='material-icons'>cached</i>
                <i className='material-icons'>message</i>
                <i className='material-icons'>menu</i>
              </span>
            </div>
            <div className='search-box'>
              <div className='input-wrapper'>
                <input placeholder='Search here' type='text' />
              </div>
            </div>
            <div className='friend-drawer friend-drawer--onhover'>
              <img
                className='profile-image'
                src='https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg'
                alt=''
              />
              <div className='text'>
                <h6>Robo Cop</h6>
                <p className='text-muted'>Hey, you're arrested!</p>
              </div>
              <span className='time text-muted small'>13:21</span>
            </div>
            <hr />
            <div className='friend-drawer friend-drawer--onhover'>
              <img
                className='profile-image'
                src='https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/optimus-prime.jpeg'
                alt=''
              />
              <div className='text'>
                <h6>Optimus</h6>
                <p className='text-muted'>Wanna grab a beer?</p>
              </div>
              <span className='time text-muted small'>00:32</span>
            </div>
            <hr />
            <div className='friend-drawer friend-drawer--onhover'>
              <img
                className='profile-image'
                src='https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/real-terminator.png'
                alt=''
              />
              <div className='text'>
                <h6>Skynet</h6>
                <p className='text-muted'>Seen that canned piece of s?</p>
              </div>
              <span className='time text-muted small'>13:21</span>
            </div>
            <hr />
            <div className='friend-drawer friend-drawer--onhover'>
              <img
                className='profile-image'
                src='https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/termy.jpg'
                alt=''
              />
              <div className='text'>
                <h6>Termy</h6>
                <p className='text-muted'>Im studying spanish...</p>
              </div>
              <span className='time text-muted small'>13:21</span>
            </div>
            <hr />
            <div className='friend-drawer friend-drawer--onhover'>
              <img
                className='profile-image'
                src='https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/rick.jpg'
                alt=''
              />
              <div className='text'>
                <h6>Richard</h6>
                <p className='text-muted'>I'm not sure...</p>
              </div>
              <span className='time text-muted small'>13:21</span>
            </div>
            <hr />
          </div>
          <div className='col-md-8'>
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
            <div className='chat-panel'>
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
                  <p>
                    Sorry bro, just have a cold bath and you will feel better
                  </p>
                  <span className='time-left'>11:11</span>
                </div>
              </div>

              <div className='row'>
                <div className='col-12'>
                  <div className='chat-box-tray'>
                    <i className='material-icons'>sentiment_very_satisfied</i>
                    <input
                      type='text'
                      placeholder='Type your message here...'
                    />
                    <i className='material-icons'>mic</i>
                    <i className='material-icons'>send</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBody;
