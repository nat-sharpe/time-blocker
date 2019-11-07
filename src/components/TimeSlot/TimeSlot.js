import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/actions';
import './TimeSlot.css';


class TimeSlot extends Component {

  handleClick = event => {
    event.preventDefault();
    this.props.openModal(this.props.slot);
  };

  render(){
    const { slot, meetings } = this.props;
    // If time slot is blocked by meeting, modifies class
    console.log("this.props ", this.props);
    const className = "TimeSlot" + (meetings[slot.id] ? " blocked" : "");
    return (
      <div 
        className={className} 
        onClick={this.handleClick}
      >
        <div className="TimeSlot-text">
          {slot.time}
        </div>
      </div>
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