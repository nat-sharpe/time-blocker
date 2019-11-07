import React, { Component } from 'react';
import { connect } from 'react-redux';
import TimeSlot from '../TimeSlot/TimeSlot';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

// Does this need to be a class???
class AllTimeSlots extends Component {
  
  render(){
    const { allTimeSlots } = this.props;

    const timeSlotItems = allTimeSlots.map(slot => {
      return <TimeSlot slot={slot} key={slot.id}/>
    });

    return (
      <React.Fragment>
        { timeSlotItems }
        <AppointmentForm />
      </React.Fragment>
    )
  }
};

const mapStateToProps = state => {
  return {
    allTimeSlots: state.timeSlots,
  };
};

export default connect(mapStateToProps)(AllTimeSlots);
