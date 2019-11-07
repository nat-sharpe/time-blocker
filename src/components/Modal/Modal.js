import React from 'react';
import { connect } from 'react-redux';
import './Modal.css';
import { actions } from '../../redux/actions/actions';


const Modal = props => {

  const handleClick = event => {
    event.preventDefault();
    if (event.target.id === "modal-background") {
      props.closeModal();
    }
  };

  return (
    <div 
      className="Modal" 
      id="modal-background"
      onClick={handleClick}
    >
      <div className="modal-box">
        {props.children}
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  closeModal: actions.closeModal,
};

export default connect(null, mapDispatchToProps)(Modal);