import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import {
  Surface,
  Divider,
  Subheading,
  Title,
  IconButton,
} from 'react-native-paper';
import { getDay, getMonth } from '../../utils/date';
import Activity from './Activity';
import Stats from './Stats';
import theme from '../../config/theme';
import styles from './styles';

class TaskCard extends PureComponent {
  onStats = () => {
    const { task, statsPressed } = this.props;
    statsPressed(task);
  };

  onActivity = () => {
    const { task, activityPressed } = this.props;
    activityPressed(task);
  };

  deletePressed = () => {
    const { task, onRemove } = this.props;
    onRemove(task.id);
  };

  render() {
    const { task, editing, selected } = this.props;
    const day = getDay(task.date);
    const month = getMonth(task.date);

    return (
      <Surface style={styles.task}>
        {!editing ? (
          <View style={styles.left}>
            <Title style={styles.dateText}>{day}</Title>
            <Subheading style={styles.dateText}>{month}</Subheading>
          </View>
        ) : null}
        {editing ? (
          <View style={styles.left}>
            <IconButton
              icon="delete"
              color={selected ? theme.colors.red : theme.colors.orange}
              size={24}
              onPress={this.deletePressed}
            />
          </View>
        ) : null}
        <View style={styles.right}>
          <Stats
            height={task.height}
            length={task.length}
            width={task.width}
            temp={task.temp}
            onPress={this.onStats}
          />
          <Divider style={{ width: '100%' }} />
          <Activity activity={task.activity} onPress={this.onActivity} />
        </View>
      </Surface>
    );
  }
}

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
  editing: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  activityPressed: PropTypes.func.isRequired,
  statsPressed: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default TaskCard;
