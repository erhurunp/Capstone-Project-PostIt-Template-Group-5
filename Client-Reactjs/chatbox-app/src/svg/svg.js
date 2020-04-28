import React from 'react';
import Chat from './chat';
import Settings from './settings';
import Logout from './logout';
import Group from './group';
import GroupList from './grouplist';
import Contact from './contact';

const Svg = (props) => {
  switch (props.name) {
    case 'chat':
      return <Chat {...props} />;
    case 'contact':
      return <Contact {...props} />;
    case 'group':
      return <Group {...props} />;
    case 'grouplist':
      return <GroupList {...props} />;
    case 'logout':
      return <Logout {...props} />;
    case 'settings':
      return <Settings {...props} />;
    default:
      return <div />;
  }
};

export default Svg;
