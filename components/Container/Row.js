import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles';

const Row = ({ children }) => <View style={styles.row}>{children}</View>;

Row.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Row;
