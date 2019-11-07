import React, { Component } from 'react';
import { connect } from 'react-redux';

class AllTimeSlots extends Component {
  render(){
    console.log(this.props);
    return (
      <div>
        {this.props.allSlots.map(time => <h1>{time.time}</h1>)}
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    allSlots: state.timeSlots,
  };
};

export default connect(mapStateToProps)(AllTimeSlots);
