import React from 'react';
import ChatPage from './ChatPage';
import BodyList from './BodyList';

const MainBody = () => {
  return (
    <section className='right'>
      <div>
        <div className='row no-gutters'>
          <BodyList />
          <ChatPage />
        </div>
      </div>
    </section>
  );
};

export default MainBody;
