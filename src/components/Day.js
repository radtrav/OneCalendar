import React, { Component } from 'react';
import AddEventPanel from './AddEventPanel';
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

class Day extends Component {
  state = { selected: false, showAddEvent: false };

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

  render() {
    const { selected, showAddEvent } = this.state;
    const { day, year, month } = this.props;
    const backgroundColor = this.getBackgroundColor();

    return (
      <div>
        <div
          onClick={() => this.setState({ showAddEvent: true })}
          onMouseEnter={() => this.setState({ selected: true })}
          onMouseLeave={() =>
            this.setState({ selected: false, showAddEvent: false })
          }
          style={{ ...styles, backgroundColor }}
        >
          {day}
          {selected &&
            showAddEvent && (
              <AddEventPanel day={day} year={year} month={month} />
            )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ currentDate }) => ({ currentDate });

export default connect(mapStateToProps)(Day);
