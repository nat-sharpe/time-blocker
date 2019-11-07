import React from 'react';
import { connect } from 'react-redux';
import './MeetingModal.css';
import { actions } from '../../redux/actions/actions';
import MeetingForm from '../MeetingForm/MeetingForm';


const MeetingModal = props => {

  const handleClick = event => {
    event.preventDefault();
    if (event.target.id === "modal-background") {
      props.closeModal();
    }
  };

  return (
    <div 
      className="MeetingModal" 
      id="modal-background"
      onClick={handleClick}
    >
      <div className="modal-box">
        <MeetingForm />
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  closeModal: actions.closeModal,
};

export default connect(null, mapDispatchToProps)(MeetingModal);