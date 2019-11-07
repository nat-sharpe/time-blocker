import React from 'react';
import { connect } from 'react-redux';
import './TimeSlot.css';
import { actions } from '../../redux/actions/actions';


const TimeSlot = props => {
  const { slot } = props;

  const handleClick = e => {
    e.preventDefault();
    props.openModal(slot);
  };

  return (
    <div 
      className="TimeSlot" 
      name={slot.id}
      onClick={handleClick}
    >
      {slot.time}
    </div>
  );
}

const mapDispatchToProps = {
  openModal: actions.openModal,
};

export default connect(null, mapDispatchToProps)(TimeSlot);