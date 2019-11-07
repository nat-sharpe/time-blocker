import React from 'react';
import './NatsTimeBlocker.css';
import AllTimeSlots from './components/AllTimeSlots/AllTimeSlots'

const NatsTimeBlocker = () => {
  return (
    <div className="NatsTimeBlocker">
      <div className="main">
        <header className="main-header">
          <h2 className="main-title">
            Nat's Time Blocker
          </h2>
          <a 
            className="main-link" 
            target="_blank" 
            href="https://github.com/nat-sharpe/time-blocker"
          >
            GitHub Repo
          </a>
        </header>
        <AllTimeSlots />
      </div>
    </div>
  );
}

export default NatsTimeBlocker;

