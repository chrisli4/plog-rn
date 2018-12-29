import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import {
  Card,
  Title,
  Subheading,
  IconButton,
  TouchableRipple,
} from 'react-native-paper';
import { format } from '../../utils/date';
import theme from '../../config/theme';
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
    const { plant, selected, editing } = this.props;
    const formatted = format(plant.date);
    return (
      <Card style={styles.card}>
        <TouchableRipple onPress={this.navPressed} disabled={editing}>
          <Card.Cover
            style={{ borderTopRightRadius: 7, borderTopLeftRadius: 7 }}
            source={{ uri: 'https://picsum.photos/700' }}
          />
        </TouchableRipple>
        <Card.Content
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 8,
          }}
        >
          <View>
            <Title style={styles.text}>{plant.name}</Title>
            <Subheading style={styles.text}>{formatted}</Subheading>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <IconButton
              icon="edit"
              color={editing ? theme.colors.white : 'transparent'}
              disabled={!editing}
              onPress={this.editPressed}
            />
            <IconButton
              icon="delete"
              color={!editing ? 'transparent' : selected ? theme.colors.red : theme.colors.white}
              disabled={!editing}
              onPress={this.deletePressed}
            />
          </View>
        </Card.Content>
      </Card>
    );
  }
}

PlantCard.propTypes = {
  plant: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired,
  editing: PropTypes.bool.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
};

export default PlantCard;
