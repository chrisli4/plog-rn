import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Card, Title, Paragraph, IconButton, TouchableRipple } from 'react-native-paper';
import { format } from '../../utils/date';
import styles from './styles';

class PlantCard extends PureComponent {
  editPressed = () => {
    const { plant, onEdit } = this.props;
    onEdit(plant);
  };

  deletePressed = () => {
    const { plant, onRemove } = this.props;
    onRemove(plant.id);
  };

  navPressed = () => {
    const { plant, onNavigate } = this.props;
    onNavigate(plant);
  };

  render() {
    const { plant, editing } = this.props;
    const formatted = format(plant.date);
    return (
  <Card style={styles.card}>
  <TouchableRipple onPress={this.navPressed} disabled={editing}>
    <Card.Cover style={{ borderTopRightRadius: 3, borderTopLeftRadius: 3 }} source={{ uri: 'https://picsum.photos/700' }} />
  </TouchableRipple>
    <Card.Content style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
      <View>
        <Title>{plant.name}</Title>
        <Paragraph>{formatted}</Paragraph>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <IconButton icon="edit" color={ editing ? "black" : "transparent"} disabled={!editing} onPress={this.editPressed} />
        <IconButton icon="delete" color={ editing ? "black" : "transparent"} disabled={!editing} onPress={this.deletePressed} />
      </View>
    </Card.Content>
  </Card>
    );
  }
}

PlantCard.propTypes = {
  plant: PropTypes.object.isRequired,
  editing: PropTypes.bool.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
};

export default PlantCard;