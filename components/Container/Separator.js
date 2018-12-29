import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const Separator = ({ padding }) => <View style={{ padding }} />;

Separator.propTypes = {
  padding: PropTypes.number,
};

Separator.defaultProps = {
  padding: 4,
};

export default Separator;
