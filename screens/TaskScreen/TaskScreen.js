import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { Screen } from '../../components/Container';
import { Modal } from '../../components/Modal';
import { TaskCard } from '../../components/Card';
import { DeleteButton } from '../../components/Button';
import { TaskForm, ActivityForm } from '../../components/Form';
import {
  makeGetVisibleTasks,
  makeGetDeleteIds,
  makeGetSelected,
  makeGetRemoveStatus,
} from './selectors';
import { deleteTask, editTask } from '../../actions/tasks';
import { addRemoveTask, deleteRemoveTask } from '../../actions/remove';

class Tasks extends Component {
  state = {
    task: {},
    visible: {
      activity: false,
      stats: false,
    },
  };

  onActivityPress = task => {
    this.setState(state => ({
      ...state,
      task,
      visible: {
        ...state.visible,
        activity: true,
      },
    }));
  };

  onStatsPress = task => {
    this.setState(state => ({
      ...state,
      task,
      visible: {
        ...state.visible,
        stats: true,
      },
    }));
  };

  onDismiss = () => {
    this.setState(state => ({
      ...state,
      task: {},
      visible: {
        activity: false,
        stats: false,
        add: false,
      },
    }));
  };

  onEdit = task => {
    const { selected, editTask } = this.props;
    this.setState(state => ({
      ...state,
      task: {},
      visible: {
        activity: false,
        stats: false,
      },
    }));
    editTask(selected.id, task);
  };

  onRemove = id => {
    const { deleteIds, deleteRemoveTask, addRemoveTask } = this.props;
    if (deleteIds.indexOf(id) > -1) {
      deleteRemoveTask(id);
    } else {
      addRemoveTask(id);
    }
  };

  onDelete = () => {
    const { selected, deleteTask } = this.props;
    deleteTask(selected.id);
  };

  render() {
    const { task, visible } = this.state;
    const { tasks, editing, deleteIds } = this.props;
    return (
      <Screen>
        <FlatList
          data={tasks}
          extraData={this.props}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TaskCard
              task={item}
              editing={editing}
              selected={deleteIds.indexOf(item.id) > -1}
              activityPressed={this.onActivityPress}
              statsPressed={this.onStatsPress}
              onRemove={this.onRemove}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
        <Modal visible={visible.stats} onDismiss={this.onDismiss}>
          <TaskForm
            task={task}
            title="Edit Record"
            onAction={this.onEdit}
            onDismiss={this.onDismiss}
          />
        </Modal>
        <Modal visible={visible.activity} onDismiss={this.onDismiss}>
          <ActivityForm
            task={task}
            onAction={this.onEdit}
            onDismiss={this.onDismiss}
          />
        </Modal>
        {editing && deleteIds.length > 0 && (
          <DeleteButton onPress={this.onDelete} />
        )}
      </Screen>
    );
  }
}

const makeMapStateToProps = () => {
  const getVisibleTasks = makeGetVisibleTasks();
  const getSelected = makeGetSelected();
  const getDeleteIds = makeGetDeleteIds();
  const getRemoveStatus = makeGetRemoveStatus();
  const mapStateToProps = state => ({
    tasks: getVisibleTasks(state),
    deleteIds: getDeleteIds(state),
    selected: getSelected(state),
    editing: getRemoveStatus(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = {
  addRemoveTask,
  deleteRemoveTask,
  deleteTask,
  editTask,
};

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  editing: PropTypes.bool.isRequired,
  selected: PropTypes.object.isRequired,
  deleteIds: PropTypes.array.isRequired,
  addRemoveTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  deleteRemoveTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(Tasks);
