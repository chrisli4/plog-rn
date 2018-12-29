import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Paragraph, TouchableRipple } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';

class ListItem extends PureComponent {
  onToggle = () => {
    const { value, onPress } = this.props;
    onPress(value);
  };

  render() {
    const { selected, text } = this.props;
    return (
      <TouchableRipple onPress={this.onToggle}>
        <View style={styles.listItem}>
          <Paragraph>{text}</Paragraph>
          <MaterialIcons
            name="check"
            size={24}
            color={selected ? 'green' : 'transparent'}
          />
        </View>
      </TouchableRipple>
    );
  }
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ListItem;
