import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/actions';
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

  formatPhoneNumber = phone => {
    const cleaned = ('' + phone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }
    return null
  }

  validateForm = (name, phone) => {
    const alertMessage = "Please enter a ";
    if (name && phone) {
      const formattedPhone = this.formatPhoneNumber(phone);
      if (formattedPhone) {
        return formattedPhone;
      }
      alert("Phone number is invalid");
      return "";
    }
    const phoneError = !phone ? "phone number" : "";
    const nameError = !name ? "name" : "";
    const bothError = !name && !phone ? " and " : "";

    alert(alertMessage + nameError + bothError + phoneError)
    return "";
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = event => {
    event.preventDefault();
    this.props.closeModal();
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, phone, id } = this.state;
    const validPhone = this.validateForm(name, phone);
    if (validPhone) {
      const meeting = { name, phone: validPhone }
      this.props.submitMeeting(meeting, id);
    };
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
};

export default connect(mapStateToProps, mapDispatchToProps)(MeetingForm);