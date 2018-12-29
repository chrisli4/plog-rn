import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, ImageBackground } from 'react-native';
import { IconButton, TouchableRipple } from 'react-native-paper';
import { Row } from '../Container';
import styles from './styles';

class PhotoCard extends PureComponent {
  viewPressed = () => {
    const { index, onView } = this.props;
    onView(index);
  };

  editPressed = () => {
    const { photo, onEdit } = this.props;
    onEdit(photo);
  };

  deletePressed = () => {
    const { photo, onRemove } = this.props;
    onRemove(photo.id);
  };

  render() {
    const { photo, editing, selected } = this.props;
    return (
      <View style={photo.empty ? styles.placeholder : styles.photo}>
        {!photo.empty && (
          <TouchableRipple disabled={editing} onPress={this.viewPressed}>
            <ImageBackground
              style={styles.image}
              source={{ uri: 'https://picsum.photos/700' }}
            >
              {editing ? (
                <Row>
                  <IconButton
                    icon="edit"
                    color="white"
                    size={24}
                    onPress={this.editPressed}
                  />
                  <IconButton
                    icon="delete"
                    color={selected ? 'red' : 'white'}
                    size={24}
                    onPress={this.deletePressed}
                  />
                </Row>
              ) : null}
            </ImageBackground>
          </TouchableRipple>
        )}
      </View>
    );
  }
}

PhotoCard.propTypes = {
  photo: PropTypes.object.isRequired,
  editing: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
};

export default PhotoCard;
