import React, { Component } from 'react';
import './AddEventPanel.css';

class AddEventPanel extends Component {
  state = { hour: '', name: '', minute: '' };

  handleChangeName = e => this.setState({ name: e.target.value });
  handleChangeHour = e => this.setState({ hour: e.target.value });
  handleChangeMinute = e => this.setState({ minute: e.target.value });

  handleSubmit = e => {
    const { hour, minute, name } = this.state;
    const { addEvent, day, month, year, setAddingEventToFalse } = this.props;
    e.preventDefault();
    addEvent({ hour, name, minute, day, month, year });
    setAddingEventToFalse();
  };

  render() {
    const { hour, minute, name } = this.state;
    return (
      <div className="add-event-panel">
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <div className="hour-minute-wrapper">
            <input
              className="input input-min-hour"
              type="text"
              name="hour"
              value={hour}
              placeholder="hour"
              onChange={this.handleChangeHour}
            />
            <input
              className="input input-min-hour"
              type="text"
              name="minute"
              value={minute}
              placeholder="minute"
              onChange={this.handleChangeMinute}
            />
          </div>
          <input
            className="input input-name"
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

export default AddEventPanel;
