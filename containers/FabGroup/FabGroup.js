import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FAB, Portal } from 'react-native-paper';
import { makeGetScreen, makeGetRemoveStatus, makeGetSelected } from './selectors';
import { openModalCalendar, openModalTask } from '../../actions/modals';
import { enableRemove, disableRemove } from '../../actions/remove';
import { addPlant } from '../../actions/plants';
import { addPhoto } from '../../actions/photos';
import { addTask } from '../../actions/tasks';

class FabGroup extends PureComponent {
  state = {
    open: false,
  };

  addPressed = () => {
    const { screen, selected, addPhoto, addPlant, openModalTask } = this.props;
    if (screen === 'Home') {
      addPlant();
    }
    if (screen === 'Photos') {
      addPhoto(selected.id);
    }
    if (screen === 'Records') {
      openModalTask();
    }
  }

  toggleRemove = () => {
    const { editing, enableRemove, disableRemove } = this.props;
    if (editing) {
      disableRemove();
    } else {
      enableRemove();
    }
  };

  render() {
    const { open } = this.state;
    const { editing, screen } = this.props;
    return (
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? 'clear' : 'add'}
          actions={[
            { icon: 'delete-sweep', onPress: this.toggleRemove, color: editing ? 'green' : 'gray' },
            { icon: 'filter-list', onPress: openModalCalendar, color: 'green' },
            { icon: (screen === 'Records' ? 'playlist-add' : 'photo-camera'), onPress: this.addPressed, color: 'green' },
          ]}
          onStateChange={({ open }) => this.setState({ open })}
        />
      </Portal>
    );
  }
}

const makeMapStateToProps = () => {
  const getScreen = makeGetScreen();
  const getSelected = makeGetSelected();
  const getRemoveStatus = makeGetRemoveStatus();
  const mapStateToProps = state => ({
    screen: getScreen(state),
    selected: getSelected(state),
    editing: getRemoveStatus(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = {
  addPlant,
  addPhoto,
  addTask,
  openModalCalendar,
  openModalTask,
  enableRemove,
  disableRemove,
};

FabGroup.propTypes = {
  screen: PropTypes.string.isRequired,
  editing: PropTypes.bool.isRequired,
  selected: PropTypes.object.isRequired,
  addPlant: PropTypes.func.isRequired,
  addPhoto: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  openModalCalendar: PropTypes.func.isRequired,
  openModalTask: PropTypes.func.isRequired,
  enableRemove: PropTypes.func.isRequired,
  disableRemove: PropTypes.func.isRequired,
};

export default connect(makeMapStateToProps, mapDispatchToProps)(FabGroup);