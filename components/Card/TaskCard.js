import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Surface, Divider, Subheading, Title, TouchableRipple } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { getDay, getMonth } from '../../utils/date';
import Stats from './Stats';
import styles from './styles';

const iconMap = {
  Fertilize: 'pagelines',
  Mist: 'shower',
  Propagate: 'code-fork',
  Prune: 'cut',
  Repot: 'shopping-basket',
  Water: 'tint',
};

class TaskCard extends PureComponent {

  render() {
    const { task, selected } = this.props;
    const day = getDay(task.date);
    const month = getMonth(task.date);

    return (
      <Surface style={styles.task}>
        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 16, borderTopLeftRadius: 3, borderBottomLeftRadius: 3 }}>
          <Title>{day}</Title>
          <Subheading>{month}</Subheading>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Stats 
            height={task.height}
            length={task.length}
            width={task.width}
            temp={task.temp}
          />
          <Divider style={{ width: '100%' }} />
            <TouchableRipple style={{ flex: 1 }}>
              <View style={{ flex: 1, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 32, height: 48 }}>
                {task.activity.map(item => <FontAwesome key={item} color="black" name={iconMap[item]} size={24} />)}
              </View>
            </TouchableRipple>
        </View>
      </Surface>
    );
  }
}

TaskCard.propTypes = {
};

TaskCard.defaultProps = {};

export default TaskCard;
