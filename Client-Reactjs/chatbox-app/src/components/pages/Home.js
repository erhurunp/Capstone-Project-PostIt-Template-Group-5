import React from 'react';
import ChatPage from '../layout/ChatPage';
import SideBar from '../layout/SideBar';
import MainBody from '../layout/MainBody';

const Home = () => {
  return (
    <main className='wrapper'>
      <SideBar />
      <MainBody />
      <ChatPage />
    </main>
  );
};

export default Home;
