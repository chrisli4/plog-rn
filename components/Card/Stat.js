import React from 'react';
import PropTypes from 'prop-types';
import { Caption, Title } from 'react-native-paper';
import { Center } from '../Container';

const Stat = ({ title, caption }) => (
  <Center>
    <Title>{title}</Title>
    <Caption>{caption}</Caption>
  </Center>
);

Stat.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

Stat.defaultProps = {};

export default Stat;
