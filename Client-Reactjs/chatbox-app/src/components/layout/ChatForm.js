import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addChat } from '../../actions/chatActions';

class ChatForm extends Component {
  state = {
    message: '',
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newChat = {
      id: uuidv4(),
      message: this.state.message,
    };

    this.props.addChat(newChat);
    this.setState({
      message: '',
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit} className='chat-box-tray chat-form'>
        <i className='material-icons'>sentiment_very_satisfied</i>
        <input
          type='text'
          name='message'
          value={this.state.message}
          onChange={this.onChange}
          placeholder='Type your message here...'
        />
        <i className='material-icons'>mic</i>
        <i className='material-icons'>send</i>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  chat: state.chat,
});
export default connect(mapStateToProps, { addChat })(ChatForm);
