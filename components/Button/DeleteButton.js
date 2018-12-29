import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles';

const DeleteButton = ({ onPress }) => (
  <Button color="white" onPress={onPress} style={styles.deleteButton}>
    <Text>DELETE</Text>
  </Button>
);

DeleteButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

DeleteButton.defaultProps = {};

export default DeleteButton;
