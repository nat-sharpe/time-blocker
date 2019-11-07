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
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClose = e => {
    e.preventDefault();
    this.props.closeModal();
  };

  render() {
    const { name, phone, time } = this.state;
    return (
      <React.Fragment>
        <div>
          <button onClick={this.handleClose}>X</button>
        </div>
        <h3>{time}</h3>
        <form>
          <p>Name: </p>
          <div>
            <input type="text" name="name" value={name} onChange={this.handleChange} />
          </div>
          <p>Phone: </p>
          <div>
            <input name="phone" value={phone} onChange={this.handleChange}></input>
          </div>
          <button type="submit">Save</button>
        </form>
      </React.Fragment>
    )
  }

};

const mapStateToProps = state => {
  return {
    meetings: state.meetings,
    selectedSlot: state.selectedSlot,
  };
};

const mapDispatchToProps = {
  closeModal: actions.closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(MeetingForm);