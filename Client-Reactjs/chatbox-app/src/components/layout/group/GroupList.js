import React, { Fragment, useRef, useEffect } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getGroups, deleteGroup } from '../../../actions/groupActions';
import { getGroupMessages } from '../../../actions/chatActions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const GroupList = (props) => {
  const { groups, dummyMessages } = props.group;
  const postRef = useRef(null);

  const onDeleteClick = (id) => {
    props.deleteGroup(id);
  };
  const groupSelected = (dummyMessages) => {
    props.getGroupMessages(dummyMessages);
  };

  useEffect(() => {
    postRef.current.scrollTo(0, postRef.current.scrollHeight);
  }, [groupSelected.length]);

  return (
    <Fragment>
      <div ref={postRef}>
        {groups.map(({ id, name }) => (
          <ListGroup key={id} className='group-list' flush>
            <ListGroupItem className='friend-drawer friend-drawer--onhover'>
              <Link
                to={`/chatpage/${name}`}
                onClick={() => groupSelected(dummyMessages)}
              >
                {name}
              </Link>
              <Button
                className='remove-btn'
                style={{ display: 'none' }}
                size='sm'
                onClick={() => onDeleteClick()}
              >
                &times;
              </Button>
            </ListGroupItem>
          </ListGroup>
        ))}
      </div>
    </Fragment>
  );
};

GroupList.propTypes = {
  getGroups: PropTypes.func.isRequired,
  deleteGroup: PropTypes.func.isRequired,
  group: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  group: state.group,
  chat: state.chat,
});
export default connect(mapStateToProps, {
  getGroups,
  deleteGroup,
  getGroupMessages,
})(GroupList);
