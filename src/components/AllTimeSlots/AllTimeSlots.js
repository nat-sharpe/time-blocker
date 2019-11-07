import React from 'react';
import { connect } from 'react-redux';
import './AllTimeSlots.css';

import TimeSlot from '../TimeSlot/TimeSlot';
import MeetingModal from '../MeetingModal/MeetingModal';

const AllTimeSlots = props => {
  
  const { allTimeSlots, isModalOpen } = props;

  const timeSlotItems = allTimeSlots.map(slot => {
    return <TimeSlot slot={slot} key={slot.id}/>
  });

  return (
    <div className="AllTimeSlots">
      {timeSlotItems}
      {isModalOpen && <MeetingModal /> }
    </div>
  )
};

const mapStateToProps = state => {
  return {
    allTimeSlots: state.timeSlots,
    isModalOpen: state.isModalOpen,
  };
};

export default connect(mapStateToProps)(AllTimeSlots);
