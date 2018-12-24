import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList, View } from 'react-native';
import { TaskCard } from '../../components/Card';
import { makeGetVisibleTasks, makeGetDeleteIds, makeGetSelected } from './selectors';
import { deleteTask, editTask } from '../../actions/tasks';
import { addRemoveTask, deleteRemoveTask } from '../../actions/remove';

class Tasks extends Component {
  state = {
    task: {},
    visible: {
      activity: false,
      stats: false,
      chart: false,
    },
    show: {
      height: false,
      temp: false,
      area: false,
    },
  };

  onOpenChart = () => {
    this.setState(state => ({
      ...state,
      visible: {
        ...state.visible,
        chart: true,
      },
    }));
  };

  onToggle = value => {
    this.setState(state => ({
      ...state,
      show: {
        ...state.show,
        [value]: !state.show[value],
      },
    }));
  };

  onOpenStats = task => {
    this.setState(state => ({
      ...state,
      task,
      visible: {
        ...state.visible,
        stats: true,
      },
    }));
  };

  onOpenActivity = task => {
    this.setState(state => ({
      ...state,
      task,
      visible: {
        ...state.visible,
        activity: true,
      },
    }));
  };

  onClose = () => {
    this.setState(state => ({
      ...state,
      task: {},
      visible: {
        activity: false,
        stats: false,
        chart: false,
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
        chart: false,
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
  }

  render() {
    const { task, show, visible } = this.state;
    const { tasks, deleteIds } = this.props;

    return (
      <View>
        <FlatList
          data={tasks}
          extraData={this.props}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TaskCard task={item} />
          )}
          showsVerticalScrollIndicator={false}
        />

      </View>
    );
  }
}

const makeMapStateToProps = () => {
  const getVisibleTasks = makeGetVisibleTasks();
  const getSelected = makeGetSelected();
  const getDeleteIds = makeGetDeleteIds();
  const mapStateToProps = state => ({
    tasks: getVisibleTasks(state),
    deleteIds: getDeleteIds(state),
    selected: getSelected(state),
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
  selected: PropTypes.object.isRequired,
  deleteIds: PropTypes.array.isRequired,
  addRemoveTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  deleteRemoveTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(Tasks);
