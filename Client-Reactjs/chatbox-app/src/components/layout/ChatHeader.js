import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions/userActions';
import Avatar from 'avataaars';

class ChatHeader extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    const { username } = this.props.user;
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
            {username.map(({ id, name }) => (
              <h6 key={id}>{name}</h6>
            ))}
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
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUser })(ChatHeader);
