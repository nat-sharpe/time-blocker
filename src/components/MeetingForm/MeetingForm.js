import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/actions';
import { formatPhoneNumber } from '../../helpers/helpers'
import './MeetingForm.css';

class MeetingForm extends Component {

  constructor(props) {
    super(props);
    const { meetings, selectedSlot } = props;
    const { time, id } = selectedSlot;
    
    // Checks meeting object for matching name and phone
    this.state = {
      name: meetings[id] ? meetings[id].name : "",
      phone: meetings[id] ? meetings[id].phone : "",
      time,
      id,
    };
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  // Validates phone number as user types
  handlePhoneChange = event => {
    const validPhone = formatPhoneNumber(event.target.value);
    const phone = validPhone ? validPhone : event.target.value;
    this.setState({ phone });
  };

  handleClose = event => {
    event.preventDefault();
    this.props.closeModal();
  };

  handleClear = event => {
    event.preventDefault();
    this.setState({
      name: "",
      phone: "",
    })
  };

  closeAndSubmit = meetings => {
    this.props.submitMeeting(meetings);
    this.props.closeModal();
    window.localStorage.setItem('timeBlocker', JSON.stringify(meetings));
  }

  // Saving two empty inputs will delete meeting
  // Saving one empty inputs will stop and alert user
  // Also alerts if phone number is invalid
  handleSubmit = event => {
    event.preventDefault();
    const { name, phone, id } = this.state;
    const newMeetings = { ...this.props.meetings };

    if (!name && !phone) {
      delete newMeetings[id];
      this.closeAndSubmit(newMeetings);
    } else if (!name) {
      alert("Please enter a name");
    } else {
      const validPhone = formatPhoneNumber(phone);
      if (!validPhone) {
        alert("Please enter a valid phone number");
      } else {
        newMeetings[id] = { name, phone: validPhone }
        this.closeAndSubmit(newMeetings);
      }
    }
  };

  render() {
    const { name, phone, time } = this.state;
    return (
      <div className="MeetingForm">
        <h4 className="form-title">Time: {time}</h4>
        <form>
          <div className="input-box">
            <label>Name: </label>
            <input type="text" value={name} onChange={this.handleNameChange} />
          </div>
          <div className="input-box">
            <label>Phone: </label>
            <input type="tel" value={phone} onChange={this.handlePhoneChange} />
          </div>
          <button type="submit" onClick={this.handleSubmit}>Save</button>
          <button onClick={this.handleClear}>Clear</button>
        </form>
      </div>
    )
  };
};

const mapStateToProps = state => {
  return {
    meetings: state.meetings,
    selectedSlot: state.selectedSlot,
  };
};

const mapDispatchToProps = {
  closeModal: actions.closeModal,
  submitMeeting: actions.submitMeeting,
};

export default connect(mapStateToProps, mapDispatchToProps)(MeetingForm);