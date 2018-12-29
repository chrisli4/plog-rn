import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Calendar } from 'react-native-calendars';
import XDate from 'xdate';
import theme from '../../config/theme';
import styles from './styles';

class Picker extends Component {
  state = { isFromDatePicked: false, isToDatePicked: false, markedDates: {} };

  componentDidMount() {
    this.setupInitialRange();
  }

  onDayPress = day => {
    if (
      !this.state.isFromDatePicked ||
      (this.state.isFromDatePicked && this.state.isToDatePicked)
    ) {
      this.setupStartMarker(day);
    } else if (!this.state.isToDatePicked) {
      const markedDates = { ...this.state.markedDates };
      const [mMarkedDates, range] = this.setupMarkedDates(
        this.state.fromDate,
        day.dateString,
        markedDates
      );
      if (range >= 0) {
        this.setState({ isFromDatePicked: true, isToDatePicked: true, markedDates: mMarkedDates });
        this.props.onSuccess(this.state.fromDate, day.dateString);
      } else {
        this.setupStartMarker(day);
      }
    }
  };

  setupStartMarker = day => {
    const markedDates = {
      [day.dateString]: {
        startingDay: true,
        color: this.props.markColor,
        textColor: this.props.markTextColor,
      },
    };
    this.setState({
      isFromDatePicked: true,
      isToDatePicked: false,
      fromDate: day.dateString,
      markedDates,
    });
  };

  setupMarkedDates = (fromDate, toDate, markedDates) => {
    const mFromDate = new XDate(fromDate);
    const mToDate = new XDate(toDate);
    const range = mFromDate.diffDays(mToDate);
    if (range >= 0) {
      if (range == 0) {
        markedDates = {
          [toDate]: {
            color: this.props.markColor,
            textColor: this.props.markTextColor,
          },
        };
      } else {
        for (let i = 1; i <= range; i++) {
          const tempDate = mFromDate.addDays(1).toString('yyyy-MM-dd');
          if (i < range) {
            markedDates[tempDate] = {
              color: this.props.markColor,
              textColor: this.props.markTextColor,
            };
          } else {
            markedDates[tempDate] = {
              endingDay: true,
              color: this.props.markColor,
              textColor: this.props.markTextColor,
            };
          }
        }
      }
    }
    return [markedDates, range];
  };

  setupInitialRange = () => {
    if (!this.props.initialRange) return;
    const [fromDate, toDate] = this.props.initialRange;
    const markedDates = {
      [fromDate]: {
        startingDay: true,
        color: this.props.markColor,
        textColor: this.props.markTextColor,
      },
    };
    const [mMarkedDates, range] = this.setupMarkedDates(fromDate, toDate, markedDates);
    this.setState({ markedDates: mMarkedDates, fromDate });
  };

  render() {
    return (
      <Calendar
        {...this.props}
        style={styles.calendar}
        markingType="period"
        current={this.state.fromDate}
        markedDates={this.state.markedDates}
        onDayPress={day => {
          this.onDayPress(day);
        }}
      />
    );
  }
}

Picker.propTypes = {
  initialRange: PropTypes.array.isRequired,
  onSuccess: PropTypes.func.isRequired,
  markColor: PropTypes.string,
  markTextColor: PropTypes.string,
};

Picker.defaultProps = {
  markColor: theme.colors.primary,
  markTextColor: theme.colors.white,
};

export default Picker;
