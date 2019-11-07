import React from 'react';
import { connect } from 'react-redux';
import './MeetingModal.css';
import { actions } from '../../redux/actions/actions';
import MeetingForm from '../MeetingForm/MeetingForm';


const MeetingModal = props => {

  const handleClick = e => {
    e.preventDefault();
    if (e.target.id !== "modal-box") {
      props.closeModal();
    }
  };

  return (
    <div 
      className="MeetingModal" 
      onClick={handleClick}
    >
      <div className="modal-box" id="modal-box">
        <MeetingForm />
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  closeModal: actions.closeModal,
};

export default connect(null, mapDispatchToProps)(MeetingModal);