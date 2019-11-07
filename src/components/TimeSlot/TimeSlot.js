import React from 'react';
import { connect } from 'react-redux';
import './TimeSlot.css';
import { actions } from '../../redux/actions/actions';


const TimeSlot = props => {
  const { time, id } = props.slot;

  const handleClick = e => {
    e.preventDefault();
    props.openTimeSlot(id);
  };

  return (
    <div 
      className="TimeSlot" 
      name={id}
      onClick={handleClick}
    >
      {time}
    </div>
  );
}

const mapDispatchToProps = {
  openTimeSlot: actions.openTimeSlot,
};

export default connect(null, mapDispatchToProps)(TimeSlot);