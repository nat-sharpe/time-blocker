import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/actions';

import './AllTimeSlots.css';
import TimeSlot from '../TimeSlot/TimeSlot';
import Modal from '../Modal/Modal';
import MeetingForm from '../MeetingForm/MeetingForm';

class AllTimeSlots extends Component {
  
  buildTimeSlots = timeSlots => {
    return timeSlots.map(slot => <TimeSlot slot={slot} />);
  };

  render(){
    const { allTimeSlots, isModalOpen } = this.props;
    const amSlots = [];
    const pmSlots = [];

    // Filter time slots into AM and PM arrays
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
        {isModalOpen && <Modal><MeetingForm /></Modal> }
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    allTimeSlots: state.timeSlots,
    isModalOpen: state.isModalOpen,
    meetings: state.meetings,
  };
};

const mapDispatchToProps = {
  openModal: actions.openModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllTimeSlots);
