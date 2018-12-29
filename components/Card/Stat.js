import React from 'react';
import PropTypes from 'prop-types';
import { Caption, Title } from 'react-native-paper';
import { Center } from '../Container';
import styles from './styles';

const Stat = ({ title, caption }) => (
  <Center>
    {title === '' ? (<Title style={{ color: 'transparent' }}>0</Title>) : (<Title>{title}</Title>)}
    <Caption>{caption}</Caption>
  </Center>
);

Stat.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

Stat.defaultProps = {};

export default Stat;
