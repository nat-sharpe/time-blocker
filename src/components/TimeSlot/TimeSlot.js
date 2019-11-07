import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/actions';
import LongButton from '../LongButton/LongButton';
import './TimeSlot.css';


class TimeSlot extends Component {

  handleClick = event => {
    event.preventDefault();
    this.props.openModal(this.props.slot);
  };

  render(){
    const { slot, meetings } = this.props;
    const className = "TimeSlot" + (meetings[slot.id] ? " blocked" : "");
    return (
      <LongButton 
        handleClick={this.handleClick} 
        text={slot.time} 
        className={className} 
        key={slot.id} 
      />
    );
  }
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