import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import moment from 'moment';
import { Card, IconButton } from 'react-native-paper';

class PhotoCard extends PureComponent {
  editPressed = () => {
    const { photo, onEdit } = this.props;
    onEdit(photo);
  };

  deletePressed = () => {
    const { photo, onRemove } = this.props;
    onRemove(photo.id);
  };

  render() {
    const { photo } = this.props;
    const formatted = moment(photo.date, 'YYYY-MM-DD').format('MMMM D, YYYY');
    return (
      <Card>
        <View>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <IconButton icon="edit" color="white" onPress={this.editPressed} />
            <IconButton icon="delete" color="white" onPress={this.deletePressed} />
        </View>
      </Card>
    );
  }
}

PhotoCard.propTypes = {
  photo: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
};

export default PhotoCard;