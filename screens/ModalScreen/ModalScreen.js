import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Between } from '../../components/Container';
import { Modal } from '../../components/Modal';
import { TaskForm, PlantForm } from '../../components/Form';
import { Calendar } from '../../components/Calendar';
import { Button } from '../../components/Button';
import {
  makeGetSelected,
  makeGetTaskVisible,
  makeGetCalendarVisible,
  makeGetPlantVisible,
  makeGetStart,
  makeGetEnd,
  makeGetPlant,
} from './selectors';
import { addTask } from '../../actions/tasks';
import { editPlant } from '../../actions/plants';
import {
  closeModalTask,
  closeModalCalendar,
  closeModalPlant,
} from '../../actions/modals';
import { addFilter, removeFilter } from '../../actions/filter';
import styles from './styles';

class Modals extends PureComponent {
  onAdd = task => {
    const { selected, addTask, closeModalTask } = this.props;
    addTask(selected.id, task);
    closeModalTask();
  };

  onEdit = plant => {
    const { editPlant, closeModalPlant } = this.props;
    editPlant(plant);
    closeModalPlant();
  };

  onDismiss = () => {
    const { closeModalTask, closeModalCalendar, closeModalPlant } = this.props;
    closeModalTask();
    closeModalCalendar();
    closeModalPlant();
  };

  onSuccess = (start, end) => {
    const { addFilter } = this.props;
    addFilter(start, end);
  };

  render() {
    const {
      taskVisible,
      calendarVisible,
      plantVisible,
      start,
      end,
      plant,
    } = this.props;
    return (
      <Modal
        visible={taskVisible || calendarVisible || plantVisible}
        onDismiss={this.onDismiss}
      >
        {taskVisible && (
          <TaskForm
            title="Add Record"
            task={{ temp: '', height: '', width: '', length: '' }}
            onAction={this.onAdd}
            onDismiss={this.onDismiss}
          />
        )}
        {calendarVisible && (
          <View style={styles.calendar}>
            <Calendar start={start} end={end} onSuccess={this.onSuccess} />
            <Between>
              <Button onPress={removeFilter} title="REMOVE" />
              <Button onPress={this.onDismiss} title="CLOSE" />
            </Between>
          </View>
        )}
        {plantVisible && (
          <PlantForm
            plant={plant}
            onAction={this.onEdit}
            onDismiss={this.onDismiss}
          />
        )}
      </Modal>
    );
  }
}

const makeMapStateToProps = () => {
  const getSelected = makeGetSelected();
  const getTaskVisible = makeGetTaskVisible();
  const getCalendarVisible = makeGetCalendarVisible();
  const getPlantVisible = makeGetPlantVisible();
  const getStart = makeGetStart();
  const getEnd = makeGetEnd();
  const getPlant = makeGetPlant();
  const mapStateToProps = state => ({
    plant: getPlant(state),
    selected: getSelected(state),
    taskVisible: getTaskVisible(state),
    calendarVisible: getCalendarVisible(state),
    plantVisible: getPlantVisible(state),
    start: getStart(state),
    end: getEnd(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = {
  addTask,
  addFilter,
  editPlant,
  closeModalCalendar,
  closeModalTask,
  closeModalPlant,
};

Modals.propTypes = {
  plant: PropTypes.object.isRequired,
  selected: PropTypes.object.isRequired,
  taskVisible: PropTypes.bool.isRequired,
  calendarVisible: PropTypes.bool.isRequired,
  plantVisible: PropTypes.bool.isRequired,
  addFilter: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  editPlant: PropTypes.func.isRequired,
  closeModalPlant: PropTypes.func.isRequired,
  closeModalTask: PropTypes.func.isRequired,
  closeModalCalendar: PropTypes.func.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(Modals);
