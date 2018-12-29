import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles';

const Center = ({ children }) => <View style={styles.center}>{children}</View>;

Center.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Center;
