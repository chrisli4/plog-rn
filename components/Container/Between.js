import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles';

const Between = ({ children }) => (
  <View style={styles.between}>{children}</View>
);

Between.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Between;
