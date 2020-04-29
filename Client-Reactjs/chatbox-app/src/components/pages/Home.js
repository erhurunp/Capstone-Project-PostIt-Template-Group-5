import React from 'react';
import ChatPage from '../layout/ChatPage';
import SideBar from '../layout/SideBar';
import MainBody from '../layout/MainBody';
import ChatForm from '../layout/ChatForm';

const Home = () => {
  return (
    <main className='wrapper'>
      <SideBar />
      <MainBody />
      <ChatPage />
      <ChatForm />
    </main>
  );
};

export default Home;
