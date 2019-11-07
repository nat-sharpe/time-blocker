import React, { Component } from 'react';
import { connect } from 'react-redux';
import TimeSlot from '../TimeSlot/TimeSlot';
class AllTimeSlots extends Component {
  
  render(){
    const { allTimeSlots, selectedId } = this.props;

    const timeSlotItems = allTimeSlots.map(slot => {
      return <TimeSlot slot={slot} key={slot.id}/>
    });


    return (
      <React.Fragment>
        { timeSlotItems }
        <div>{selectedId}</div>
      </React.Fragment>
    )
  }
};

const mapStateToProps = state => {
  return {
    allTimeSlots: state.timeSlots,
    selectedId: state.selectedId,
  };
};

export default connect(mapStateToProps)(AllTimeSlots);
