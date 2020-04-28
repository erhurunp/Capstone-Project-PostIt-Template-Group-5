import React from 'react';
import { Input, InputGroup } from 'reactstrap';
import GroupList from './GroupList';
import GroupModal from './GroupModal';

const MainBody = () => {
  return (
    <div className='containerFluid'>
      <InputGroup style={{ marginBottom: '2rem' }}>
        <Input placeholder='Filter Groups' />
      </InputGroup>
      <GroupModal />
      <GroupList />
    </div>
  );
};

export default MainBody;
