import React, { Component } from 'react';
import Day from '../components/Day/Day';
import { connect } from 'react-redux';
import moment from 'moment';

class DayContainer extends Component {
  state = { selected: false, addingEvent: false };

  handleClick = () => this.setState({ addingEvent: true });
  handleMouseEnter = () => this.setState({ selected: true });
  handleMouseLeave = () =>
    this.setState({ selected: false, addingEvent: false });

  setAddingEventToFalse = () => this.setState({ addingEvent: false, selected: false });

  isCurrentDay = () => {
    const { currentDate, day, month, year } = this.props;
    const currentDay = moment(currentDate).date();
    const currentMonth = moment(currentDate).month() + 1;
    const currentYear = moment(currentDate).year();
    return currentDay === day && currentMonth === month && currentYear === year;
  };

  render() {
    const { day, year, month } = this.props;
    const { addingEvent, selected } = this.state;

    return (
      <Day
        addingEvent={addingEvent}
        day={day}
        month={month}
        isCurrentDay={this.isCurrentDay()}
        year={year}
        selected={selected}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        setAddingEventToFalse={this.setAddingEventToFalse}
      />
    );
  }
}

const mapStateToProps = ({ currentDate }) => ({ currentDate });

export default connect(mapStateToProps)(DayContainer);
