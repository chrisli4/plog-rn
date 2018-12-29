import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles';

const Content = ({ children }) => (
  <View style={styles.content}>{children}</View>
);

Content.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Content;
