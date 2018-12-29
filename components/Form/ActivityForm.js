import React from 'react';
import PropTypes from 'prop-types';
import { Keyboard, View } from 'react-native';
import {
  Card,
  Divider,
  Button,
  ToggleButton,
  Caption,
} from 'react-native-paper';
import { Formik, FieldArray } from 'formik';
import { FontAwesome } from '@expo/vector-icons';
import { Between, Content, Center, Separator } from '../Container';
import { Title } from '../Title';
import styles from './styles';

const iconMap = {
  Fertilize: 'pagelines',
  Mist: 'shower',
  Propagate: 'code-fork',
  Prune: 'cut',
  Repot: 'shopping-basket',
  Water: 'tint',
};

const ActivityForm = ({ task, title, onAction, onDismiss, ...props }) => (
  <Formik
    {...props}
    initialValues={{ ...task }}
    onSubmit={values => {
      onAction(values);
    }}
  >
    {({ handleSubmit, values }) => (
      <Card style={styles.card} onPress={Keyboard.dismiss}>
        <Title>Edit Record</Title>
        <Divider />
        <Content>
          <FieldArray
            name="activity"
            render={arrayHelpers => (
              <View style={styles.content}>
                {Object.keys(iconMap).map(i => (
                  <ToggleButton
                    style={styles.badge}
                    key={i}
                    icon={() => (
                      <Center>
                        <FontAwesome
                          name={iconMap[i]}
                          size={24}
                          color="black"
                        />
                        <Separator padding={2} />
                        <Caption>{i}</Caption>
                      </Center>
                    )}
                    value={i}
                    status={
                      values.activity.indexOf(i) > -1 ? 'checked' : 'unchecked'
                    }
                    onPress={() => {
                      if (values.activity.indexOf(i) === -1) {
                        arrayHelpers.push(i);
                      } else {
                        arrayHelpers.remove(values.activity.indexOf(i));
                      }
                    }}
                  />
                ))}
              </View>
            )}
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

ActivityForm.propTypes = {
  task: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default ActivityForm;
