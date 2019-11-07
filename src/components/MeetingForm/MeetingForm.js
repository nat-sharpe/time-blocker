import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MeetingForm.css';

class MeetingForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
    };
  }

  handleChange = (e) => {
    console.log(this.state);
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { meetings, selectedId } = this.props;
    const { time, name, phone } = meetings[selectedId] ? meetings[selectedId] : "";

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
    selectedId: state.selectedId,
  };
};

export default connect(mapStateToProps)(MeetingForm);