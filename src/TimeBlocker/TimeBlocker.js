import React from 'react';
import './TimeBlocker.css';
import AllTimeSlots from '../components/AllTimeSlots/AllTimeSlots'

const TimeBlocker = () => {
  return (
    <div className="TimeBlocker">
      <header className="TimeBlocker-header">
        Time Blocker
      </header>
      <AllTimeSlots />
    </div>
  );
}

export default TimeBlocker;
