import React from 'react';
import PropTypes from 'prop-types';
import { Keyboard } from 'react-native';
import { Card, Divider, Button, TextInput } from 'react-native-paper';
import { Formik } from 'formik';
import { Between, Content } from '../Container';
import { Title } from '../Title';
import styles from './styles';

const PhotoForm = ({ photo, onAction, onDismiss, ...props }) => (
  <Formik
    {...props}
    initialValues={{ ...photo }}
    onSubmit={values => {
      onAction(values);
    }}
  >
    {({ handleChange, handleSubmit, values, errors }) => (
      <Card style={styles.card} onPress={Keyboard.dismiss}>
        <Title>Edit Comment</Title>
        <Divider />
        <Content>
          <TextInput
            mode="flat"
            label="Comment"
            placeholder={values.comment}
            value={values.comment}
            error={errors.comment}
            onChangeText={handleChange('comment')}
            multiline
            numberOfLines={3}
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

PhotoForm.propTypes = {
  photo: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default PhotoForm;
