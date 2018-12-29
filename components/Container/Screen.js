import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles';

const Screen = ({ children }) => <View style={styles.screen}>{children}</View>;

Screen.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Screen;
