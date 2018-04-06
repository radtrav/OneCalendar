import React from 'react';
import './MonthHeader.css';

const MonthHeader = () => (
  <div style={{ display: 'flex' }}>
    <div className="month-header"> Su </div>
    <div className="month-header"> Mo </div>
    <div className="month-header"> Tu </div>
    <div className="month-header"> We </div>
    <div className="month-header"> Th </div>
    <div className="month-header"> Fr </div>
    <div className="month-header"> Sa </div>
  </div>
);

export default MonthHeader;