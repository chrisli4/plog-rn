import React from 'react';
import PropTypes from 'prop-types';
import Picker from './Picker';

const Calendar = ({ start, end, onSuccess }) => (
  <Picker initialRange={[start, end]} onSuccess={onSuccess} />
);

Calendar.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};

export default Calendar;
