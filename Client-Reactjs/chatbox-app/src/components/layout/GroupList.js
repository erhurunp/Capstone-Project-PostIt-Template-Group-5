import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getGroups, deleteGroup } from '../../actions/groupActions';
import PropTypes from 'prop-types';

class GroupList extends Component {
  componentDidMount() {
    this.props.getGroups();
  }

  onDeleteClick = (id) => {
    this.props.deleteGroup(id);
  };
  render() {
    const { groups } = this.props.group;
    return (
      <ListGroup flush>
        <TransitionGroup className='group-list '>
          {groups.map(({ id, name }) => (
            <CSSTransition key={id} timeout={500} classNames=''>
              <ListGroupItem className='friend-drawer friend-drawer--onhover'>
                {name}
                <Button
                  className='remove-btn'
                  style={{ display: 'none' }}
                  size='sm'
                  onClick={this.onDeleteClick.bind(this, id)}
                >
                  &times;
                </Button>
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    );
  }
}
GroupList.propTypes = {
  getGroups: PropTypes.func.isRequired,
  deleteGroup: PropTypes.func.isRequired,
  group: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  group: state.group,
});
export default connect(mapStateToProps, { getGroups, deleteGroup })(GroupList);
