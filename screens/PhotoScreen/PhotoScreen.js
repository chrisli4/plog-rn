import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList, View } from 'react-native';
import { PhotoCard } from '../../components/Card';
import { makeGetVisiblePhotos, makeGetDeleteIds, makeGetSelected } from './selectors';
import { deletePhoto, editPhoto } from '../../actions/photos';
import { addRemovePhoto, deleteRemovePhoto } from '../../actions/remove';

class Photos extends Component {
  state = {
    photo: {},
  };
  
  onRemove = id => {
    const { deleteIds, deleteRemovePhoto, addRemovePhoto } = this.props;
    if (deleteIds.indexOf(id) > -1) {
      deleteRemovePhoto(id);
    } else {
      addRemovePhoto(id);
    }
  }

  render() {
    const { photo, show, visible } = this.state;
    const { photos, deleteIds } = this.props;

    return (
      <View>
        <FlatList
          data={photos}
          extraData={this.props}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <PhotoCard photo={item} />
          )}
          showsVerticalScrollIndicator={false}
        />

      </View>
    );
  }
}

const makeMapStateToProps = () => {
  const getVisiblePhotos = makeGetVisiblePhotos();
  const getSelected = makeGetSelected();
  const getDeleteIds = makeGetDeleteIds();
  const mapStateToProps = state => ({
    photos: getVisiblePhotos(state),
    deleteIds: getDeleteIds(state),
    selected: getSelected(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = {
  addRemovePhoto,
  deleteRemovePhoto,
  deletePhoto,
  editPhoto,
};

Photos.propTypes = {
  photos: PropTypes.array.isRequired,
  selected: PropTypes.object.isRequired,
  deleteIds: PropTypes.array.isRequired,
  addRemovePhoto: PropTypes.func.isRequired,
  deletePhoto: PropTypes.func.isRequired,
  deleteRemovePhoto: PropTypes.func.isRequired,
  editPhoto: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(Photos);
