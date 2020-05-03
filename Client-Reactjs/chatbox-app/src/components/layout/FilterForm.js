import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Input, InputGroup } from 'reactstrap';
import { filterGroup, clearFilter, addGroup } from '../../actions/groupActions';

class FilterForm extends Component {
  state = {
    text: '',
  };
  onFilterChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // this.props.filterGroup(e.target.value);
    // this.props.clearFilter();
    if (e.target.name !== '') {
      this.props.filterGroup(e.target.value);
    } else {
      this.props.clearFilter();
    }
  };
  render() {
    return (
      <Form>
        <FormGroup>
          <InputGroup style={{ marginBottom: '2rem' }}>
            <Input
              type='text'
              name='text'
              onChange={this.onFilterChange}
              placeholder='Filter Groups'
            />
          </InputGroup>
        </FormGroup>
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  group: state.group,
});

export default connect(mapStateToProps, { filterGroup, clearFilter, addGroup })(
  FilterForm
);
