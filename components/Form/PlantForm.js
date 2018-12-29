import React from 'react';
import PropTypes from 'prop-types';
import { Keyboard } from 'react-native';
import { Card, Divider, Button, TextInput } from 'react-native-paper';
import { Formik } from 'formik';
import { Between, Content } from '../Container';
import { Title } from '../Title';
import styles from './styles';

const PlantForm = ({ plant, onAction, onDismiss, ...props }) => (
  <Formik
    {...props}
    initialValues={{ ...plant }}
    onSubmit={values => {
      onAction(values);
    }}
  >
    {({ handleChange, handleSubmit, values, errors }) => (
      <Card style={styles.card} onPress={Keyboard.dismiss}>
        <Title>Edit Plant</Title>
        <Divider />
        <Content>
          <TextInput
            mode="outlined"
            label="Name"
            placeholder={values.name}
            value={values.name}
            error={errors.name}
            onChangeText={handleChange('name')}
          />
        </Content>
        <Divider />
        <Between>
          <Button onPress={onDismiss}>CANCEL</Button>
          <Button onPress={handleSubmit}>CONFIRM</Button>
        </Between>
      </Card>
    )}
  </Formik>
);

PlantForm.propTypes = {
  plant: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default PlantForm;
