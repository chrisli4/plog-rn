import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Button } from 'react-native-paper';

const BaseButton = ({ onPress, title }) => (
  <Button onPress={onPress}>
    <Text>{title}</Text>
  </Button>
);

BaseButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default BaseButton;
