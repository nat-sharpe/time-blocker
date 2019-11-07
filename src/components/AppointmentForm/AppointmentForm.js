import React from 'react';
import { connect } from 'react-redux';
import './AppointmentForm.css';

const AppointmentForm = props => {
  const { appointments, selectedId } = props;
  const { time, name, phone } = appointments[selectedId] ? appointments[selectedId] : "";

  return ( <div>
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

const mapStateToProps = state => {
  return {
    appointments: state.appointments,
    selectedId: state.selectedId,
  };
};

export default connect(mapStateToProps)(AppointmentForm);