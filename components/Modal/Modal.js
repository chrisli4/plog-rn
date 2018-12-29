import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView } from 'react-native';
import { Modal, Portal } from 'react-native-paper';

const BaseModal = ({ children, ...props }) => (
  <Portal>
    <Modal {...props}>
      <KeyboardAvoidingView behavior="position" enabled>
        {children}
      </KeyboardAvoidingView>
    </Modal>
  </Portal>
);

BaseModal.propTypes = {
  children: PropTypes.any.isRequired,
};

export default BaseModal;
