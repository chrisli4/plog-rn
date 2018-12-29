import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Title } from 'react-native-paper';
import styles from './styles';

const BaseTitle = ({ children }) => (
  <View style={styles.container}>
    <Title style={styles.title}>{children}</Title>
  </View>
);

BaseTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default BaseTitle;
