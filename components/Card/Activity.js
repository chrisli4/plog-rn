import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

const iconMap = {
  Fertilize: 'pagelines',
  Mist: 'shower',
  Propagate: 'code-fork',
  Prune: 'cut',
  Repot: 'shopping-basket',
  Water: 'tint',
};

const Activity = ({ activity, onPress }) => (
  <TouchableRipple
    style={styles.touchableBottom}
    onPress={onPress}
    rippleColor="rgba(0, 0, 0, .32)"
  >
    <View style={styles.activity}>
      {Object.keys(iconMap).map(item => (
        <FontAwesome
          key={item}
          color={activity.indexOf(item) > -1 ? 'black' : 'transparent'}
          name={iconMap[item]}
          size={24}
        />
      ))}
    </View>
  </TouchableRipple>
);

Activity.propTypes = {
  activity: PropTypes.array.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Activity;
