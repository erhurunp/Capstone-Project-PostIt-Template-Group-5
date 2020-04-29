import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getChat } from '../../actions/chatActions';
// import Messages from './Messages';

// import Avatar from 'avataaars';

class ChatBody extends Component {
  componentDidMount() {
    this.props.getChat();
  }
  render() {
    const { chats } = this.props.chat;
    return (
      <div>
        <ul className='no-gutters '>
          {chats.map(({ id, userId, message }) => {
            return (
              <div key={id} className='chatItem'>
                <li className='message'>
                  <p className='message-username'>{userId}</p>
                  <div className='message-text'>{message}</div>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  chat: state.chat,
});
export default connect(mapStateToProps, { getChat })(ChatBody);
