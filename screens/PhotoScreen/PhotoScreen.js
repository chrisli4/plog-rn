import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ImageView from 'react-native-image-view';
import { formatImages, makePhotoView } from '../../utils/image';
import { Screen } from '../../components/Container';
import { Modal } from '../../components/Modal';
import { PhotoForm } from '../../components/Form';
import { PhotoCard } from '../../components/Card';
import { DeleteButton } from '../../components/Button';
import { ImageFooter } from '../../components/Footer';
import {
  makeGetVisiblePhotos,
  makeGetDeleteIds,
  makeGetSelected,
  makeGetRemoveStatus,
} from './selectors';
import { deletePhoto, editPhoto } from '../../actions/photos';
import { addRemovePhoto, deleteRemovePhoto } from '../../actions/remove';

class Photos extends Component {
  state = {
    photo: {},
    imageIndex: 0,
    editVisible: false,
    viewVisible: false,
  };

  onOpenEdit = photo => {
    this.setState({
      photo,
      editVisible: true,
    });
  };

  onView = index => {
    this.setState({
      imageIndex: index,
      viewVisible: true,
    });
  };

  onEdit = photo => {
    const { selected, editPhoto } = this.props;
    editPhoto(selected.id, photo);
    this.setState({
      photo: {},
      editVisible: false,
    });
  };

  onDelete = () => {
    const { selected, deletePhoto } = this.props;
    deletePhoto(selected.id);
  };

  onDismiss = () => {
    this.setState({
      photo: {},
      editVisible: false,
      viewVisible: false,
    });
  };

  onRemove = id => {
    const { deleteIds, deleteRemovePhoto, addRemovePhoto } = this.props;
    if (deleteIds.indexOf(id) > -1) {
      deleteRemovePhoto(id);
    } else {
      addRemovePhoto(id);
    }
  };

  render() {
    const { photo, imageIndex, editVisible, viewVisible } = this.state;
    const { photos, deleteIds, editing } = this.props;

    return (
      <Screen>
        <FlatList
          style={{ flex: 1, padding: 3 }}
          data={formatImages(photos, 3)}
          extraData={this.props}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <PhotoCard
              photo={item}
              index={index}
              editing={editing}
              selected={deleteIds.indexOf(item.id) > -1}
              onRemove={this.onRemove}
              onEdit={this.onOpenEdit}
              onView={this.onView}
            />
          )}
          numColumns={3}
          showsVerticalScrollIndicator={false}
        />
        <ImageView
          glideAlways
          images={makePhotoView(photos)}
          imageIndex={imageIndex}
          animationType="fade"
          isVisible={viewVisible}
          renderFooter={item => (
            <ImageFooter title={item.date} comment={item.comment} />
          )}
          onClose={this.onDismiss}
        />
        <Modal visible={editVisible}>
          <PhotoForm
            photo={photo}
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
  const getVisiblePhotos = makeGetVisiblePhotos();
  const getSelected = makeGetSelected();
  const getDeleteIds = makeGetDeleteIds();
  const getRemoveStatus = makeGetRemoveStatus();
  const mapStateToProps = state => ({
    photos: getVisiblePhotos(state),
    deleteIds: getDeleteIds(state),
    selected: getSelected(state),
    editing: getRemoveStatus(state),
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
  editPhoto: PropTypes.func.isRequired,
  deletePhoto: PropTypes.func.isRequired,
  deleteIds: PropTypes.array.isRequired,
  deleteRemovePhoto: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired,
  addRemovePhoto: PropTypes.func.isRequired,
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(Photos);
