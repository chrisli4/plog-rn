import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ModalScreen from '../ModalScreen';
import { Screen } from '../../components/Container';
import { PlantCard } from '../../components/Card';
import { PlantForm } from '../../components/Form';
import { Modal } from '../../components/Modal';
import { DeleteButton } from '../../components/Button';
import FabGroup from '../../containers/FabGroup';
import {
  makeGetVisiblePlants,
  makeGetDeleteIds,
  makeGetRemoveStatus,
} from './selectors';
import {
  addPlant,
  deletePlant,
  editPlant,
  selectPlant,
} from '../../actions/plants';
import {
  addRemovePlant,
  deleteRemovePlant,
  disableRemove,
} from '../../actions/remove';

class HomeScreen extends Component {
  state = {
    plant: {},
    editVisible: false,
  };

  onOpenEdit = plant => {
    this.setState({
      editVisible: true,
      plant,
    });
  };

  onEdit = plant => {
    const { editPlant } = this.props;
    editPlant(plant);
    this.setState({
      plant: {},
      editVisible: false,
    });
  };

  onDismiss = () => {
    this.setState({
      editVisible: false,
    });
  };

  onRemove = id => {
    const { deleteIds, deleteRemovePlant, addRemovePlant } = this.props;
    if (deleteIds.indexOf(id) > -1) {
      deleteRemovePlant(id);
    } else {
      addRemovePlant(id);
    }
  };

  onNavigate = plant => {
    const { navigation, selectPlant, disableRemove } = this.props;
    selectPlant(plant);
    disableRemove();
    navigation.navigate('Tabs', { title: plant.name });
  };

  render() {
    const { plants, editing, deleteIds, deletePlant } = this.props;
    const { plant, editVisible } = this.state;
    return (
      <Screen>
        <FlatList
          style={{ flex: 1 }}
          data={plants}
          keyExtractor={item => item.id}
          extraData={this.props}
          renderItem={({ item }) => (
            <PlantCard
              plant={item}
              selected={deleteIds.indexOf(item.id) > -1}
              editing={editing}
              onEdit={this.onOpenEdit}
              onRemove={this.onRemove}
              onNavigate={this.onNavigate}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
        {editing && deleteIds.length > 0 && (
          <DeleteButton onPress={deletePlant} />
        )}
        <Modal visible={editVisible} onDismiss={this.onDismiss}>
          <PlantForm
            plant={plant}
            onAction={this.onEdit}
            onDismiss={this.onDismiss}
          />
        </Modal>
        <ModalScreen />
        <FabGroup />
      </Screen>
    );
  }
}

const makeMapStateToProps = () => {
  const getVisiblePlants = makeGetVisiblePlants();
  const getDeleteIds = makeGetDeleteIds();
  const getRemoveStatus = makeGetRemoveStatus();
  const mapStateToProps = state => ({
    plants: getVisiblePlants(state),
    deleteIds: getDeleteIds(state),
    editing: getRemoveStatus(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = {
  addPlant,
  deletePlant,
  editPlant,
  selectPlant,
  disableRemove,
  addRemovePlant,
  deleteRemovePlant,
};

HomeScreen.propTypes = {
  plants: PropTypes.array.isRequired,
  editing: PropTypes.bool.isRequired,
  deleteIds: PropTypes.array.isRequired,
  addRemovePlant: PropTypes.func.isRequired,
  deletePlant: PropTypes.func.isRequired,
  deleteRemovePlant: PropTypes.func.isRequired,
  editPlant: PropTypes.func.isRequired,
  selectPlant: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  disableRemove: PropTypes.func.isRequired,
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(HomeScreen);
