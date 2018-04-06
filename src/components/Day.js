import React, { Component } from 'react';
import AddEventPanel from './AddEventPanel';

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

  render() {
    const { selected, showAddEvent } = this.state;
    const { day, year, month } = this.props;
    const backgroundColor = selected ? 'aqua' : 'lightgrey';
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
              <AddEventPanel
                day={day}
                year={year}
                month={month}
              />
            )}
        </div>
      </div>
    );
  }
}

export default Day;
