import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MeetingForm.css';

class MeetingForm extends Component {

  constructor(props) {
    super(props);
    const { meetings, selectedSlot } = props;
    const { time, id } = selectedSlot;
    let name = "";
    let phone = "";

    if (meetings[id]) {
      name = meetings[id].name
      phone = meetings[id].phone
    }

    this.state = {
      name,
      phone,
      time,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { name, phone, time } = this.state;
    return (
      <React.Fragment>
        <h3>{ time }</h3>
        <form>
          <p>Name: </p>
          <div>
            <input type="text" name="name" value={ name } onChange={ this.handleChange } />
          </div>
          <p>Phone: </p>
          <div>
            <input name="phone" value={ phone } onChange={ this.handleChange }></input>
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

export default connect(mapStateToProps)(MeetingForm);