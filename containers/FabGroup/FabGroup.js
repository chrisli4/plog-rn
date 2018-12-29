import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FAB, Portal } from 'react-native-paper';
import {
  makeGetScreen,
  makeGetRemoveStatus,
  makeGetSelected,
} from './selectors';
import {
  openModalCalendar,
  openModalTask,
  openModalChart,
} from '../../actions/modals';
import { enableRemove, disableRemove } from '../../actions/remove';
import { addPlant } from '../../actions/plants';
import { addPhoto } from '../../actions/photos';
import theme from '../../config/theme';

class FabGroup extends PureComponent {
  state = {
    open: false,
  };

  addPressed = () => {
    const {
      screen,
      selected,
      addPhoto,
      addPlant,
      openModalTask,
      openModalChart,
    } = this.props;
    if (screen === 'Home') {
      addPlant();
    }
    if (screen === 'Photos') {
      addPhoto(selected.id);
    }
    if (screen === 'Records') {
      openModalTask();
    }
    if (screen === 'Charts') {
      openModalChart();
    }
  };

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
    const { editing, screen, openModalCalendar } = this.props;
    return (
      <Portal>
        <FAB.Group
          open={open}
          color={theme.colors.white}
          theme={{ colors: { accent: theme.colors.primary } }}
          icon={open ? 'clear' : 'add'}
          actions={[
            {
              icon: 'edit',
              onPress: this.toggleRemove,
              color: editing ? theme.colors.primary : theme.colors.gray,
            },
            {
              icon: 'filter-list',
              onPress: openModalCalendar,
              color: theme.colors.primary,
            },
            {
              icon:
                screen === 'Records'
                  ? 'playlist-add'
                  : screen === 'Charts'
                  ? 'show-chart'
                  : 'photo-camera',
              onPress: this.addPressed,
              color: theme.colors.primary,
            },
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
  openModalCalendar,
  openModalTask,
  openModalChart,
  enableRemove,
  disableRemove,
};

FabGroup.propTypes = {
  screen: PropTypes.string.isRequired,
  editing: PropTypes.bool.isRequired,
  selected: PropTypes.object.isRequired,
  addPlant: PropTypes.func.isRequired,
  addPhoto: PropTypes.func.isRequired,
  openModalChart: PropTypes.func.isRequired,
  openModalCalendar: PropTypes.func.isRequired,
  openModalTask: PropTypes.func.isRequired,
  enableRemove: PropTypes.func.isRequired,
  disableRemove: PropTypes.func.isRequired,
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(FabGroup);
