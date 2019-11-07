import React from 'react';
import { connect } from 'react-redux';
import './TimeSlot.css';
import { actions } from '../../redux/actions/actions';


const TimeSlot = props => {
  const { slot, meetings } = props;

  const handleClick = event => {
    event.preventDefault();
    props.openModal(slot);
  };

  const className = "TimeSlot" + (meetings[slot.id] ? " blocked" : "");

  return (
    <div 
      className={className}
      name={slot.id}
      onClick={handleClick}
    >
      {slot.time}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    meetings: state.meetings,
  };
};

const mapDispatchToProps = {
  openModal: actions.openModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeSlot);