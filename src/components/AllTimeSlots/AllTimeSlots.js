import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/actions';

import './AllTimeSlots.css';
import TimeSlot from '../TimeSlot/TimeSlot';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import MeetingForm from '../MeetingForm/MeetingForm';

class AllTimeSlots extends Component {
  
  componentDidMount(){
    const storedMeetings = window.localStorage.getItem('timeBlocker');
    const parsedMeetings = storedMeetings ? JSON.parse(storedMeetings) : {};
    this.props.submitMeeting(parsedMeetings);
  };

  buildTimeSlots = timeSlots => {
    console.log("buildTimeSlots ", timeSlots);
    return timeSlots.map(slot => <TimeSlot slot={slot} key={slot.id}/>);
  };

  render(){
    const { allTimeSlots, isModalOpen } = this.props;
    const amSlots = [];
    const pmSlots = [];

    console.log("this.props in all ", this.props );

    // Filter time slots into AM and PM arrays
    allTimeSlots.forEach(slot => {
      const isAm = slot.id.slice(slot.id.length-2) === "am" ? true : false;
      isAm ? amSlots.push(slot) : pmSlots.push(slot)
    });

    return (
      <div className="AllTimeSlots">
        { <Card title="Morning">{this.buildTimeSlots(amSlots)}</Card> }
        { <Card title="Afternoon">{this.buildTimeSlots(pmSlots)}</Card> }
        { isModalOpen && <Modal><MeetingForm /></Modal> }
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
  submitMeeting: actions.submitMeeting,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllTimeSlots);
