import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MeetingForm.css';

class MeetingForm extends Component {

  render() {
    const { meetings, selectedId } = this.props;
    const { time, name, phone } = meetings[selectedId] ? meetings[selectedId] : "";

    return ( 
      <div>
        <div>
          {time}
        </div>
        <div>
          {name}
        </div>
        <div>
          {phone}
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    meetings: state.meetings,
    selectedId: state.selectedId,
  };
};

export default connect(mapStateToProps)(MeetingForm);