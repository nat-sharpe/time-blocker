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
  
    this.state = {
      name: meetings[id] ? meetings[id].name : "",
      phone: meetings[id] ? meetings[id].phone : "",
      time,
      id,
    };
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
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

  handleSubmit = event => {
    event.preventDefault();
    const { name, phone, id } = this.state;
    if (!name && !phone) {
      this.props.cancelMeeting(id);
    } else if (!name) {
      alert("Please enter a name");
    } else {
      const validPhone = formatPhoneNumber(phone);
      if (!validPhone) {
        alert("Please enter a valid phone number");
      } else {
        const meeting = { name, phone: validPhone }
        this.props.submitMeeting(meeting, id);
      }
    }
  };

  render() {
    const { name, phone, time } = this.state;
    console.log(this.state);
    return (
      <React.Fragment>
        <div className="close-button-box">
          <button className="close-button" onClick={this.handleClose}>X</button>
        </div>
        <h3>{time}</h3>
        <form>
          <div>Name: </div>
          <div>
            <input type="text" name="name" value={name} 
              onChange={this.handleChange}
              required
            />
          </div>
          <div>Phone: </div>
          <div>
            <input type="tel" name="phone" value={phone}
              onChange={this.handleChange}
              required
            />
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