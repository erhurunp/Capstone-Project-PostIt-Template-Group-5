import React from 'react';
import Avatar from 'avataaars';

const ChatBody = () => {
  return (
    <div>
      <div className='row no-gutters'>
        <div className='container darker'>
          <Avatar
            style={{ width: '50px', height: '50px' }}
            avatarStyle='Circle'
            topType='ShortHairShaggyMullet'
            accessoriesType='Kurt'
            hairColor='Red'
            facialHairType='MoustacheMagnum'
            facialHairColor='Black'
            clotheType='BlazerShirt'
            eyeType='Side'
            eyebrowType='AngryNatural'
            mouthType='Eating'
            skinColor='Brown'
          />
          <p>Hello. How are you today?</p>
          <span className='time-right'>11:00</span>
        </div>
      </div>
      <div className='row no-gutters'>
        <div className='container'>
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
            className='right'
          />
          <p>Hello, am good and you?</p>
          <span className='time-left'>11:05</span>
        </div>
      </div>
      <div className='row no-gutters'>
        <div className='container darker'>
          <Avatar
            style={{ width: '50px', height: '50px' }}
            avatarStyle='Circle'
            topType='ShortHairShaggyMullet'
            accessoriesType='Kurt'
            hairColor='Red'
            facialHairType='MoustacheMagnum'
            facialHairColor='Black'
            clotheType='BlazerShirt'
            eyeType='Side'
            eyebrowType='AngryNatural'
            mouthType='Eating'
            skinColor='Brown'
          />
          <p>Not bad, just had a long day</p>
          <span className='time-right'>11:10</span>
        </div>
      </div>
      <div className='row no-gutters'>
        <div className='container'>
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
            className='right'
          />
          <p>Sorry bro, just have a cold bath and you will feel better</p>
          <span className='time-left'>11:11</span>
        </div>
      </div>

      <div className='row'>
        <div className='col-12'>
          <div className='chat-box-tray'>
            <i className='material-icons'>sentiment_very_satisfied</i>
            <input type='text' placeholder='Type your message here...' />
            <i className='material-icons'>mic</i>
            <i className='material-icons'>send</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBody;
