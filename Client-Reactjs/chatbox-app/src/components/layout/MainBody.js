import React from 'react';
import GroupList from './GroupList';
import GroupModal from './GroupModal';
import FilterForm from './FilterForm';

const MainBody = () => {
  return (
    <div className='containerFluid main-body'>
      <FilterForm />
      <GroupModal />
      <GroupList />
    </div>
  );
};

export default MainBody;
