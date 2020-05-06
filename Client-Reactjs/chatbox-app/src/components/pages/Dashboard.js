import React from 'react';
import ChatPage from '../layout/ChatPage';

import MainBody from '../layout//group/MainBody';
import ChatForm from '../layout/ChatForm';

const Dashboard = () => {
  return (
    <main className='wrapper2'>
      <MainBody />
      <ChatPage />
      <ChatForm />
    </main>
  );
};

export default Dashboard;
