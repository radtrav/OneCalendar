import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEvent } from '../actions/index';

const styles = {
  backgroundColor: 'white',
  position: 'fixed',
  zIndex: 1,
};

class AddEventPanel extends Component {
  state = { time: '', name: '', date: '' };
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleChangeName = e => this.setState({ name: e.target.value });
  handleChangeTime = e => this.setState({ time: e.target.value });
  handleChangeDate = e => this.setState({ date: e.target.value });

  handleSubmit = e => {
    const { time, name, date } = this.state;
    this.props.addEvent({ time, name, date });
    e.preventDefault();
  };

  render() {
    const { time, name, date } = this.state;
    const { addEvent } = this.props;
    return (
      <div style={styles}>
        <form
          onSubmit={e => {
            e.preventDefault();
            addEvent({ time, name, date });
          }}
        >
          <input
            type="text"
            name="time"
            value={time}
            placeholder="time"
            onChange={this.handleChangeTime}
          />
          <input
            type="text"
            name="date"
            value={date}
            placeholder="date"
            onChange={this.handleChangeDate}
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
