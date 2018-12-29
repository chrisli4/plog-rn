import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Title, Paragraph } from 'react-native-paper';
import styles from './styles';

const Footer = ({ title, comment }) => (
  <View style={styles.footer}>
    <Title style={styles.text}>{title}</Title>
    <Paragraph style={styles.text}>{comment}</Paragraph>
  </View>
);

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  comment: PropTypes.string,
};

Footer.defaultProps = {
  comment: '',
};

export default Footer;
