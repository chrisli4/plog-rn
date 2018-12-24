import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';

class Charts extends Component {
  state = {
    photo: {},
  };

  render() {
    return (
      <View>
      </View>
    );
  }
}

const makeMapStateToProps = () => {
  const mapStateToProps = state => ({
  });
  return mapStateToProps;
};

const mapDispatchToProps = {

};

Charts.propTypes = {

};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(Charts);
