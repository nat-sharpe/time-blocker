import React from 'react';
import './TimeBlocker.css';
import AllTimeSlots from '../AllTimeSlots/AllTimeSlots'

function TimeBlocker() {
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
