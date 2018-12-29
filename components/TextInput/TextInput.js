import React from 'react';
import { TextInput } from 'react-native-paper';
import styles from './styles';

const BaseInput = props => (
  <TextInput {...props} style={styles.input} mode="outlined" />
);

export default BaseInput;
