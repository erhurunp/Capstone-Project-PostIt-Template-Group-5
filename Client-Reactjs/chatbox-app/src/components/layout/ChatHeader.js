import React from 'react';
import Avatar from 'avataaars';

const ChatHeader = () => {
  return (
    <div className='settings-tray friend'>
      <div className='friend-drawer no-gutters friend-drawer--grey'>
        <Avatar
          style={{ width: '50px', height: '50px' }}
          avatarStyle='Circle'
          topType='Eyepatch'
          accessoriesType='Wayfarers'
          hairColor='PastelPink'
          facialHairType='BeardLight'
          facialHairColor='Red'
          clotheType='CollarSweater'
          clotheColor='Heather'
          eyeType='Dizzy'
          eyebrowType='UpDown'
          mouthType='ScreamOpen'
          skinColor='Light'
        />
        <div className='text'>
          <h6>Robo Cop</h6>
          <p className='text-muted'>
            Layin' down the law since like before Christ...
          </p>
        </div>
        <span className='settings-tray--right'>
          <i className='material-icons'>cached</i>
          <i className='material-icons'>message</i>
          <i className='material-icons'>menu</i>
        </span>
      </div>
    </div>
  );
};

export default ChatHeader;
