import React from 'react';
import MonthHeader from '../MonthHeader/MonthHeader';
import Weeks from '../Weeks/Weeks';

const Month = ({ referenceDate, events }) => {
  return (
    <div>
      <MonthHeader />
      <Weeks referenceDate={referenceDate} />
    </div>
  );
};

export default Month;
