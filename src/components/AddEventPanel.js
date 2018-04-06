import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEvent } from '../actions/index';

const styles = {
  backgroundColor: 'white',
  position: 'fixed',
  zIndex: 1,
};

class AddEventPanel extends Component {
  state = { hour: '', name: '', minute: '' };
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleChangeName = e => this.setState({ name: e.target.value });
  handleChangeHour = e => this.setState({ hour: e.target.value });
  handleChangeMinute = e => this.setState({ minute: e.target.value });

  handleSubmit = e => {
    const { hour, name, minute } = this.state;
    const { day, month, year } = this.props;
    this.props.addEvent({ hour, name, minute, day, month, year });
    e.preventDefault();
  };

  render() {
    const { hour, minute, name  } = this.state;
    const { addEvent, day, month, year } = this.props;
    return (
      <div style={styles}>
        <form
          onSubmit={e => {
            e.preventDefault();
            addEvent({ hour, name, minute, day, month, year });
          }}
        >
          <input
            type="text"
            name="time"
            value={hour}
            placeholder="hour"
            onChange={this.handleChangeHour}
          />
          <input
            type="text"
            name="minute"
            value={minute}
            placeholder="minute"
            onChange={this.handleChangeMinute}
          />
          <input
            type="text"
            name="name"
            value={name}
            placeholder="name"
            onChange={this.handleChangeName}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addEvent: event => dispatch(addEvent(event)),
});

export default connect(null, mapDispatchToProps)(AddEventPanel);
