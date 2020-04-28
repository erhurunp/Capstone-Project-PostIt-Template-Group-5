import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import { addGroup } from '../../actions/groupActions';

class GroupModal extends Component {
  state = {
    modal: false,
    name: '',
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newGroup = {
      id: uuidv4(),
      name: this.state.name,
    };

    // Add item via addGroup action
    this.props.addGroup(newGroup);
    // Close modal
    this.toggle();
  };
  render() {
    return (
      <div>
        <Button
          color='success'
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          Add Group
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add New Group</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='group'>Group Name</Label>
                <Input
                  type='text'
                  name='name'
                  id='group'
                  placeholder='Group Name'
                  onChange={this.onChange}
                />
                <Button color='success' style={{ marginTop: '2rem' }} block>
                  Add Group
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  group: state.group,
});
export default connect(mapStateToProps, { addGroup })(GroupModal);
