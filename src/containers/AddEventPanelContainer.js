import React from 'react';
import { connect } from 'react-redux';
import AddEventPanel from '../components/AddEventPanel/AddEventPanel';
import { addEvent } from '../actions/index';

const AddEventPanelContainer = props => {
  return (
    <AddEventPanel {...props} />
  );
};

const mapDispatchToProps = dispatch => ({
  addEvent: event => dispatch(addEvent(event)),
});

export default connect(null, mapDispatchToProps)(AddEventPanelContainer);