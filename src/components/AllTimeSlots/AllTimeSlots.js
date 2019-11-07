import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AllTimeSlots.css';

import TimeSlot from '../TimeSlot/TimeSlot';
import MeetingModal from '../MeetingModal/MeetingModal';

class AllTimeSlots extends Component {
  
  buildTimeSlots = (timeSlots) => {
    return timeSlots.map(slot => <TimeSlot slot={slot} key={slot.id}/>)
  };

  render(){
    const { allTimeSlots, isModalOpen } = this.props;
    const amSlots = [];
    const pmSlots = [];

    allTimeSlots.forEach(slot => {
      const isAm = slot.id.slice(slot.id.length-2) === "am" ? true : false;
      isAm ? amSlots.push(slot) : pmSlots.push(slot)
    });

    return (
      <div className="AllTimeSlots">
        <div>
          <h4>
            Morning
          </h4>
          {this.buildTimeSlots(amSlots)}
        </div>
        <div>
          <h4>
            Afternoon
          </h4>
          {this.buildTimeSlots(pmSlots)}
        </div>
        {isModalOpen && <MeetingModal /> }
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    allTimeSlots: state.timeSlots,
    isModalOpen: state.isModalOpen,
  };
};

export default connect(mapStateToProps)(AllTimeSlots);
