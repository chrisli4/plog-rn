import React from 'react';
import PropTypes from 'prop-types';
import { Keyboard } from 'react-native';
import { Card, Divider, Button } from 'react-native-paper';
import { Formik } from 'formik';
import { Between, Content, Row, Separator } from '../Container';
import { Title } from '../Title';
import { TextInput } from '../TextInput';
import styles from './styles';

const TaskForm = ({ task, title, onAction, onDismiss, ...props }) => (
  <Formik
    {...props}
    initialValues={{ ...task }}
    onSubmit={values => {
      onAction(values);
    }}
    validate={values => {
      const errors = {};
      const regex = /^\d+$/;
      if (!regex.test(values.height) && values.height)
        errors.height = 'Invalid number';
      if (!regex.test(values.weight) && values.weight)
        errors.weight = 'Invalid number';
      if (!regex.test(values.length) && values.length)
        errors.length = 'Invalid number';
      if (!regex.test(values.width) && values.width)
        errors.width = 'Invalid number';
      if (!regex.test(values.temp) && values.temp)
        errors.temp = 'Invalid number';
      return errors;
    }}
  >
    {({ handleChange, handleSubmit, values, errors }) => (
      <Card style={styles.card} onPress={Keyboard.dismiss}>
        <Title>{title}</Title>
        <Divider />
        <Content>
          <Row>
            <TextInput
              label="Temperature"
              placeholder={values.temp}
              value={values.temp}
              error={errors.temp}
              onChangeText={handleChange('temp')}
            />
            <Separator padding={4} />
            <TextInput
              label="Height"
              placeholder={values.height}
              value={values.height}
              error={errors.height}
              onChangeText={handleChange('height')}
            />
          </Row>
          <Separator padding={2} />
          <Row>
            <TextInput
              label="Leaf Length"
              placeholder={values.length}
              value={values.length}
              error={errors.length}
              onChangeText={handleChange('length')}
            />
            <Separator padding={4} />
            <TextInput
              label="Leaf Width"
              placeholder={values.width}
              value={values.width}
              error={errors.width}
              onChangeText={handleChange('width')}
            />
          </Row>
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

TaskForm.propTypes = {
  task: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default TaskForm;
