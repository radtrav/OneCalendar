import React, { Component } from 'react';
import AddEventPanel from './AddEventPanel';
import Day from './Day';
import { connect } from 'react-redux';
import moment from 'moment';

const styles = {
  width: 40,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'lightgrey',
  cursor: 'pointer',
};

class DayContainer extends Component {
  state = { selected: false, addingEvent: false };

  isCurrentDay = () => {
    const { currentDate, day, month, year } = this.props;
    const currentDay = moment(currentDate).date();
    const currentMonth = moment(currentDate).month() + 1;
    const currentYear = moment(currentDate).year();
    return currentDay === day && currentMonth === month && currentYear === year;
  };

  getBackgroundColor = () => {
    const { selected } = this.state;
    if (selected && this.isCurrentDay()) {
      return 'orange';
    } else if (this.isCurrentDay()) {
      return 'purple';
    } else if (selected) {
      return 'aqua';
    } else {
      return 'lightgrey';
    }
  };

  handleClick = () => this.setState({ addingEvent: true });
  handleMouseEnter = () => this.setState({ selected: true });
  handleMouseLeave = () => this.setState({ selected: false, addingEvent: false });


  renderAddEventPanel = () => {
    const { selected, addingEvent } = this.state;
    const { day, year, month } = this.props;

    if (selected && addingEvent) {
      return <AddEventPanel day={day} year={year} month={month} />;
    }
    return null;
  };

  render() {
    const { day, year, month } = this.props;
    const { addingEvent , selected } = this.state;
    const backgroundColor = this.getBackgroundColor();

    return (
      <Day
        addingEvent={addingEvent}
        day={day}
        month={month}
        year={year}
        selected={selected}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={{ ...styles, backgroundColor }}
      />
    );
  }
}

const mapStateToProps = ({ currentDate }) => ({ currentDate });

export default connect(mapStateToProps)(DayContainer);
