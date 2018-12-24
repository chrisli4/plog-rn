import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList, View } from 'react-native';
import { PlantCard } from '../../components/Card';
import FabGroup from '../../containers/FabGroup';
import { makeGetVisiblePlants, makeGetDeleteIds, makeGetRemoveStatus } from './selectors';
import { addPlant, deletePlant, editPlant, selectPlant } from '../../actions/plants';
import { addRemovePlant, deleteRemovePlant } from '../../actions/remove';

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

  onClose = () => {
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
  }

  onNavigate = plant => {
    const { navigation, selectPlant } = this.props;
    selectPlant(plant);
    navigation.navigate('Tabs', { title: plant.name });
  }

  render() {
    const { plants, editing } = this.props;
    return (
      <View>
        <FlatList
          data={plants}
          keyExtractor={item => item.id}
          extraData={this.props}
          renderItem={({ item }) => (
            <PlantCard 
              plant={item}
              editing={editing}
              onEdit={this.onOpenEdit}
              onRemove={this.onRemove}
              onNavigate={this.onNavigate}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
        <FabGroup />
      </View>
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
  addRemovePlant,
  deleteRemovePlant,
};

HomeScreen.propTypes = {
  plants: PropTypes.array.isRequired,
  editing: PropTypes.bool.isRequired,
  deleteIds: PropTypes.array.isRequired,
  addPlant: PropTypes.func.isRequired,
  addRemovePlant: PropTypes.func.isRequired,
  deletePlant: PropTypes.func.isRequired,
  deleteRemovePlant: PropTypes.func.isRequired,
  editPlant: PropTypes.func.isRequired,
  selectPlant: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(HomeScreen);