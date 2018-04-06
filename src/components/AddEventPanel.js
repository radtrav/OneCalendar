import React, { Component } from 'react';

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
  handleSubmit = (e) => {
    const { time, name, date } = this.state;
    this.props.addEvent({ time, name, date });
    e.preventDefault();
  };

  render() {
    const { time, name, date } = this.state;
    return (
      <div style={styles}>
        <form onSubmit={this.handleSubmit}>
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

export default AddEventPanel;
