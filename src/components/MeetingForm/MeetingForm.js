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

  // Saving two empty inputs will delete meeting
  // Saving one empty inputs will stop and alert user
  // Also alerts if phone number is invalid
  handleSubmit = event => {
    event.preventDefault();
    const { name, phone, id } = this.state;
    if (!name && !phone) {
      this.props.cancelMeeting(id);
      this.props.closeModal();
    } else if (!name) {
      alert("Please enter a name");
    } else {
      const validPhone = formatPhoneNumber(phone);
      if (!validPhone) {
        alert("Please enter a valid phone number");
      } else {
        const meeting = { name, phone: validPhone }
        this.props.submitMeeting(meeting, id);
        this.props.closeModal();
      }
    }
  };

  render() {
    const { name, phone, time } = this.state;
    return (
      <React.Fragment>
        <div className="close-button-box">
          <button className="close-button" onClick={this.handleClose}>X</button>
        </div>
        <h3>{time}</h3>
        <form>
          <label>Name: </label>
          <div>
            <input type="text" value={name} onChange={this.handleNameChange} />
          </div>
          <label>Phone: </label>
          <div>
            <input type="tel" value={phone} onChange={this.handlePhoneChange} />
          </div>
          <button type="submit" onClick={this.handleSubmit}>Save</button>
          <button onClick={this.handleClear}>Clear</button>
        </form>
      </React.Fragment>
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
  cancelMeeting: actions.cancelMeeting,
};

export default connect(mapStateToProps, mapDispatchToProps)(MeetingForm);