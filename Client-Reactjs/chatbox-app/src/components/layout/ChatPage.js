import React from 'react';
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';

const ChatPage = () => {
  return (
    <div className='chatPage'>
      <ChatHeader />
      <div className='chat-panel'>
        <ChatBody />
      </div>
    </div>
  );
};

export default ChatPage;
