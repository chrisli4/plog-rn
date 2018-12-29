import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Title, IconButton } from 'react-native-paper';
import styles from './styles';

const ChartTitle = ({ children, onPress }) => (
  <View style={styles.chart}>
    <View style={styles.left} />
    <Title style={styles.title}>{children}</Title>
    <View style={styles.right}>
      <IconButton icon="more-vert" color="black" onPress={onPress} />
    </View>
  </View>
);

ChartTitle.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ChartTitle;
