import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import Stat from './Stat';
import styles from './styles';

const Stats = ({ height, length, width, temp, onPress }) => (
        <TouchableRipple style={{ flex: 1 }} onPress={onPress}>
          <View style={styles.stats}>
            <Stat 
              title={height}
              caption="HEIGHT"
            />
            <Stat 
              title={length}
              caption="LENGTH"
            />
            <Stat 
              title={width}
              caption="WIDTH"
            />
            <Stat 
              title={temp}
              caption="TEMP"
            />
          </View>
          </TouchableRipple>
);

Stats.propTypes = {
  height: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  temp: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Stats;
